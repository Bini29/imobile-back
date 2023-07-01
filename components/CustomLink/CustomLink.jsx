import React from "react";
import styles from "./CustomLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
const CustomLink = ({ children, to, futer, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  let active = futer ? styles.factive : styles.active;
  console.log(active);
  return (
    <div className={[styles.linkwrapper, match && active].join(" ")}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
