import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";
import {
  GithubIcon,
  TwitterIcon,
  LinkedInIcon,
  DribbleIcon,
  SunIcon,
  MoonIcon,
  CircularText,
  LinkArrow,
} from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1.5px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] easse duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mr-4" />
        <CustomLink href="/projects" title="Projects" className="mr-4" />
        <CustomLink href="/articles" title="Articles" className="mr-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://github.com/tjnaz"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-6 mr-3"
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>

        <motion.a
          href="https://twitter.com/thajanaz"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-6 mx-3"
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/anaz-thaj/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-6 ml-3"
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
