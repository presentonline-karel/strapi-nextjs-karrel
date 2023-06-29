// Tailwind CSS directories
import "./globals.css";

// Custom fonts
import { Inter, Poppins } from "next/font/google";

// Components
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";



// Fonts
const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});
const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-poppins",
});



/*export const metadata = {
  title: "Karel Decoene - Creative Technologist - Portfolio Website",
  description: "Hi, I'm Karel and I'm a creative technologist focused on web development/design. Welcome to my portfolio website.",
};*/



export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  if (!token) throw new Error("The Strapi API Token environment variable is not set.");

  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body id="body" className="w-full overflow-x-hidden">
        <Nav />
        {children}

        {/* @ts-expect-error Server Component */}
        <Footer />
      </body>
    </html>
  );
}
