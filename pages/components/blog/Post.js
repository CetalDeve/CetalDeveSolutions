import FeaturedPost from "./FeaturedPosts";

export default function Post({ post }) {
  if (!post) {
    return null;
  }
  
  return (
    <div className="mb-6">
      <FeaturedPost post={post} />
    </div>
  );
}
