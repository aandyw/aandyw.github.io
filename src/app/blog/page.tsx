import { getAllPosts } from '../../lib/posts';
import { formatReadableDate } from '../../lib/utils';

const Blog = () => {
  const blogPosts = getAllPosts();



  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-5xl font-light mb-4 text-foreground">Yapanese</h1>
        <p className="text-base text-muted-foreground font-light max-w-2xl">
          An imperfect blog on topics of interest
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <article key={index} className="group">
            <div className="bg-card border border-border-color rounded-lg p-6 h-full transition-all duration-200 hover:border-accent-purple">
              {/* Date and Read Time */}
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                <time>{formatReadableDate(post.date)}</time>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>

              {/* Title */}
              <h2 className="text-lg font-light text-foreground mb-3 group-hover:text-accent-purple transition-colors line-clamp-2">
                <a href={`/blog/${post.slug}`} className="block">
                  {post.title}
                </a>
              </h2>

              {/* Excerpt */}
              <p className="text-muted-foreground font-light leading-relaxed mb-4 text-sm line-clamp-3">
                {post.excerpt || post.content.substring(0, 150) + '...'}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {(post.tags || []).slice(0, 2).map((tag: string, tagIndex: number) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-2 py-1 border border-border-color text-muted-foreground hover:border-accent-purple hover:text-accent-purple bg-transparent rounded-md transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
                {(post.tags || []).length > 2 && (
                  <span className="text-xs text-muted-foreground self-center">
                    +{(post.tags || []).length - 2} more
                  </span>
                )}
              </div>

              {/* Read More */}
              <div className="mt-auto">
                <a 
                  href={`/blog/${post.slug}`}
                  className="text-accent-purple hover:text-accent-purple-hover transition-colors font-medium text-sm"
                >
                  Read more →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Archive Link */}
      <div className="mt-16 pt-8 border-t border-border-color">
        <a 
          href="/blog/archive"
          className="text-muted-foreground hover:text-accent-purple transition-colors"
        >
          View all posts →
        </a>
      </div>
    </main>
  );
};

export default Blog;
