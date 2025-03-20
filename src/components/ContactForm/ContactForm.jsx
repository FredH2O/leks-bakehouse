"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({
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

    // Basic validation
    if (name === "name" && value.length < 3) {
      setError((prev) => ({
        ...prev,
        name: "Name must be at least 3 characters",
      }));
    } else {
      setError((prev) => ({ ...prev, name: "" }));
    }

    if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      setError((prev) => ({ ...prev, email: "Invalid email address" }));
    } else {
      setError((prev) => ({ ...prev, email: "" }));
    }

    if (name === "message" && value.length < 10) {
      setError((prev) => ({
        ...prev,
        message: "Message must be at least 10 characters",
      }));
    } else {
      setError((prev) => ({ ...prev, message: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      formData.message.length < 10
    ) {
      alert("All fields are required.");
      return;
    }

    console.log("Form submitted:", formData);

    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
    setError({ name: "", email: "", message: "" });
  };

  return (
    <form
      action="mailto:huertaserick@yahoo.ie"
      method="GET"
      encType="text/plain"
      // onSubmit={handleSubmit}
      className="flex flex-col p-4 border max-w-md w-full gap-2"
    >
      <label htmlFor="name" className="text-xl font-bold">
        Name
      </label>
      <input
        onChange={handleChange}
        value={formData.name}
        type="text"
        id="name"
        name="name"
        required
        className="rounded p-2 border"
      />
      {error.name && <p className="text-red-500">{error.name}</p>}

      <label htmlFor="email" className="text-xl font-bold">
        Email
      </label>
      <input
        onChange={handleChange}
        value={formData.email}
        type="email"
        id="email"
        name="email"
        required
        className="rounded p-2 border"
      />
      {error.email && <p className="text-red-500">{error.email}</p>}

      <label htmlFor="message" className="text-xl font-bold">
        Request
      </label>
      <textarea
        onChange={handleChange}
        value={formData.message}
        name="message"
        id="message"
        rows={6}
        maxLength={500}
        required
        className="p-2 rounded border"
      ></textarea>
      {error.message && <p className="text-red-500">{error.message}</p>}

      <button
        type="submit"
        className="border bg-blue-500 w-20 text-white p-1 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
