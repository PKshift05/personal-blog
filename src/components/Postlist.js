// src/components/PostList.js
import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { id: 1, title: 'Understanding Color Theory', content: 'Color theory is important in art...' },
  { id: 2, title: 'Top 10 Painting Techniques', content: 'Different techniques give unique effects...' },
  { id: 3, title: 'How to Improve Your Sketching', content: 'Practice makes perfect when it comes to sketching...' },
  { id: 4, title: 'VÉN BỨC MÀN BÍ MẬT CỦA NGHỆ THUẬT', content: 'KHI TỪNG TÁC PHẨM KỂ CHUYỆN: Hành trình thám hiểm Bảo tàng Mĩ thuật Việt Nam và câu chuyện nghệ thuật bất ngờ.' }
];

const PostList = () => {
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <Link to={`/post/${post.id}`} className="post-title">
            <h2>{post.title}</h2>
          </Link>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
};

export default PostList;
