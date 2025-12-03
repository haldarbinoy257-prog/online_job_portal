import React from "react";
import JobCard from "../components/JobCard";

export default function Jobs() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechSoft Pvt Ltd",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹6 - 10 LPA",
      tags: ["React", "JavaScript", "CSS"],
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "CloudNet Solutions",
      location: "Remote",
      type: "Full-time",
      salary: "₹8 - 14 LPA",
      tags: ["Node.js", "MongoDB", "API"],
    },
    {
      id: 3,
      title: "Java Developer",
      company: "Global Infotech",
      location: "Noida, India",
      type: "Internship",
      salary: "₹15k / month",
      tags: ["Java", "Spring Boot"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-4">Latest Jobs</h2>
        <p className="text-gray-600 mb-6">
          Browse the latest job opportunities and apply quickly.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </div>
  );
}
