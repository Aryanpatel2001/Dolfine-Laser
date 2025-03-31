"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import { cn } from "@/lib/utils";

// Blog post type definition
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

// Sample blog data
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "India's Largest & Leading Manufacturing Company",
    excerpt:
      "Discover how Dolphin Laser Machine became India's leading manufacturer of laser technology.",
    image:
      "https://www.dolphinlasermachine.com/upload/latest_news/image/9cf18_about-us_(3).jpg",
    category: "Company",
    author: "Dolphin Team",
    date: "May 15, 2023",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "When people wonder why the company is named Dolphin?",
    excerpt:
      "The story behind our company name and how it reflects our values and mission.",
    image:
      "https://www.dolphinlasermachine.com/upload/latest_news/image/077a0_DJI_0017.JPG",
    category: "Company",
    author: "Viral Anatla",
    date: "June 2, 2023",
    readTime: "3 min read",
  },
  {
    id: "3",
    title:
      "Introducing Viral Anatla, Director of Dolphin Laser Machine Pvt Ltd",
    excerpt:
      "Learn about the visionary leader behind Dolphin Laser's innovation and growth.",
    image:
      "https://www.dolphinlasermachine.com/upload/latest_news/image/ccb18_1dab8991-0f5c-4b65-89ab-e4fe98346d5c.jpg",
    category: "Leadership",
    author: "Marketing Team",
    date: "June 18, 2023",
    readTime: "4 min read",
  },
  {
    id: "4",
    title:
      "Enhancing Printing and Marking Longevity: Fiber Laser Machine Solutions",
    excerpt:
      "How our fiber laser technology is revolutionizing the printing and marking industry.",
    image:
      "https://www.dolphinlasermachine.com/upload/latest_news/image/6c504_FIBER_LASER_MARKING_MACHINE.jpg",
    category: "Technology",
    author: "Tech Team",
    date: "July 5, 2023",
    readTime: "6 min read",
  },
  {
    id: "5",
    title:
      "Dolphin Laser Metal Welding Machines - Precision and Seamless Welding",
    excerpt:
      "Explore the cutting-edge features of our metal welding machines and their applications.",
    image:
      "https://www.dolphinlasermachine.com/upload/latest_news/image/e7782_0a69b_laser_welding_machine_new_body.jpg",
    category: "Products",
    author: "Engineering Team",
    date: "July 22, 2023",
    readTime: "5 min read",
  },
  {
    id: "6",
    title: "Laser Metal Cutting Machine - Innovation and Technology Together",
    excerpt:
      "How our laser metal cutting machines combine innovation with precision technology.",
    image:
      "https://www.dolphinlasermachine.com/upload/latest_news/image/f237f_2.jpg",
    category: "Products",
    author: "R&D Department",
    date: "August 10, 2023",
    readTime: "4 min read",
  },
  {
    id: "7",
    title:
      "Handheld Laser Marking Machine: Simplifying Precise Identification Marking",
    excerpt:
      "The versatility and precision of our handheld laser marking solutions.",
    image:
      "https://www.dolphinlasermachine.com/upload/latest_news/image/860dd_HAND_HELD_LASER_MARKING_MACHINE.jpg",
    category: "Products",
    author: "Product Team",
    date: "August 28, 2023",
    readTime: "5 min read",
  },
  {
    id: "8",
    title:
      "How to select the ideal laser machine to meet your production requirements effectively?",
    excerpt:
      "A comprehensive guide to choosing the right laser machine for your specific needs.",
    image:
      "https://www.dolphinlasermachine.com/upload/latest_news/image/62c40_IMG_9801.jpg",
    category: "Guide",
    author: "Technical Support",
    date: "September 15, 2023",
    readTime: "7 min read",
  },
  {
    id: "9",
    title:
      "Discover the CO2 Laser Marking Machine by Dolphin Laser Machine Pvt Ltd",
    excerpt:
      "Exploring the features and benefits of our CO2 laser marking technology.",
    image:
      "https://www.dolphinlasermachine.com/upload/latest_news/image/347cc_gold_cutting_machine.jpeg",
    category: "Products",
    author: "Marketing Team",
    date: "October 3, 2023",
    readTime: "4 min read",
  },
];

// Filter options
const categories = [
  "All",
  "Company",
  "Leadership",
  "Technology",
  "Products",
  "Guide",
];

export default function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on category and search query
  useEffect(() => {
    let filtered = blogPosts;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [selectedCategory, searchQuery]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-background/0" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Latest <span className="text-primary">Insights</span> & News
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Discover the latest trends, innovations, and stories from the world
            of laser technology and manufacturing excellence.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          className="mb-8 sm:mb-12 space-y-4 sm:space-y-0 flex flex-col sm:flex-row gap-4 justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 rounded-full border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all text-sm sm:text-base"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all",
                  selectedCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} variants={itemVariants} />
            ))
          ) : (
            <motion.div
              className="col-span-full text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

interface BlogCardProps {
  post: BlogPost;
  variants: any;
}

function BlogCard({ post, variants }: BlogCardProps) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative bg-card rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border/50"
    >
      <Link href={`/blog/${post.id}`} className="absolute inset-0 z-30">
        <span className="sr-only">Read more about {post.title}</span>
      </Link>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Category Badge */}
      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20">
        <span className="px-2 sm:px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">
          {post.category}
        </span>
      </div>

      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <User size={12} className="mr-1 sm:mr-2" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Clock size={12} className="mr-1 sm:mr-2" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="inline-flex items-center text-primary text-sm sm:text-base font-medium relative z-20 pointer-events-none">
          Read More{" "}
          <ArrowRight
            size={14}
            className="ml-1 transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </motion.div>
  );
}
