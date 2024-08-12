import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const baseurl = "https://intern-task-api.bravo68web.workers.dev/";

  useEffect(() => {
    axios.get(`${baseurl}auth/login`)
      .then((response) => {
        console.log(response.data);
        setSuccess(true);
      })
      .catch((err) => {
        setError("An error occurred while fetching data.");
        console.error(err);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);
    setSubmitted(true);

    axios.post(`${baseurl}auth/login`, { email, password })
    .then((response) => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('userName', email);
        window.location.href = '/product'; 
      })
      .catch((err) => {
        console.error(err.response);
        setError("Invalid email or password.");
      });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="border-4 border-gray-800 w-[800px] h-[600px] flex flex-col items-center justify-center rounded-[20px]">
        <div className="text-[40px] font-bold">Login</div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center border-4 border-gray-800 h-[400px] w-[300px] rounded-[20px]"
        >
          <div>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-4 border-gray-800 rounded-[20px] mb-4 p-2 w-full text-center font-bold"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          {success && (
            <div className="text-green-500 mt-2">Successfully logged in!</div>
          )}
          {submitted && error && <div className="text-red-500 mt-2">{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default Login;