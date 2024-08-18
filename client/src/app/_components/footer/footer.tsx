import React from "react";
import styles from "@/app/page.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.footer_info}>
      <Link href={"/"}>home</Link>
      <Link href={"/search"}>discover</Link>
      <div>my page</div>
    </div>
  );
};

export default Footer;