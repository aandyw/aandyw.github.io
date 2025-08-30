import { getAllPosts } from "@/lib/posts";
import { formatReadableDate, renderMarkdownTitle } from "@/lib/utils";

const LatestPosts = () => {
  const allPosts = getAllPosts();

  // Get latest 3 posts
  const posts = allPosts.slice(0, 3);

  return (
    <section className="max-w-3xl mx-auto px-6 pt-6 pb-6">
      <h2 className="text-3xl font-light mb-8 text-foreground">latest posts</h2>

      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="font-bold min-w-[120px]">
              {formatReadableDate(post.date)}
            </span>
            <a
              href={`/blog/${post.slug}`}
              className="text-accent-purple hover:text-accent-purple-hover hover:underline transition-colors font-light"
            >
              {renderMarkdownTitle(post.title)}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
