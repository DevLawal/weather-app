import React from "react";

const Info = ({ weather, setWeather, toCelsius }) => {
  return (
    <div className="w-[80vw] md:w-[50vw] lg:w-[50vw]  text-white mt-4">
      <h3 className="flex justify-between">
        FEELS LIKE-
        <span className="ml-auto">
          {toCelsius(weather.main.feels_like).toFixed(2)}°C
        </span>
      </h3>
      <h3 className="flex justify-between">
        HUMIDITY- <span className="ml-auto">{weather?.main?.humidity}%</span>
      </h3>
      <h3 className="flex justify-between">
        WIND-
        <span className="ml-auto">{weather?.wind?.speed * 0.447} Km/h</span>
      </h3>
      <h3 className="flex justify-between">
        PRESSURE-
        <span className="ml-auto">{weather?.main?.pressure} mbar</span>
      </h3>
    </div>
  );
};

export default Info;
