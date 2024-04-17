import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import CoursesTabs from "./component/coursesTabs";
import Footer from "./component/footer";
import CourseMotive from "./component/courseMotive";
import OpportunitiesCard from "./component/opportunitiesCard";
import Crousel1 from "./component/crousel1";
const inter = Inter({ subsets: ["latin"] });
import Courses from "./component/Courses";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <CoursesTabs />
        <Courses />
        <CourseMotive />
        <OpportunitiesCard />
        <Crousel1 />
        <Footer />
        {children}
        </body>
    </html>
  );
}
