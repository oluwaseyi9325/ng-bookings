"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Eye, Facebook, Twitter, Github, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {

  Instagram,
  Linkedin,
//   Tiktok,
  X,
} from 'lucide-react';

const images = [
  "https://ngbookings.com/assets/Swiper8-BjafD1T_.webp",
  "https://ngbookings.com/assets/Swiper4-BQ1QcWUB.webp",
  "https://ngbookings.com/assets/Swiper5-C1J38xDv.webp",
];

export default function LoginPage() {
  const [index, setIndex] = useState(0);
  const [language, setLanguage] = useState("🇳🇬 NG");
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("string");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both email and password.,");
      return;
    }

    setError("");
    setLoading(true);

    try {

      const response = await fetch("https://mobile-assessmment.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful");
        console.log("Login successful", data);
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {

      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center space-y-10"
      style={{
        backgroundImage: `url("https://ngbookings.com/assets/FooterBg-BjuW4mem.webp")`,
      }}
    >
      <header className="flex flex-col md:flex-row gap-4 md:gap-0 py-5 px-6 md:px-10 justify-between bg-[#7E0140] text-white items-center fixed top-0 left-0 right-0 z-50">
        <Image
          className="w-[130px] md:w-[150px]"
          alt="Logo"
          src="https://ngbookings.com/assets/Logo-BSF8WK_c.svg"
          width={150}
          height={50}
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="bg-[#7E0140] text-white flex items-center gap-2 border-white"
            >
              <Globe className="w-4 h-4" />
              {language}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            <DropdownMenuItem onClick={() => setLanguage("🇳🇬 NG")}>
              🇳🇬 Nigeria
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLanguage("🇬🇭 GH")}>
              🇬🇭 Ghana
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLanguage("🌍 OUT")}>
              🌍 Others
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      {/* Header */}

      {/* Action Buttons */}
      <div className="px-6 md:px-10 flex flex-col sm:flex-row gap-4 sm:gap-5 pt-[130px]">
        <Button className="bg-[#7E0140] rounded-full px-8 py-4">Register</Button>
        <Button className="border border-[#7E0140] bg-white px-8 py-4 text-[#7E0140] rounded-full">
          Home
        </Button>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row px-6 md:px-10 font-sans">
        {/* Left Image Side */}
        <div className="w-full md:w-2/5 hidden md:block relative h-[300px] md:h-auto rounded-2xl overflow-hidden">
          <Image
            src={images[index]}
            alt="Hotel view"
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-black opacity-30" />
        </div>

        {/* Right Form Side */}
        <div className="w-full md:w-3/5 flex items-center justify-center py-10 md:py-12">
          <div className="px-6 md:px-20 space-y-6  w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-center text-[#7E0140]">
              Welcome Back, Traveler!
            </h1>
            <p className="text-center text-gray-600 text-sm md:text-base">
              Your next adventure is just a click away. Log in to manage your
              bookings, access exclusive offers, and unlock the best deals on
              hotels, flights, and more!
            </p>

            {/* Error Message */}
            {error && <p className="text-red-500 text-center">{error}</p>}

            {/* Social Icons */}
            <div className="flex justify-center space-x-4">
              <span className="p-3 bg-gray-300 rounded-full">
                <Github className="w-5 h-5 cursor-pointer hover:text-primary" />
              </span>
              <span className="p-3 bg-gray-300 rounded-full">
                <Facebook className="w-5 h-5 cursor-pointer hover:text-primary" />
              </span>
              <span className="p-3 bg-gray-300 rounded-full">
                <Twitter className="w-5 h-5 cursor-pointer hover:text-primary" />
              </span>
            </div>

            {/* OR divider */}
            <div className="flex items-center justify-between">
              <span className="border-b border-gray-300 flex-1" />
              <span className="px-3 text-gray-500 text-sm">or</span>
              <span className="border-b border-gray-300 flex-1" />
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Email"
                  className="pr-10 h-12 shadow text-[#7E0140]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Mail className="absolute right-3 top-4 text-[#7E0140] w-4 h-4" />
              </div>
              <div className="relative">
                <Input
                  type="password"
                  placeholder="Password"
                  className="pr-10 h-12 shadow text-[#7E0140]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Eye className="absolute right-3 top-4 text-[#7E0140] w-4 h-4" />
              </div>

              <div className="text-right text-sm text-[#7E0140] hover:underline cursor-pointer">
                Forgot password?
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-[#7E0140] text-white"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </div>
        </div>
      </div>

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
    </div>
  );
}
