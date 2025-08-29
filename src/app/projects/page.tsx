import Link from "next/link";
import { getAllProjects, getProjectCategories } from "@/lib/projects";

export default function ProjectsPage() {
  const projects = getAllProjects();
  const categories = getProjectCategories();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-5xl font-light mb-4 text-foreground">projects</h1>
        <p className="text-base text-muted-foreground font-light max-w-2xl">
          A growing collection of projects.
        </p>
      </div>

      {/* Projects by Category */}
      {categories.map((category) => {
        const categoryProjects = projects.filter(project => project.category === category);
        
        return (
          <div key={category} className="space-y-8 mb-16">
            <div className="text-right">
              <h2 className="text-lg font-medium text-muted-foreground">{category}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoryProjects.map((project) => (
                <article key={project.slug} className="group">
                  <div className="bg-card border border-border-color rounded-lg p-6 h-full transition-all duration-200 hover:border-accent-purple">
                    {/* Project Image */}
                    <div className="mb-4 aspect-video overflow-hidden rounded-lg">
                      <img
                        src={project.image}
                        alt={`${project.title} thumbnail`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-light text-foreground mb-3 group-hover:text-accent-purple transition-colors">
                      <Link href={`/projects/${project.slug}`} className="block">
                        {project.title}
                      </Link>
                    </h2>

                    {/* Description */}
                    <p className="text-muted-foreground font-light leading-relaxed mb-4 text-sm">
                      {project.description}
                    </p>

                    {/* Tags */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-2 py-1 border border-border-color text-muted-foreground hover:border-accent-purple hover:text-accent-purple bg-transparent rounded-md transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-xs text-muted-foreground self-center">
                            +{project.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* View Project Link */}
                    <div className="mt-auto">
                      <Link 
                        href={`/projects/${project.slug}`}
                        className="text-accent-purple hover:text-accent-purple-hover transition-colors font-medium text-sm"
                      >
                        View project →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
