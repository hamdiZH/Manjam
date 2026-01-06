import Image from "next/image";

// Social Media Icons
const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5 6.5H17.51" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 9H2V21H6V9Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6L8 10L12 6" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Academy", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Referral Program", href: "#" },
  { label: "Community", href: "#" },
];

const legalLinks = [
  { label: "Legal Notice", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "DPA", href: "#" },
  { label: "DMCA Policy", href: "#" },
  { label: "ERDF Support", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-[35px] bg-[#F9FAFB] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Left Side - Logo & Info */}
          <div className="sm:col-span-2 lg:col-span-1 max-w-full lg:max-w-[400px]">
            {/* Logo */}
            <div className="mb-4 sm:mb-6">
              <Image
                src="/manjam-logo.png"
                alt="Manjam"
                width={130}
                height={42}
                className="object-contain w-[100px] sm:w-[115px] md:w-[130px]"
              />
            </div>

            {/* Copyright */}
            <p className="text-[#111827] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              © 2025 Manjam Capital AG. All rights reserved.
            </p>

            {/* Disclaimer */}
            <p className="text-[#6B7280] text-[10px] sm:text-xs leading-relaxed mb-4 sm:mb-6">
              Information provided is for informational purposes only and directed exclusively at qualified/professional investors. The fund operates within the Swiss regulated framework, and Manjam provides its services under the qualified-investor regime.
            </p>

            {/* Language Selector */}
            <button className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-[#E5E7EB] rounded-lg bg-white hover:bg-gray-50 transition-colors">
              <span className="text-base sm:text-lg">🇺🇸</span>
              <span className="text-[#111827] text-xs sm:text-sm">English (US)</span>
              <ChevronDown />
            </button>
          </div>

          {/* Middle - Company Links */}
          <div>
            <h4 className="text-[#111827] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">Company</h4>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#6B7280] text-xs sm:text-sm hover:text-[#111827] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle-Right - Legal Links */}
          <div>
            <h4 className="text-[#111827] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">Legal</h4>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#6B7280] text-xs sm:text-sm hover:text-[#111827] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Social Links */}
          <div>
            <h4 className="text-[#111827] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">Follow us</h4>
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

