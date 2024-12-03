"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Plane,
  Award,
  Linkedin,
  Instagram,
  Menu,
  Facebook,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
// import { StaticImageData } from "next/image";
import image1 from "@/app/assets/images/one.jpg";
import image2 from "@/app/assets/images/two.jpg";
import image3 from "@/app/assets/images/three.jpg";
import image4 from "@/app/assets/images/four.jpg";
// import image5 from "@/app/assets/images/five.jpg";
import image6 from "@/app/assets/images/six.jpg";
import image7 from "@/app/assets/images/seven.jpg";
import image8 from "@/app/assets/images/eight.jpg";
// import image9 from "@/app/assets/images/nine.JPG";
// import image11 from "@/app/assets/images/eleven.JPG";
import image12 from "@/app/assets/images/12.jpg";
import image13 from "@/app/assets/images/13.jpg";
import image14 from "@/app/assets/images/14.jpg";
import image15 from "@/app/assets/images/15.jpg";
import image16 from "@/app/assets/images/16.jpg";
import image17 from "@/app/assets/images/17.jpg";
import image19 from "@/app/assets/images/19.jpg";
import image20 from "@/app/assets/images/20.jpg";
import image21 from "@/app/assets/images/21.jpg";
import image22 from "@/app/assets/images/22.jpg";
import image23 from "@/app/assets/images/23.jpg";
import image24 from "@/app/assets/images/24.jpg";
import image25 from "@/app/assets/images/25.jpg";
import image26 from "@/app/assets/images/26.jpg";
import image27 from "@/app/assets/images/27.jpg";
import image28 from "@/app/assets/images/28.jpg";
import image29 from "@/app/assets/images/29.jpg";
import image30 from "@/app/assets/images/30.jpg";
// import image31 from "@/app/assets/images/31.JPG";
// import image32 from "@/app/assets/images/32.JPG";
// import image33 from "@/app/assets/images/33.JPG";
// import image34 from "@/app/assets/images/34.JPG";
// import image35 from "@/app/assets/images/35.PNG";
import image36 from "@/app/assets/images/36.jpg";
import image37 from "@/app/assets/images/37.jpg";
import image38 from "@/app/assets/images/38.jpg";
import image39 from "@/app/assets/images/39.png";
import image40 from "@/app/assets/images/40.jpg";

// Define an interface for the image data
// interface ImageData {
//   num: number;
//   image: StaticImageData;
// }

