import { posts } from "./lib/posts"
import PostPreview from "./components/PostPreview"

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
      {posts.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </div>
  )
}

