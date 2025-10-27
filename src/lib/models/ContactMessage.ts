import mongoose, { Schema, Model } from 'mongoose';

export interface IContactMessage {
  _id?: string;
  fullName: string;
  email: string;
  message: string;
  createdAt?: Date;
}

const ContactMessageSchema = new Schema<IContactMessage>({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    maxlength: [100, 'Full name cannot be more than 100 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    maxlength: [200, 'Email cannot be more than 200 characters'],
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [2000, 'Message cannot be more than 2000 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create indexes for better query performance
ContactMessageSchema.index({ createdAt: -1 });
ContactMessageSchema.index({ email: 1 });

const ContactMessage: Model<IContactMessage> =
  mongoose.models.ContactMessage || mongoose.model<IContactMessage>('ContactMessage', ContactMessageSchema);

export default ContactMessage;

