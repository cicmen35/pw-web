// app/publications/page.tsx
import React from "react";

const Publications = () => {
  return (
    <main className="p-8">
    <section className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
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
        </section>
      <h1 className="text-4xl font-bold text-blue-600">Publications</h1>
      <p className="mt-4 text-lg text-gray-700">
        Here you can find a list of my publications.
      </p>

      {/* Impacted papers (WoS & Scopus) */}
      <h2 className="text-2xl font-semibold mt-6">Impacted papers (WoS & Scopus)</h2>
      <ul className="mt-4 list-decimal pl-6">
        <li>
          <strong>Fučík, R., Eichler, P., Straka, R., Pauš, P., Klinkovský, J., Oberhuber, T. (2019).</strong> On optimal node spacing for immersed boundary–lattice Boltzmann method in 2D and 3D. Computers and Mathematics with Applications, 77(4), 1144-1162.{" "}
          <a
            href="https://doi.org/10.1016/j.camwa.2018.10.045"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            DOI: 10.1016/j.camwa.2018.10.045
          </a>
        </li>
        <li>
          <strong>Eichler, P., Fučík, R., Straka, R. (2021).</strong> Computational study of immersed boundary – lattice Boltzmann method for fluid-structure interaction. Discrete and Continuous Dynamical Systems-S, 14(3), 819-833.{" "}
          <a
            href="https://doi.org/10.3934/dcdss.2020349"
           rel="noopener noreferrer"
            className="text-blue-500"
          >
            DOI: 10.3934/dcdss.2020349
          </a>
        </li>
        <li>
          <strong>Beneš, M., Eichler, P., Klinkovský, J., Kolář, M., Solovský, J., Strachota, P., Žák, A. (2021).</strong> Numerical simulation of fluidization for application in oxyfuel combustion. Discrete and Continuous Dynamical Systems-S, 14(3), 769-783.{" "}
          <a
            href="https://doi.org/10.3934/dcdss.2020232"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            DOI: 10.3934/dcdss.2020232
          </a>
        </li>
        <li>
          <strong>Fučík, R., Galabov, R., Pauš, P., Eichler, P., Klinkovský, J., Tintěra, J., Chabiniok, R. (2020).</strong> Investigation of phase-contrast magnetic resonance imaging underestimation of turbulent flow through the aortic valve phantom: Experimental and computational study using lattice Boltzmann method. Magnetic Resonance Materials in Physics, Biology and Medicine, 33(5), 649-662.{" "}
          <a
            href="https://doi.org/10.1007/s10334-020-00837-5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            DOI: 10.1007/s10334-020-00837-5
          </a>
        </li>
        <li>
          <strong>Eichler, P., Fuka, V. Fučík, R. (2021).</strong> Cumulant lattice Boltzmann simulations of turbulent flow above rough surfaces. Computers and Mathematics with Applications, 92, 37-47.{" "}
          <a
            href="https://doi.org/10.1016/j.camwa.2021.03.016"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            DOI: 10.1016/j.camwa.2021.03.016
          </a>
        </li>
        <li>
          <strong>Beneš, M., Eichler, P., Fučík, R., Hrdlička, J., Klinkovský, J., Kolář, M., Smejkal, T., Skopec, P., Solovský, J., Strachota, P., Straka, R., Žák, A. (2022).</strong> Experimental and numerical investigation of air flow through the distributor plate in a laboratory-scale model of a bubbling fluidized bed boiler. Japan Journal of Industrial and Applied Mathematics, 39(3), 943-958.{" "}
          <a
            href="https://doi.org/10.1007/s13160-022-00518-x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            DOI: 10.1007/s13160-022-00518-x
          </a>
        </li>
        <li>
          <strong>Fučík, R., Eichler, P., Klinkovský, J., Straka, R., Oberhuber, T. (2022).</strong> Lattice Boltzmann Method Analysis Tool (LBMAT). Numerical Algorithms, 1-17.{" "}
          <a
            href="https://doi.org/10.1007/s11075-022-01476-8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            DOI: 10.1007/s11075-022-01476-8
          </a>
        </li>
        <li>
          <strong>Beneš, M., Eichler, P., Hrdlička, J., Klinkovský, J., Kolář, M., Smejkal, T., Skopec, P., Solovský, J., Strachota, P., Žák, A. (2022).</strong> Experimental Validation of Multiphase Particle-in-Cell Simulations of Fluidization in a Bubbling Fluidized Bed Combustor. Powder Technology, 416, 118204.{" "}
          <a
            href="https://doi.org/10.1016/j.powtec.2022.118204"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            DOI: 10.1016/j.powtec.2022.118204
          </a>
        </li>
        <li>
          <strong>Eichler, P., Galabov, R., Fučík, R., Škardová, K., Oberhuber, T., Pauš, P., Tintěra, J., Chabiniok, R. (2023).</strong> Non-Newtonian turbulent flow through aortic phantom: Experimental and computational study using magnetic resonance imaging and lattice Boltzmann method. Computers and Mathematics with Applications, 136, 80-94.{" "}
          <a
            href="https://doi.org/10.1016/j.camwa.2023.01.031"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            DOI: 10.1016/j.camwa.2023.01.031
          </a>
        </li>
      </ul>

      {/* Contribution in proceedings */}
      <h2 className="text-2xl font-semibold mt-6">Contribution in proceedings</h2>
      <ul className="mt-4 list-decimal pl-6">
        <li>
          <strong>Eichler, P., Fučík, R.</strong> Numerical Analysis of Immersed Boundary Lattice Boltzmann Method for Fluid-Structure Interaction. Doktorandské dny 2018, eds: Ambrož P., Masáková Z., pp. 23-24.
        </li>
        <li>
          <strong>Eichler, P., Fučík, R.</strong> Boundary layer flow simulations using lattice Boltzmann method. Doktorandské dny 2019, eds: Ambrož P., Masáková Z., pp. 19-28.
        </li>
        <li>
          <strong>Eichler, P.</strong> Cumulant lattice Boltzmann simulations of turbulent flow above rough surfaces. Doktorandské dny 2020, eds: Ambrož P., Masáková Z., pp. 11-22.
        </li>
        <li>
          <strong>Eichler, P., Malík, M., Oberhuber, T., Fučík, R.</strong> Numerical investigation of the discrete solution of phase-field equation. ALGORITMY 2020, 21st Conference on Scientific Computing. Vysoké Tatry, Podbanské, Slovakia, September 10-15, 2020. Proceedings of contributed papers. Bratislava: VYDAVATEĽSTVO SPEKTRUM STU, 2020. p. 111-120.
        </li>
        <li>
          <strong>Škardová, K., Eichler, P., Gusseva, M., Galabov, R., Chabiniok, R., Fučík, R., Tintěra, J., Oberhuber, T. (2022).</strong> Translational Cardiovascular Modeling: Tetralogy of Fallot and Modeling of Diseases. In: Modeling Biomaterials. Birkhäuser, Cham, 2021. p. 241-276.{" "}
          <a
            href="https://doi.org/10.1007/978-3-030-88084-2_6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            DOI: 10.1007/978-3-030-88084-2_6
          </a>
        </li>
      </ul>

      {/* Book chapters */}
      <h2 className="text-2xl font-semibold mt-6">Book chapters</h2>
      <ul className="mt-4 list-decimal pl-6">
        <li>
          <strong>Chabiniok, R., Škardová, K., Galabov, R., Eichler, P., Gusseva, M., Janoušek, J., Fučík, R., Tintera, J., Hussain, T.</strong> Translational Cardiovascular Modeling: Tetralogy of Fallot and Modeling of Diseases. In: Modeling Biomaterials. Birkhäuser, Cham, 2021. p. 241-276.{" "}
          <a
            href="https://doi.org/10.1007/978-3-030-88084-2_6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            DOI: 10.1007/978-3-030-88084-2_6
          </a>
        </li>
      </ul>
    </main>
  );
};

export default Publications;
