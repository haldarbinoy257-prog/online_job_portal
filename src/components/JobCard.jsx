import React from "react";

const JobCard = ({ title, company, location, type, salary, tags }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col gap-2">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{company}</p>

      <div className="text-sm text-gray-500">
        <span>{location}</span> • <span>{type}</span>
      </div>

      {salary && (
        <p className="text-sm font-medium text-green-600">
          Salary: {salary}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mt-2">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <button className="mt-3 self-start bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700">
        View Details
      </button>
    </div>
  );
};

export default JobCard;
