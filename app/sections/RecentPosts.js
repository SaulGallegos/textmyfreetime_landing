import Link from "next/link";
import { getAllPosts } from "../../lib/blog";
import { ArrowRight } from "lucide-react";

export default function RecentPosts() {
  const posts = getAllPosts();
  
  // Only take the newest 3 posts
  const recentPosts = posts.slice(0, 3);
  
  if (recentPosts.length === 0) return null;

  return (
    <section className="bg-gray-50/50 py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest from the Blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-muted">
            Guides and tips to save time managing your calendar.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {recentPosts.map((post) => (
            <article
              key={post.slug}
              className="flex max-w-xl flex-col items-start justify-between border border-border rounded-2xl p-6 shadow-sm bg-white transition-all hover:bg-gray-50/50 hover:shadow-md"
            >
              <div className="flex items-center gap-x-4 text-xs mb-3">
                <time dateTime={post.date} className="text-gray-500">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="group relative">
                <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover transition-colors"
          >
            View all posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
