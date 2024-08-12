import React, { useState } from "react";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch("https://intern-task-api.bravo68web.workers.dev/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        
        const data = await response.json();
        
        if (response.ok) {
            setSuccessMessage("Registration successful!");
            setEmail(""); 
            setPassword("");
        } else {
            // Display the error message returned from the API
            setSuccessMessage(data.message || "Registration failed. Please try again.");
        }
    } catch (error) {
        console.error(error);
        setSuccessMessage("An error occurred. Please try again.");
    }
};


  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="border-4 border-gray-800 w-[800px] h-[600px] flex flex-col items-center justify-center rounded-[20px]">
        <div className="text-[40px] font-bold">Registration</div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center border-4 border-gray-800 h-[400px] w-[300px] rounded-[20px]"
        >
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="border-4 border-gray-800 rounded-[20px] mb-4 p-2 w-full text-center font-bold"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="border-4 border-gray-800 rounded-[20px] p-2 w-full text-center font-bold"
            />
          </div>
          <div>
            <button
              type="submit"
              className="mt-4 p-2 w-[120px] border-4 border-gray-800 rounded-[20px] font-bold"
            >
              Submit
            </button>
          </div>
          {successMessage && (
            <div className="text-green-500 font-bold">{successMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Registration;
