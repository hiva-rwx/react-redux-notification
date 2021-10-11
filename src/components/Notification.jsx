import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeNotification } from "../redux/actions/showNotificationAction";
const Notification = ({ item }) => {
  const [bar, setBar] = useState(100);
  const [intervalID, setIntervalID] = useState(null);
  const [exit, setExit] = useState(false);

  const dispatch = useDispatch();

  const handleStartTimer = useCallback(() => {
    let id = setInterval(() => {
      setBar((prev) => {
        if (prev > 0) {
          return prev - 0.5;
        }
        return prev;
      });
    }, 20);
    setIntervalID(id);
  }, []);

  const handlePauseTimer = useCallback(() => {
    clearInterval(intervalID);
  }, [intervalID]);

  const handleCloseNotification = useCallback(() => {
    setExit(true);
    setTimeout(() => {
      dispatch(removeNotification(item.id));
    }, 400);
  }, [dispatch, item.id]);

  useEffect(() => {
    handleStartTimer();
  }, [handleStartTimer]);

  useEffect(() => {
    if (bar === 0) {
      handleCloseNotification();
    }
  }, [bar, handleCloseNotification]);

  return (
    <div
      className={`note ${exit ? "hide" : "show"}`}
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
    >
      <div className="text-note">{item.text}</div>
      <div
        className="bar"
        style={{
          width: `${bar}%`,
          backgroundColor: item.type === "success" ? "#00b894" : "#d63031",
        }}
      />
      <span className="close" onClick={handleCloseNotification}>
        &#x2715;
      </span>
    </div>
  );
};

export default Notification;
