import React, { useState } from "react";
import { assets } from "../assets/assets";
import {
  startSellingLinks,
  integrationsLinks,
  printOnDemandLinks,
  companyLinks,
  languageOptions
} from './list';

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    printOnDemand: false,
    integrations: false,
    startSelling: false,
    company: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="text-white px-4 py-6 md:px-16 md:py-10 bg-black">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="mb-4 md:mb-0">
          <img className="w-24 md:w-28" src={assets.footerLogo} alt="Footer Logo" />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-start md:items-center">
          <p className="text-left md:text-left">Find Gelato on:</p>
          <div className="flex gap-4">
            <img className="w-5 md:w-6" src={assets.instagram} alt="Instagram" />
            <img className="w-5 md:w-6" src={assets.facebook} alt="Facebook" />
            <img className="w-5 md:w-6" src={assets.linkedin} alt="LinkedIn" />
            <img className="w-5 md:w-6" src={assets.youtube} alt="YouTube" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-20 pt-6 md:pt-8">
        {/* Left column with company information and app links */}
        <div className="flex-1">
          <p className="font-light text-sm leading-relaxed text-left">
            Gelato has created the world's largest network for local <br />
            production and distribution of customized products. <br />
            Together we bring creativity to life - and into business.
          </p>
          <button className="bg-white text-black px-3 py-2 font-medium mt-5 text-center rounded-full hover:bg-gray-300 hover:text-gray-400">
            Get Started
          </button>

          <div className="pt-10 md:pt-16">
            <h2 className="text-lg md:text-xl pb-2 text-left">Get the app</h2>
            <div className="flex gap-2">
              <img className="w-24 md:w-auto" src={assets.play_store} alt="Google Play Store" />
              <img className="w-24 md:w-auto" src={assets.app_store} alt="App Store" />
            </div>
          </div>
        </div>

        {/* List sections for small devices */}
        <div className="md:hidden pt-6">
          {[
            { title: 'Print on demand', links: printOnDemandLinks },
            { title: 'Integrations', links: integrationsLinks },
            { title: 'Start selling', links: startSellingLinks },
            { title: 'Company', links: companyLinks },
          ].map(({ title, links }, index) => (
            <div key={index} className="w-full mb-6">
              <h4
                className="font-semibold flex items-center cursor-pointer text-left"
                onClick={() => toggleSection(title)}
              >
                <span className="mr-2">
                  {openSections[title] ? "▼" : ">"}
                </span>
                {title}
              </h4>
              <ul
                className={`text-xs pt-4 flex flex-col gap-2 transition-all duration-300 ${
                  openSections[title] ? "block" : "hidden"
                }`}
              >
                {links.map((link, index) => (
                  <li key={index} className="cursor-pointer hover:text-gray-300">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* List sections for medium and larger devices */}
        <div className="hidden md:flex flex-1 gap-6 md:gap-10">
          {[
            { title: 'Print on demand', links: printOnDemandLinks },
            { title: 'Integrations', links: integrationsLinks },
            { title: 'Start selling', links: startSellingLinks },
            { title: 'Company', links: companyLinks },
          ].map(({ title, links }, index) => (
            <div key={index} className="w-full">
              <h4 className="font-semibold text-left">{title}</h4>
              <ul className="text-xs pt-4 flex flex-col gap-2">
                {links.map((link, index) => (
                  <li key={index} className="cursor-pointer hover:text-gray-300">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-6 md:pt-10">
        <ul className="flex flex-col md:flex-row gap-4 md:gap-5 text-xs">
          <li className="cursor-pointer hover:text-gray-300 border-b md:border-b-0 md:border-r-2 pr-5 pb-2 md:pb-0">
            Contact us
          </li>
          <li className="cursor-pointer hover:text-gray-300 border-b md:border-b-0 md:border-r-2 pr-5 pb-2 md:pb-0">
            Legal
          </li>
          <li className="cursor-pointer hover:text-gray-300 border-b md:border-b-0 md:border-r-2 pr-5 pb-2 md:pb-0">
            Privacy policy
          </li>
          <li className="cursor-pointer hover:text-gray-300 border-b md:border-b-0 md:border-r-2 pr-5 pb-2 md:pb-0">
            Cookie policy
          </li>
          <li className="cursor-pointer hover:text-gray-300 border-b md:border-b-0 md:border-r-2 pr-5 pb-2 md:pb-0">
            API terms
          </li>
          <li className="cursor-pointer hover:text-gray-300 pb-2 md:pb-0">
            Sitemap
          </li>
        </ul>
        <div className="mt-4 md:mt-0">
          <select className="bg-black border-2 border-white outline-none px-2 py-2 text-xs">
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
