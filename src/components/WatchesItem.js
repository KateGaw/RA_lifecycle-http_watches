import React, { useEffect, useState } from "react";
import moment from "moment";

const WatchesItem = (props) => {
  const [time, setTime] = useState(
    moment().add(props.timeZone, "h").format("HH:mm:ss")
  );
  const removeHandle = () => {
    props.onRemove(props.id);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setTime(moment().add(props.timeZone, "h").format("HH:mm:ss"));
    }, 1000);

    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  });

  return (
    <div className="watches_item">
      <h5>
        {props.name} (
        {props.timeZone > 0 ? `+${props.timeZone}` : props.timeZone})
      </h5>
      <button className="remove_btn" type="button" onClick={removeHandle}>
        X
      </button>
      <p>{time}</p>
    </div>
  );
};

WatchesItem.defaultProps = {
  onRemove: () => null,
};

export default WatchesItem;
