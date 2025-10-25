import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

<head>
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</head>

export const metadata: Metadata = {
  title: "Oscar Cheng — Philosophy & Design",
  description:
    "Design as epistemic architecture: research, essays, and projects by Oscar Cheng.",
  metadataBase: new URL("https://oscarchengphilosophy.com"),

  // ✅ add trust + PWA indicators
  themeColor: "#ffffff",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Oscar Cheng — Philosophy & Design",
    description:
      "Research portfolio on conceptual engineering, epistemic design, and digital cognition.",
    url: "https://oscarchengphilosophy.com",
    siteName: "Oscar Cheng Philosophy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <Nav />
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}