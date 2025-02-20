"use client";

import React, { useState } from "react";

export default function DropshippingCourses() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`min-h-screen p-4 flex flex-col items-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <header
        className={`w-full p-4 text-center text-2xl font-bold ${
          darkMode ? "bg-gray-800 text-white" : "bg-blue-600 text-white"
        }`}
      >
        Droppro
      </header>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-md"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
      <h1 className="text-3xl font-bold text-center mb-6">
        Dropshipping Course
      </h1>
      <div className="w-full max-w-3xl space-y-6">
      
          <div
           
            className={`shadow-md rounded-lg p-4 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            Introduction to Dropshipping
            <h2 className="text-xl font-semibold">Getting Started with Dropshipping</h2>
            <p className={`text-gray-600 ${darkMode ? "text-gray-300" : ""}`}>
            
            </p>
            <div className="mt-4">
              <iframe
                title="Video Player"
                width="100%"
                height="315"
                // src={course.iframeSrc}
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen"
                src="https://player.hotmart.com/embed/NRkPGJpeqe?signature=LVyZCyDEph_xPExHHnZucwK3XHAVNlMCHewERIqzRViC7T0eaRpte33cyABGJp3CxGHkTzW9x1X0g_a5bZm7R8v2zmFQGhyanL9SSh2Y4ta0ADPKzLQeBKPl7bP8YNAROUkSBzFQoqKQRd-ta3TZPDDVKaB0P2AfSZdiIWSJ2hgGWrsWGFoNPCw_AY2zSGS9f6CyDByNhJhWpAukyGpTgDn1SMZsjZyRC6-Ys7_mx35zfFRL_P_vl3idNT4wQO67yTg87jieDtEQ2dC7q2EhVMqt7DkVkSnJx2Jhee4Q_BQoaD68lSOCd18-3AOLKObg4ud9HNL-rEZAFkGz58zS7g%3D%3D&amp;token=aa2d356b-e2f0-45e8-9725-e0efc7b5d29c&amp;user=112196706"
              ></iframe>
            </div>
          </div>
      
      </div>
    </div>
  );
}
