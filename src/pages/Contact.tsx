import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>
        Have questions or need assistance planning your visit to Taniti? Reach
        out to us, and we'll be happy to help!
      </p>
      <div className="contact-container">
        <form className="contact-form">
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" rows={5} required></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-details">
          <h3>Contact Information</h3>
          <p>Email: info@tanitiisland.com</p>
          <p>Phone: +1 (800) 555-1234</p>
          <p>Address: Taniti Island, Pacific Ocean</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
