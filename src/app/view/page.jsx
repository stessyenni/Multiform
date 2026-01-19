import React from "react";

async function getUsers() {
  try {
    const response = await fetch(
      "https://surveyform-deploy.vercel.app/api/survey",
      {
        cache: "no-store",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, msg: [error.message || "Unknown error occured."] };
  }
}

export default async function Survey() {
  const allUsers = await getUsers();

  if (!allUsers?.success === true) {
    return (
      <div className="text-center mt-10 text-red-500">
        Failed to load survey data
      </div>
    );
  }
  const users = allUsers.data;
  return (
    <div className="overflow-x-auto max-w-7xl mx-auto mt-10 p-4">
      <table className="min-w-full border border-gray-300 rounded-lg shadow-md text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-2 border">S1.No</th>
            <th className="px-4 py-2 border">Full Name</th>
            <th className="px-4 py-2 border">Age</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Education</th>
            <th className="px-4 py-2 border">Department</th>
            <th className="px-4 py-2 border">Job Title</th>
            <th className="px-4 py-2 border">Job Type</th>
          </tr>
        </thead>

        <tbody>
          {users.map((item, index) => (
            <tr
              key={item._id}
              className="border hover:bg-gray-50 even:bg-gray-50 transition"
            >
              <td className="px-4 py-2 border">{index + 1}.</td>
              <td className="px-4 py-2 border">{item.fullname}</td>
              <td className="px-4 py-2 border">{item.age}</td>
              <td className="px-4 py-2 border">{item.email}</td>
              <td className="px-4 py-2 border">{item.education}</td>
              <td className="px-4 py-2 border">{item.department}</td>
              <td className="px-4 py-2 border">{item.jobtitle}</td>
              <td className="px-4 py-2 border">{item.jobtype}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
