import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

// Define all components in one place
const allComponents = {
  h1: ({ children }: any) => (
    <h1 className="text-4xl font-bold text-foreground mb-6">
      {children}
    </h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-3xl font-semibold text-foreground mb-4 mt-8">
      {children}
    </h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">
      {children}
    </h3>
  ),
  h4: ({ children }: any) => (
    <h4 className="text-xl font-semibold text-foreground mb-3 mt-4">
      {children}
    </h4>
  ),
  p: ({ children }: any) => (
    <p className="text-foreground mb-4 leading-7">
      {children}
    </p>
  ),
  ul: ({ children }: any) => (
    <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
      {children}
    </ul>
  ),
  ol: ({ children }: any) => (
    <ol className="list-decimal list-inside text-foreground mb-4 space-y-2">
      {children}
    </ol>
  ),
  li: ({ children }: any) => (
    <li className="leading-7">{children}</li>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-accent-purple pl-4 py-2 my-4 bg-card text-foreground italic rounded-r">
      {children}
    </blockquote>
  ),
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
      className="text-accent-purple hover:text-accent-purple-hover transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  // Custom project components
  ProjectCard: ({ title, description, image, url, children }: any) => (
    <div className="bg-card border border-border-color rounded-lg p-6 mb-6 hover:border-accent-purple transition-all duration-200">
      {image && (
        <div className="mb-4 aspect-video overflow-hidden rounded-lg">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      {description && <p className="text-muted-foreground mb-3">{description}</p>}
      {children}
      {url && (
        <Link href={url} className="text-accent-purple hover:text-accent-purple-hover transition-colors font-medium text-sm">
          View Project →
        </Link>
      )}
    </div>
  ),
  TechStack: ({ children }: any) => (
    <div className="bg-card border border-border-color rounded-lg p-4 mb-6">
      <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h4>
      <div className="flex flex-wrap gap-2">
        {children}
      </div>
    </div>
  ),
  TechTag: ({ children }: any) => (
    <span className="text-xs px-3 py-1 border border-border-color text-muted-foreground hover:border-accent-purple hover:text-accent-purple bg-transparent rounded-md transition-colors duration-200">
      {children}
    </span>
  ),
  FeatureList: ({ children }: any) => (
    <div className="bg-card border border-border-color rounded-lg p-4 mb-6">
      <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
      <ul className="space-y-2">
        {children}
      </ul>
    </div>
  ),
  CodeBlock: ({ language, children }: any) => (
    <div className="mb-6">
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
  ImageGrid: ({ children }: any) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {children}
    </div>
  ),
  ImageWithCaption: ({ src, alt, caption }: any) => (
    <div className="space-y-2">
      <img src={src} alt={alt} className="w-full rounded-lg" />
      {caption && (
        <p className="text-sm text-muted-foreground text-center italic">{caption}</p>
      )}
    </div>
  ),
};

// Export for useMDXComponents hook (MDX ecosystem)
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...allComponents,
    ...components,
  }
}

// Export directly for MDXRemote (Next.js app)
export const mdxComponents = allComponents;
