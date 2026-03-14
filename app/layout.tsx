import "./globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-sky-100 min-h-screen">
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}