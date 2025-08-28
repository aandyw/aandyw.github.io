import { getProjectBySlug, getProjectSlugs } from "../../../lib/projects";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { mdxComponents } from "../../../../mdx-components";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) notFound();



  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      {/* Back to Projects */}
      <div className="mb-8">
        <Link 
          href="/projects"
          className="text-accent-purple hover:text-accent-purple-hover transition-colors font-medium text-sm"
        >
          ← Back to projects
        </Link>
      </div>

      {/* Project Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-foreground">{project.title}</h1>
        
        {/* Project Image */}
        {project.image && (
          <div className="mb-6 aspect-video overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={`${project.title} thumbnail`}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Project Metadata */}
        <div className="space-y-3 mb-6">
          <p className="text-muted-foreground text-sm">
            <span className="font-medium">Category:</span> {project.category}
          </p>
          
          {project.date && (
            <p className="text-muted-foreground text-sm">
              <span className="font-medium">Date:</span> {new Date(project.date).toLocaleDateString()}
            </p>
          )}
          
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <span className="text-muted-foreground text-sm font-medium">Tags:</span>
              {project.tags.map((tag: string, tagIndex: number) => (
                <span
                  key={tagIndex}
                  className="text-xs px-2 py-1 border border-border-color text-muted-foreground bg-transparent rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Project Description */}
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          {project.description}
        </p>

        {/* External Link */}
        {project.url && (
          <div className="mb-8">
            <Link 
              href={project.url}
              className="inline-flex items-center px-4 py-2 bg-accent-purple text-white rounded-lg hover:bg-accent-purple-hover transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </Link>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="prose dark:prose-invert mx-auto">
        <MDXRemote source={project.content} components={mdxComponents} />
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
