import React from "react";
import { useForm } from "react-hook-form";

export default function RegistrationComponent() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="shadow-md rounded-md p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">Register an account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-white">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              {...register("username", { required: "Username is required" })}
              className={`w-full py-1.5 mt-2 px-3 rounded-md border focus:ring focus:ring-green-500 ${errors.username ? "border-red-500" : ""}`}
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              {...register("email", { required: "Email is required", pattern: /^[a-zA-Z0-9+_.-]+@([a-zA-Z0-9]+[.])+[a-zA-Z0-9]{2,4}$/ })}
              className={`w-full py-1.5 mt-2 px-3 rounded-md border focus:ring focus:ring-green-500 ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" } })}
              className={`w-full py-1.5 mt-2 px-3 rounded-md border focus:ring focus:ring-green-500 ${errors.password ? "border-red-500" : ""}`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500 focus:ring focus:ring-green-500"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-4 text-sm text-center">
          <p className="text-white">Already have an account?</p>
          <a href="https://login-kalethabh.vercel.app/" className="text-green-600 font-semibold hover:underline">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}
