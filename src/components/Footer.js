import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center">
          Build with{" "}
          <span className="text-primary text-2xl px-1">&hearts;</span>
          &nbsp;TJ
        </div>

        <Link
          href="mailto:anaz.thaj@gmail.com"
          className="underline underline-offset"
          target={"_blank"}
        >
          Say hello b!
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
