"use client";

import React from "react";
import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  href: string;
  name: string;
}

export const ActiveLink = ({ href, name }: ActiveLinkProps) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Link
      key={href}
      href={href}
      className={`${style.link} ${
        pathname === href ? style["active-link"] : ""
      }`}
    >
      {name}
    </Link>
  );
};
