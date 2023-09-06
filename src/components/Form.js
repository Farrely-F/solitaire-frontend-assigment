import React, { useState } from "react";
import useAddUser from "@/hooks/useRegister";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

export function AddUser() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    job: "",
    avatar: "",
  });

  // Pass the API endpoint URL as a prop to the custom hook
  const { isSubmitting, submitError, submitSuccess, addUser } = useAddUser(`${process.env.NEXT_PUBLIC_API_URL}/users`);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addUser(formData); // Call the addUser function from the custom hook
  };

  return (
    <div>
      <section className="bg-gray-2 rounded-xl">
        <div className="p-8 shadow-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="firstName">
                  First Name
                </label>
                <input className="input input-solid" placeholder="First Name" type="text" id="firstName" name="first_name" />
              </div>
              <div>
                <label className="sr-only" htmlFor="lastName">
                  Last Name
                </label>
                <input className="input input-solid" placeholder="Last Name" type="text" id="lastName" name="last_name" />
              </div>
            </div>
            <div className="w-full">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input className="input input-solid max-w-full" placeholder="Email" type="email" id="email" name="email" />
            </div>
            <div className="w-full">
              <label className="sr-only" htmlFor="job">
                Job
              </label>
              <input className="input input-solid max-w-full" placeholder="Job Role" type="text" id="job" name="job" />
            </div>
            <div className="w-full">
              <label className="sr-only" htmlFor="avatar">
                Avatar
              </label>
              <input className="input input-solid max-w-full" placeholder="Avatar Url" type="text" id="avatar" name="avatar" />
            </div>

            <div className="mt-4">
              <button type="submit" className="rounded-lg btn btn-primary btn-block" disabled={isSubmitting}>
                {isSubmitting ? "Adding User..." : "Add User"}
              </button>
            </div>
          </form>
          {submitSuccess && <p className="text-green-500">User added successfully!</p>}
          {submitError && <p className="text-red-500">Error: {submitError}</p>}
        </div>
      </section>
    </div>
  );
}

export function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your login logic here, e.g., make an API request to authenticate the user.
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, formData);

      if (response.status === 200) {
        // Login successful, store the user token (you can use local storage, state, or a context)
        const userToken = response.data.token;

        // Example: Store the token in local storage
        localStorage.setItem("userToken", userToken);

        // Redirect the user to the home page
        router.push("/"); // Change the URL to your home page route
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
    // You can use the formData to send the user's email and password.
    console.log("Login form submitted with data:", formData);
  };

  return (
    <>
      <div className="mx-auto flex w-full max-w-sm flex-col gap-6 p-5 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold">Sign In</h1>
          <p className="text-sm">Sign in to access your account</p>
        </div>
        <div className="form-group">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="form-field">
              <label className="form-label">Email address</label>
              <input
                placeholder="mail@mail.com"
                type="email"
                className="input bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white max-w-full placeholder:text-white/50"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required="true"
              />
            </div>
            <div className="form-field">
              <label className="form-label">Password</label>
              <div className="form-control">
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-lg bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white max-w-full placeholder:text-white/50 pl-10"
                  placeholder="Enter password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required="true"
                />
                <span onClick={handleTogglePassword} className="absolute inset-y-0 left-3 inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-content3 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path d="M1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12ZM12.0003 17C14.7617 17 17.0003 14.7614 17.0003 12C17.0003 9.23858 14.7617 7 12.0003 7C9.23884 7 7.00026 9.23858 7.00026 12C7.00026 14.7614 9.23884 17 12.0003 17ZM12.0003 15C10.3434 15 9.00026 13.6569 9.00026 12C9.00026 10.3431 10.3434 9 12.0003 9C13.6571 9 15.0003 10.3431 15.0003 12C15.0003 13.6569 13.6571 15 12.0003 15Z"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="form-field">
              <div className="form-control justify-between">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" className="checkbox bg-transparent" />
                  <a href="#">Remember me</a>
                </div>
              </div>
            </div>
            <div className="form-field pt-5">
              <div className="form-control justify-between">
                <button type="submit" className="btn bg-blue-600 w-full">
                  Sign in
                </button>
              </div>
            </div>
          </form>
          <div className="form-field">
            <div className="form-control justify-center">
              <Link href={"/register"} className="link link-underline-hover text-sm">
                {`Don't have an account yet? Sign up.`}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// RegisterForm.js
export function RegisterForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [passwordMatchError, setPasswordMatchError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your registration logic here, e.g., make an API request to create a new user.
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError("Passwords do not match");
      return;
    }

    try {
      // Reset the password match error if there was one
      setPasswordMatchError("");

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, formData);

      if (response.status === 200) {
        // Registration successful, store the user token (you can use local storage, state, or a context)
        const userToken = response.data.token;

        // Example: Store the token in local storage
        localStorage.setItem("userToken", userToken);
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
    // You can use the formData to send the user's email and password.
    console.log("Registration form submitted with data:", formData);
  };

  return (
    <>
      <div className="mx-auto flex w-full max-w-sm flex-col gap-6 p-5 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold">Sign Up</h1>
          <p className="text-sm">Please register to use our service</p>
        </div>
        <div className="form-group">
          <form
            className="space-y-4"
            onSubmit={() => {
              handleSubmit();
              router.push("/");
            }}
          >
            <div className="form-field">
              <label className="form-label">Email address</label>
              <input
                placeholder="mail@mail.com"
                type="email"
                className="input bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white max-w-full placeholder:text-white/50"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label className="form-label">Password</label>
              <div className="form-control">
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-lg bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white max-w-full placeholder:text-white/50 pl-10"
                  placeholder="Enter password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span className="absolute inset-y-0 left-3 inline-flex items-center">
                  <svg onClick={handleTogglePassword} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-content3 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path d="M1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12ZM12.0003 17C14.7617 17 17.0003 14.7614 17.0003 12C17.0003 9.23858 14.7617 7 12.0003 7C9.23884 7 7.00026 9.23858 7.00026 12C7.00026 14.7614 9.23884 17 12.0003 17ZM12.0003 15C10.3434 15 9.00026 13.6569 9.00026 12C9.00026 10.3431 10.3434 9 12.0003 9C13.6571 9 15.0003 10.3431 15.0003 12C15.0003 13.6569 13.6571 15 12.0003 15Z"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="form-field">
              <label className="form-label">Confirm Password</label>
              <div className="form-control">
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-lg bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white max-w-full placeholder:text-white/50 pl-10"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <span className="absolute inset-y-0 left-3 inline-flex items-center">
                  <svg onClick={handleTogglePassword} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-content3 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path d="M1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12ZM12.0003 17C14.7617 17 17.0003 14.7614 17.0003 12C17.0003 9.23858 14.7617 7 12.0003 7C9.23884 7 7.00026 9.23858 7.00026 12C7.00026 14.7614 9.23884 17 12.0003 17ZM12.0003 15C10.3434 15 9.00026 13.6569 9.00026 12C9.00026 10.3431 10.3434 9 12.0003 9C13.6571 9 15.0003 10.3431 15.0003 12C15.0003 13.6569 13.6571 15 12.0003 15Z"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="form-field pt-5">
              <div className="form-control justify-between">
                <button
                  onClick={() => {
                    handleSubmit();
                    router.push("/");
                  }}
                  type="submit"
                  className="btn bg-blue-600 w-full"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
          <div className="form-field">
            <div className="form-control justify-center">
              <Link className="link link-underline-hover text-sm" href={"/login"}>
                Already have an account? Sign in.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
