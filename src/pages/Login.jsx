import React, { useContext, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Login successful!"); // ✅ only success toast
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {});
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        toast.success("Login successful!"); // ✅ only success toast
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {}); // ignore error toast
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-300 rounded-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center text-primary mb-1">
            Welcome Back 👋
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            Login to continue to your account
          </p>

          <button
            onClick={handleGoogleLogin}
            type="button"
            className="btn w-full bg-base-100 border border-base-300 hover:bg-base-200 flex items-center justify-center gap-2 mb-4"
          >
            <FcGoogle size={20} />
            <span className="text-sm font-medium text-[#0F0F0F]">
              Continue with Google
            </span>
          </button>

          <div className="divider text-sm text-gray-400">OR</div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                ref={emailRef}
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
                placeholder="Enter your password"
                className="input input-bordered w-full focus:border-primary"
                required
              />
            </div>

            <button className="btn w-full bg-primary hover:bg-secondary text-white">
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            Don’t have an account?{" "}
            <Link
              to="/auth/register"
              className="text-primary font-medium hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
