import { google } from 'googleapis';

interface ContactData {
  fullName: string;
  email: string;
  message: string;
  createdAt: Date;
}

/**
 * Get authenticated Google Sheets client
 */
async function getSheetsClient() {
  const credentials = process.env.GOOGLE_SERVICE_ACCOUNT;
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!credentials || !spreadsheetId) {
    return null;
  }

  try {
    // Parse credentials
    const credentialsJson = typeof credentials === 'string' 
      ? JSON.parse(credentials) 
      : credentials;

    // Create auth client
    const auth = new google.auth.GoogleAuth({
      credentials: credentialsJson,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    return { sheets, spreadsheetId };
  } catch (error) {
    console.error('Error initializing Google Sheets client:', error);
    return null;
  }
}

/**
 * Append contact message to Google Sheet
 */
export async function appendToGoogleSheet(data: ContactData): Promise<boolean> {
  try {
    const client = await getSheetsClient();
    
    if (!client) {
      console.log('Google Sheets not configured');
      return false;
    }

    const { sheets, spreadsheetId } = client;

    // Prepare the row data
    const values = [[
      data.fullName,
      data.email,
      data.message,
      new Date(data.createdAt).toISOString(),
    ]];

    // Append to the first sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:D', // Adjust range as needed
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values,
      },
    });

    console.log('Contact data appended to Google Sheet successfully');
    return true;
  } catch (error) {
    console.error('Error appending to Google Sheet:', error);
    return false;
  }
}

/**
 * Initialize Google Sheet with headers (optional setup function)
 */
export async function initializeGoogleSheet(): Promise<boolean> {
  try {
    const client = await getSheetsClient();
    
    if (!client) {
      return false;
    }

    const { sheets, spreadsheetId } = client;

    // Set headers in the first row
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: 'Sheet1!A1:D1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          'Full Name',
          'Email',
          'Message',
          'Created At',
        ]],
      },
    });

    console.log('Google Sheet initialized with headers');
    return true;
  } catch (error) {
    console.error('Error initializing Google Sheet:', error);
    return false;
  }
}

