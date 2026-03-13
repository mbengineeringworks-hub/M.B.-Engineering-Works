import "./contact.css";

export default function ContactForm() {
  return (
    <section className="contact-section">

      <div className="container">

        <div className="row">

          {/* LEFT FORM */}

          <div className="col-lg-8">

            <h2 className="mb-3">
              We Are <span className="text-primary">Listening!</span>
            </h2>

            <p className="text-muted">
              Please contact us if you have any queries.
            </p>

            <textarea
              className="form-control mb-3"
              placeholder="Type your requirement in detail"
              rows="5"
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Your email or contact number"
            />

            <button className="btn btn-primary w-100 send-btn">
              SEND MESSAGE
            </button>

          </div>

          {/* RIGHT INFO */}

          <div className="col-lg-4">

            <div className="contact-box">

              <h5>
                Get in touch with <span className="text-primary">us</span>
              </h5>

              <p className="text-muted">
                You can also reach out to us at
              </p>

              <div className="contact-item">
                <strong>Address</strong>
                <p>
                 Lakshmi nagar, 48, 3rd St, Laxmi Nagar, Sanganoor, Coimbatore, Tamil Nadu 641027
                </p>
              </div>

              <div className="contact-item">
                <strong>Call Us</strong>
                <p>7871845570</p>
              </div>

              <div className="contact-item">
                <strong>Email</strong>
                <p>mbengineers@gmail.com</p>
              </div>

            </div>

          </div>

        </div>
          <div className="map-section">

        <iframe
          src="https://www.google.com/maps?q=MB+Engineering+Works+Sanganoor+Coimbatore&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

      </div>

      </div>

    </section>
  );
}