import { getAllPosts } from '@/lib/posts';

const LatestPosts = () => {
  const allPosts = getAllPosts();
  const posts = allPosts.slice(0, 3); // Get latest 3 posts

  return (
    <section className="max-w-3xl mx-auto px-6 pt-6 pb-6">
      <h2 className="text-3xl font-light mb-8 text-foreground">latest posts</h2>
      
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="text-muted-foreground font-light text-sm min-w-[120px]">
              {new Date(post.date).toLocaleDateString()}
            </span>
            <a 
              href={`/blog/${post.slug}`}
              className="text-accent-purple hover:text-accent-purple-hover hover:underline transition-colors font-light"
            >
              {post.title}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;