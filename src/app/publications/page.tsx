import { Button } from "@/components/ui/button";
import { getAllPublications } from "@/lib/publications";

export default function PublicationsPage() {
  const publications = getAllPublications();

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <header className="mb-16">
        <h1 className="text-5xl font-light mb-4 text-foreground">
          publications
        </h1>
        <p className="text-base text-muted-foreground font-light max-w-2xl">
          A collection of publications.
        </p>
      </header>

      <div className="space-y-12">
        {publications.map((pub, _index) => (
          <article key={pub.slug} className="group relative">
            <div className="space-y-3 pr-20">
              {/* Title */}
              <h2 className="text-lg font-light text-foreground leading-relaxed">
                {pub.title}
              </h2>

              {/* Authors */}
              <p className="text-muted-foreground text-sm">
                {pub.authors.map((author, _authorIndex) => (
                  <span key={author}>
                    {author === "Andy Wu" ? (
                      <span className="underline decoration-accent-purple">
                        {author}
                      </span>
                    ) : (
                      author
                    )}
                    {_authorIndex < pub.authors.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>

              {/* Journal and Date */}
              <p className="text-muted-foreground italic text-sm">
                {pub.journal},{" "}
                {new Date(pub.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })}
              </p>

              {/* Type Button */}
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

      {/* Empty state */}
      {publications.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No publications.</p>
        </div>
      )}
    </main>
  );
}
