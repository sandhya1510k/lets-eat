import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Github, Mail } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password, rememberMe });
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1 d-flex justify-content-center align-items-center py-5 px-3">
        <div className="w-100" style={{ maxWidth: "420px" }}>
          <div className="card shadow rounded-4 p-4">
            <div className="text-center mb-4">
              <h2 className="fw-bold text-dark">Welcome Back</h2>
              <p className="text-muted">Sign in to continue to TableTales & Takeaway</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <label htmlFor="password" className="form-label fw-semibold">Password</label>
                  <Link to="/forgot-password" className="text-danger small text-decoration-none">
                    Forgot password?
                  </Link>
                </div>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>

              <button type="submit" className="btn btn-danger w-100">
                Sign In
              </button>
            </form>

            <div className="mt-4">
              <div className="text-center position-relative mb-3">
                <hr className="text-muted" />
                <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted small">
                  Or continue with
                </span>
              </div>

              <div className="d-flex gap-2">
                <button className="btn btn-outline-secondary w-100 d-flex justify-content-center align-items-center">
                  <Facebook size={16} />
                </button>
                <button className="btn btn-outline-secondary w-100 d-flex justify-content-center align-items-center">
                  <Mail size={16} />
                </button>
                <button className="btn btn-outline-secondary w-100 d-flex justify-content-center align-items-center">
                  <Github size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-3">
            <p className="text-muted">
              Don't have an account?{" "}
              <Link to="/signup" className="text-danger fw-semibold text-decoration-none">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
