import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from './components/Post'
import MainFeaturedPost from './blogs/MainFeaturedPost'


export default function Blog({ posts }) {
  return (
    <div>
      <div className='posts'>
        <MainFeaturedPost post={posts[0]} />
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('articles'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.mdx', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('articles', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts
    },
  }
}
