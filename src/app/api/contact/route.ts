import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import ContactMessage from '@/lib/models/ContactMessage';
import { appendToGoogleSheet } from '@/lib/googleSheets';

export async function POST(request: NextRequest) {
  try {
    // Validate request body
    const body = await request.json();
    const { fullName, email, message } = body;

    // Basic validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required: fullName, email, message' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectDB();

    // Create new contact message
    const contactMessage = await ContactMessage.create({
      fullName,
      email,
      message,
      createdAt: new Date(),
    });

    // Optionally save to Google Sheets (non-blocking)
    if (contactMessage.createdAt) {
      appendToGoogleSheet({
        fullName: contactMessage.fullName,
        email: contactMessage.email,
        message: contactMessage.message,
        createdAt: contactMessage.createdAt,
      }).catch((error) => {
        console.error('Failed to save to Google Sheets:', error);
        // Don't fail the request if Google Sheets fails
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Contact message saved successfully',
        data: {
          id: contactMessage._id,
          fullName: contactMessage.fullName,
          email: contactMessage.email,
          createdAt: contactMessage.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Error saving contact message:', error);
    
    const errorObj = error as { name?: string; code?: number; message?: string; errors?: Record<string, { message: string }> };

    // Handle duplicate key errors
    if (errorObj.name === 'MongoServerError' && errorObj.code === 11000) {
      return NextResponse.json(
        { error: 'Duplicate entry detected' },
        { status: 409 }
      );
    }

    // Handle validation errors
    if (errorObj.name === 'ValidationError' && errorObj.errors) {
      const errors = Object.values(errorObj.errors).map((err) => err.message);
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

    // Generic error response
    return NextResponse.json(
      { error: 'Failed to save contact message. Please try again later.' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve messages (for admin use)
export async function GET() {
  try {
    await connectDB();

    const messages = await ContactMessage.find()
      .sort({ createdAt: -1 })
      .limit(50)
      .select('fullName email message createdAt');

    return NextResponse.json(
      {
        success: true,
        count: messages.length,
        data: messages,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Error fetching contact messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contact messages' },
      { status: 500 }
    );
  }
}

