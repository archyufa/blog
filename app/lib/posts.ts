export type Post = {
  id: string
  title: string
  date: string
  excerpt: string
  content: string
}

export const posts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    date: "2023-07-01",
    excerpt: "Learn how to create a new Next.js project and start building your web application.",
    content: "Next.js is a powerful React framework that makes it easy to create production-ready web applications...",
  },
  {
    id: "2",
    title: "The Power of Server-Side Rendering",
    date: "2023-07-05",
    excerpt: "Explore the benefits of server-side rendering and how it can improve your website's performance.",
    content: "Server-side rendering (SSR) is a technique that allows you to render web pages on the server...",
  },
  {
    id: "3",
    title: "Styling Your Next.js App with Tailwind CSS",
    date: "2023-07-10",
    excerpt: "Discover how to use Tailwind CSS to quickly style your Next.js application.",
    content:
      "Tailwind CSS is a utility-first CSS framework that makes it easy to create beautiful, responsive designs...",
  },
]

