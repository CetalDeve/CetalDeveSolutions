import * as React from 'react';
import PropTypes from 'prop-types';

function MainFeaturedPost({ post }) {
  // Provide default values if post or frontmatter is missing
  const frontmatter = post?.frontmatter || {};
  const title = frontmatter.title || 'Featured Blog Post';
  const date = frontmatter.date || new Date().toLocaleDateString();
  const excerpt = frontmatter.excerpt || 'Discover insights and expertise from our consulting team.';
  const coverImage = frontmatter.cover_image || '/images/default-blog.jpg';

  return (
    <div className="relative bg-gray-900 text-white mb-8 rounded-lg overflow-hidden">
      <div 
        className="bg-cover bg-center bg-no-repeat min-h-[400px] relative"
        style={{
          backgroundImage: `url(${coverImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center min-h-[400px]">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {title}
              </h1>
              <p className="text-xl text-gray-200 mb-4">
                {date}
              </p>
              <p className="text-lg text-gray-300">
                {excerpt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      excerpt: PropTypes.string,
      cover_image: PropTypes.string,
    }),
  }),
};

export default MainFeaturedPost;