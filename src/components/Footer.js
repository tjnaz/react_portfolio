import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center">
        <span>Rightn</span>
        <Link href="/">TJ</Link>
        <Link href="/">Say hello b!</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
