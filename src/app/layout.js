import Preloader from "../components/Preloader";
import CustomCursor from "../components/CustomCursor";
import "../styles/page.css";
import "../styles/productDetails.css";
import "../styles/preloader.css";
import "../styles/cursor.css";


export const metadata = {
  title: "Hedamo Products",
  description: "Showcasing Hedamo's natural products",
  
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <link rel="icon" href="/favicon.ico" />
      </head>
      <body>

        {/* Preloader */}
        <Preloader />

        <CustomCursor />


        {/* Header */}
        <header
          id="navbar"
          style={{ padding: "16px", background: "#003049", color: "#fff" }}
        >
          <h1>🌿 Hedamo Product</h1>
        </header>

        {/* Main Content */}
        <main id="main" style={{ padding: "20px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
