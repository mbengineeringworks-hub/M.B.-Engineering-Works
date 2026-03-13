import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const newErrors = {};

    if (!data.name) newErrors.name = "Name is required";

    if (!data.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Invalid email";
    }

    if (!data.message) newErrors.message = "Message is required";

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
      company: form.current.company.value,
    };

    // honeypot spam protection
    if (formData.company) {
      return;
    }

    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs
      .sendForm("SERVICE_ID", "TEMPLATE_ID", form.current, "PUBLIC_KEY")
      .then(() => {
        setStatus("success");
        form.current.reset();
        setErrors({});
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>

        <div className="row">
          <div className="col-md-6 mx-auto">
            <form ref={form} onSubmit={sendEmail}>
              {/* Honeypot Spam Field */}

              <input type="text" name="company" style={{ display: "none" }} />

              <input
                name="name"
                className="form-control mb-2"
                placeholder="Name"
              />
              {errors.name && (
                <small className="text-danger">{errors.name}</small>
              )}

              <input
                name="email"
                className="form-control mb-2"
                placeholder="Email"
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}

              <textarea
                name="message"
                className="form-control mb-2"
                placeholder="Message"
              ></textarea>
              {errors.message && (
                <small className="text-danger">{errors.message}</small>
              )}

              <button className="btn btn-primary w-100 mt-3">
                Send Message
              </button>

              {/* Success Message */}

              {status === "success" && (
                <div className="alert alert-success mt-3">
                  Message sent successfully ✅
                </div>
              )}

              {status === "error" && (
                <div className="alert alert-danger mt-3">
                  Failed to send message ❌
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
