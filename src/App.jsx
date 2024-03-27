import axios from "axios";
import { useState } from "react";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const API_KEY = "e896baa4459ed19160996595317a386e";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchLocation = () => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    setLocation("");
  };

  return (
    <div className="w-full h-full relative">
      <div className="text-center p-4">
        <input
          type="text"
          placeholder="Enter the location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          className="sm:w-[400px] lg:w-[700px] w-[150px] bg-white-600/100 focus:outline-none shadow-md py-3 px-6  text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 "
        />
        <button onClick={searchLocation} className="sm:text-xs md:text-sm lg:text-lg text-xs rounded-3xl border border-gray-200 shadow-lg ml-3 p-3 bg-white">
          Search
        </button>
      </div>
      <Weather weatherData={data} />
    </div>
  );
}

export default App;
