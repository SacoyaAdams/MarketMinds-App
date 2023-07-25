
import React, { useState } from 'react';
import './BlogPage.css';
import BlogForm from './BlogForm';

const BlogPage = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const handleFormSubmit = (title, content) => {
    // Here you can perform further actions with the submitted data.
    console.log('Submitted Title:', title);
    console.log('Submitted Content:', content);

    // For demonstration purposes, you can set the submitted data in state.
    setSubmittedData({ title, content });

    // Hide the form after submission
    setShowForm(false);
  };

  return (
    <div>
      <h1>Start Your Blog</h1>
      {showForm && <BlogForm onFormSubmit={handleFormSubmit} />}
      {submittedData && (
        <div>
          {/* <h2>Submitted Data:</h2> */}
          <p>Title: {submittedData.title}</p>
          <p>Content: {submittedData.content}</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
