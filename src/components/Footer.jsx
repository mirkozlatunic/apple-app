import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div className="">
          <p className="font-semibold text-gray tex-xs">
            More ways to shop:{" "}
            <span className="unerline text-blue"> Find an Apple Store </span>
            <span className="unerline text-blue"> other retailer </span> near
            you.
          </p>
          <p className="font-semibold text-gray tex-xs">
            Or call 800-800-8080{" "}
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-center">
          <p className="font-semibold text-gray tex-xs">
            Copright @ 2024 Apple Inc. All rights reserved.
          </p>

          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray tex-xs">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
