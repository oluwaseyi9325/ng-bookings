


import Image from 'next/image';
import {
  Facebook,
  Instagram,
  Linkedin,
//   Tiktok,
  X,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className=" border-t px-4 sm:px-6 md:px-20 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-sm text-gray-800">
        
        {/* Column 1: Logo & Socials */}
        <div>
          <Image src="data:image/png;base64,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" alt="NGBOOKINGS logo" width={150} height={40} className="mb-4" />
          <div className="flex items-center space-x-3 mb-4 text-gray-600">
            <Facebook size={20} />
            <X size={20} />
            <Instagram size={20} />
            <Linkedin size={20} />
            {/* <Tiktok size={20} /> */}
          </div>
          <h3 className="font-semibold mb-2">Get Mobile App</h3>
          <div className="space-y-2">
            <Image src="https://ngbookings.com/assets/GooglePlay-CC55za5x.webp" alt="Google Play" width={140} height={40} />
            <Image src="https://ngbookings.com/assets/AppleStore-D1_XQCs1.webp" alt="App Store" width={140} height={40} />
          </div>
        </div>

        {/* Column 2: Company Info */}
        <div>
          <h4 className="font-semibold mb-2">Ngbookings.com</h4>
          <ul className="space-y-1">
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 3: Partners */}
        <div>
          <h4 className="font-semibold mb-2">Partners</h4>
          <ul className="space-y-1">
            <li>Partners property login</li>
            <li>List your property</li>
            <li>Partner Support</li>
          </ul>
        </div>

        {/* Column 4: Top Cities */}
        <div>
          <h4 className="font-semibold mb-2">Top cities</h4>
          <ul className="space-y-1 capitalize">
            <li>Hotels in Lekki</li>
            <li>Hotels in Lagos Mainland</li>
            <li>Hotels in Ikeja</li>
            <li>Hotels in Abuja</li>
            <li>Hotels in Victoria Island</li>
            <li>Hotels in Ikoyi</li>
            <li>Hotels in Edo</li>
            <li>Hotels in Rivers</li>
            <li>Hotels in Abeokuta</li>
            <li>Hotels in Ibadan</li>
          </ul>
        </div>

        {/* Column 5: Top Hotels */}
        <div>
          <h4 className="font-semibold mb-2">Top hotel</h4>
          <ul className="space-y-1">
            <li>Ivy Hotel</li>
            <li>Aotel Hotel</li>
            <li>Msquare Hotel Ikeja</li>
            <li>Whitehouse Msquare Hotel</li>
            <li>MAXX Msquare Hotel</li>
            <li>BSM Msquare</li>
            <li>Amazon Msquare Apartment Hotel</li>
            <li>Stop Over Motels</li>
            <li>Welcome Centre Hotels</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} NGBookings.com. All rights reserved.
      </div>
    </footer>
  );
}
