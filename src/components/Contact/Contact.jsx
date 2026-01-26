import './Contact.scss';

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="section-header">
                <h2 className="section-title">Contact</h2>
            </div>
            <div className="contact-card">
                <p className="contact-text">
                    Drop a quick note, or swap this area out with your preferred contact links.
                </p>
                <form
                    className="contact-form"
                    onSubmit={(event) => event.preventDefault()}
                >
                    <div className="form-row">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            className="form-input"
                            placeholder="Your name"
                        />
                    </div>
                    <div className="form-row">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="form-input"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div className="form-row">
                        <label className="form-label" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            className="form-input form-textarea"
                            placeholder="What would you like to talk about?"
                            rows="4"
                        />
                    </div>
                    <button type="submit" className="form-submit">
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
