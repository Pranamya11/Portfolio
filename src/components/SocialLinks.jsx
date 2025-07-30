import React from "react";
import {
  Linkedin,
  Github,
  ExternalLink
} from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/pranamya-das-9964b5256/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true
  },
  {
    name: "Leetcode",
    displayName: "LeetCode",
    subText: "Pranamya",
    
    icon: ({ className, ...props }) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.655 1.655 0 0 0 0 2.226 1.655 1.655 0 0 0 2.226 0l2.939-3.141 2.939 3.141a1.655 1.655 0 0 0 2.226 0 1.655 1.655 0 0 0 0-2.226l-3.854-4.126 5.406-5.788A1.374 1.374 0 0 0 13.483 0z" fill="#FFA116"/>
        <path d="M19.91 22.537a1.374 1.374 0 0 0 .961-.438l5.406-5.788-3.854-4.126a1.655 1.655 0 0 0-2.226 0 1.655 1.655 0 0 0 0 2.226l2.939 3.141-2.939 3.141a1.655 1.655 0 0 0 0 2.226 1.655 1.655 0 0 0 2.226 0l3.854-4.126-5.406-5.788a1.374 1.374 0 0 0-.961-.438z" fill="#FFA116"/>
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.655 1.655 0 0 0 0 2.226 1.655 1.655 0 0 0 2.226 0l2.939-3.141 2.939 3.141a1.655 1.655 0 0 0 2.226 0 1.655 1.655 0 0 0 0-2.226l-3.854-4.126 5.406-5.788A1.374 1.374 0 0 0 13.483 0z" fill="#FFA116"/>
        <path d="M19.91 22.537a1.374 1.374 0 0 0 .961-.438l5.406-5.788-3.854-4.126a1.655 1.655 0 0 0-2.226 0 1.655 1.655 0 0 0 0 2.226l2.939 3.141-2.939 3.141a1.655 1.655 0 0 0 0 2.226 1.655 1.655 0 0 0 2.226 0l3.854-4.126-5.406-5.788a1.374 1.374 0 0 0-.961-.438z" fill="#FFA116"/>
      </svg>
    ),
    url: "https://leetcode.com/u/Pranamya_Das/",
    color: "#FFA116",
    gradient: "from-[#FFA116] to-[#FFA116]",
    isPrimary: true
  },
  {
    name: "GitHub",
    displayName: "GitHub",
    subText: "Pranamya",
    icon: Github,
    url: "https://github.com/Pranamya11",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
    isPrimary: true
  }
];

const SocialLinks = () => {
  const primaryLinks = socialLinks.filter(link => link.isPrimary);

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {primaryLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 rounded-lg 
                     bg-white/5 border border-white/10 overflow-hidden
                     hover:border-white/20 transition-all duration-500"
          >
            <div 
              className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                         bg-gradient-to-r ${link.gradient}`}
            />
            
            <div className="relative flex items-center gap-4">
              <div className="relative flex items-center justify-center">
                <div 
                  className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                             group-hover:scale-110 group-hover:opacity-30"
                  style={{ backgroundColor: link.color }}
                />
                <div className="relative p-2 rounded-md">
                  <link.icon
                    className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>
            </div>

            <ExternalLink 
              className="relative w-5 h-5 text-gray-500 group-hover:text-white
                         opacity-0 group-hover:opacity-100 transition-all duration-300
                         transform group-hover:translate-x-0 -translate-x-1"
            />

            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                            translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
