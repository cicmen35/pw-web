

import React from "react";

const Teaching = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-3xl font-semibold text-blue-700 mb-4">Weekly Schedule</h1>

      {/* Obrázok */}
      <img
        src="/rozvrh.png" // Cesta k obrázku
        alt="Teaching Schedule"
        className="mx-auto w-full max-w-3xl object-cover" 
      />

      {/* Tabuľka */}
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-center text-lg font-semibold text-gray-800 border-b">Kód</th>
              <th className="px-6 py-3 text-center text-lg font-semibold text-gray-800 border-b">Předmět</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="px-6 py-4 text-center text-lg text-gray-700 border-b">18PW</td>
              <td className="px-6 py-4 text-center text-lg text-gray-700 border-b">Prostředí webu a popisné jazyky</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Teaching Activities */}
      <div className=" bg-white rounded-lg shadow-md p-6 mt-12 text-left max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Teaching Activities</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>
            <strong>Exercises</strong>
            <ul className="list-disc pl-6">
              <li>Calculus 1, 2, 3, 4 (10 semesters total)</li>
              <li>Mathematics 1, 2 (5 semesters total)</li>
            </ul>
          </li>
          <li>
            <strong>Seminars</strong>
            <ul className="list-disc pl-6">
              <li>Modern Trends in Corporate Information Technologies (1 semester)</li>
            </ul>
          </li>
          <li>
            <strong>Lectures</strong>
            <ul className="list-disc pl-6">
              <li>Lattice Boltzmann Method (5 semesters total)</li>
              <li>Introduction to Computational Physics (3 semesters total)</li>
              <li>Probability and Statistics (1 semester total)</li>
              <li>Web Environment (2 semesters total)</li>
              <li>Repetition of Mathematics (1 semester total)</li>
            </ul>
          </li>
          <li>
            <strong>Supervising Students</strong>
            <ul className="list-disc pl-6">
              <li>Supervisor of 2 MSc students at FNSPE</li>
              <li>Co-supervisor of 3 MSc students at FNSPE</li>
              <li>Supervisor of 2 BSc students at FNSPE</li>
              <li>Co-supervisor of 4 BSc students at FNSPE</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Teaching;



