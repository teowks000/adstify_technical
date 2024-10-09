"use client";
import Image from "next/image";
import ApplicantList from "./ApplicantList";
import { useState, useEffect } from "react";

const JobApplication = () => {
  const jobDescription = [
    {
      key: 1,
      resp: "Module Creation",
      descr:
        "Design and build a dynamic content module using modern web technologies, ensuring it's both functional and visually appealing.",
    },
    {
      key: 2,
      resp: "API & Data Handling",
      descr:
        "Integrate with APIs for real-time content fetching and manage data efficiently for display.",
    },
    {
      key: 3,
      resp: "Frontend Development",
      descr:
        "Use frameworks like React or Vue.js to create responsive UI components that perform well on all devices.",
    },
    {
      key: 4,
      resp: "UI/UX Design",
      descr:
        "Take the lead on UI design, ensuring user intuitiveness without a dedicated UX designer.",
    },
    {
      key: 5,
      resp: "Performance",
      descr:
        "Optimize the module for speed and smooth operation across different devices.",
    },

    {
      key: 6,
      resp: "Maintenance",
      descr:
        "Regularly update and maintain the module to add new features and fix issues.",
    },
  ];

  const requirement = [
    "Must be a Singapore citizen",
    "Minimum 3 years of relevant experience",
    "Proficiency in JavaScript, HTML, CSS, and modern frontend frameworks.",
    "Experience with API integrations and real-time web technologies (e.g., WebSockets).",
    "Basic skills in UI/UX design or a strong interest in learning on the job.",
  ];

  const renderJobDescription = () => {
    return (
      <ol className="list-disc py-3">
        {jobDescription.map((item, index) => {
          return (
            <li key={index} className="text-s text-gray-600 text-justify mb-4 ">
              <div className="flex justify">
                <p className="font-bold break-words">{item.resp}:</p>
                <p className="ml-2 max-w-1xl">{item.descr}</p>
              </div>
            </li>
          );
        })}
      </ol>
    );
  };

  const renderRequirement = () => {
    return (
      <ol className="list-disc py-3">
        {requirement.map((item, index) => {
          return (
            <li key={index} className="text-s text-gray-600 text-justify mb-4 ">
              <p className="max-w-3xl">{item}</p>
            </li>
          );
        })}
      </ol>
    );
  };

  return (
    // <ApplicantList />
    <div className="flex flex-col min-h-screen justify-between">
      <div className="flex justify-center py-10 ">
        <Image
          src="/favicon.ico"
          alt="Company Logo"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      {/* Middle Section - Job Description */}
      <div className="flex-grow flex flex-col  justify-center px-6 lg:px-24">
        <h1 className=" text-2xl lg:text-3xl font-bold text-gray-800 mb-10 text-center ">
          Front-End Developer
        </h1>
        <div>
          <p className="font-bold underline text-lg">Key Responsibilities: </p>
        </div>
        {renderJobDescription()}
        <div>
          <p className="font-bold underline text-lg">Requirements: </p>
        </div>
        {renderRequirement()}
      </div>
      {/* Bottom Section - Buttons */}
      <div className="flex justify-center content-center mb-2">
        <button
          onClick={() => {}}
          className="w-3/4 font-bold mx-3 bg-green-400 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all"
        >
          Check Applicant
        </button>
      </div>
    </div>
  );
};

export default JobApplication;
