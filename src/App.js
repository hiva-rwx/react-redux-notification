import React from "react";
import { useDispatch } from "react-redux";
import { Notifications } from "./components/Notifications";
import { addNotification } from "./redux/actions/showNotificationAction";
const App = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ backgroundColor: "#636e72" }}>
      <Notifications />
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={() =>
            dispatch(addNotification("notification success", "success"))
          }
          style={{
            padding: "20px 30px",
            border: 0,
            outline: 0,
            margin: "0 10px",
            backgroundColor: "#b2bec3",
            borderRadius: 5,
            color: "#2d3436",
            cursor: "pointer",
          }}
        >
          Success
        </button>
        <button
          onClick={() =>
            dispatch(addNotification("notification error", "error"))
          }
          style={{
            padding: "20px 30px",
            border: 0,
            outline: 0,
            margin: "0 10px",
            backgroundColor: "#b2bec3",
            borderRadius: 5,
            color: "#2d3436",
            cursor: "pointer",
          }}
        >
          Error
        </button>
      </div>
    </div>
  );
};

export default App;
