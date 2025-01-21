import Link from "next/link"
import type { Post } from "../lib/posts"

export default function PostPreview({ post }: { post: Post }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <Link href={`/posts/${post.id}`}>
        <h2 className="text-2xl font-bold mb-2 text-blue-600 hover:text-blue-800">{post.title}</h2>
      </Link>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <p className="text-gray-700">{post.excerpt}</p>
    </div>
  )
}

