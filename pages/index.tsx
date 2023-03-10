import Link from "next/link";
import type { ReactElement } from "react";
export default function Home() {
  return (
    <>
      <h1 className="text-2xl text-center m-10">
        Top 10 Accessibility best practices for Designers
      </h1>

      <div className="grid grid-cols-[300px_300px] justify-center">
        <div>
          <span>1. </span>
          <Link href="/colorContrast" className="text-blue-600 underline">
            Color Contrast
          </Link>
        </div>
        <div>
          <span>2. </span>
          <Link href="/colorIndependence" className="text-blue-600 underline">
            Color Independence
          </Link>
        </div>
        <div>
          <span>3. </span>
          <Link href="/wordingInteractive" className="text-blue-600 underline">
            Wording Interactive Elements
          </Link>
        </div>
        <div>
          <span>4. </span>
          <Link href="/stylingInteractive1" className="text-blue-600 underline">
            Styling Interactive Elements (Part1: Buttons and Like)
          </Link>
        </div>
        <div>
          <span>5. </span>
          <Link href="/stylingInteractive2" className="text-blue-600 underline">
            Styling Interactive Elements (Part2: Links and Like)
          </Link>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
