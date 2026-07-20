import { useState } from "react";
import "../styles/FeedbackWall.css";
import { FaStar } from "react-icons/fa";

function FeedbackWall() {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      name: "John",
      rating: 5,
      comment: "Amazing portfolio. Very professional!",
    },
    {
      id: 2,
      name: "Sara",
      rating: 4,
      comment: "Beautiful UI and smooth animations.",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  const [sortBy, setSortBy] = useState("latest");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.comment) return;

    const newFeedback = {
      id: Date.now(),
      name: formData.name,
      rating: Number(formData.rating),
      comment: formData.comment,
    };

    setFeedbacks([newFeedback, ...feedbacks]);

    setFormData({
      name: "",
      rating: 5,
      comment: "",
    });
  };

  const sortedFeedbacks = [...feedbacks].sort((a, b) => {
    if (sortBy === "highest") return b.rating - a.rating;
    if (sortBy === "lowest") return a.rating - b.rating;
    return b.id - a.id;
  });

  return (
    <section className="feedback-wall" id="feedback">
      <span className="section-title">VISITOR FEEDBACK</span>

      <h2>
        What People <span>Say</span>
      </h2>

      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <select name="rating" value={formData.rating} onChange={handleChange}>
          <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
          <option value={4}>⭐⭐⭐⭐ (4)</option>
          <option value={3}>⭐⭐⭐ (3)</option>
          <option value={2}>⭐⭐ (2)</option>
          <option value={1}>⭐ (1)</option>
        </select>

        <textarea
          rows="5"
          name="comment"
          placeholder="Write your feedback..."
          value={formData.comment}
          onChange={handleChange}
        />

        <button type="submit">Submit Feedback</button>
      </form>

      <div className="sort-box">
        <label>Sort By:</label>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="latest">Latest</option>
          <option value="highest">Highest Rating</option>
          <option value="lowest">Lowest Rating</option>
        </select>
      </div>

      <div className="feedback-list">
        {sortedFeedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className={`feedback-card ${
              feedback.rating === 5 ? "featured" : ""
            }`}
          >
            <div className="feedback-header">
              <h3>{feedback.name}</h3>

              {feedback.rating === 5 && (
                <span className="featured-badge">🌟 Featured</span>
              )}
            </div>

            <div className="stars">
              {[...Array(feedback.rating)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>

            <p>{feedback.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeedbackWall;
