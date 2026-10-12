import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { SocialIcons } from '../components/Footer';
import { useShop } from '../context/ShopContext';

const empty = { name: '', email: '', phone: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const { showToast } = useShop();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo only: no backend, so the message is not sent anywhere
    showToast('Thank you! Your message has been sent.');
    setForm(empty);
  };

  return (
    <div className="container page">
      <h1 className="page-title">Contact Us</h1>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-card"><FiMapPin /><div><h4>Address</h4><p>12, Tech Park Road, Chennai, Tamil Nadu 600001</p></div></div>
          <div className="info-card"><FiPhone /><div><h4>Phone</h4><p>+91 98765 43210</p></div></div>
          <div className="info-card"><FiMail /><div><h4>Email</h4><p>support@digitalhub.com</p></div></div>
          <div className="info-card"><FiClock /><div><h4>Business Hours</h4><p>Mon - Sat: 9:00 AM - 8:00 PM<br />Sunday: 10:00 AM - 6:00 PM</p></div></div>
          <h4>Follow us</h4>
          <SocialIcons />
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send us a message</h3>
          <div className="form-grid">
            <div className="form-field"><label>Name</label><input name="name" value={form.name} onChange={handleChange} required /></div>
            <div className="form-field"><label>Email</label><input type="email" name="email" value={form.email} onChange={handleChange} required /></div>
            <div className="form-field"><label>Phone</label><input type="tel" name="phone" value={form.phone} onChange={handleChange} /></div>
            <div className="form-field"><label>Subject</label><input name="subject" value={form.subject} onChange={handleChange} required /></div>
            <div className="form-field full"><label>Message</label><textarea name="message" rows="5" value={form.message} onChange={handleChange} required /></div>
          </div>
          <button type="submit" className="btn btn-primary btn-lg">Submit</button>
        </form>
      </div>

      <div className="map-placeholder">
        <FiMapPin />
        <p>Google Maps placeholder</p>
        <small>Replace this box with a Google Maps embed &lt;iframe&gt; of your store location.</small>
      </div>
    </div>
  );
}
