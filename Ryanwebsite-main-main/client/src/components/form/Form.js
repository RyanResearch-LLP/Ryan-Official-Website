import { useState } from "react";
import "./form.css"; // Import CSS file for styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    city: "",
    time: "",
    date: "",
    chosenOption: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Simulate form submission success with an alert (replace with actual submission logic)
    alert("Form submitted successfully!");
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      city: "",
      time: "",
      date: "",
      chosenOption: "",
      message: "",
    });
  };

  return (
    <div className="fm-form-container">
      <form onSubmit={handleSubmit} className="fm-contact-form">
        <div className="fm-form-group">
          <label htmlFor="fm-fullName">Full Name:</label>
          <input
            type="text"
            id="fm-fullName"
            name="fullName"
            className="fm-input"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="fm-form-group">
          <label htmlFor="fm-email">Email:</label>
          <input
            type="email"
            id="fm-email"
            name="email"
            className="fm-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="fm-form-group">
          <label htmlFor="fm-phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="fm-phoneNumber"
            name="phoneNumber"
            className="fm-input"
            value={formData.phoneNumber}
            onChange={handleChange}
            pattern="[0-9]*"
            inputMode="numeric"
            required
          />
        </div>
        <div className="fm-form-group">
          <label htmlFor="fm-city">City:</label>
          <input
            type="text"
            id="fm-city"
            name="city"
            className="fm-input"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="fm-form-group">
          <label htmlFor="fm-time">Time:</label>
          <input
            type="time"
            id="fm-time"
            name="time"
            className="fm-input fm-time-input"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="fm-form-group">
          <label htmlFor="fm-date">Date:</label>
          <input
            type="date"
            id="fm-date"
            name="date"
            className="fm-input"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
    <span>Purpose of your consultation: *</span>
    <div>
        <input type="radio" id="consultation-option-1" name="consultation-purpose" value="nutrition-plan" />
        <label htmlFor="consultation-option-1" className="fm-class-option">I want to consult for a nutrition plan</label>
    </div>
    <div>
        <input type="radio" id="consultation-option-2" name="consultation-purpose" value="speaker-seminar" />
        <label htmlFor="consultation-option-2" className="fm-class-option">I want you as a speaker for a seminar/workshop</label>
    </div>
    <div>
        <input type="radio" id="consultation-option-3" name="consultation-purpose" value="consult-brand" />
        <label htmlFor="consultation-option-3" className="fm-class-option">I want you to consult our Brand for ideas/Business development</label>
    </div>
    <div>
        <input type="radio" id="consultation-option-4" name="consultation-purpose" value="nutrition-coaching" />
        <label htmlFor="consultation-option-4" className="fm-class-option">I want to meet you in person for an advanced Nutrition Coaching</label>
    </div>
    <div>
        <input type="radio" id="consultation-option-5" name="consultation-purpose" value="collaboration" />
        <label htmlFor="consultation-option-5" className="fm-class-option">I want you for a collaboration</label>
    </div>
</div>


        <div className="fm-form-group">
          <label htmlFor="fm-message">Message:</label>
          <textarea
            id="fm-message"
            name="message"
            className="fm-textarea"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="fm-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
