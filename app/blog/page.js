import Link from "next/link";
import { getAllPosts } from "../../lib/blog";

export const metadata = {
  title: "Blog — TextMyFreeTime",
  description: "Tips, tutorials, and guides on how to manage your calendar and copy your availability faster.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="bg-white py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            TextMyFreeTime Blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-muted">
            Learn how to manage your schedule better and save time sharing your availability.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex max-w-xl flex-col items-start justify-between border border-border rounded-2xl p-6 shadow-sm transition-all hover:bg-gray-50/50 hover:shadow-md"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-500">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
        {posts.length === 0 && (
          <div className="text-center text-muted mt-10">
            No posts found.
          </div>
        )}
      </div>
    </div>
  );
}
