import Link from "next/link";
import type { ReactElement } from "react";
export default function Home() {
  return (
    <>
    <header>
      <h1 className="text-center m-10 font-[cursive] text-3xl">
        Top 10 Accessibility Best Practices For Designers
      </h1>
      </header>

      <main className="grid grid-cols-[400px_400px] justify-center">
        <div>
          <span>1. </span>
          <Link href="/colorContrast" className="text-blue-600 underline font-[fantasy]">
            Color Contrast
          </Link>
        </div>
        <div>
          <span>2. </span>
          <Link href="/colorIndependence" className="text-blue-600 underline font-[fantasy]">
            Color Independence
          </Link>
        </div>
        <div>
          <span>3. </span>
          <Link href="/wordingInteractive" className="text-blue-600 underline font-[fantasy]">
            Wording Interactive Elements
          </Link>
        </div>
        <div>
          <span>4. </span>
          <Link href="/stylingInteractive1" className="text-blue-600 underline font-[fantasy]">
            Styling Interactive Elements (Part1: Buttons and Like)
          </Link>
        </div>
        <div>
          <span>5. </span>
          <Link href="/stylingInteractive2" className="text-blue-600 underline font-[fantasy]">
            Styling Interactive Elements (Part2: Links and Like)
          </Link>
        </div>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
