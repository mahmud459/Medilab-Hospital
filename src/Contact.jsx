
function ContactSection  () {
  return (
    <section id="Contact">
    <>
    <div className="my-container">
       <div className="section-title">
           <h2>contacct</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            </div>
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.6059676668!2d29.01217945!3d41.0053215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1747415544102!5m2!1str!2str"
        width="100%"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
    <div className="my-container">
    <div class="contact-container">
  <div class="info-section">
    <div class="info-item">
    <span><i class="fa-solid fa-location-dot"></i></span>
      <div>
        <h3>Location</h3>
        <p>A108 Adam Street, New York, NY 535022</p>
      </div>
    </div>

    <div class="info-item">
    <span><i class="fa-solid fa-phone"></i></span>
      <div>
        <h3>Call Us</h3>
        <p>+1 5589 55488 55</p>
      </div>
    </div>

    <div class="info-item">
    <span><i class="fa-solid fa-envelope"></i></span>
      <div>
        <h3>Email Us</h3>
        <p>info@example.com</p>
      </div>
    </div>
  </div>

  <div class="form-section">
    <form class="contact-form">
      <div class="form-row">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
      </div>
      <input type="text" name="subject" placeholder="Subject" required />
      <textarea name="message" rows="5" placeholder="Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
</div>

    </div>
    </>
    </section>
  );
};

export default ContactSection;
