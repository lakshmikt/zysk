import React from "react";
import "./Blog.css";

const Blog = () => {
  const blogPosts = [
    {
      title: "UX review presentations",
      category: "Design",
      date: "20 Jan 2024",
      author: "Olivia Rhye",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
    },
    {
      title: "Migrating to Linear 101",
      category: "Product",
      date: "19 Jan 2024",
      author: "Phoenix Baker",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    },
    {
      title: "Building your API stack",
      category: "Software Engineering",
      date: "18 Jan 2024",
      author: "Lana Steiner",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    },
  ];

  return (
    <div className="blog">
      <h1>Our Blog</h1>
      <p className="intro">Tools and strategies modern teams need to help their companies grow.</p>

      <div className="categories">
        <button className="category-button">Design</button>
        <button className="category-button">Product</button>
        <button className="category-button">Software Engineering</button>
      </div>

      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <div className="blog-header">
              <span className="category">{post.category}</span>
              <h2>{post.title}</h2>
            </div>
            <p className="description">{post.description}</p>
            <div className="blog-footer">
              <span className="author">{post.author}</span>
              <span className="date">{post.date}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all">
        <button className="view-all-button">View All Posts</button>
      </div>
    </div>
  );
};

export default Blog;
