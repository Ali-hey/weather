import axios from "axios";
import {
  RECIEVE_WEATHER_ERROR,
  RECIEVE_WEATHER_RESPONSE,
  SEND_WEATHER_REQUEST,
} from "./weatherTypes";

export const sendWeatherRequest = (query) => {
  return {
    type: SEND_WEATHER_REQUEST,
    payload: query,
  };
};

export const recieveWeatherResponse = (data) => {
  return {
    type: RECIEVE_WEATHER_RESPONSE,
    payload: data,
  };
};

export const recieveWeatherError = (data) => {
  return {
    type: RECIEVE_WEATHER_ERROR,
    payload: data,
  };
};

// const getWeatherInfo = (query) => {
//   return (dispatch, getState) => {
//     dispatch(sendWeatherRequest());
//     axios
//       .get(
//         `https://api.openweathermap.org/data/2.5/weather/?q=${query}&units=metric&appid=7ebcd0b29f8e07a508956a38313b3ce0`
//       )
//       .then((res) => {
//         dispatch(recieveWeatherResponse(res.data));
//       })
//       .catch((error) => {
//         dispatch(recieveWeatherError(error.message));
//       });
//   };
// };

// export default getWeatherInfo;
