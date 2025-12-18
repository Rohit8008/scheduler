# 📅 Scheduler - Modern Meeting Scheduling App

A powerful, modern meeting scheduling application built with Next.js 15, Clerk authentication, and PostgreSQL. Streamline your scheduling process with an intuitive interface and seamless integration.

![Scheduler App](https://img.shields.io/badge/Next.js-15.1.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-6.2.1-2D3748?style=for-the-badge&logo=prisma)

## ✨ Features

### 🎯 Core Functionality
- **Event Creation**: Create and customize different types of events
- **Availability Management**: Set your available time slots for meetings
- **Custom Scheduling Links**: Share personalized booking links with clients
- **Meeting Management**: Track and manage all your scheduled meetings
- **Google Calendar Integration**: Seamless sync with Google Calendar
- **Real-time Notifications**: Get instant updates on new bookings

### 🔐 Authentication & Security
- **Clerk Authentication**: Secure user authentication and management
- **Protected Routes**: Role-based access control
- **Secure API Endpoints**: Server-side validation and security

### 🎨 Modern UI/UX
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Dark/Light Mode**: Beautiful, accessible interface
- **Modern Components**: Built with Radix UI and Tailwind CSS
- **Smooth Animations**: Enhanced user experience with micro-interactions

### 📊 Dashboard & Analytics
- **Comprehensive Dashboard**: Overview of events, meetings, and availability
- **Meeting Statistics**: Track booking patterns and productivity
- **User Management**: Manage your profile and preferences

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Clerk account for authentication
- Google Calendar API (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rohit8008/scheduler.git
   cd scheduler
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/scheduler_db"

   # Google Calendar (optional)
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/google/callback
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Backend
- **Next.js API Routes** - Server-side API endpoints
- **Prisma** - Database ORM
- **PostgreSQL** - Primary database
- **Clerk** - Authentication and user management

### Integrations
- **Google Calendar API** - Calendar synchronization
- **Google Meet** - Video conferencing integration

## 📁 Project Structure

```
scheduler/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── (main)/            # Main application routes
│   ├── [username]/        # User profile pages
│   └── layout.jsx         # Root layout
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   └── *.jsx            # Feature components
├── lib/                  # Utility functions
├── prisma/              # Database schema and migrations
├── actions/             # Server actions
└── hooks/               # Custom React hooks
```

## 🔧 Configuration

### Database Setup
The application uses PostgreSQL with Prisma ORM. You can use:
- **Local PostgreSQL**: Install and configure locally
- **Supabase**: Free PostgreSQL hosting
- **Railway**: Easy deployment platform
- **Neon**: Serverless PostgreSQL

### Authentication Setup
1. Create a [Clerk](https://clerk.com) account
2. Create a new application
3. Copy your API keys to the `.env` file
4. Configure your authentication settings in the Clerk dashboard

### Google Calendar Integration
1. Create a Google Cloud Project
2. Enable Google Calendar API
3. Create OAuth 2.0 credentials
4. Add the credentials to your `.env` file

## 📱 Usage

### For Event Organizers
1. **Sign up** and create your account
2. **Set your availability** for different days and times
3. **Create event types** with custom durations and descriptions
4. **Share your scheduling link** with clients or colleagues
5. **Manage bookings** from your dashboard

### For Meeting Attendees
1. **Click the scheduling link** shared by the organizer
2. **Select an available time slot** that works for you
3. **Fill in your details** and any additional information
4. **Receive confirmation** with meeting details and Google Meet link

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Clerk](https://clerk.com/) for authentication
- [Prisma](https://prisma.io/) for database management
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Radix UI](https://www.radix-ui.com/) for accessible components

## 📞 Support

If you have any questions or need help:
- Open an [issue](https://github.com/rohit8008/scheduler/issues)
- Check the [documentation](https://github.com/rohit8008/scheduler/wiki)
- Contact: [mittalrohit701@gmail.com]

---

**Made with ❤️ by Rohit Mittal**

[![GitHub stars](https://img.shields.io/github/stars/rohit8008/scheduler?style=social)](https://github.com/rohit8008/scheduler)
[![GitHub forks](https://img.shields.io/github/forks/rohit8008/scheduler?style=social)](https://github.com/rohit8008/scheduler)
[![GitHub issues](https://img.shields.io/github/issues/rohit8008/scheduler)](https://github.com/rohit8008/scheduler/issues)
