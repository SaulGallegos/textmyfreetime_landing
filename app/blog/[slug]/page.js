import { getPostBySlug, getAllPosts } from "../../../lib/blog";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.seoTitle || `${post.title} | TextMyFreeTime`,
    description: post.excerpt,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle || post.title,
      description: post.excerpt,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen pt-24 pb-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
        <article>
          <header className="mb-10">
            <time
              dateTime={post.date}
              className="block text-sm leading-6 text-gray-500 mb-2"
            >
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
          </header>
          
          <div className="text-lg text-gray-800">
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <h1 className="text-4xl font-bold mt-12 mb-6 text-gray-900" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-3xl font-bold mt-10 mb-5 text-gray-900" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900" {...props} />,
                p: ({node, ...props}) => <p className="mb-6 leading-relaxed" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />,
                li: ({node, ...props}) => <li className="leading-relaxed text-gray-800" {...props} />,
                a: ({node, ...props}) => <a className="text-primary hover:text-primary-hover hover:underline transition-colors font-medium cursor-pointer" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-primary/40 pl-6 py-2 my-8 text-gray-700 bg-gray-50/50 italic rounded-r-lg" {...props} />,
                strong: ({node, ...props}) => <strong className="font-semibold text-gray-900" {...props} />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}
