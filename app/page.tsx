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
import Footer from "./_components/footer";

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
      setError("Please fill in both email and password.");
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

      <Footer />
    </div>
  );
}
