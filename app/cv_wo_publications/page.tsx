import React from 'react';

const CV = () => (
  <div className="p-8 space-y-6"
  style={{
      backgroundImage: "url('background.jpg')", // Path from the 'public' folder
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
    }}
    >
    <header className="text-center">
      <h1 className="bg-gradient-to-r from-green-400 to-blue-400 p-4 rounded-lg inline-block border-2 border-gray-500 text-3xl  font-bold ">Pavel Eichler</h1>
      <div className="text-base text-white">Personal data</div>
    </header>

    {/* Personal Data */}
    <section className="space-y-4">
      <div className="grid grid-cols-2 gap-4 font bold text-white">
        <div>
          <strong>Address</strong>
          <p>Czech Republic</p>
        </div>
        <div>
          <strong>Date of Birth</strong>
          <p>-</p>
        </div>
        <div>
          <strong>Nationality</strong>
          <p>Czech Republic</p>
        </div>
        <div>
          <strong>Phone</strong>
          <p>-</p>
        </div>
        <div>
          <strong>Email</strong>
          <p><a href="mailto:pavel.eichler@fjfi.cvut.cz" className="text-white">pavel.eichler@fjfi.cvut.cz</a></p>
        </div>
        <div>
          <strong>ORCID</strong>
          <p>0000-0001-6736-7323</p>
        </div>
        <div>
          <strong>WoS h-index</strong>
          <p>4</p>
        </div>
        <div>
          <strong>Scopus h-index</strong>
          <p>4</p>
        </div>
      </div>
    </section>

    {/* Education */}
    <section className=" bg-white rounded-lg shadow-md p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Education</h2>
      <div className="space-y-2">
        <div>
          <h3 className="font-bold">• 2018-2023</h3>
          <p>PhD in Mathematical Engineering</p>
          <p>Department of Mathematics, Faculty of Nuclear Sciences and Physical Engineering, Czech Technical University in Prague</p>
          <p>Doctoral thesis: Mathematical modeling of fluid flow using lattice Boltzmann method</p>
          <p>Supervisor: Ing. Radek Fučı́k, Ph.D.</p>
        </div>
        <div>
          <h3 className="font-bold">• 2016-2018</h3>
          <p>Master's degree in Mathematical Engineering</p>
          <p>Department of Mathematics, Faculty of Nuclear Sciences and Physical Engineering, Czech Technical University in Prague</p>
          <p>Master’s thesis: Mathematical modeling of elastic body interaction with incompressible fluid</p>
          <p>Supervisor: Ing. Radek Fučı́k, Ph.D.</p>
        </div>
        <div>
          <h3 className="font-bold">• 2013-2016</h3>
          <p>Bachelor’s degree in Mathematical Engineering</p>
          <p>Department of Mathematics, Faculty of Nuclear Sciences and Physical Engineering, Czech Technical University in Prague</p>
          <p>Bachelor’s project: Mathematical modelling of subsonic flow around obstacles using Lattice-Boltzmann method on GPU</p>
          <p>Supervisor: Ing. Radek Fučı́k, Ph.D.</p>
        </div>
      </div>
    </section>

<section className=" bg-white rounded-lg shadow-md p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Language Skills</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Czech (native speaker)</li>
        <li>English (B2 CEFR)</li>
        <li>German (B1 CEFR)</li>
      </ul>
    </section>

    <section className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Technical Skills</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Linux, Windows</li>
        <li>C, C++, CUDA, Python, MPI, Asymptote, GiNaC, LATEX</li>
        <li>ANSYS Fluent, ANSYS Meshing, ANSYS Design Modeler, OpenFOAM, Matlab, Maple, Paraview, OpenLB</li>
      </ul>
    </section>

    {/* Other Activities */}
    <section className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-blue-700">Activities at FNSPE</h2>
      <ul className="list-none space-y-2">
        <li>• Promotion of the faculty (Open Days, Festival Vědy, Noc vědců, lectures at high schools)</li>
        <li>• Assistance with bureaucratic matters (organization of Mathematical Olympiad, enrolment of new students, preparatory week, preparation of new accreditation)</li>
      </ul>
    </section>



    {/*Conferences*/}
<section className=" bg-white rounded-lg shadow-md p-6 space-y-4">
  <h2 className="text-2xl font-semibold text-blue-700">Conferences</h2>
  <div>
    <h3 className="text-xl font-semibold">2024</h3>
    <ul className="list-none space-y-2">
      <li>• LBM in Kraków 2024, Poland - Talk: Grid refinement for lattice Boltzmann method</li>
      <li>• CFD in Wroclaw, Poland - Invited Talk: LBMAT-Equivalent partial differential equations for LBM</li>
      <li>• Workshop on Scientific Computing, Czech Republic - Talk: Quantum qubit state and Schrödinger equation</li>
    </ul>
  </div>
  <div>
    <h3 className="text-xl font-semibold">2023</h3>
    <ul className="list-none space-y-2">
      <li>• LBM in Kraków 2023, Poland - Talk: Mesoscopic boundary conditions for lattice Boltzmann method</li>
      <li>• Workshop on Scientific Computing, Czech Republic - Talk: Non-Newtonian Blood Flow in Aortic Phantom: An Experimental and Computational Study</li>
    </ul>
  </div>
  <div>
    <h3 className="text-xl font-semibold">2022</h3>
    <ul className="list-none space-y-2">
      <li>• LBM in Kraków 2022, Poland - Talk: Fluid Flow Simulations through Distributor Plate Using Cumulant Lattice Boltzmann Method</li>
      <li>• 18th International Conference on Numerical Combustion, USA - Talk: Experimental and numerical investigation of air flow through the distributor plate</li>
      <li>• High Performance Computing in Science and Engineering, Czech Republic - Talk: Turbulent fluid flow simulations using LBM</li>
      <li>• 5th Spring School Lattice Boltzmann Methods, Poland - Poster: 3D turbulent fluid flow simulations above rough plate using LBM</li>
    </ul>
  </div>
  <div>
    <h3 className="text-xl font-semibold">2021</h3>
    <ul className="list-none space-y-2">
      <li>• Czech-Japanese Seminar in Applied Mathematics 2021 (online) - Talk: Turbulent fluid flow simulations using cumulant lattice Boltzmann method</li>
      <li>• LBM in Kraków 2021 (online) - Talk: Turbulent boundary layer flow simulations using cumulant lattice Boltzmann method</li>
    </ul>
  </div>
  <div>
    <h3 className="text-xl font-semibold">2020</h3>
    <ul className="list-none space-y-2">
      <li>• LBM in Kraków 2020, Poland - Talk: Boundary layer flow simulations using lattice Boltzmann method above smooth and rough surfaces</li>
      <li>• VPH Conference, Paris (online) - Talk: CFD & MRI: Methods & experiments to meet cardiovascular clinic needs</li>
    </ul>
  </div>
  <div>
    <h3 className="text-xl font-semibold">2019</h3>
    <ul className="list-none space-y-2">
      <li>• High Performance Computing in Science and Engineering, Czech Republic - Talk: A modified immersed boundary-lattice Boltzmann method for incompressible fluid flow in 2D and 3D on GPU</li>
      <li>• Workshop on Scientific Computing, Czech Republic - Talk: A modified IB-LB method for incompressible fluid flow in 2D and 3D on GPU</li>
    </ul>
  </div>
  <div>
    <h3 className="text-xl font-semibold">2018</h3>
    <ul className="list-none space-y-2">
      <li>• Fluid Dynamics Conference, Vienna 2018 - Talk: Numerical methods for simulating fluid dynamics</li>
    </ul>
  </div>
  <div>
    <h3 className="text-xl font-semibold">2017</h3>
    <ul className="list-none space-y-2">
      <li>• Mathematical Modeling Workshop, Budapest 2017 - Talk: Advances in lattice Boltzmann modeling</li>
    </ul>
  </div>
  <div>
    <h3 className="text-xl font-semibold">2016</h3>
    <ul className="list-none space-y-2">
      <li>• Computational Fluid Dynamics, Prague 2016 - Talk: New techniques in lattice Boltzmann methods</li>
    </ul>
  </div>
</section>



    {/* Stays Abroad */}
    <section className=" bg-white rounded-lg shadow-md p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Stays Abroad</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>July 10-13 2018. Kanazawa Institute of Technology, Kanazawa, Japan.</li>
        <li>June 24-29 2019. PUMPS+AI Summer School 2019, Barcelona, Spain.</li>
        <li>January 18-25 2020. Center for Experimental Study of Subsurface Environmental Processes (CESEP), Colorado School of Mines, Golden, Colorado, USA.</li>
        <li>February 7-15 2022. Center for Experimental Study of Subsurface Environmental Processes (CESEP), Colorado School of Mines, Golden, Colorado, USA.</li>
        <li>June 6-10 2022. 5th Spring School Lattice Boltzmann Methods with OpenLB Software Lab, Kraków, Poland.</li>
      </ul>
    </section>

    {/* Awards */}
    <section className=" bg-white rounded-lg shadow-md p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Awards</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>2018: Award of Nadace Josefa, Marie a Zdeňky Hlávkových for excellent master’s thesis</li>
        <li>2022: Award of 5th Spring School Lattice Boltzmann Methods with OpenLB Software Lab for best scientific poster</li>
      </ul>
    </section>

    {/* Soft Skills */}
    <section className=" bg-white rounded-lg shadow-md p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Soft Skills</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Communication skills, Teamwork</li>
        <li>Reliability, Self-Discipline, Time management skills</li>
        <li>Critical and analytical thinking, Problem solving skills</li>
      </ul>
    </section>
  </div>
);

export default CV;

