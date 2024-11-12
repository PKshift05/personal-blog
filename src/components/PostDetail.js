import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/postContent.css';
const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch('/posts.json')
            .then(response => response.json())
            .then(data => {
                const foundPost = data.find(p => p.id === parseInt(id));
                setPost(foundPost);
            })
            .catch(error => console.error("Error loading posts:", error));
    }, [id]);

    if (!post) {
        return <div>Bài viết không tồn tại</div>;
    }

    return (

        <main>
            <h1>{post.title}</h1>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        </main>
        

    );
};

export default PostDetail;
