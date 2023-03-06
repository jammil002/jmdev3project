import React from "react";
import PropTypes from "prop-types";

const HireCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="p-2">
      <div className="group block max-w-m rounded-lg shadow-lg bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-black text-xl mb-2 font-BebasNeue">
            {title}
          </div>
          <p className="text-base font-Oswald text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

HireCard.propTypes = {};

export default HireCard;
