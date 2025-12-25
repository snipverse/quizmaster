import { useState } from "react";

const InfoCard = ({ title, status }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl px-5 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span
            className={`h-2 w-2 rounded-full ${status === "ok" ? "bg-green-500" : "bg-yellow-500"
              }`}
          />
          <span className="font-medium">{title}</span>
        </div>
        <button
          onClick={() => setOpen(prev => !prev)}
          className="text-sm bg-purple-100 text-purple-700 px-4 py-1 rounded-full"
        >
          {open ? "Hide" : "View"}
        </button>
      </div>
      {open && (
        <p className="text-sm text-gray-600 mt-3">
          Dynamic content will appear here.
        </p>
      )}
    </div>
  );
};

export default InfoCard;
