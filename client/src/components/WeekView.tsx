import { getCurrentWeek } from "./utils/getCurrentWeek";

export default function WeekView(){
  const week = getCurrentWeek();
  const today = new Date().toDateString();

  return (
    <div id="weekview">
      {week.map((date) => {
        const isToday = date.toDateString() === today;

        return (
          <div key={date.toISOString()} className={isToday?"today":"date"}>
            <>{date.toLocaleDateString("en-US", {
              //month: "short",
              day: "numeric",
            })}</>
            <p>{date.toLocaleDateString("en-US", { weekday: "short" })}</p>
          </div>
        );
      })}
    </div>
  );
};

