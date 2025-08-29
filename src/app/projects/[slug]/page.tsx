import { getAllProjects, getProjectBySlug, getProjectSlugs } from '@/lib/projects';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from "next/link";
import { mdxComponents } from "@/components/mdx-components";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="max-w-4xl mx-auto px-8 py-16 bg-white">
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
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-6 text-black">{project.title}</h1>

        {/* Project Image */}
        {project.image && (
          <div className="mb-8 aspect-video overflow-hidden rounded-lg shadow-sm">
            <img
              src={project.image}
              alt={`${project.title} thumbnail`}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Project Metadata */}
        <div className="space-y-4 mb-8">
          <p className="text-gray-600 text-base">
            <span className="font-medium text-black">Category:</span>{" "}
            {project.category}
          </p>

          {project.date && (
            <p className="text-gray-600 text-base">
              <span className="font-medium text-black">Date:</span>{" "}
              {new Date(project.date).toLocaleDateString()}
            </p>
          )}

          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-600 text-base font-medium">Tags:</span>
              {project.tags.map((tag: string, tagIndex: number) => (
                <span
                  key={tagIndex}
                  className="text-xs px-3 py-1 border border-gray-200 text-gray-600 bg-transparent rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Project Description */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {project.description}
        </p>

        {/* External Link */}
        {project.url && (
          <div className="mb-12">
            <Link
              href={project.url}
              className="inline-flex items-center px-6 py-3 bg-accent-purple text-white rounded-lg hover:bg-accent-purple-hover transition-colors font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </Link>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="prose prose-lg max-w-none">
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