export function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Create images array directly using imported images
  const images = [
    { num: 1, image: image1 },
    { num: 2, image: image2 },
    { num: 3, image: image3 },
    { num: 4, image: image4 },
    // { num: 5, image: image5 },
    { num: 6, image: image6 },
    { num: 7, image: image7 },
    { num: 8, image: image8 },
    // { num: 9, image: image9 },
    // { num: 10, image: image10 },
    // { num: 11, image: image11 },
    { num: 12, image: image12 },
    { num: 13, image: image13 },
    { num: 14, image: image14 },
    { num: 15, image: image15 },
    { num: 16, image: image16 },
    { num: 17, image: image17 },
    // { num: 18, image: image18 },
    { num: 19, image: image19 },
    { num: 20, image: image20 },
    { num: 21, image: image21 },
    { num: 22, image: image22 },
    { num: 23, image: image23 },
    { num: 24, image: image24 },
    { num: 25, image: image25 },
    { num: 26, image: image26 },
    { num: 27, image: image27 },
    { num: 28, image: image28 },
    { num: 29, image: image29 },
    { num: 30, image: image30 },
    // { num: 31, image: image31 },
    // { num: 32, image: image32 },
    // { num: 33, image: image33 },
    // { num: 34, image: image34 },
    // { num: 35, image: image35 },
    { num: 36, image: image36 },
    { num: 37, image: image37 },
    { num: 38, image: image38 },
    { num: 39, image: image39 },
    { num: 40, image: image40 },
  ];

  // Update hero and profile image references
  const heroImage = images[5].image;
  const profileImage = images[6].image;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          {/* Logo/Name for all screens */}
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold flex items-center">
              <Plane className="mr-2 h-5 w-5" /> Akash Gaikwad
            </h1>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:items-center md:space-x-6">
              <a href="#about" className="hover:underline">
                About
              </a>
              <a href="#achievements" className="hover:underline">
                Achievements
              </a>
              <a href="#trending" className="hover:underline">
                Trending
              </a>
              <a href="#gallery" className="hover:underline">
                Gallery
              </a>
            </nav>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4">
              <ul className="flex flex-col space-y-2">
                <li>
                  <a
                    href="#about"
                    className="block py-2 hover:bg-blue-700 px-2 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#achievements"
                    className="block py-2 hover:bg-blue-700 px-2 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Achievements
                  </a>
                </li>
                <li>
                  <a
                    href="#trending"
                    className="block py-2 hover:bg-blue-700 px-2 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Trending
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="block py-2 hover:bg-blue-700 px-2 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        {heroImage && (
          <Image
            src={heroImage}
            alt="Akash Gaikwad - Aviation Professional"
            fill
            priority
            className="absolute inset-0 z-0 object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center">
          <h2 className="text-5xl font-bold mb-4">Akash Gaikwad</h2>
          <p className="text-2xl mb-8">
            AIRBUS FLEET ANALYST AT WORLD&apos;S LARGEST AIRLINE - UNITED
            AIRLINES
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">Contact Me</Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {profileImage && (
              <Image
                src={profileImage}
                alt="Akash Gaikwad"
                width={300}
                height={300}
                className="rounded-full"
                priority
              />
            )}
            <div>
              <p className="text-lg mb-4">
                Hello! I&apos;m Akash Gaikwad, an experienced Airbus Fleet
                Analyst currently working with United Airlines, the world&apos;s
                largest airline. My expertise spans multiple Airbus aircraft,
                including the A319, A320, and A321, as well as the ATR-72
                aircraft. I also hold certifications across various aircraft
                fleets, including the Boeing B777 and B787, enabling me to
                manage and optimize operations across a diverse range of
                aircraft.
              </p>
              <p className="text-lg mb-4">
                Previously, I worked with IndiGo Airlines, India&apos;s largest
                airline, where I specialized in Aircraft Structures and Fleet
                Reliability. During my tenure, I gained invaluable hands-on
                experience with aircraft structures, ensuring that safety,
                performance, and reliability standards were met consistently.
                This role deepened my understanding of the intricate aspects of
                fleet operations and reinforced my strong analytical skills,
                making aircraft structures and reliability my core strength.
              </p>
              <p className="text-lg">
                With a passion for aviation and a commitment to operational
                excellence, I strive to contribute my expertise to ensure the
                highest standards of safety, performance, and efficiency in
                every aspect of fleet management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>

          {/* National Awards */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-blue-600">
              National Awards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Ratan Tata National Icon Award 2024",
                "Swami Vivekanand Aadarsh Ratna Award 2024",
              ].map((award, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6 flex items-start">
                    <Award className="w-12 h-12 text-blue-600 mr-4 flex-shrink-0" />
                    <p className="text-lg font-semibold">{award}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Awards */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-blue-600">
              Professional Excellence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "IndiGo Superstar Award 2023",
                "The All-Rounder Award 2021 – Pune Institute of Aviation Technology (Highest Title)",
              ].map((award, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6 flex items-start">
                    <Award className="w-12 h-12 text-blue-600 mr-4 flex-shrink-0" />
                    <p className="text-lg font-semibold">{award}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sports Achievements */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center text-blue-600">
              Sports & Other Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "State Level Medallist in Gymnastics (Acrobatics and Artistic Gymnastics)",
                "Winner – United Airlines Table Tennis Championship 2024",
                "Gold Medallist – Table Tennis (Mix Pair) at United Airlines Ultimate Championship 2024",
                "Best Bowler Award in Intracollege Cricket Championships 2019",
                "Multiple medals in various outdoor sports competitions",
                "Alumni Representative for NAAC (National Assessment and Accreditation Council) at Pune Institute of Aviation Technology",
              ].map((achievement, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6 flex items-start">
                    <Award className="w-12 h-12 text-blue-600 mr-4 flex-shrink-0" />
                    <p className="text-lg">{achievement}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Connect with Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href="https://www.linkedin.com/in/akash✈-gaikwad-145388196"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 hover:text-blue-200 transition-colors p-4"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/flyinn_officer_akashgaikwad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 hover:text-blue-200 transition-colors p-4"
            >
              <Instagram className="w-6 h-6" />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/Flying.Officer1308"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 hover:text-blue-200 transition-colors p-4"
            >
              <Facebook className="w-6 h-6" />
              <span>Facebook</span>
            </a>

            <a
              href="mailto:gaikwadakash563@gmail.com"
              className="flex items-center justify-center space-x-3 hover:text-blue-200 transition-colors p-4"
            >
              <Mail className="w-6 h-6" />
              <span>gaikwadakash563@gmail.com</span>
            </a>

            <div className="flex items-center justify-center space-x-3 p-4 col-span-1 md:col-span-2 lg:col-span-2">
              <Phone className="w-6 h-6" />
              <span>(+91) 9423970927 / 8208995821</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Posts Section */}
      <section id="trending" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Trending Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://www.instagram.com/reel/DBglynTIS0Y/",
              "https://www.instagram.com/reel/DBG0ngEIhXJ/",
              "https://www.instagram.com/p/C5nEvl6JZfl/",
              "https://www.instagram.com/reel/C0OmIZRpRYs/",
              "https://www.instagram.com/p/CmBx-9OouPk/",
              "https://www.instagram.com/p/C-u_Zi1hFZs/",
            ].map((post, index) => (
              <div key={index} className="aspect-square w-full">
                <iframe
                  src={`${post}embed`}
                  className="w-full h-full border-none overflow-hidden"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((imageData, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {imageData && (
                  <Image
                    src={imageData.image}
                    alt={`Gallery Image ${imageData.num}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                    loading={index < 8 ? "eager" : "lazy"}
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Akash Gaikwad. All rights reserved.</p>
          <p className="mt-2">Soaring through the skies of innovation</p>
        </div>
      </footer>
    </div>
  );
}
