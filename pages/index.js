import React from "react";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white p-6">
        <h1 className="text-2xl font-bold mb-6">Spanish Hub</h1>
        <ul>
          <li className="mb-4 hover:text-gray-200 cursor-pointer">Home</li>
          <li className="mb-4 hover:text-gray-200 cursor-pointer">Lessons</li>
          <li className="mb-4 hover:text-gray-200 cursor-pointer">Vocabulary</li>
          <li className="mb-4 hover:text-gray-200 cursor-pointer">Practice</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h2 className="text-3xl font-bold mb-6">Welcome, User!</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">Start Lesson</div>
          <div className="bg-white p-6 rounded shadow">Daily Challenge</div>
          <div className="bg-white p-6 rounded shadow">Watch Spanish Videos</div>
        </div>
      </div>
    </div>
  );
}
