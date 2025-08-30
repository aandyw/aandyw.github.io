import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import { Tag } from "@/components/Tag";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <header className="mb-16">
        <h1 className="text-5xl font-light mb-4 text-foreground">projects</h1>
        <p className="text-base text-muted-foreground font-light max-w-2xl">
          A growing collection of projects.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
        {projects.map((project) => (
          <article key={project.slug} className="group h-full">
            <Link href={`/projects/${project.slug}`} className="block h-full">
              <Card className="h-full transition-all duration-200 hover:border-accent-purple group-hover:shadow-md border-border-color flex flex-col">
                <CardHeader className="p-0 pb-2">
                  {/* Project Image */}
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={`${project.title} thumbnail`}
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-light text-foreground group-hover:text-accent-purple transition-colors px-6 pt-4">
                    {project.title}
                  </h2>
                </CardHeader>

                <CardContent className="pb-4 flex-1 px-6">
                  {/* Description */}
                  <p className="text-muted-foreground font-light leading-relaxed mb-2 text-sm line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.tags
                        .slice(0, 2)
                        .map((tag: string, tagIndex: number) => (
                          <Tag key={tagIndex} className="px-3 py-1">
                            {tag}
                          </Tag>
                        ))}
                      {project.tags.length > 2 && (
                        <span className="text-xs text-muted-foreground self-center">
                          +{project.tags.length - 2} more
                        </span>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
