import React from "react";

const ProfileCard = ({
  index,
  profilePicture,
  firstName,
  lastName,
  title,
  email,
  onClick,
}) => {
  return (
    <div
      key={index}
      className="bg-white shadow-md rounded-lg text-center overflow-hidden"
    >
      <div className="bg-green-50 p-6 text-center">
        <img
          className="w-24 h-24 rounded-full mx-auto mb-4 "
          src={profilePicture}
          alt={`${firstName} ${lastName}`}
        />
      </div>
      <div className="mt-5">
        <h2 className="text-xl font-bold text-green-700">
          {title} {firstName} {lastName}
        </h2>
        <p className="text-gray-500 text-md mb-4">{email}</p>
        <div className="flex justify-center">
          <button
            onClick={() => {
              onClick();
            }}
            className="w-full px-4 py-2 border border-white rounded-md text-green-700 font-medium hover:bg-green-700 hover:text-white active:font-bold"
          >
            Check Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
