import React, { useState } from "react";

export default function SupportSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [formMessageIsError, setFormMessageIsError] = useState(false);

  const handleSupportSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const customerName = String(formData.get("name") ?? "").trim();
    const customerEmail = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const description = String(formData.get("description") ?? "").trim();

    if (!customerName || !customerEmail || !company || !subject || !description) {
      setFormMessageIsError(true);
      setFormMessage("Please fill in all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
      setFormMessageIsError(true);
      setFormMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setFormMessage("");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormMessageIsError(false);
        setFormMessage(
          "Support request sent successfully! We will contact you soon.",
        );
        form.reset();
        return;
      }

      const data = await response.json().catch(() => ({}));
      const errors = data.errors?.map((error) => error.message).filter(Boolean);
      setFormMessageIsError(true);
      setFormMessage(
        errors?.length
          ? errors.join(", ")
          : "Unable to send your request. Please try again.",
      );
    } catch (error) {
      console.error("Formspree Error:", error);
      setFormMessageIsError(true);
      setFormMessage(
        "Unable to send your request. Please check your internet connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="support section" id="support">
      <div className="support-decoration">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="support-wrapper">
        <div className="support-content">
          <span className="section-label">START A PROJECT • GET SUPPORT</span>

          <h2>
            Let's build together.
            <span> We're here.</span>
          </h2>

          <p>
            Have a new project in mind, website development, ecommerce store,
            marketing requirement or need help with your digital setup?
          </p>

          <div className="support-features">
            <div>
              <span>✓</span>
              Web & App Development
            </div>

            <div>
              <span>✓</span>
              Ecommerce & Marketing
            </div>

            <div>
              <span>✓</span>
              SEO & Digital Growth
            </div>

            <div>
              <span>✓</span>
              Dedicated Support
            </div>
          </div>
        </div>

        <form
          className="support-form"
          id="ticketForm"
          action="https://formspree.io/f/mwleqnye"
          method="POST"
          onSubmit={handleSupportSubmit}
        >
          <div className="form-header">
            <div className="form-icon">✦</div>

            <div>
              <span>START A PROJECT / SUPPORT</span>
              <h3>Start a Project or Request Support</h3>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="customerName">Name</label>
              <input
                type="text"
                id="customerName"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="customerEmail">Email</label>
              <input
                type="email"
                id="customerEmail"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select id="category" name="category">
                <option>Website</option>
                <option>Ecommerce</option>
                <option>SEO</option>
                <option>Digital Marketing</option>
                <option>Google Business</option>
                <option>Social Media</option>
                <option>Branding</option>
                <option>IT Solutions</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select id="priority" name="priority">
              <option>Normal</option>
              <option>High</option>
              <option>Urgent</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="What do you need help with?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows={5}
              placeholder="Describe your requirement..."
              required
            ></textarea>
          </div>

          <input
            type="hidden"
            name="_subject"
            value="New Flexus Project / Support Inquiry"
            readOnly
          />

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending Request..." : "Submit Project / Support Request"}
            <span>→</span>
          </button>

          <div
            className="form-message"
            id="formMessage"
            role="status"
            aria-live="polite"
            style={{ color: formMessageIsError ? "#d62828" : "#218844" }}
          >
            {formMessage}
          </div>
        </form>
      </div>
    </section>
  );
}
