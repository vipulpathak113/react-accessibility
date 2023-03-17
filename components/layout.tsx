import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

interface AuxProps {
  children: ReactNode;
}

interface footer {
  page?: string;
  link?: string;
}

function BackLink() {
  return (
    <nav>
    <Link href="/" className="text-blue-600 underline m-3">
      Return to best practices
    </Link>
    </nav>
  );
}

function FooterLink({ page }: footer) {
  return (
    <footer>
      <span>Learn More about </span>
      <a
        className="text-blue-600 underline"
        href={`/pdfs/${page?.toLowerCase()}.pdf`}
        target="_blank"
      >
        {page}
        <Image
          className="inline-block ml-1"
          src="/redirect.png"
          width={12}
          height={12}
          alt={""}
        />
      </a>
    </footer>
  );
}

export default function Layout({ children }: AuxProps) {
  let name = "";
  if (React.isValidElement(children) && typeof children.type !== "string") {
    name = children.type.name;
  }

  return (
    <>
      <BackLink />
      <main>{children}</main>
      <FooterLink page={name} />
    </>
  );
}
