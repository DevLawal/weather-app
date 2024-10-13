import React, { useEffect } from "react";
import Info from "./Info"; // Ensure this is a valid import
import { useParams } from "react-router-dom";
import axios from "axios";

const CardPage = ({ weather, setWeather }) => {
  const { id } = useParams();

  useEffect(() => {
    const fetchWeather = async () => {
      const options = {
        method: "GET",
        url: `https://weatherapi-com.p.rapidapi.com/current.json?q=${id}`,
        headers: {
          "x-rapidapi-key": process.env.API_KEY,
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data); // Show the weather data in console
        setWeather(response.data);
      } catch (err) {
        console.error("Error fetching weather data:", err);
      }
    };

    fetchWeather();
  }, [id, setWeather]);

  return (
    <div className="justify-center items-center">
      {weather ? (
        <div>
          <div
            style={{ borderRight: "8px solid black" }}
            className="flex flex-col w-[80vw] md:w-[50vw] lg:w-[50vw] h-[60vh] bg-[#1e81b0] text-white justify-center rounded-3xl gap-4"
          >
            <div className="justify-left w-[80vw] md:w-[50vw] gap-2 lg:w-[50vw]">
              <h1 className="text-2xlw-[50vw] md:w-[35vw] lg:w-[35vw] font-bold">
                Weather in {weather.location.name}, {weather.location.country}
              </h1>
              <p className="text-xl">{weather.current.condition.text}</p>
              <p>
                Last updated:{" "}
                {new Date(
                  weather.current.last_updated_epoch * 1000
                ).toLocaleDateString()}
              </p>
            </div>
            <div className="flex justify-center my-2 items-center w-[80vw] md:w-[50vw] lg:w-[50vw] h-[50px]">
              <img
                className="w-[15vw] h-[15vh] lg: w-[10vw]"
                src={weather.current.condition.icon.replace("//", "https://")}
                alt="weather icon"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="w-[80vw] md:w-[50vw] lg:w-[50vw] text-4xl font-bold">
                {weather.current.temp_c}°C
              </p>
              <p>Max Temp: {weather.current.feelslike_c}°C</p>
            </div>
          </div>
          <Info weather={weather} setWeather={setWeather} />
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default CardPage;
