"use client";
import { useState, useEffect, FC, ReactNode } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import { Menu, X, Star, HeartPulse, Stethoscope, User } from 'lucide-react';
import clsx from 'clsx';
import N8nChatClient from '@/components/N8nChatClient';

// Helper component for the review stars
const StarRating: FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={clsx(
          'h-4 w-4',
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        )}
      />
    ))}
  </div>
);

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Contact', href: '#' },
];

const reviews = [
  { name: 'Cameron', role: 'Patient', rating: 5, text: 'Booking was easy and staff were super friendly!' },
  { name: 'Warren', role: 'Patient', rating: 5, text: 'Easy NHS service with quick confirmation.' },
  { name: 'Amelia', role: 'Patient', rating: 4, text: 'Very helpful team and great online experience.' },
  { name: 'Liam', role: 'Patient', rating: 5, text: 'Smooth booking process, highly recommend!' },
];

// To create a seamless loop, we duplicate the reviews
const duplicatedReviews = [...reviews, ...reviews];

const MedicalHeroPage: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

 


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const imageVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: easeOut },
  },
};

  return (
    <>
      <Head>
        <title>NHS Health - Caring for Your Health</title>
        <meta name="description" content="Experience trusted NHS care powered by advanced technology and personal support." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* This style tag is for the infinite scroll animation, a clean way to handle it in a single component */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>

      <div className="min-h-screen bg-white font-sans text-gray-800">
        <div className="relative flex flex-col lg:flex-row lg:h-screen">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 flex flex-col p-6 sm:p-8 lg:p-12">
            {/* Navbar */}
            <header className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <HeartPulse className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">NHS Health</span>
              </div>
              <nav className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                    {link.name}
                  </a>
                ))}
              </nav>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="fixed inset-0 bg-white z-50 p-6 flex flex-col lg:hidden"
                >
                  <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-2">
                      <HeartPulse className="h-8 w-8 text-blue-600" />
                      <span className="text-xl font-bold text-gray-900">NHS Health</span>
                    </div>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                      aria-label="Close menu"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  <nav className="flex flex-col items-center gap-8">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-2xl font-semibold text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                     <button className="mt-8 w-full max-w-xs bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105">
                        Book an Appointment
                      </button>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hero Content */}
            <main className="flex-grow flex flex-col justify-center mt-12 lg:mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-center lg:text-left"
              >
                <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Caring for Your <br />
                  <span className="text-blue-600">Health</span> One Visit at a Time
                </motion.h1>
                <motion.p variants={itemVariants} className="mt-6 max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-gray-600">
                  Experience trusted NHS care powered by advanced technology and personal support — right here in West Yorkshire.
                </motion.p>
                <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button className="w-full sm:w-auto bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105">
                    Book an Appointment
                  </button>
                  <button className="w-full sm:w-auto bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition-all transform hover:scale-105">
                    See How It Works
                  </button>
                </motion.div>
              </motion.div>
            </main>

            {/* Reviews Carousel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12 lg:mt-auto lg:mb-0 w-full max-w-4xl mx-auto lg:mx-0"
            >
              <div className="relative overflow-hidden group">
                <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
                  {duplicatedReviews.map((review, index) => (
                    <div key={index} className="flex-shrink-0 w-full sm:w-1/2 p-2">
                      <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm h-full">
                        <div className="flex items-center mb-2">
                          <div className="bg-gray-200 border-2 border-dashed rounded-full w-10 h-10 flex items-center justify-center mr-3">
                            <User className="w-5 h-5 text-gray-500" />
                          </div>
                          <div>
                            <p className="font-bold text-sm">{review.name}</p>
                            <p className="text-xs text-gray-500">{review.role}</p>
                          </div>
                        </div>
                        <StarRating rating={review.rating} />
                        <p className="text-sm text-gray-600 mt-2">{`\"${review.text}\"`}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="relative w-full h-80 lg:h-auto lg:w-1/2">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="absolute inset-0 h-full w-full lg:rounded-l-3xl overflow-hidden"
            >
              <img
                src="https://i.pinimg.com/1200x/ca/8a/b2/ca8ab285cadef5a89de42d94036053fe.jpg"
                alt="A team of medical professionals collaborating in a bright, modern office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>
            </motion.div>
          </div>
          <N8nChatClient />
        </div>
      </div>
    </>
  );
};

export default MedicalHeroPage;
