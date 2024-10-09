import React, { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [applicantIndex, setApplicantIndex] = useState(null);
  const [page, setPage] = useState(1);

  const fetchUsers = async () => {
    try {
      let url = "https://randomuser.me/api/?results=100";
      const response = await fetch(url);
      const data = await response.json();

      // Check if data.results is an array before setting users
      if (Array.isArray(data.results)) {
        setUsers(data.results); // Store the user data in state
      } else {
        console.error("API response is not as expected", data);
      }

      setLoading(false); // Turn off the loading state
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  const removeApplicant = () => {
    let newArray = users
      .slice(0, applicantIndex)
      .concat(users.slice(applicantIndex + 1));
    setUsers(newArray);
    setApplicantIndex(null);
    setSelectedApplicant(null);
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  if (loading) {
    return (
      <div className="flex items-center justify-center bg-green-100 min-h-screen">
        <p className="text-center font-bold text-3xl">Loading users...</p>
      </div>
    );
  }

  if (!Array.isArray(users) || users.length == 0) {
    return <p className="text-center">Error loading users.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="flex items-center min-h-20 text-2xl pl-5">
        <h1 className="font-bold mr-2">Total: </h1>
        <h1>{users.length} Job Applicant(s)</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {users.map((user, index) => (
          <ProfileCard
            index={index}
            profilePicture={user.picture.large}
            firstName={user.name.first}
            lastName={user.name.last}
            title={user.name.title}
            email={user.email}
            onClick={() => {
              setOpenModal(true);
              setSelectedApplicant(user);
              setApplicantIndex(index);
            }}
          />
        ))}
      </div>
      {openModal && selectedApplicant ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md w-96">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold mb-4">
                {selectedApplicant.name.title} {selectedApplicant.name.first}{" "}
                {selectedApplicant.name.last}
              </h2>
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
                className="pb-3 justify-center items-center text-red-500 active:font-bold "
              >
                Close
              </button>
            </div>
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4"
              src={selectedApplicant.picture.large}
              alt={`${selectedApplicant.name.first} ${selectedApplicant.name.last}`}
            />
            <hr className="mb-5" />
            <p className="text-gray-700 mb-4">
              Email: {selectedApplicant.email}
            </p>
            <p className="text-gray-700 mb-4">
              Phone: {selectedApplicant.phone}
            </p>
            <p className="text-gray-700 mb-4">
              Age: {selectedApplicant.dob.age}
            </p>
            <p className="text-gray-700 mb-4">
              Title:{" "}
              {selectedApplicant.dob.age % 5 == 0
                ? "Frontend Developer"
                : "Backend Developer"}
            </p>
            <div className="flex space-x-4 justify-evenly">
              <button
                onClick={() => {
                  setOpenModal(false);
                  removeApplicant();
                }}
                className="w-1/2 py-2 text-green-500 hover:bg-green-500 hover:text-white rounded-md font-medium"
              >
                <p className="font-bold">Accept</p>
              </button>
              <button
                onClick={() => {
                  setOpenModal(false);
                  removeApplicant();
                }}
                className="w-1/2 py-2 text-red-500 hover:bg-red-700 hover:text-white rounded-md font-medium"
              >
                <p className="font-bold">Reject</p>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
