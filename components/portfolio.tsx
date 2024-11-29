"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Plane,
  Award,
  Linkedin,
  Twitter,
  Instagram,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

export function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <Plane className="mr-2" /> Akash Gaikwad
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:underline">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#trending" className="hover:underline">
                  Trending
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:underline">
                  Gallery
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Airplane in the sky"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center">
          <h2 className="text-5xl font-bold mb-4">Akash Gaikwad</h2>
          <p className="text-2xl mb-8">Aviation Engineer at United Airlines</p>
          <Button className="bg-blue-600 hover:bg-blue-700">Contact Me</Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Akash Gaikwad"
              width={300}
              height={300}
              className="rounded-full"
            />
            <div>
              <p className="text-lg mb-4">
                Hello! I&apos;m Akash Gaikwad, a passionate aviation engineer
                currently working as a Technical Engineer at United Airlines.
                With years of experience in the field, I specialize in aircraft
                maintenance, troubleshooting, and ensuring the safety and
                efficiency of commercial aircraft.
              </p>
              <p className="text-lg">
                My expertise lies in avionics systems, aircraft structures, and
                propulsion systems. I&apos;m dedicated to pushing the boundaries
                of aviation technology and contributing to the advancement of
                the aerospace industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Led a team in developing an innovative fuel efficiency system, resulting in a 5% reduction in fuel consumption across the fleet",
              "Received the 'Engineer of the Year' award at United Airlines for outstanding contributions to aircraft safety protocols",
              "Published research on advanced composite materials in aircraft structures in the Journal of Aerospace Engineering",
            ].map((achievement, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-blue-600 mb-4" />
                  <p className="text-lg">{achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Connect with Me</h2>
          <div className="flex justify-center space-x-8">
            <a href="#" className="hover:text-blue-200 transition-colors">
              <Linkedin className="w-8 h-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              <Twitter className="w-8 h-8" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              <Instagram className="w-8 h-8" />
              <span className="sr-only">Instagram</span>
            </a>
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
              {
                title: "The Future of Sustainable Aviation",
                excerpt:
                  "Exploring eco-friendly technologies in the aviation industry...",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Advancements in Aircraft Propulsion",
                excerpt:
                  "Discussing the latest innovations in jet engine technology...",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Navigating Challenges in Aviation Maintenance",
                excerpt:
                  "Insights into maintaining complex aircraft systems...",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="outline" className="flex items-center">
                    Read More <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Aviation+Image+${
                    index + 1
                  }`}
                  alt={`Aviation Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-110 transition-transform duration-300"
                />
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
