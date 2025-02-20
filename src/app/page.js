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
      <h3> Introduction to Dropshipping</h3>
      <div className="w-full max-w-3xl space-y-6">
        <div
          className={`shadow-md rounded-lg p-4 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          Introduction to Dropshipping
          <h2 className="text-xl font-semibold">
            Getting Started with Dropshipping
          </h2>
          <p className={`text-gray-600 ${darkMode ? "text-gray-300" : ""}`}></p>
          <div className="mt-4">
            <iframe
              title="Video Player"
              frameborder="0"
              width="100%"
              height="315"
              scrolling="no"
              class="rzhNp FjS60"
              name="hotmart_embed"
              data-testid="embed-player"
              referrerpolicy="strict-origin"
              allowfullscreen
              allow="autoplay; fullscreen"
              src="https://player.hotmart.com/embed/NRkPGJpeqe?signature=Ew6GnsjTsVY_heyIUzoP8M080gO2_K5nEEIGLKrVcXahYmvtnXLJRNB9R3ZVEDo5D7a9yMosatBsQoACV4Og5Z0zZkLXc04XwQnT8AbU0LTQsmr-DBJzPy1-EsAxAe-8QLp4rz6WymTMa6J1Idt-Cb9p8MoGpnh565r8235Xl0V9Bb4x4743CLuKybRcE8gSZCU8wBKZFQPaL3SzG6PxO2Xzanr-jV9MSjvazmMIw3kafZxi6tIrF8aXulmWl5M3FP0AY5SOp9TVj-xN_nOWfqvZMcXLTuvKfNjuYs7Cs_qFiXtUiw_fnoFru63G2Kb7DX4krxk8wEn4Y-DiJaNLnA%3D%3D&amp;token=aa2d356b-e2f0-45e8-9725-e0efc7b5d29c&amp;user=112196706"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="w-full max-w-3xl space-y-6 m-10">
        <div
          className={`shadow-md rounded-lg p-4 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          Introduction to Dropshipping
          <h2 className="text-xl font-semibold">
            General vs Niche based store{" "}
          </h2>
          <p className={`text-gray-600 ${darkMode ? "text-gray-300" : ""}`}></p>
          <div className="mt-4">
            <iframe
              title="Video Player"
              frameborder="0"
              scrolling="no"
                width="100%"
              height="315"
              class="rzhNp FjS60"
              name="hotmart_embed"
              data-testid="embed-player"
              referrerpolicy="strict-origin"
              allowfullscreen
              allow="autoplay; fullscreen"
              src="https://player.hotmart.com/embed/QZP0Q98zZw?signature=64fGHBIKpMHlRdLb1lrRBG6c8bE9RQbW7trL07ilwAA0-p8mIeVVJSWrTaHRBL63V1pnBi2cfigFUmxcYbaymv_Wq1ryFEURAjZpwZsD0snZckHxrWnEzFnKCgUQVeCEO7akMUbRHZkwnaM3Rjyx6yB93GAcHbiyg-H6HUae6YXwYBQhN9Ku38LQJASeqwt7R5fp5edePi2RuOrouZ3yIbxuMeYcreX2HmtkbJv_E5CcRQhhDo0tNHoIDRDyZhtHivocAPVkQy4qhu3ImR_CFZ_C0Lr3FWCQJEVWo1ckiUUKaYhHKKbkw0hxBqP44jbU09fJE0Fd_eIDuoeemLOTRA%3D%3D&amp;token=aa2d356b-e2f0-45e8-9725-e0efc7b5d29c&amp;user=112196706"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="w-full max-w-3xl space-y-6 m-10">
        <div
          className={`shadow-md rounded-lg p-4 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-xl font-semibold">
            Expetation an Issues in Dropshipping{" "}
          </h2>
          <p className={`text-gray-600 ${darkMode ? "text-gray-300" : ""}`}></p>
          <div className="mt-4">
            <iframe
              title="Video Player"
              frameborder="0"
              scrolling="no"
                width="100%"
              height="315"
              class="rzhNp FjS60"
              name="hotmart_embed"
              data-testid="embed-player"
              referrerpolicy="strict-origin"
              allowfullscreen
              allow="autoplay; fullscreen"
              src="https://player.hotmart.com/embed/5Z1e0X4AZX?signature=kmRRI1K-sgRc_r-jRO7cf5_K9QSl1XYEJdzMsGdqa0Yi3yhniJvNuCR7-x_mvw3hO-bZvB2MWDx-82L0qFTkEmWX_tGmUrSZ5salQRrj9nbV6AB_2hlXRmws1MTHd3U325mnAFdbPu1Sj2gcTNfVBpJBumlTJrcUxIMgIaatQnnH2a1n7z5up_MvJUV1nMSKSOTZKgHx85Y-Lr-vjOA_3hDSD-tkIHrKn2CH3rFC2iPnA321JLbHemqUV3A2tTmIJdy4wXWURKgv6QOCDJVXCkzJSnYMsWN5J22aLOe7UZuDQX4XRzpNwY8FknyMCCmF-IniBEm9mRSH_UG85_H0Hw%3D%3D&amp;token=aa2d356b-e2f0-45e8-9725-e0efc7b5d29c&amp;user=112196706"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
