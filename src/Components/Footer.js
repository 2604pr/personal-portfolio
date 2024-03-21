import React from "react";
function Footer() {
  return (
    <footer className="font-bold container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className=" text-center text-dark-content dark:text-light-content w-full">
      Designed and Coded by{" "}
        <a
          className="font-medium"
          href=","
          target="_blank"
          rel="noreferrer noopener"
        >
           
        </a>{" "}
        <span className="text-gradient font-medium text-xl">Pranshu Patel</span>
      </p>
    </footer>
  );
}
export default Footer;
