import {
  getAllProjects,
  getProjectBySlug,
  getProjectSlugs,
} from "@/lib/projects";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { mdxComponents } from "@/components/mdx-components";
import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6a py-8 bg-background">
      {/* Back to Projects */}
      <div className="mb-8">
        <Link
          href="/projects"
          className="text-accent-purple hover:text-accent-purple-hover transition-colors font-medium text-sm underline"
        >
          ← Back to projects
        </Link>
      </div>

      {/* Project Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold mb-4 text-foreground">
          {project.title}
        </h1>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string, tagIndex: number) => (
              <span
                key={tagIndex}
                className="text-xs px-3 py-1 border border-border-color text-muted-foreground bg-transparent rounded-md hover:border-accent-purple hover:text-accent-purple transition-colors duration-200 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Project Description */}
        <p className="text-base text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Project Content */}
      <div className="prose prose-lg max-w-none">
        <MDXRemote
          source={project.content}
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
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}
