// src/App.js
import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import posts from './data/posts';
import Card from './components/Card';
import Modal from './components/Modal';
import Footer from './components/Footer';

function App() {
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="app">
      {posts.map((post) => (
        <Card
          key={post.id}
          post={post}
          onClick={() => openModal(post)}
          isSelected={selectedPost === post}
        />
      ))}
      {selectedPost && <Modal post={selectedPost} onClose={closeModal} />}
    </div>
  );
}

export default App;
