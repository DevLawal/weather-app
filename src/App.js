import { useState } from "react";
import "./App.css";
import { useNavigate, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CardPage from "./CardPage";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [weather, setWeather] = useState(null);
  const navigate = useNavigate();

  const getWeather = (e) => {
    e.preventDefault();
    const id = inputValue.trim(); // Trim the input
    if (id) {
      navigate(`/city/${id}`); // Navigate with the trimmed input
    } else {
      console.error("Please enter a valid city name."); // Handle empty input
    }
  };

  return (
    <div className="App flex flex-col justify-center items-center">
      <header className="flex h-[20vh] justify-center items-center">
        <form
          onSubmit={getWeather}
          className="relative w-[80vw] md:w-[50vw] lg:w-[50vw] "
        >
          <label
            className={`absolute left-2 top-2 text-white transition-all duration-300 ${
              inputValue ? "text-xs -translate-y-4" : "text-base"
            }`}
          >
            Search for any city
          </label>
          <input
            className="placeholder-transparent bg-[#4b59c5] w-full h-[5vh] px-2 py-6 text-white focus:outline-none border-b-2 border-white"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
        </form>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/city/:id"
          element={<CardPage weather={weather} setWeather={setWeather} />}
        />
      </Routes>
    </div>
  );
}

export default App;
