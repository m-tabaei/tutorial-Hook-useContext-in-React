import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ComA from "../ComA/ComA";
import ComB from "../ComB/ComB";

export const MyContext = React.createContext();
const App = () => {
  let [slider, setSlider] = useState(null);
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(true);
  const fetchSlider = async () => {
    try {
      let data = await fetch("https://api-storeg-emperial.vercel.app/sliders");
      let res = await data.json();
      setSlider(res);
      setError(null);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(true);
    }
  };
  useEffect(() => {
    console.log("Hello-world!");
    fetchSlider();
  }, []);
  return (
    <>
      <MyContext.Provider value={{ slider, loading, error }}>
        <ComA />
        <ComB />
      </MyContext.Provider>
    </>
  );
};

export default App;
