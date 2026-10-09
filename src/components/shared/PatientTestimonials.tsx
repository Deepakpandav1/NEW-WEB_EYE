import SiteImage from "../SiteImage";
import React from "react";

function PatientTesimonials({ url, name, description, treatment }) {
  return (
    <div className="flex items-center m-4 gap-1.5">
      <div className="flex flex-col  p-2.5 items-center gap-1.5">
        <div className="rounded-full w-50 h-50 border-2 overflow-hidden">
          <SiteImage className="w-full h-full" src={url} alt={name} />
        </div>
        <h2 className="font-bold text-2xl">{name}</h2>
        <h4 className="font-bold text-[20px]">{treatment}</h4>
      </div>
      <p className="font-medium text-[20px] text-justify p-2.5 w-[510px] h-[140px] ">
        {description}
      </p>
    </div>
  );
}

export default PatientTesimonials;
