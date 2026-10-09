import SiteImage from "../SiteImage";
import React from "react";

function DoctorInfoCard({ url, name, description, description2 }) {
  return (
    <div className="bg-[url('/public/bg-100-vh.jpg')] bg-fixed border rounded-2xl p-4 shadow-md bg-white w-72 mx-auto">
      <div className="rounded-full w-50 h-50 border-2 overflow-hidden">
        <SiteImage className="w-full h-full" src={url} alt={name} />
      </div>
      <h2 className="font-bold text-2xl">{name}</h2>
      <p className="font-medium text-[20px]">{description}</p>
      <p className="font-medium text-[20px]">{description2}</p>
    </div>
  );
}

export default DoctorInfoCard;
