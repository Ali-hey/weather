import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendWeatherRequest } from "../redux/weather/weatherAction";
// import getWeatherInfo from "../redux/weather/weatherAction";
import PersianDate from "./PersianDate";

const Weather = () => {
  const { loading, data, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [backmode, setBackMode] = useState("usual");

  const [query, setQuery] = useState("");

  const handleGetWeather = (e) => {
    e.preventDefault();
    // dispatch(getWeatherInfo(query));
    dispatch(sendWeatherRequest(query));
    setQuery("");
  };

  useEffect(() => {
    if (!data.main) {
      return;
    }
    let temp = data.main.temp;
    if (temp < 12) {
      setBackMode("cold");
    } else if (temp < 15) {
      setBackMode("usual");
    } else {
      setBackMode("warm");
    }
  }, [data]);

  return (
    <div className={`app pt-4 container-fluid back_${backmode}`}>
      <div className="row justify-content-center py-3 pt-4">
        <div className="col-10 col-md-6 col-lg-4 col-xl-3">
          <form onSubmit={handleGetWeather}>
            <input
              type="text"
              className="search_input w-100 text_color placeholder_color"
              placeholder="نام شهر یا کشور"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </form>
        </div>
      </div>

      <div className="row justify-content-center py-3 pt-4">
        <div className="col-11 col-md-8 col-lg-4 col-xl-3">
          <h3 className="text-center text_color">
            <PersianDate />
          </h3>
        </div>
      </div>

      {loading ? (
        <div className="text-center text-secondary mt-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : data.main ? (
        <>
          <div className="row justify-content-center py-3">
            <div className="col-9 col-md-6 col-lg-4 col-xl-3">
              <div className="temprature_box justify-content-center pt-3">
                <span>{Math.round(data.main.temp)} C°</span>
              </div>
            </div>
          </div>

          <div className="row justify-content-center py-3 pt-4">
            <div className="col-11 col-md-8 col-lg-4 col-xl-3">
              <span className="temprature_box justify-content-center pt-3">
                {data.name}
              </span>
              <h1 className="text-center fa-3x lathin_text text_color pt-4">
                {data.weather[0].main}
              </h1>
            </div>
          </div>
        </>
      ) : error ? (
        <h3 className="text-center text-color">
          نام شهر یا کشور را به درستی وارد کنید
        </h3>
      ) : (
        <h3 className="text-center text-color">
          مکان مورد نظر خود را جستجو کنید
        </h3>
      )}
    </div>
  );
};

export default Weather;
