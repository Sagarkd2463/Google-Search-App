import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Search Engine App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main-page">
        {children}
        <br></br>
        <br></br>
        <Footer />
      </body>
    </html>
  );
}
