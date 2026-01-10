import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser, emailVerification, loading, setSuccess, setLoading } =
    useContext(AuthContext);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    // Basic validation
    if (name.length < 5) {
      setError("Name should be at least 5 characters");
      toast.error("Name should be at least 5 characters");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      toast.error("Password should be at least 6 characters");
      setLoading(false);
      return;
    }

    // Create user
    createUser(email, password)
      .then(() => {
        // Send verification email
        emailVerification()
          .then(() => {
            setSuccess(true);
            toast.success("Registration successful! ✅ Welcome!", {
              position: "top-right",
              autoClose: 3000,
              theme: "colored",
            });

            // Redirect to Home page
            navigate("/");
          })
          .catch(() => {
            toast.warning(
              "Registration successful! But verification email failed."
            );
            navigate("/");
          })
          .finally(() => setLoading(false));
      })
      .catch((err) => {
        setError(err.message);
        toast.error(err.message);
        setLoading(false);
      });

    form.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-300 rounded-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center text-primary mb-1">
            Create Account
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            Join us and start your journey today
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full focus:border-primary"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full focus:border-primary"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                className="input input-bordered w-full focus:border-primary"
                required
              />
            </div>

            {error && (
              <p className="text-red-500 text-xs text-center">{error}</p>
            )}

            <button
              disabled={loading}
              className="btn w-full bg-primary hover:bg-secondary text-white mt-2 disabled:opacity-70"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* ToastContainer included inside Register component */}
      <ToastContainer />
    </div>
  );
};

export default Register;
