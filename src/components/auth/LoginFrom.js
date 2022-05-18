import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { validateLogin } from "../../services/validate";

function LoginFrom() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [apiError, setApiError] = useState("");

  const { login } = useContext(AuthContext);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const errResult = validateLogin({ username, password });
    setError(errResult);

    if (Object.keys(errResult).length === 0) {
      try {
        const res = await axios.post("/users/login", { username, password });
        localStorage.setItem(
          process.env.REACT_APP_ACCESS_TOKEN,
          res.data.token
        );
        login();
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
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      {apiError && (
        <div className="alert alert-danger mt-3" role="alert">
          {apiError}
        </div>
      )}
    </div>
  );
}

export default LoginFrom;
