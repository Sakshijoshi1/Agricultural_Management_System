import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h1 style={{color:"white"}}>Contact Us</h1>
      <form>
        <div className="mb-3">
          <label style={{color:"white"}} htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label  style={{color:"white"}}htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label  style={{color:"white"}} htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="3" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contact;