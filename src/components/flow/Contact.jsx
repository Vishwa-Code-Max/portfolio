import React, { useState } from "react";
import { assets } from "../../assets/assets";
import TextInputField from "../../ui/TextInputField";
import PhoneInputField from "../../ui/PhoneInputField";
import EmailInputField from "../../ui/EmailInputField";
import TextAreaField from "../../ui/TextAreaField";
import IconHolder from "../../ui/IconHolder";
import {
  FaDownload,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaMailchimp,
  FaPhone,
  FaPhoneSquareAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { IoIosMail, IoMdMail } from "react-icons/io";
import { X } from "lucide-react";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="h-screen w-screen">
      <div className="grid grid-cols-2 gap-6 h-full w-full">
        {/* LEFT IMAGE */}
        <div className="flex h-full items-center justify-center border-24 border-blue-50">
          <img
            src={assets.master.she}
            alt="she"
            className="h-[70vh] w-auto object-contain"
          />
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center h-full w-full px-10"
        >
          <div className="w-full h-[15%] flex items-center justify-end pr-10 p-5">
            <img
              src={assets.master.contact}
              alt="Let Connect"
              className="h-full object-contain"
            />
          </div>

          <div className="flex overflow-hidden h-[15%] pr-10">
            <p className="text-justify">
              Start the conversation. Everything else follows ideas take shape,
              paths align, and something real begins. I’m always open to new
              ideas, collaborations, and opportunities where I can contribute,
              learn, and grow while creating real value.
            </p>
          </div>

          {/* FORM FIELDS */}
          <div className="h-[70%] flex flex-col w-full justify-center items-center gap-4 px-10">
            <TextInputField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Enter your name"
              required
            />

            <PhoneInputField
              label="Phone Number"
              value={formData.phone}
              onChange={(val) => handleChange("phone", val)} // ✅ FIXED
              defaultCountry="IN"
              required
            />

            <EmailInputField
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="vishwa56432@gmail.com"
              required
            />

            <TextAreaField
              label="Message"
              name="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Write your message..."
              required
            />

            <div className="flex w-full justify-between items-center">
              <IconHolder href="/resume.pdf">
                <FaDownload />
              </IconHolder>
              <IconHolder href="mailto:vishwa56432@gmail.com">
                <IoMdMail />
              </IconHolder>
              <IconHolder href="tel:+919876543210">
                <FaPhoneSquareAlt />
              </IconHolder>
              <IconHolder href="https://wa.me/919876543210">
                <FaWhatsapp />
              </IconHolder>
              <IconHolder href="https://github.com/Vishwa-Code-Max">
                <FaGithub />
              </IconHolder>
              <IconHolder href="https://www.linkedin.com/in/vishwa-gurunathan-5503b1268/">
                <FaLinkedin />
              </IconHolder>
              <IconHolder href="https://www.instagram.com/_innovative_soul_/">
                <FaInstagram />
              </IconHolder>
              <IconHolder href="https://x.com/ALONE_ADDICTZES">
                <FaSquareXTwitter />
              </IconHolder>
            </div>

            <div className="flex justify-between w-full items-center gap-6">
              <button
                type="button"
                onClick={onBack}
                className="w-[50%] py-3 bg-gray-400 text-white rounded-xl"
              >
                Back
              </button>

              <button
                type="submit"
                className="w-[50%] py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
