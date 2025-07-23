import React, { useState } from 'react';
import axios from "axios";
import user from "./user.json";

function Contact() {
  const url = "https://my-portfolio-4l1f.onrender.com";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://my-portfolio-4l1f.onrender.com", formData);
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.error("Failed to send message", error);
      alert("Something went wrong!");
    }
  };

  return (
    <section id="contact" className="text-black py-16 px-5 bg-white">
      <div className="flex flex-wrap justify-between max-w-[1100px] mx-auto gap-10">
        {/* Left Side - Info */}
        <div className="flex-1 min-w-[280px]">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-blue-600 font-medium bg-clip-text text-transparent">Let's</span> talk
          </h2>
          <p className="mb-4 text-lg text-blue-950">
            I'm currently open to new opportunities and collaborations. Whether you have a question,
            a project idea, or just want to connect — feel free to drop a message anytime!
          </p>

          <div className="space-y-2 text-blue-950">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Location:</strong> {user.location}</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <form
          className="flex flex-col flex-1 min-w-[280px] gap-4"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="text-lg font-medium">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="p-3 border border-gray-700 rounded-md text-blue-950"
          />

          <label htmlFor="email" className="text-lg font-medium">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="p-3 border border-gray-700 rounded-md text-blue-950"
          />

          <label htmlFor="message" className="text-lg font-medium">Write your message here</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Enter your message"
            required
            className="p-3 border border-gray-700 rounded-md text-blue-950"
          ></textarea>

          <button
            type="submit"
            className="mt-2 py-3 px-5 bg-blue-300 text-blue-950 font-normal rounded-md hover:opacity-50 transition duration-300"
          >
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
