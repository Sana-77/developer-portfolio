import "../styles/Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-info">
        <span className="section-title">CONTACT</span>

        <h2>
          Let's Work
          <span> Together</span>
        </h2>

        <p>
          I'm always interested in new opportunities, freelance projects, and
          collaborations. Feel free to reach out!
        </p>

        <div className="info-card">
          <FaEnvelope />
          <div>
            <h4>Email</h4>
            <p>your@email.com</p>
          </div>
        </div>

        <div className="info-card">
          <FaPhone />
          <div>
            <h4>Phone</h4>
            <p>+93 XXX XXX XXX</p>
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
          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />

        <input type="email" placeholder="Email Address" />

        <input type="text" placeholder="Subject" />

        <textarea rows="7" placeholder="Write your message..."></textarea>

        <button>Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
