import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";
import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { formatReadableDate, renderMarkdownTitle } from "@/lib/utils";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-6">
      <div className="mb-8">
        <h1 className="text-5xl font-bold mb-2">
          {renderMarkdownTitle(post.title)}
        </h1>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <time dateTime={post.date}>{formatReadableDate(post.date)}</time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag: string, tagIndex: number) => (
              <span
                key={tagIndex}
                className="text-xs px-2 py-1 border border-border-color text-muted-foreground hover:border-accent-purple hover:text-accent-purple bg-transparent rounded-md transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="prose dark:prose-invert mx-auto">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm, remarkGemoji, remarkMath],
              rehypePlugins: [rehypeKatex],
            },
          }}
        />
      </div>
    </article>
  );
};

export default PostPage;
