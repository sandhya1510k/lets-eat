import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Github, Mail } from "lucide-react";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agreeTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }

    console.log("Signup attempt:", { name, email, password, agreeTerms });

    setSuccess("Account created! You can now sign in.");
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAgreeTerms(false);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm rounded">
            <div className="card-body">
              <h2 className="card-title text-center mb-3">Create an Account</h2>
              <p className="text-center text-muted mb-4">
                Join TableTales & Takeaway to start your culinary journey
              </p>

              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                  <input
                    id="confirm-password"
                    type="password"
                    className="form-control"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="agree-terms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    required
                  />
                  <label className="form-check-label" htmlFor="agree-terms">
                    I agree to the{" "}
                    <Link to="/terms" className="text-danger text-decoration-none">Terms of Service</Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-danger text-decoration-none">Privacy Policy</Link>
                  </label>
                </div>

                <button type="submit" className="btn btn-danger w-100">Create Account</button>
              </form>

              <div className="text-center mt-4">
                <div className="d-flex align-items-center">
                  <hr className="flex-grow-1" />
                  <span className="px-2 text-muted">Or sign up with</span>
                  <hr className="flex-grow-1" />
                </div>

                <div className="d-flex justify-content-around mt-3">
                  <button className="btn btn-outline-secondary">
                    <Facebook size={18} />
                  </button>
                  <button className="btn btn-outline-secondary">
                    <Mail size={18} />
                  </button>
                  <button className="btn btn-outline-secondary">
                    <Github size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-3">
            <p className="text-muted">
              Already have an account?{" "}
              <Link to="/login" className="text-danger fw-semibold text-decoration-none">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
