function Contact() {
  return (
    <div className="container mt-5">
      <h2>Contact</h2>

      <input className="form-control mb-3" placeholder="Name" />
      <input className="form-control mb-3" placeholder="Email" />
      <textarea className="form-control mb-3" placeholder="Message"></textarea>

      <button className="btn btn-success">
        Send
      </button>
    </div>
  );
}

export default Contact;