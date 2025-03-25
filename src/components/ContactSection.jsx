import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";

const ContactSection = () => {
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    // In a real-world scenario, you'd implement form submission logic here
    fetch("https://udyuxbzqigmtyrzqxxfv.supabase.co/functions/v1/send-mail", {
      method: "post",
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        description: formData.message,
      }),
      headers: {
        "Content-type": "application/json",
      },
      // body:
    })
      .then(() => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Unable to send sorry!");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      viewport={{ once: true }}

      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-800 text-white py-16 px-8 relative"
    >
      {/* Background Tech Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#1E90FF 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          viewport={{ once: true }}

          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 p-8 rounded-lg"
        >
          <h2 className="text-4xl font-bold mb-8 text-blue-400">
            Get in Touch
          </h2>

          <div className="space-y-6">
            <div className="flex items-center">
              <FaEnvelope className="mr-4 text-blue-400" size={30} />
              <a
                href="mailto:gkamesh98@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                gkamesh98@gmail.com
              </a>
            </div>

            <div className="flex items-center">
              <FaPhoneAlt className="mr-4 text-blue-400" size={30} />
              <span>+91 8367086133</span>
            </div>

            <div className="flex space-x-6 mt-6">
              <motion.a
                href="https://linkedin.com/in/gullapalli-kamesh-7565a0181/"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="text-white hover:text-blue-400"
              >
                <FaLinkedin size={40} />
              </motion.a>

              <motion.a
                href="https://github.com/gkamesh98"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="text-white hover:text-gray-400"
              >
                <FaGithub size={40} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          viewport={{ once: true }}

          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-green-400">
              Send Me a Message
            </h3>

            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={sending}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                disabled={sending}
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                disabled={sending}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
              />
            </div>

            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2"
            >
              {sending ? (
                "Sending ..."
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
