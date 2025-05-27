import { useState } from "react";

const AdminLoginPage = ({ onLogin, isLoading }) => {
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setError("");
    const success = await onLogin(email, password);
    if (!success) {
      setError("Invalid credentials. Please try again.");
    }
  };

  const handleForgotPassword = () => {
    setMessage("Password reset functionality coming soon.");
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-sm p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="text-center mb-4">
          <h2 className="text-primary fw-bold">Admin Login</h2>
          <p className="text-muted small">
            Enter your credentials to access the dashboard
          </p>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}
        {message && <div className="alert alert-info">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <label htmlFor="password" className="form-label fw-semibold">
                Password
              </label>
              <a
                href="#"
                className="text-decoration-none small text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleForgotPassword();
                }}
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign in"}
          </button>

          <p className="mt-3 text-center text-muted small">
            Demo credentials: <strong>admin@example.com</strong> / <strong>admin123</strong>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
