import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import BootstrapClient from "./components/BootstrapClient";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Snap and Code",
  description: "Snap and Code - Website and Photography Services",
  keywords: [
    "Photographer",
    "Photography",
    "Website",
    "Website design",
    "Website development",
    "Videography",
    "Video Editing",
  ],
  generator: "Next.js",
  authors: [{ name: "Paddy O'Hara" }],
  creator: "Paddy O'Hara",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="d-flex flex-column">
        <NavBar />
        {children}
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
