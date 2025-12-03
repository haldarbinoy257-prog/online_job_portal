import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
        <p>© {new Date().getFullYear()} Online Job Portal. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Made with ❤️ for project presentation.</p>
      </div>
    </footer>
  );
};

export default Footer;
