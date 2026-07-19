import Image from "next/image";
import Link from "next/link";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getAllProjects } from "@/lib/projects";
import { getAllPublications } from "@/lib/publications";

export default function ProjectsPage() {
  const projects = getAllProjects();
  const publications = getAllPublications();

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
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image}
                      alt={`${project.title} thumbnail`}
                      fill
                      sizes="(min-width: 768px) 336px, calc(100vw - 3rem)"
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
                      {project.tags.slice(0, 2).map((tag: string) => (
                        <Tag key={tag} className="px-3 py-1">
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

      <section className="mt-20">
        <header className="mb-12">
          <h2 className="text-4xl font-light mb-4 text-foreground">
            publications
          </h2>
          <p className="text-base text-muted-foreground font-light max-w-2xl">
            A collection of publications.
          </p>
        </header>

        <div className="space-y-12">
          {publications.map((pub) => (
            <article key={pub.slug} className="group relative">
              <div className="space-y-3 pr-20">
                <h3 className="text-lg font-light text-foreground leading-relaxed">
                  {pub.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {pub.authors.map((author, authorIndex) => (
                    <span key={author}>
                      {author === "Andy Wu" ? (
                        <span className="underline decoration-accent-purple">
                          {author}
                        </span>
                      ) : (
                        author
                      )}
                      {authorIndex < pub.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>

                <p className="text-muted-foreground italic text-sm">
                  {pub.journal},{" "}
                  {new Date(pub.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                  })}
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="text-xs px-3 py-1 h-auto border-border-color text-muted-foreground hover:border-accent-purple hover:text-accent-purple transition-all duration-200 rounded-[2px]"
                >
                  <a href={pub.url} target="_blank" rel="noopener noreferrer">
                    {pub.type}
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {publications.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No publications.</p>
          </div>
        )}
      </section>
    </div>
  );
}
