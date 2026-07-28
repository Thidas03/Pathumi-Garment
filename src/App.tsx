import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { 
  Award, 
  Users, 
  MapPin, 
  Heart, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  Briefcase,
  Scissors,
  Layers,
  Printer
} from 'lucide-react';
import './App.css';

const App: React.FC = () => {
  // Form handling state for inquiry submission
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/pathumigarments96@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone || 'N/A',
          message: formState.message,
          _subject: "New Inquiry from Pathumi Garment Website",
          _captcha: "false"
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', phone: '', message: '' });
        // Auto-clear success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error("Failed to send inquiry.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("Failed to send inquiry. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Story Section */}
        <section id="about" className="story-section">
          <div className="container story__container">
            <div className="story__grid">
              <div className="story__content">
                <div className="story__sub-heading">
                  <span className="story__sub-line" />
                  Our Heritage
                </div>
                <h2 className="story__heading">
                  A Family Legacy of{' '}
                  <span className="text--gradient-gold">Craftsmanship</span>
                </h2>
                <p className="story__paragraph">
                  Established in 1996 in Gampaha, Sri Lanka, Pathumi Garment was founded 
                  by <strong>R.M.S.B. Rathnayake</strong> through his dedication, resilience, and hard work. 
                  Supported by his wife, <strong>Mallika Wijesekara</strong>, this family-owned enterprise 
                  has grown to employ over 50 skilled workers.
                </p>
                <p className="story__paragraph">
                  We specialize in producing premium apparel by combining traditional tailors' attention 
                  to detail with modern production capabilities. Our reputation stands on three decades 
                  of quality craftsmanship, absolute reliability, and client satisfaction.
                </p>
                <div className="story__features">
                  <div className="story__feature">
                    <div className="feature__icon-wrapper">
                      <Users size={20} className="feature__icon" />
                    </div>
                    <div>
                      <h4 className="feature__title">50+ Skilled Tailors</h4>
                      <p className="feature__desc">A dedicated community of expert artisans.</p>
                    </div>
                  </div>
                  <div className="story__feature">
                    <div className="feature__icon-wrapper">
                      <MapPin size={20} className="feature__icon" />
                    </div>
                    <div>
                      <h4 className="feature__title">Sri Lankan Heritage</h4>
                      <p className="feature__desc">Proudly manufacturing locally at Gampaha with global standards.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story visual cards */}
              <div className="story__visual">
                <div className="visual__card">
                  <div className="card__icon-wrapper">
                    <Award size={32} />
                  </div>
                  <h3 className="card__title">28+ Years of Trust</h3>
                  <p className="card__desc">
                    Since 1996, catering to clothing demands with uncompromised quality, 
                    reliability, and fast order dispatch.
                  </p>
                </div>
                <div className="visual__card visual__card--navy">
                  <div className="card__icon-wrapper">
                    <Heart size={32} />
                  </div>
                  <h3 className="card__title">Our Value System</h3>
                  <p className="card__desc">
                    Family-owned, worker-first, and client-centric. We treat every single 
                    stitch as a commitment to excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services-section">
          <div className="container">
            <div className="section-header">
              <span className="sub-heading">Our Services</span>
              <h2>Professional Apparel Production</h2>
            </div>
            <div className="services__grid-new">
              <div className="service-card-new">
                <div className="service-card-new__header">
                  <Briefcase className="service-card-new__icon" size={24} />
                  <h3>Sewing & Manufacturing</h3>
                </div>
                <p>Bulk production of premium ladies and gents garments, uniforms, shirts, and custom fashion apparel.</p>
              </div>

              <div className="service-card-new">
                <div className="service-card-new__header">
                  <Scissors className="service-card-new__icon" size={24} />
                  <h3>Embroidery Center</h3>
                </div>
                <p>Equipped with computerized high-speed multi-needle embroidery setups for brand logos and custom badges.</p>
              </div>

              <div className="service-card-new">
                <div className="service-card-new__header">
                  <Layers className="service-card-new__icon" size={24} />
                  <h3>Collar Weaving & Laser Cutting</h3>
                </div>
                <p>State-of-the-art weaving machines for custom collars and cuffs alongside high-accuracy laser cutting fabrics.</p>
              </div>

              <div className="service-card-new">
                <div className="service-card-new__header">
                  <Printer className="service-card-new__icon" size={24} />
                  <h3>Fabric Screen Printing</h3>
                </div>
                <p>High-quality screen printing tables, dye transfers, and sublimation prints with exceptional color washing durability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="gallery-section">
          <div className="container">
            <div className="section-header">
              <span className="sub-heading">Facility Tour</span>
              <h2>Craftsmanship in Motion</h2>
            </div>
            <div className="gallery__grid">
              <div className="gallery__item">
                <img src="/assets/worker_sewing.jpg" alt="Pathumi Garment Tailoring Workshop" />
                <div className="gallery__item-overlay">
                  <h4>Tailoring Room</h4>
                  <p>Expert workers at sewing stations</p>
                </div>
              </div>
              <div className="gallery__item">
                <img src="/assets/factory_production.jpg" alt="Active Production Lines" />
                <div className="gallery__item-overlay">
                  <h4>Weaving & Production</h4>
                  <p>State of the art machinery running daily</p>
                </div>
              </div>
              <div className="gallery__item">
                <img src="/assets/finished_garments.jpg" alt="Screen Printing Tables" />
                <div className="gallery__item-overlay">
                  <h4>Printing Station</h4>
                  <p>Screen alignment and bulk dye prints</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="contact__grid">
              {/* Contact Info (Left) */}
              <div className="contact__info">
                <div className="story__sub-heading">
                  <span className="story__sub-line" />
                  Get in Touch
                </div>
                <h2 className="contact__heading">Connect with Our Team</h2>
                <p className="contact__desc">
                  Have questions about order capacity, custom embroidery styles, pricing, or fabrics? 
                  Reach out to Managing Director <strong>S.B. Rathnayake</strong> or visit our office.
                </p>

                <div className="info-cards">
                  {/* Address */}
                  <div className="info-card">
                    <div className="info-card__icon">
                      <MapPin size={20} />
                    </div>
                    <div className="info-card__content">
                      <span>Our Location</span>
                      <p>37/A/2, Oruthota Rd, Gampaha, Sri Lanka</p>
                    </div>
                  </div>

                  {/* Phone Details */}
                  <div className="info-card">
                    <div className="info-card__icon">
                      <Phone size={20} />
                    </div>
                    <div className="info-card__content">
                      <span>Call Us Directly</span>
                      <div className="phone-numbers">
                        <p><strong>Mobile:</strong> +94 77 571 2625</p>
                        <p><strong>Mobile:</strong> +94 76 288 0402</p>
                        <p><strong>Landline:</strong> 033 223 6568</p>
                      </div>
                    </div>
                  </div>

                  {/* Emails */}
                  <div className="info-card">
                    <div className="info-card__icon">
                      <Mail size={20} />
                    </div>
                    <div className="info-card__content">
                      <span>Email Inquiries</span>
                      <p>pathumigarments96@gmail.com</p>
                      <p>thidasawen03@gmail.com</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="info-card">
                    <div className="info-card__icon">
                      <Clock size={20} />
                    </div>
                    <div className="info-card__content">
                      <span>Factory Hours</span>
                      <p>Mon - Sat: 8:00 AM - 5:30 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry Form (Right) */}
              <div className="contact__form-container">
                {isSubmitted ? (
                  <div className="form-success">
                    <CheckCircle className="form-success__icon" size={48} />
                    <h3>Inquiry Received!</h3>
                    <p>Thank you for contacting Pathumi Garment. Our team will get back to you shortly.</p>
                  </div>
                ) : (
                  <form className="contact__form" onSubmit={handleSubmit}>
                    <h3>Send Us an Inquiry</h3>
                    <p>Complete the form below and we will contact you within 24 hours.</p>
                    
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formState.name} 
                        onChange={handleInputChange} 
                        required 
                        placeholder="E.g., Samantha Perera"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formState.email} 
                        onChange={handleInputChange} 
                        required 
                        placeholder="email@example.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number (Optional)</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formState.phone} 
                        onChange={handleInputChange} 
                        placeholder="077 XXXXXXX"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Your Inquiry Details</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        value={formState.message} 
                        onChange={handleInputChange} 
                        required 
                        rows={4}
                        placeholder="Describe your requirements, quantity, and timelines..."
                      />
                    </div>

                    {submitError && (
                      <div className="form-error" style={{ color: '#ef4444', fontSize: '0.9rem', marginBottom: '1rem', textAlign: 'left' }}>
                        {submitError}
                      </div>
                    )}

                    <button 
                      type="submit" 
                      className="btn btn--gold form-submit__btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Google Map */}
            <div className="contact__map">
              <iframe
                title="Pathumi Garment Location"
                src="https://maps.google.com/maps?q=Pathumi%20Garments%20Pvt.Ltd,%20Oruthota%20Rd,%20Gampaha,%20Sri%20Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Footer Bottom */}
            <div className="contact__footer">
              <div className="footer__logo">
                <img src="/assets/logo.png" alt="Pathumi Garment Logo" className="logo__img" />
                <span>Pathumi Garment</span>
              </div>
              <p className="footer__copy">
                &copy; {new Date().getFullYear()} Pathumi Garment. All Rights Reserved. Located in Gampaha, Sri Lanka.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
