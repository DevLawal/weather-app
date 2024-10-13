import React from "react";

const Info = ({ weather }) => {
  return (
    <div className="w-[80vw] md:w-[50vw] lg:w-[50vw]  text-white mt-4">
      <h3 className="flex justify-between">
        Max Temp-
        <span className="ml-auto">{weather?.current?.feelslike_c}°C</span>
      </h3>
      <h3 className="flex justify-between">
        HUMIDITY- <span className="ml-auto">{weather?.current?.humidity}%</span>
      </h3>
      <h3 className="flex justify-between">
        WIND-
        <span className="ml-auto">{weather?.current?.wind_kph} Km/h</span>
      </h3>
      <h3 className="flex justify-between">
        PRESSURE-
        <span className="ml-auto">{weather?.current?.pressure_mb} mbar</span>
      </h3>
    </div>
  );
};

export default Info;
