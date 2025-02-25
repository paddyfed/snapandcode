import "./globals.css";

export const metadata = {
  title: "Snap and Code",
  description: "Snap and Code - Website and Photography Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
