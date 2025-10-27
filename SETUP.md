# Setup Instructions for Daniela's Portfolio

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Required: MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio-db

# Optional: Google Sheets (see instructions below)
GOOGLE_SHEET_ID=
GOOGLE_SERVICE_ACCOUNT=
```

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📊 MongoDB Setup

### Getting Your Connection String

1. **Create a MongoDB Atlas Account** (Free Tier Available)
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
   - Sign up for free account

2. **Create a Cluster**
   - Click "Create a Deployment"
   - Choose FREE tier (M0)
   - Select any cloud provider and region
   - Click "Create"

3. **Configure Database Access**
   - Go to "Database Access" in left sidebar
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Create username and password (save these!)
   - Set user privileges to "Read and write to any database"
   - Click "Add User"

4. **Configure Network Access**
   - Go to "Network Access" in left sidebar
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)
   - Click "Confirm"

5. **Get Connection String**
   - Go to "Database" in left sidebar
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your actual password
   - Replace `myFirstDatabase` with `portfolio-db` (optional)

6. **Add to `.env.local`**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio-db
   ```

## 📄 Google Sheets Setup (Optional)

The contact form will save messages to MongoDB regardless of Google Sheets. Follow these steps only if you want duplicate data in Google Sheets.

### Getting Your Google Sheets Credentials

1. **Create a Google Cloud Project**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Click "New Project"
   - Enter project name: "Portfolio Contact Form"
   - Click "Create"

2. **Enable Google Sheets API**
   - In the project dashboard, search "Google Sheets API"
   - Click "Google Sheets API"
   - Click "Enable"

3. **Create Service Account**
   - Go to "IAM & Admin" > "Service Accounts"
   - Click "Create Service Account"
   - Service account name: "portfolio-sheets"
   - Click "Create and Continue"
   - Grant role: "Editor" (or "Owner")
   - Click "Continue"
   - Click "Done"

4. **Download JSON Key**
   - Click on your service account
   - Go to "Keys" tab
   - Click "Add Key" > "Create new key"
   - Choose "JSON" format
   - Click "Create" (JSON file downloads)

5. **Set Up Google Sheet**
   - Create a new Google Sheet
   - Name it: "Contact Messages"
   - Click "Share" in top right
   - Get the email from the JSON file (field: `client_email`)
   - Paste that email in the "Share" dialog
   - Give "Editor" permissions
   - Click "Share"

6. **Get Spreadsheet ID**
   - In your Google Sheet URL, copy the ID between `/d/` and `/edit`
   - Example: `https://docs.google.com/spreadsheets/d/1aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDe/edit`
   - ID: `1aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDe`

7. **Add to `.env.local`**
   ```env
   GOOGLE_SHEET_ID=1aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDe
   GOOGLE_SERVICE_ACCOUNT={"type":"service_account","project_id":"your-project-id",...}
   ```
   
   - Open the downloaded JSON file
   - Copy ALL the content (it's one long JSON object)
   - Paste it as the value for `GOOGLE_SERVICE_ACCOUNT`
   - Make sure it's all on one line

## ✅ Verification

### Test MongoDB Connection

1. Start the dev server: `npm run dev`
2. Go to `/contact`
3. Fill out and submit the form
4. Check MongoDB Atlas:
   - Go to "Database" > "Browse Collections"
   - Select `portfolio-db` database
   - View `contactmessages` collection
   - Your message should appear there!

### Test Google Sheets (Optional)

1. After submitting a contact form
2. Open your Google Sheet
3. A new row should be added with: Full Name | Email | Message | Created At

## 🐛 Troubleshooting

### MongoDB Connection Error

- **Problem**: "MongoNetworkError" or "Authentication failed"
- **Solution**: 
  - Verify password in connection string matches Atlas user
  - Check Network Access allows your IP
  - Ensure cluster is not paused

### Google Sheets Not Working

- **Problem**: Messages saved to MongoDB but not to Sheets
- **Solution**:
  - Check service account email has "Editor" access to Sheet
  - Verify JSON credentials are complete and valid
  - Check console logs for specific error messages
  - Note: Google Sheets failure won't prevent MongoDB save

### Form Validation Errors

- **Problem**: Validation errors even with valid data
- **Solution**:
  - Check browser console for specific field errors
  - Ensure all required fields are filled
  - Email must be valid format
  - Message must be at least 10 characters

## 📦 Project Structure

```
portafolio-personal/
├── src/
│   ├── app/
│   │   ├── api/contact/     # API endpoint for contact form
│   │   ├── contact/          # Contact page
│   │   ├── projects/        # Projects pages
│   │   └── layout.tsx       # Root layout
│   ├── lib/
│   │   ├── models/          # Mongoose models
│   │   ├── validations/     # Yup validation schemas
│   │   ├── mongodb.ts      # DB connection
│   │   └── googleSheets.ts  # Sheets integration
│   └── components/          # React components
└── .env.local               # Your environment variables
```

## 🎯 What's Implemented

### ✅ TASK 1: Project Setup
- Next.js 15 with App Router
- Global layout with Header/Nav
- Tailwind CSS styling
- Modern animated UI

### ✅ TASK 2: Pages & Routes
- Home page (`/`)
- Projects list (`/projects`)
- Project detail (`/projects/[slug]`)
- Contact page (`/contact`)

### ✅ TASK 3: Contact Form
- Client-side validation with Yup
- Server-side validation
- Required fields: fullName, email, message
- Error messages per field
- Success/error states

### ✅ TASK 4: Database Persistence
- MongoDB integration
- ContactMessage model
- API endpoint: POST /api/contact
- GET endpoint for admin viewing
- Proper error handling

### ✅ TASK 5: Google Sheets Integration
- Optional service account auth
- Automatic row insertion
- Non-blocking implementation

## 📚 Next Steps

1. Replace placeholder content in `src/lib/projects.ts` with your real projects
2. Update `src/components/Header.tsx` with your social links
3. Customize colors in `src/styles/globals.css`
4. Add your profile image to `public/foto_perfil.jpg`
5. Deploy to Vercel and add environment variables there

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com/new)
3. Add environment variables in project settings
4. Deploy!

Environment variables to add in Vercel:
- `MONGODB_URI`
- `GOOGLE_SHEET_ID` (optional)
- `GOOGLE_SERVICE_ACCOUNT` (optional)

## 📝 Contact Form API

### POST /api/contact

**Request:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```

**Success (201):**
```json
{
  "success": true,
  "message": "Contact message saved successfully",
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "fullName": "John Doe",
    "email": "john@example.com",
    "createdAt": "2025-01-24T10:30:00.000Z"
  }
}
```

### GET /api/contact

Retrieves all contact messages (for admin use).

---

Need help? Check the main README.md for more details.

