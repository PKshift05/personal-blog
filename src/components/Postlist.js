// src/components/PostList.js
import React from 'react';

const posts = [
  { id: 1, title: 'Understanding Color Theory', content: 'Color theory is important in art...' },
  { id: 2, title: 'Top 10 Painting Techniques', content: 'Different techniques give unique effects...' },
  { id: 3, title: 'How to Improve Your Sketching', content: 'Practice makes perfect when it comes to sketching...' },
];

const PostList = () => {
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
};

export default PostList;
