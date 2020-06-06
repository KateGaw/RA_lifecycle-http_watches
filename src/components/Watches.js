import React, { useState } from "react";
import WatchModel from "../models/Watch";
import WatchesForm from "./WatchesForm";
import WatchesItem from "./WatchesItem";

const Watches = () => {
  const [watches, setWatches] = useState([]);

  const submitHandle = (item) => {
    setWatches((prev) => [...prev, new WatchModel(item)]);
  };
  const removeHandle = (id) => {
    setWatches((prev) => prev.filter((watch) => watch.id !== id));
  };

  return (
    <div className="watches">
      <WatchesForm onSubmit={submitHandle} />

      {watches.length > 0 && (
        <div className="watches_list">
          {watches.map((item) => (
            <WatchesItem
              key={item.id}
              id={item.id}
              name={item.name}
              timeZone={item.timeZone}
              onRemove={removeHandle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Watches;
