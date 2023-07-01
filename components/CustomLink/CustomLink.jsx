import React from "react";
import styles from "./CustomLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
const CustomLink = ({ children, to, futer, ...props }) => {
  let resolved = usePathname();
  let match = Boolean(resolved === to);
  let active = futer ? styles.factive : styles.active;
  console.log(active);
  return (
    <div className={[styles.linkwrapper, match && active].join(" ")}>
      <Link href={to} {...props}>
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
