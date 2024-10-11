import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 border-t">
      <div className="flex justify-between">
        <p className="text-primary tracking-tight">
          Designed and Developed by{" "}
          <Link href={"https://github.com/Rahulhanje"} className="font-bold">
            @Rahul
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Footer;