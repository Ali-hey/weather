import moment from "moment-jalaali";
import React, { useEffect, useState } from "react";

const weekDays = [
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنج شنبه",
  "جمعه",
  "شنبه",
];

const yearMonth = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const PersianDate = () => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  useEffect(() => {
    let m = moment();
    let finalDate = `${weekDays[m.day()]} ${m.jDate()} ${
      yearMonth[m.jMonth()]
    } ماه ${m.jYear()}`;
    setDate(finalDate);
    setTime(m.format("HH:mm:ss"));
  }, []);

  return (
    <div>
      <span className="mb-3 d-block text-center">{date}</span>
      <span className="d-block text-center">ساعت {time}</span>
    </div>
  );
};

export default PersianDate;
