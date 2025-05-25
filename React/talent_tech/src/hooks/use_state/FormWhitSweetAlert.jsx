// ==========================================
//
// This component is a form that uses SweetAlert2
// to display alerts for form submission.
//
// File: FormWhitSweetAlert.jsx
// Author: Anthony Bañon
// Created: 2025-05-24
// Last Updated: 2025-05-24
// ==========================================

import { useState } from "react";
import Swal from "sweetalert2";

function FormWhitSweetAlert() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailIsValid = (email) => {
    /*
     * Check if the email is valid.
     *
     * @param {String} email The email address to validate.
     * @returns {Boolean} True if the email is valid, false otherwise.
     */

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Regular expression
    return regex.test(email);
  };

  const handleSubmit = (event) => {
    /*
     * Handle form submission.
     *
     * @param {Event} event - The submit event.
     * @returns {void}
     */

    event.preventDefault(); // Prevent default form submission
    // Validate fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      //trim() removes whitespace from both ends of a string
      //?. (optional chaining), will prevent errors if any
      // variable is null or undefined.
      Swal.fire({
        icon: "error",
        title: "Incomplete fields",
        text: "Please fill in all fields.",
      });
      return; // Prevent submission if fields are empty
    }

    if (!emailIsValid(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid email",
        text: "Please enter a valid email address.",
      });
      return; // Prevent submission if email is invalid
    }

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: `Form sent by: ${name}`,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container m-4 d-flex flex-column align-items-center"
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control w-25 mb-4"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control w-25 mb-4"
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="form-control w-25 mb-4"
        rows="8"
      />
      <button type="submit" className="btn btn-success">
        Send
      </button>
    </form>
  );
}

export default FormWhitSweetAlert;
