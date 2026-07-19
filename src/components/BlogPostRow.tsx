"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { formatReadableDate, renderMarkdownTitle } from "@/lib/utils";
import { Tag } from "./Tag";

interface BlogPostRowProps {
  date: string;
  readingTime: string;
  slug: string;
  summary: string;
  tags: string[];
  title: string;
}

const BlogPostRow = ({
  date,
  readingTime,
  slug,
  summary,
  tags,
  title,
}: BlogPostRowProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const detailsId = `blog-${slug}-details`;

  return (
    <article className="border-b border-border-color">
      <button
        type="button"
        aria-controls={detailsId}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full cursor-pointer items-center justify-between gap-5 py-3 text-left text-foreground transition-colors hover:text-accent-purple focus-visible:outline-none focus-visible:text-accent-purple"
      >
        <span className="min-w-0 text-lg leading-snug">
          {renderMarkdownTitle(title)}
        </span>

        <span className="flex shrink-0 items-center gap-4">
          <time
            dateTime={date}
            className="hidden text-xs text-muted-foreground sm:inline"
          >
            {formatReadableDate(date)}
          </time>
          <ChevronRight
            aria-hidden="true"
            className={`h-4 w-4 shrink-0 transition-transform duration-300 ease-out motion-reduce:transition-none ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          />
        </span>
      </button>

      <div
        id={detailsId}
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className={`pb-4 transition-transform duration-300 ease-out motion-reduce:transition-none ${
              isOpen ? "translate-y-0" : "-translate-y-2"
            }`}
          >
            <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
              <time dateTime={date} className="sm:hidden">
                {formatReadableDate(date)}
              </time>
              <span className="sm:hidden" aria-hidden="true">
                ·
              </span>
              <span>{readingTime}</span>
            </div>

            <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
              {summary}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              {tags.map((tag) => (
                <Tag key={tag} className="px-2 py-1">
                  {tag}
                </Tag>
              ))}

              <Link
                href={`/blog/${slug}`}
                tabIndex={isOpen ? 0 : -1}
                className="ml-auto text-sm text-accent-purple underline-offset-4 hover:text-accent-purple-hover hover:underline"
              >
                Read post →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostRow;
