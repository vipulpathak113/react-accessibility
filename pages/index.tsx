import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className="text-2xl text-center m-10">
        Top 10 Accessibility best practices for Design
      </h1>

      <div className="grid grid-cols-[200px_200px] justify-center">
        <div>
          <span>1. </span>
          <Link href="/colorContrast" className="text-blue-600 underline">
            Home
          </Link>
        </div>
        <div>
          <span>2. </span>
          <Link href="/colorIndependence" className="text-blue-600 underline">
            Color Independence
          </Link>
        </div>
      </div>
    </>
  );
}
