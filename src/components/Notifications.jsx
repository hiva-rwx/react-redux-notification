import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import Notification from "./Notification";
import "./Notification.scss";
export const Notifications = () => {
  const containerEl = document.getElementById("notification-root");
  const {notification} = useSelector((state) => state);
  const output = (
    <Fragment>
      {notification && (
        <div className="notes">
          {notification.map((item) => (
            <Notification key={item.id} item={item} />
          ))}
        </div>
      )}
    </Fragment>
  );
  return containerEl ? ReactDOM.createPortal(output, containerEl) : null;
};
