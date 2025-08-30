import { getAllPosts } from "@/lib/posts";
import { formatReadableDate, renderMarkdownTitle } from "@/lib/utils";
import { Tag } from "@/components/Tag";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";

const Blog = () => {
  const blogPosts = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <header className="mb-16">
        <h1 className="text-5xl font-light mb-4 text-foreground">Yapanese</h1>
        <p className="text-base text-muted-foreground font-light max-w-2xl">
          An imperfect blog on topics of interest
        </p>
      </header>

      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <article key={index} className="group">
            <Link href={`/blog/${post.slug}`} className="block">
              <Card className="w-full transition-all duration-200 hover:border-accent-purple group-hover:shadow-md border-border-color">
                <CardHeader className="pb-2">
                  {/* Title */}
                  <h1 className="text-2xl">
                    {renderMarkdownTitle(post.title)}
                  </h1>

                  {/* Date and Read Time */}
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <time>{formatReadableDate(post.date)}</time>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>
                </CardHeader>

                <CardContent className="pb-4">
                  {/* Description */}
                  <p className="text-muted-foreground font-light leading-relaxed mb-3 text-sm line-clamp-3">
                    {post.description || post.content.substring(0, 150) + "..."}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {(post.tags || [])
                      .slice(0, 3)
                      .map((tag: string, tagIndex: number) => (
                        <Tag key={tagIndex} className="px-2 py-1">
                          {tag}
                        </Tag>
                      ))}
                    {(post.tags || []).length > 3 && (
                      <span className="text-xs text-muted-foreground self-center">
                        +{(post.tags || []).length - 3} more
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-border-color">
        <Link
          href="/blog/"
          className="text-muted-foreground hover:text-accent-purple transition-colors"
        >
          View all posts →
        </Link>
      </div>
    </main>
  );
};

export default Blog;
