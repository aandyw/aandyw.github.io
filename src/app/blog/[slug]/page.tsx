import { getPostBySlug, getPostSlugs } from "../../../lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "../../../../mdx-components";

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();


  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <time dateTime={post.date} className="text-muted-foreground text-sm">
          {new Date(post.date).toLocaleDateString()}
        </time>
        <p className="text-sm text-muted-foreground mt-2">{post.readingTime}</p>
        
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center mt-4">
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
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
};

export default PostPage;
