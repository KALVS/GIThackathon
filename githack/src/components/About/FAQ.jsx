



import React from 'react';
import "./FAQ.css";

function FAQ() {
  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      <ul>
        <li>
          <strong>Question 1:</strong> How do I get started with React?
          <p>
            Answer: To get started with React, you need to have Node.js and npm installed. Then, create a new React app using Create React App.
          </p>
        </li>
        <li>
          <strong>Question 2:</strong> How do I handle state in React?
          <p>
            Answer: React provides the useState hook to manage state in functional components.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default FAQ;

