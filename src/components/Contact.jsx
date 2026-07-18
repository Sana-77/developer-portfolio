import { useState, useEffect } from "react";
import "../styles/Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [hasSavedData, setHasSavedData] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    const savedForm = localStorage.getItem("contactForm");

    if (savedForm) {
      const parsedData = JSON.parse(savedForm);

      setFormData(parsedData);

      if (
        parsedData.name ||
        parsedData.email ||
        parsedData.subject ||
        parsedData.message
      ) {
        setHasSavedData(true);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(formData));

    const hasData =
      formData.name || formData.email || formData.subject || formData.message;

    setHasSavedData(hasData);
  }, [formData]);
  useEffect(() => {
    if (!formData.email) {
      setEmailError("");
      return;
    }

    const timer = setTimeout(() => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(formData.email)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [formData.email]);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (emailError) return;

    setErrors({});
    setShowSuccess(true);
    localStorage.removeItem("contactForm");

    setHasSavedData(false);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-info">
        <span className="section-title">CONTACT</span>

        <h2>
          <span>Let's Work Together</span>
        </h2>

        <p>
          I'm always interested in new opportunities, freelance projects, and
          collaborations. Feel free to reach out!
        </p>
        {hasSavedData && (
          <div className="saved-message">
            💾 You have an unsent message saved.
          </div>
        )}

        <div className="info-card">
          <FaEnvelope />
          <div>
            <h4>Email</h4>
            <p>wazirysana@gmail.com</p>
          </div>
        </div>

        <div className="info-card">
          <FaPhone />
          <div>
            <h4>Phone</h4>
            <p>+93 078 000 000</p>
          </div>
        </div>

        <div className="info-card">
          <FaMapMarkerAlt />
          <div>
            <h4>Location</h4>
            <p>Kabul, Afghanistan</p>
          </div>
        </div>

        <div className="socials">
          <a
            href="https://github.com/Sana-77"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sana-waziry/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}

          {!errors.email && emailError && (
            <span className="error-message">{emailError}</span>
          )}

          {formData.email && !emailError && !errors.email && (
            <span className="email-success">✓ Email looks good!</span>
          )}
        </div>

        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div>
          <textarea
            rows="7"
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          {errors.message && (
            <span className="error-message">{errors.message}</span>
          )}
        </div>

        <button type="submit">Send Message</button>
        <div className="live-preview">
          <h3>Live Preview</h3>

          <div className="preview-card">
            <p>
              <strong>👤 Name:</strong> {formData.name}
            </p>

            <p>
              <strong>📧 Email:</strong> {formData.email || "example@email.com"}
            </p>

            <div className="preview-message">
              <strong>💬 Message:</strong>

              <p>{formData.message}</p>
            </div>
          </div>
        </div>
      </form>

      {showSuccess && (
        <div className="success-toast">✅ Message sent successfully!</div>
      )}
    </section>
  );
}

export default Contact;
