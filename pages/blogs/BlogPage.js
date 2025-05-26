import React from "react";
import BlogHeader from "./BlogHeader";
import MainFeaturedPost from "../components/blog/MainFeaturedPost";
import FeaturedPost from "../components/blog/FeaturedPosts";

export default function BlogPage({ blogPost = [] }) {
  const sections = [{ title: "Technology", url: "#" }];

  // Create default blog data if none provided
  const defaultPost = {
    frontmatter: {
      title: "Welcome to Our Blog",
      date: new Date().toLocaleDateString(),
      excerpt: "Discover insights and expertise from our consulting team.",
      cover_image: "/images/default-blog.jpg"
    },
    slug: "welcome"
  };

  const posts = Array.isArray(blogPost) && blogPost.length > 0 ? blogPost : [defaultPost];
  const featuredPost = posts[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="modern-container">
        <BlogHeader title="Blog" sections={sections} />
        <main className="py-8">
          <MainFeaturedPost post={featuredPost} />
          <div className="mt-8 grid gap-6">
            {posts.slice(1).map((post, index) => (
              <FeaturedPost key={index} post={post} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
