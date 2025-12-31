import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../services/data';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  return (
    <div className="w-full bg-brand-dark min-h-screen pb-24">
      <div className="pt-24 pb-12 bg-gradient-to-b from-brand-gray/20 to-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">INSIGHTS</h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            Thoughts on execution, leadership, and the future of technology.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 space-y-12">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="group border-b border-white/10 pb-12">
            <div className="flex gap-4 text-xs text-brand-blue mb-4 uppercase tracking-widest font-bold">
               <span>{post.date}</span>
               <span>•</span>
               <span>{post.readTime}</span>
               <span>•</span>
               <span>{post.category}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 group-hover:text-brand-blue transition-colors">
              <Link to={`/blog`}>{post.title}</Link>
            </h2>
            
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            
            <Link 
              to={`/blog`} 
              className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm hover:text-brand-blue transition-colors"
            >
              Read Article <ArrowRight size={16} />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
