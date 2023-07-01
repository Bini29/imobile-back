// These styles apply to every route in the application
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import AuthStatus from "@/components/auth-status";
import { Suspense } from "react";
import styles from "../public/font/stylesheet.module.css";
import { Montserrat } from "next/font/google";
import Header from "../components/Header/Header";
import ModalAbout from "../components/ModalAbout/ModalAbout";
import Footer from "../components/Footer/Footer";
import Script from "next/script";
const inter = Montserrat({
  variable: "--font-inter",
  weight: "400",
  subsets: ["cyrillic"],
});

const title = "iMobile";
const description = "";

export const metadata: Metadata = {
  title,
  description,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="//api.b2pos.ru/shop/v2/connect.js" />
      <body className={inter.variable}>
        <Toaster />
        <Suspense fallback="Loading...">
          <Header />
          {/* @ts-expect-error Async Server Component */}
          {/* <AuthStatus /> */}
          {children}
          <Footer />
        </Suspense>
        <ModalAbout />
      </body>
    </html>
  );
}
