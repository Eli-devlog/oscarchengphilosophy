import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Oscar Cheng — Philosophy & Design",
  description: "Design as epistemic architecture: research, essays, and projects by Oscar Cheng.",
  metadataBase: new URL("https://oscarchengphilosophy.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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