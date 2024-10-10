import { ChangeEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const SignUp = () => {


  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target
    setCredentials({
      ...credentials, [name]: value
    })

    switch (name) {
      case 'name':
        if (!value.match(/^[A-Za-zÀ-ÿ\s'-]{3,}$/)) {
          setErrors({
            ...errors,
            name: 'Name must be at least 3 characters long and only contain letters, spaces, apostrophes, or hyphens',
          });
        } else {
          setErrors({
            ...errors,
            name: '',
          })
        }
        break
      case 'email':
        if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          setErrors({
            ...errors,
            email: 'Please enter a valid email address',
          })
        } else {
          setErrors({
            ...errors,
            email: '',
          })
        }
        break

      case 'password':
        if (value.length < 6) {
          setErrors({
            ...errors,
            password: 'Password must be at least 6 characters',
          });
        } else {
          setErrors({
            ...errors,
            password: '',
          })
        }
        break

      case 'confirmPassword':
        if (value !== credentials.password) {
          setErrors({
            ...errors,
            confirmPassword: 'Passwords do not match',
          })
        } else {
          setErrors({
            ...errors,
            confirmPassword: '',
          })
        }
        break

      default:
        break
    }
  };

  const navigate = useNavigate()
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(credentials);
    login()
    navigate("/");  
  };


  return (
    <div className="flex min-h-screen">
      {/* Left side: Signup Form */}
      <div className="flex w-full flex-col justify-center bg-white px-6 py-12 lg:w-1/2 lg:px-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="https://baitussalam.org/images/logo-2.svg"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign up for your account
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={credentials.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required={true}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={credentials.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required={true}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={credentials.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required={true}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            {/* Confirm Password Field */}
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  value={credentials.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required={true}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                Sign up
              </button>
            </div>
          </form>
          {/* Additional Link */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?
            <NavLink
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </NavLink>
          </p>
        </div>
      </div>
      {/* Right side: Additional content (e.g., features or images) */}
      <div className="hidden items-center justify-center bg-indigo-100 lg:flex lg:w-1/2">
        <div className="p-8 text-center">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">Why Join Us?</h3>
          <p className="mb-4 text-lg text-gray-700">
            Experience the best ecommerce app for all your needs.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Get exclusive discounts and offers on your favorite products.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Fast and secure checkout process tailored for you.
          </p>
        </div>
      </div>
    </div>

  )
}

export default SignUp