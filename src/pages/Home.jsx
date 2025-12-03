import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm font-semibold text-blue-600 mb-3">
            Online Job Portal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your <span className="text-blue-600">dream job</span> today.
          </h1>
          <p className="text-gray-600 mb-6">
            Search thousands of jobs from top companies. Apply in seconds and
            track your applications in one place.
          </p>

          {/* Search bar (UI only) */}
          <div className="bg-white shadow-md rounded-xl p-3 flex flex-col md:flex-row gap-3 mb-6">
            <input
              type="text"
              placeholder="Job title or keyword"
              className="flex-1 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Location"
              className="flex-1 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">
              Search
            </button>
          </div>

          <div className="flex gap-6 text-sm text-gray-600">
            <div>
              <p className="text-xl font-bold text-gray-900">5k+</p>
              <p>Active Jobs</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">2k+</p>
              <p>Companies</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">10k+</p>
              <p>Job Seekers</p>
            </div>
          </div>
        </div>

        {/* Right side illustration */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Top Categories</h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="p-3 rounded-xl bg-blue-50">Software Developer</div>
            <div className="p-3 rounded-xl bg-purple-50">Data Analyst</div>
            <div className="p-3 rounded-xl bg-green-50">Web Designer</div>
            <div className="p-3 rounded-xl bg-yellow-50">Support Engineer</div>
          </div>

          <div className="mt-6 border-t pt-4 text-sm text-gray-600">
            <p className="mb-2 font-semibold text-gray-800">How it works?</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Create your profile</li>
              <li>Search and apply for jobs</li>
              <li>Get hired by top companies</li>
            </ol>

            <Link
              to="/signup"
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
