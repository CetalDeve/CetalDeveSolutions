import * as React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function FeaturedPost({ post }) {
  // Provide default values if post or frontmatter is missing
  const frontmatter = post?.frontmatter || {};
  const title = frontmatter.title || 'Blog Post';
  const date = frontmatter.date || new Date().toLocaleDateString();
  const excerpt = frontmatter.excerpt || 'Read our latest insights and expertise.';
  const coverImage = frontmatter.cover_image || '/images/default-blog.jpg';
  const slug = post?.slug || '#';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="md:flex">
        <div className="flex-1 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            {date}
          </p>
          <p className="text-gray-600 mb-4">
            {excerpt}
          </p>
          <Link href={`/blogs/${slug}`}>
            <a className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200">
              Read More
            </a>
          </Link>
        </div>
        <div className="md:w-40 flex-shrink-0">
          <img
            className="w-full h-48 md:h-full object-cover"
            src={coverImage}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string,
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      excerpt: PropTypes.string,
      cover_image: PropTypes.string,
    }),
  }),
};

export default FeaturedPost;
