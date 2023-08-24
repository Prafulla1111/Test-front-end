// src/components/Modal.js
import React from 'react';

const Modal = ({ post, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <img src={post.thumbnail.large} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
