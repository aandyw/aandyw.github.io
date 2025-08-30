import { Button } from "@/components/ui/button";
import { getSelectedPublications } from "@/lib/publications";

const Publications = () => {
  const publications = getSelectedPublications();

  return (
    <section className="max-w-3xl mx-auto px-6 pt-6 pb-6">
      <h2 className="text-3xl font-light mb-8 text-foreground">
        selected publications
      </h2>

      <div className="space-y-8 max-w-2xl">
        {publications.map((pub, index) => (
          <div key={index} className="space-y-1">
            <h3 className="text-base font-semibold leading-relaxed">
              {pub.title}
            </h3>

            <p className="text-muted-foreground">
              {pub.authors.map((author, authorIndex) => (
                <span key={authorIndex}>
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

            <p className="text-muted-foreground italic">
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
        ))}
      </div>
    </section>
  );
};

export default Publications;
