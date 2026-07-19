import BlogPostRow from "@/components/BlogPostRow";
import { getAllPosts } from "@/lib/posts";

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
    <main className="max-w-3xl mx-auto px-6 py-12">
      <header className="mb-16">
        <h1 className="text-5xl font-light mb-4 text-foreground">yapanese</h1>
        <p className="text-base text-muted-foreground font-light max-w-2xl">
          An imperfect blog on topics of interest
        </p>
      </header>

      <div className="border-t border-border-color">
        {blogPosts.map((post) => (
          <BlogPostRow
            key={post.slug}
            date={post.date}
            readingTime={post.readingTime}
            slug={post.slug}
            summary={getPostSummary(post.description, post.content)}
            tags={post.tags || []}
            title={post.title}
          />
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
