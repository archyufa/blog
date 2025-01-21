import { posts } from "../../lib/posts"
import { notFound } from "next/navigation"

export default function Post({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <article className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <div className="prose max-w-none">{post.content}</div>
    </article>
  )
}

export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }))
}

