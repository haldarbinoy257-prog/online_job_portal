import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-2 text-center">Login</h2>
        <p className="text-gray-500 text-sm mb-6 text-center">
          Login to apply for jobs and manage your profile.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-blue-600 font-semibold">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
