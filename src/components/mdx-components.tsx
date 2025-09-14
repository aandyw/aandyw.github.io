import type { MDXComponents } from "mdx/types";

// Define all components in one place
const allComponents = {
  h1: ({ children }: any) => (
    <h1 className="text-[38px] leading-[56px] text-foreground mb-4 mt-10">
      {children}
    </h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-[32px] leading-[44px] text-foreground mb-4 mt-10">
      {children}
    </h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-[28px] leading-[38px] text-foreground mb-4 mt-8">
      {children}
    </h3>
  ),
  h4: ({ children }: any) => (
    <h4 className="text-[24px] leading-[34px] text-foreground mb-4 mt-6">
      {children}
    </h4>
  ),
  strong: ({ children }: any) => (
    <strong className="font-semibold">{children}</strong>
  ),
  p: ({ children }: any) => <p className="text-foreground mb-4">{children}</p>,
  ul: ({ children }: any) => (
    <ul className="list-disc text-foreground mb-4 pl-8">{children}</ul>
  ),
  ol: ({ children }: any) => (
    <ol className="list-decimal text-foreground mb-4 pl-8">{children}</ol>
  ),
  li: ({ children }: any) => <li className="text-foreground">{children}</li>,
  blockquote: ({ children }: any) => {
    return (
      <blockquote className="border-l-4 border-accent-purple pl-4 py-2 my-4 bg-card text-foreground italic rounded-r">
        <span className="[&_p]:m-0 [&_p]:p-0">{children}</span>
      </blockquote>
    );
  },
  code: ({ children }: any) => (
    <code className="bg-card border border-border-color rounded px-2 py-1 text-sm font-mono text-foreground">
      {children}
    </code>
  ),
  pre: ({ children }: any) => (
    <pre className="bg-card border border-border-color text-foreground rounded-lg p-4 overflow-x-auto mb-4">
      {children}
    </pre>
  ),
  a: ({ href, children }: any) => (
    <a
      href={href}
      className="text-accent-purple hover:text-accent-purple-hover transition-colors underline"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  hr: () => <hr className="border-t border-border-color my-4" />,
  CodeBlock: ({ language, children }: any) => (
    <div className="mb-4 mt-4">
      {language && (
        <div className="bg-card border border-border-color rounded-t-lg px-4 py-2 text-sm text-muted-foreground font-mono">
          {language}
        </div>
      )}
      <pre className="bg-card border border-border-color text-foreground rounded-b-lg p-4 overflow-x-auto">
        <code>{children}</code>
      </pre>
    </div>
  ),
  ImageGrid: ({ children, caption }: any) => (
    <div className="space-y-3 mb-4 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
      {caption && (
        <p className="text-sm text-muted-foreground text-center italic">
          {caption}
        </p>
      )}
    </div>
  ),
  Image: ({ src, alt, caption }: any) => (
    <div className="space-y-3 mb-4 mt-4">
      <img src={src} alt={alt} className="rounded-sm" />
      {caption && (
        <p className="text-sm text-muted-foreground text-center italic">
          {caption}
        </p>
      )}
    </div>
  ),
};

// Export for useMDXComponents hook (MDX ecosystem)
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...allComponents,
    ...components,
  };
}

// Export directly for MDXRemote (Next.js app)
export const mdxComponents = allComponents;
