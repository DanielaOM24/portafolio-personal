# Daniela's Personal Portfolio

A modern, professional portfolio website built with Next.js 15 (App Router), featuring dynamic navigation, project showcase, and a functional contact form with database persistence.

## 🎯 Features

### ✅ Completed Tasks

#### TASK 1: Project Setup & Layout
- ✅ Next.js project with App Router configured
- ✅ Custom layout with global navigation header
- ✅ Modular CSS with Tailwind CSS
- ✅ Modern, animated UI with cosmic theme

#### TASK 2: Pages & Routes
- ✅ Home page (`/`) - Hero section with introduction
- ✅ Projects page (`/projects`) - Project showcase with grid layout
- ✅ Dynamic project routes (`/projects/[slug]`) - Individual project details
- ✅ Contact page (`/contact`) - Contact form with validation
- ✅ Functional navigation between all pages

#### TASK 3: Contact Form with Validation
- ✅ Form fields: fullName, email, message (all required)
- ✅ Client-side validation with Yup schema
- ✅ Server-side validation in API route
- ✅ Real-time error messages per field
- ✅ Loading, success, and error states with clear feedback

#### TASK 4: Database Persistence
- ✅ MongoDB integration with Mongoose
- ✅ ContactMessage model with fields: id, fullName, email, message, createdAt
- ✅ API Route `/api/contact` for POST requests
- ✅ Proper error handling (400, 409, 500 status codes)
- ✅ GET endpoint for admin message retrieval

#### TASK 5: Google Sheets Integration (Optional)
- ✅ Service Account authentication configured
- ✅ Automatic sync to Google Sheets
- ✅ Non-blocking implementation (doesn't fail if Sheets unavailable)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB account (MongoDB Atlas recommended)
- (Optional) Google Cloud Project with Sheets API enabled

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd portafolio-personal
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# MongoDB Connection String
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio-db

# Optional: Google Sheets Configuration
GOOGLE_SHEET_ID=your_spreadsheet_id_here
GOOGLE_SERVICE_ACCOUNT={"type":"service_account","project_id":"..."}
```

### MongoDB Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get your connection string
4. Replace `<username>` and `<password>` in the connection string
5. Copy to `MONGODB_URI` in `.env.local`

### Google Sheets Setup (Optional)

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable "Google Sheets API"
4. Create a Service Account:
   - Go to "IAM & Admin" > "Service Accounts"
   - Create account, download JSON key
5. Open Google Sheets, share with service account email
6. Copy JSON content to `GOOGLE_SERVICE_ACCOUNT` in `.env.local`

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portafolio-personal/
├── src/
│   ├── app/                      # App Router pages
│   │   ├── api/                  # API routes
│   │   │   └── contact/          # Contact form API
│   │   ├── contact/              # Contact page
│   │   ├── projects/             # Projects pages
│   │   │   ├── page.tsx          # Projects list
│   │   │   └── [slug]/          # Dynamic project detail
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   ├── components/               # React components
│   │   ├── Header.tsx           # Navigation header
│   │   └── ProjectCard.tsx      # Project card component
│   ├── lib/                      # Utilities
│   │   ├── models/              # Mongoose models
│   │   │   └── ContactMessage.ts
│   │   ├── validations/         # Validation schemas
│   │   │   └── contactSchema.ts
│   │   ├── mongodb.ts           # MongoDB connection
│   │   ├── googleSheets.ts      # Google Sheets helper
│   │   └── projects.ts          # Project data
│   └── styles/                  # Global styles
│       └── globals.css
├── public/                       # Static assets
└── .env.local                    # Environment variables (create this)
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Form Handling**: React Hook Form + Yup
- **Database**: MongoDB + Mongoose
- **Icons**: Lucide React
- **API Integration**: Google Sheets API (optional)

## 📝 API Endpoints

### POST `/api/contact`
Submit a contact form message.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in working together!"
}
```

**Success Response (201):**
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

**Error Responses:**
- `400 Bad Request`: Validation errors
- `409 Conflict`: Duplicate entry
- `500 Internal Server Error`: Server error

### GET `/api/contact`
Retrieve contact messages (admin use).

**Success Response (200):**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "fullName": "John Doe",
      "email": "john@example.com",
      "message": "Hello...",
      "createdAt": "2025-01-24T10:30:00.000Z"
    }
  ]
}
```

## 🎨 Customization

### Adding Projects

Edit `src/lib/projects.ts` to add your projects:

```typescript
export const projects: Project[] = [
  {
    id: "unique-id",
    title: "Project Title",
    short: "Short description",
    description: "Long description...",
    image: "/path/to/image.jpg",
    tech: ["Next.js", "TypeScript"],
    createdAt: "2025-01-24"
  }
];
```

### Styling

- Global styles: `src/styles/globals.css`
- Tailwind config: Edit inline classes or create `tailwind.config.js`
- Color scheme: Update CSS variables in `globals.css`

## 📊 Criterios de Aceptación

### ✅ CA_01.1: Project runs without errors
- ✅ `npm run dev` executes successfully
- ✅ No console errors

### ✅ CA_01.2: Layout structure defined
- ✅ `app/layout.tsx` with HTML structure
- ✅ Header/Nav component integrated

### ✅ CA_01.3: Organized styles
- ✅ Modular CSS structure
- ✅ Tailwind utility classes
- ✅ Global styles organized in `/styles`

### ✅ CA_02.1: Pages created
- ✅ Home (`/`)
- ✅ Projects (`/projects`)
- ✅ Contact (`/contact`)

### ✅ CA_02.2: Navigation works
- ✅ All links functional
- ✅ Active states on current page

### ✅ CA_02.3: Dynamic routes
- ✅ `/projects/[slug]` shows project details
- ✅ Mock data for testing

### ✅ CA_03.1: Required fields
- ✅ fullName, email, message validated

### ✅ CA_03.2: Validation with error messages
- ✅ Yup schema validation
- ✅ Per-field error display

### ✅ CA_03.3: Submission states
- ✅ Loading state during submit
- ✅ Success message on completion
- ✅ Error message on failure

### ✅ CA_04.1: Database model
- ✅ ContactMessage model with all fields
- ✅ Indexed for performance

### ✅ CA_04.2: Data persistence
- ✅ API inserts to MongoDB
- ✅ Records saved successfully

### ✅ CA_04.3: Error handling
- ✅ Proper HTTP status codes
- ✅ Clear error messages

### ✅ CA_05.1: Google Sheets credentials
- ✅ Environment variable configuration
- ✅ Service Account setup

### ✅ CA_05.2: Sheet integration
- ✅ Rows inserted with all data
- ✅ Non-blocking implementation

### ✅ CA_05.3: Status handling
- ✅ Success/error feedback
- ✅ Doesn't fail main request

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables Required

- `MONGODB_URI`: MongoDB connection string
- `GOOGLE_SHEET_ID`: (Optional) Spreadsheet ID
- `GOOGLE_SERVICE_ACCOUNT`: (Optional) Service account JSON

## 📄 License

This project is created for educational purposes as part of a training program.

## 👤 Author

**Daniela** - Aspiring Web Developer

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
