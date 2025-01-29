import React from 'react';

const CurrentOrPastResearches = () => {
  return (

    <section className="space-y-12 px-8 py-16">

    <div className="w-full max-w-full"> 
            <video
                className="w-full h-auto rounded-lg hadow-lg"
                src="/video.mp4"
                autoPlay
                loop
                muted
                playsInline
            >
                Your browser does not support the video tag.
            </video>
        </div>

      {/* Research Interests Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">Research Interests</h2>
        <ul className=" pl-6 space-y-4 text-gray-800">
          <li>
            <strong>Lattice Boltzmann method</strong>
            <p className="text-gray-600">
              Development, analysis, parallel implementation, and applications.
            </p>
          </li>
          <li>
            <strong>Immersed boundary method</strong>
            <p className="text-gray-600">Development, analysis, and applications.</p>
          </li>
          <li>
            <strong>Multiphase flow</strong>
            <p className="text-gray-600">Research and applications in multiphase systems.</p>
          </li>
          <li>
            <strong>Quantum computing</strong>
            <p className="text-gray-600">
              Development of methods to prepare particular states of quantum qubits.
            </p>
          </li>
          <li>
            <strong>CVD and PVD material coating</strong>
            <p className="text-gray-600">
              Development of numerical methods for simulations of processes within CVD and PVD.
            </p>
          </li>
          <li>
            <strong>Application of AI models</strong>
            <ul className=" pl-6 space-y-2 text-gray-600">
              <li>Application of neural network models for text recognition.</li>
              <li>Use of neural network models for dimensionality reduction in numerical methods.</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Research Projects Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">Research Projects</h2>
        <ul className=" pl-6 space-y-4 text-gray-800">
          <li>
            <strong>IIS medic-patient</strong>, project no. FW06010667 of Technology Agency of the Czech Republic (2023-2025).
          </li>
          <li>
            <strong>Off-diagonal thermodynamics</strong>, project no. 24-11247S of the Czech Science Foundation (2024-2026).
          </li>
          <li>
            <strong>Analysis of flow character and prediction of evolution in endovascular treated arteries</strong> by MRI and mathematical modeling, project no. NV19-08-00071 of Ministry of Health (2019-2022).
          </li>
          <li>
            <strong>Research centre for low-carbon energy technologies</strong>, project no. CZ.02.1.01/0.0/0.0/16 019/0000753 (2018-2022).
          </li>
          <li>
            <strong>Large structures in boundary layers over complex surfaces</strong> under high Reynolds numbers, project no. 18-09539S (2018-2020).
          </li>
          <li>
            <strong>Application of advanced supercomputing methods</strong> in mathematical modeling of natural processes, project no. SGS17/194/OHK4/3T/14 (2017-2019).
          </li>
        </ul>
      </div>

      {/* Submitted Research Projects Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">Submitted Research Projects</h2>
        <ul className=" pl-6 space-y-6 text-gray-800">
          <li className="space-y-2">
            <strong className="text-xl text-gray-800">
              Development, analysis, and applications of advanced lattice Boltzmann methods
            </strong>
            <p className="text-gray-800">
              <strong>Registration number:</strong> 25-17245M <br />
              <strong>Type:</strong> Junior Star <br />
              <strong>Provider:</strong> GAČR <br />
              <strong>Role:</strong> Principal investigator <br />
              <strong>Duration:</strong> 5 years <br />
              <strong>Initial year:</strong> 2025 <br />
              <strong>Total support:</strong> 12,092 tis Kč <br />
              <strong>Status:</strong> In the evaluation process
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CurrentOrPastResearches;
