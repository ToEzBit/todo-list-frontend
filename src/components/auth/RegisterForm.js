import axios from "../../config/axios";
import { useState } from "react";
import { validateRegister } from "../../services/validate";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});
  const [apiError, setApiError] = useState("");

  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const errResult = validateRegister({
      username,
      email,
      password,
      confirmPassword,
    });
    setError(errResult);

    if (Object.keys(errResult).length === 0) {
      try {
        const res = await axios.post("/users/register", {
          username,
          email,
          password,
          confirmPassword,
        });
        navigate("/login");
      } catch (err) {
        if (err.response) {
          setApiError(err.response.data.message);
        }
      }
    }
  };

  return (
    <div className="border border-a rounded-3 p-4 bg-white shadow-sm">
      <form onSubmit={handleSubmitForm}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            username
          </label>
          <input
            type="text"
            className={`form-control ${error.username ? "is-invalid" : ""}`}
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {error.username && (
            <div className="invalid-feedback">{error.username}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className={`form-control ${error.email ? "is-invalid" : ""}`}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && <div className="invalid-feedback">{error.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${error.password ? "is-invalid" : ""}`}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password && (
            <div className="invalid-feedback">{error.password}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="confirm-password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className={`form-control ${
              error.confirmPassword ? "is-invalid" : ""
            }`}
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error.confirmPassword && (
            <div className="invalid-feedback">{error.confirmPassword}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        {apiError && (
          <div className="alert alert-danger mt-3" role="alert">
            {apiError}
          </div>
        )}
      </form>
    </div>
  );
}

export default RegisterForm;
