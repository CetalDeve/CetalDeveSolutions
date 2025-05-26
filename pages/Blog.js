import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from './components/blog/Post'
import MainFeaturedPost from './components/blog/MainFeaturedPost'


export default function Blog({ posts = [] }) {
  // Create default post if no posts available
  const defaultPost = {
    frontmatter: {
      title: "Welcome to Our Blog",
      date: new Date().toLocaleDateString(),
      excerpt: "Discover insights and expertise from our consulting team.",
      cover_image: "/images/default-blog.jpg"
    },
    slug: "welcome"
  };

  const blogPosts = posts.length > 0 ? posts : [defaultPost];
  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="modern-container py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Our Blog</h1>
        <div className="mb-8">
          <MainFeaturedPost post={featuredPost} />
        </div>
        <div className="grid gap-6">
          {blogPosts.slice(1).map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  try {
    // Check if articles directory exists
    const articlesPath = path.join(process.cwd(), 'articles');
    if (!fs.existsSync(articlesPath)) {
      return {
        props: {
          posts: []
        },
      };
    }

    // Get files from the posts dir
    const files = fs.readdirSync(articlesPath);

    // Get slug and frontmatter from posts
    const posts = files
      .filter(filename => filename.endsWith('.mdx'))
      .map((filename) => {
        try {
          // Create slug
          const slug = filename.replace('.mdx', '');

          // Get frontmatter
          const markdownWithMeta = fs.readFileSync(
            path.join(articlesPath, filename),
            'utf-8'
          );

          const { data: frontmatter } = matter(markdownWithMeta);

          return {
            slug,
            frontmatter,
          };
        } catch (error) {
          console.error(`Error processing ${filename}:`, error);
          return null;
        }
      })
      .filter(Boolean); // Remove null entries

    return {
      props: {
        posts
      },
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        posts: []
      },
    };
  }
}
