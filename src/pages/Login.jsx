import React, { useContext, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, forget, googleLogin } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const emailRef = useRef();

  // Google Login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  // Email/Password Login
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;

        // ✅ Email Verification Check
        if (!user.emailVerified) {
          setError("Please verify your email before logging in.");
          return signOut(auth); // optional: logout immediately
        }

        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        setError(err.code);
      });
  };

  // Forget Password
  const handleForgetPassword = () => {
    const email = emailRef.current.value;

    if (!email) {
      setError("Please enter your email first");
      return;
    }

    forget(email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((err) => {
        setError(err.code);
      });
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

          {/* Google Login */}
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

            <div className="flex flex-wrap gap-1 items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-sm"
                />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                onClick={handleForgetPassword}
                className="text-accent hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-xs text-center">{error}</p>
            )}

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
