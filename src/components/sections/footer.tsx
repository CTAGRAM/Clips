import Image from 'next/image';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#f5f3ef] text-black pt-20 pb-20 font-body">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-20 mb-20">
          
          {/* Column 1: Logo */}
          <div className="lg:col-span-1">
             <a href="/" aria-label="home">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/svgs/67025756be96d71592e4ed5b_TheClipsAgency_20_1_-3.svg"
                alt="TheClipsAgency Logo"
                width={200}
                height={27}
                className="w-48 lg:w-auto"
              />
            </a>
          </div>
          
          {/* Column 2: Solutions */}
          <div>
            <h3 className="font-bold text-base mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li><a href="/ghosthost" className="font-medium text-base hover:text-primary transition-colors">GhostHost™</a></li>
            </ul>
          </div>
          
          {/* Column 3: Company */}
          <div>
            <h3 className="font-bold text-base mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="font-medium text-base hover:text-primary transition-colors">What We Do</a></li>
              <li><a href="/portfolio" className="font-medium text-base hover:text-primary transition-colors">Our Work</a></li>
              <li><a href="/client-success" className="font-medium text-base hover:text-primary transition-colors">Client Success</a></li>
              <li>
                <a href="#" className="flex items-center gap-2 font-medium text-base hover:text-primary transition-colors">
                  Careers
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/svgs/67028bcb131d41ce93f4f1d8_now-hiring-badge-4.svg"
                    alt="Now Hiring badge"
                    width={67}
                    height={19}
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-bold text-base mb-6">Contact</h3>
            <ul className="space-y-4">
              <li><a href="/submit-form" className="font-medium text-base hover:text-primary transition-colors">Book a Call</a></li>
              <li><a href="#" className="font-medium text-base hover:text-primary transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-y-8">
          {/* Left Side: Socials and Copyright */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-black hover:opacity-75 transition-opacity">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-black hover:opacity-75 transition-opacity">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="text-sm text-[#666666]">
              <p>The Clips Agency® 2024 All Rights Reserved</p>
              <p className="mt-2 max-w-sm text-xs">
                All content and materials on this site are protected by copyright and trademark laws and are the property of The Clips Agency. Unauthorized use is prohibited.
              </p>
            </div>
          </div>
          
          {/* Right Side: Privacy Policy */}
          <div className="w-full md:w-auto text-left md:text-right">
            <a href="#" className="text-sm text-[#666666] hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;