import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import CreateEventDrawer from "@/components/CreateEvent";
import Header from "@/components/Header";

export const metadata = {
  title: "Scheduler - Meeting Scheduling App",
  description: "Effortlessly schedule and manage meetings with our intuitive Scheduler app. Reduce scheduling conflicts and improve productivity.",
  keywords: "meeting scheduler, online scheduling, calendar app, appointment booking, productivity tool",
  author: "Rohit Mittal",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow", 
  openGraph: {
    title: "Scheduler - Meeting Scheduling App",
    description: "Effortlessly schedule and manage meetings with our intuitive Scheduler app. Reduce scheduling conflicts and improve productivity.",
    url: "https://github.com/Rohit8008/scheduler",
    siteName: "Scheduler",
    type: "website",
    images: [
      {
        width: 1200,
        height: 630,
        alt: "Scheduler - Meeting Scheduling App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scheduler - Meeting Scheduling App",
    description: "Effortlessly schedule and manage meetings with our intuitive Scheduler app.",
  },
  canonical: "https://github.com/Rohit8008/scheduler",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* Header */}
          <Header />
          <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {children}
          </main>
          {/* Footer */}
          <footer className="bg-blue-100 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made by Rohit Mittal</p>
            </div>
          </footer>
          <CreateEventDrawer />
        </body>
      </html>
    </ClerkProvider>
  );
}
