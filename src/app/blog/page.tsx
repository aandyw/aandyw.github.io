import Link from "next/link";
import { Tag } from "@/components/Tag";
import { getAllPosts } from "@/lib/posts";
import { formatReadableDate, renderMarkdownTitle } from "@/lib/utils";

const getPostSummary = (description: string | undefined, content: string) => {
  if (description?.trim()) return description;

  const plainText = content
    .replace(/<[^>]*>/g, " ")
    .replace(/[#*_`>[\]()-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return `${plainText.slice(0, 180)}${plainText.length > 180 ? "…" : ""}`;
};

const Blog = () => {
  const blogPosts = getAllPosts();

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-light mb-3 text-foreground">Yapanese</h1>
        <p className="text-base text-muted-foreground font-light">
          An imperfect blog on topics of interest
        </p>
      </header>

      <div className="mx-auto max-w-xl border-t border-border-color">
        {blogPosts.map((post) => (
          <details
            key={post.slug}
            className="group border-b border-border-color"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-4 text-foreground transition-colors hover:text-accent-purple focus-visible:outline-none focus-visible:text-accent-purple [&::-webkit-details-marker]:hidden">
              <span className="min-w-0 text-lg leading-snug">
                {renderMarkdownTitle(post.title)}
              </span>

              <span className="flex shrink-0 items-center gap-4">
                <time
                  dateTime={post.date}
                  className="hidden text-xs text-muted-foreground sm:inline"
                >
                  {formatReadableDate(post.date)}
                </time>
                <span
                  aria-hidden="true"
                  className="text-xl leading-none transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>

            <div className="pb-5 pr-10">
              <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                <time dateTime={post.date} className="sm:hidden">
                  {formatReadableDate(post.date)}
                </time>
                <span className="sm:hidden" aria-hidden="true">
                  ·
                </span>
                <span>{post.readingTime}</span>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {getPostSummary(post.description, post.content)}
              </p>

              <div className="flex flex-wrap items-center gap-2">
                {(post.tags || []).map((tag: string) => (
                  <Tag key={tag} className="px-2 py-1">
                    {tag}
                  </Tag>
                ))}

                <Link
                  href={`/blog/${post.slug}`}
                  className="ml-auto text-sm text-accent-purple underline-offset-4 hover:text-accent-purple-hover hover:underline"
                >
                  Read post →
                </Link>
              </div>
            </div>
          </details>
        ))}
      </div>

      {blogPosts.length === 0 && (
        <p className="text-center text-sm text-muted-foreground">
          No posts yet.
        </p>
      )}
    </main>
  );
};

export default Blog;
