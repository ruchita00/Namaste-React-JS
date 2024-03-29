import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact-container">
      <div className="contact-left">
        <img
          style={{ width: "400px" }}
          src={
            "https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707955200&semt=ais"
          }
          alt="Contact us"
        />
      </div>
      <div className="contact-right">
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Type your Message here..." required></textarea>
          <button type="submit">Submit</button>
          {message && (
            <span>Thanks for contacting Food, We will reply ASAP.</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
