import React, { useState } from "react";
import "./App.css"; // Import CSS for styling and animations
import Google from "./google";

const App = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [orgData, setOrgData] = useState({
    companyName: "",
    websiteURL: "",
    description: "",
  });
  const [integrationSuccess, setIntegrationSuccess] = useState(false);

  const handleUserChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleOrgChange = (e) => {
    setOrgData({ ...orgData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleIntegration = () => {
    // Simulate integration success
    setIntegrationSuccess(true);
  };

  return (
    <center>
      <div className="app-container">
        {step === 1 && (
          <div className="registration">
            <h2>User Registration</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleUserChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleUserChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleUserChange}
            />
            <button onClick={handleNextStep}>Continue</button>
            <Google />  
          </div>
        )}

        {step === 2 && (
          <div className="organization-setup">
            <h2>Setup Organisation</h2>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              onChange={handleOrgChange}
            />
            <input
              type="text"
              name="websiteURL"
              placeholder="Website URL"
              onChange={handleOrgChange}
            />
            <textarea
              name="description"
              placeholder="Company Description"
              onChange={handleOrgChange}
            ></textarea>
            <button onClick={handleNextStep}>Next</button>
          </div>
        )}

        {step === 3 && (
          <div className="integration-testing">
            <h2>Chatbot Integration & Testing</h2>
            <button onClick={handleIntegration}>Test Chatbot</button>
            <button onClick={handleIntegration}>
              Integrate on Your Website
            </button>
            <button onClick={handleIntegration}>Test Integration</button>
          </div>
        )}

        {integrationSuccess && (
          <div className="success-animation">
            <h2>Integration Successful!</h2>
            <div className="confetti"></div>
            <button onClick={() => setStep(1)}>Explore Admin Panel</button>
            <button onClick={() => setStep(1)}>
              Start Talking to Your Chatbot
            </button>
          </div>
        )}
      </div>
    </center>
  );
};

export default App;
