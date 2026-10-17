import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { formatReadableDate, renderMarkdownTitle } from "@/lib/utils";

interface BlogPostRowProps {
  date: string;
  slug: string;
  title: string;
}

const BlogPostRow = ({ date, slug, title }: BlogPostRowProps) => {
  return (
    <article className="border-b border-border-color">
      <Link
        href={`/blog/${slug}`}
        className="flex w-full cursor-pointer items-center justify-between gap-5 py-3 text-left text-foreground transition-colors hover:text-accent-purple focus-visible:outline-none focus-visible:text-accent-purple"
      >
        <span className="min-w-0 text-lg leading-snug">
          {renderMarkdownTitle(title)}
        </span>

        <span className="flex shrink-0 items-center gap-4">
          <time dateTime={date} className="text-xs text-muted-foreground">
            {formatReadableDate(date)}
          </time>
          <ChevronRight aria-hidden="true" className="h-4 w-4 shrink-0" />
        </span>
      </Link>
    </article>
  );
};

export default BlogPostRow;
