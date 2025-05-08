import React from "react";

const Footer = () => {
  const socialLinks = [
    "LinkedIn",
    "GitHub",
    "Facebook",
    "Instagram",
    "Twitter",
  ];

  return (
    <footer className="bg-[#010114] py-8 text-white w-full">
      <div className="relative w-[1140px] mx-auto p-5 md:p-0">
        {/* ************** Top section *************** */}
        <div className=" max-w-7xl mx-auto flex flex-col md:flex-row justify-between itetem sm:items-start  gap-10">
          {/* *************** Left *************** */}
          <div>
            <p className="text-2xl text-white">Have a project in mind?</p>
            <h2 className="md:text-[64px] text-2xl  font-bold text-blue-400 mt-2">
              Let’s Talk
            </h2>
            <p className="text-white text-2xl md:text-[64px]  font-semibold">
              hey@pixll.com
            </p>
          </div>

          {/* ************ Right  ********** */}
          <div className="flex flex-col md:items-start  space-y-2 text-sm mb-10">
            {socialLinks.map((link, i) => (
              <a
                href="#"
                key={i}
                className="hover:text-blue-400  transition duration-200 underline "
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        {/* *********** Date & privacy *********** */}
        <div className="md:w-[358px] flex justify-between absolute bottom-0 md:right-0">
          <div className="space-x-4 mb-2 md:mb-0">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} PIXL</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
