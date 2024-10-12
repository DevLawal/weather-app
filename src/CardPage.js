import React, { useEffect } from "react";
import Info from "./Info";
import { useParams } from "react-router-dom";
import axios from "axios";

const CardPage = ({ weather, setWeather }) => {
  const { id } = useParams();
  const toCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };
  useEffect(() => {
    const fetchWeather = async () => {
      const encodedId = encodeURIComponent(id); // Encode the city name
      const options = {
        method: "GET",
        url: `https://open-weather13.p.rapidapi.com/city/${encodedId}/EN`,
        headers: {
          "x-rapidapi-key": "2ea876294emsh3e70597448d70cep19717ajsn15c595af811e", // Use your actual API key
          "x-rapidapi-host": "open-weather13.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data); // This should show the weather data
        setWeather(response.data);
      } catch (err) {
        console.error(err); // Improved error handling
      }
    };

    fetchWeather();
  }, [id, setWeather]); // Ensure useEffect listens to changes in id and setWeather

  return (
    // Function to convert Fahrenheit to Celsius

    <div className="justify-center items-center">
      {weather ? (
        <div>
          <div
            style={{ borderRight: "8px solid black" }}
            className="flex flex-col w-[80vw] md:w-[50vw] lg:w-[50vw] h-[60vh] bg-[#1e81b0] text-white justify-center rounded-3xl"
          >
            <div className="justify-left w-[80vw] md:w-[50vw] gap-2 lg:w-[50vw] ">
              <h1 className="text-2xl">
                Weather in {weather?.name}, {weather?.sys?.country}
              </h1>{" "}
              {/* City name */}
              <p className="text-xl">
                {new Date(weather.dt * 1000).toLocaleDateString()}
              </p>{" "}
              {/* Date */}
              <p>{weather.weather[0].description}</p>{" "}
              {/* Weather description */}
            </div>
            <div className="flex justify-center my-2 items-center w-[80vw] md:w-[50vw] lg:w-[50vw]  h-[50px]">
              <img
                className="w-[15vw] h-[15vh]"
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt="weather"
              />
            </div>
            <div className="flex flex-col gap-2">
              {/* Temp in Celsius */}
              <p className="w-[80vw] md:w-[50vw] lg:w-[50vw]  text-4xl">
                {toCelsius(weather.main.feels_like).toFixed(2)}°C
              </p>
              <p>Temp Min: {toCelsius(weather.main.temp_min).toFixed(2)}°C</p>
              <p>Temp Max:{toCelsius(weather.main.feels_like).toFixed(2)}°C</p>
            </div>
          </div>
          <Info
            toCelsius={toCelsius}
            weather={weather}
            setWeather={setWeather}
          />
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default CardPage;
