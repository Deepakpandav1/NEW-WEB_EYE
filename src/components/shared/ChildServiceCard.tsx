import SiteImage from "../SiteImage";
import React from "react";
import { useNavigate } from "@tanstack/react-router";

function ChildServiceCard({ item }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-xl shadow-md p-5 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-cyan-700 hover:border-2 cursor-pointer"
      onClick={() => navigate({ to: item.link })}
    >
      <SiteImage
        src={item.image}
        alt={item.title}
        className="mx-auto mb-4 h-20 object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <h3 className="text-lg font-semibold mb-2 text-cyan-900">{item.title}</h3>
      <p className="text-gray-600 text-sm">{item.description}</p>
    </div>
  );
}

export default ChildServiceCard;
