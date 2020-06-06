import React, { useState } from "react";

const WatchesForm = (props) => {
  const [form, setForm] = useState({
    name: "",
    timeZone: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    const { name, timeZone } = form;
    if (name !== "" && timeZone !== "") {
      props.onSubmit({
        name,
        timeZone: parseInt(timeZone),
      });
      setForm({
        name: "",
        timeZone: "",
      });
    }
    event.preventDefault();
  };

  return (
    <form className="watches_form" onSubmit={handleSubmit}>
      <div className="watches_field">
        <label htmlFor="name">Название</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={form.name}
        />
      </div>
      <div className="watches_field">
        <label htmlFor="timeZone">Временная зона</label>
        <input
          id="timeZone"
          max="23"
          min="-23"
          name="timeZone"
          type="number"
          onChange={handleChange}
          value={form.timeZone}
        />
      </div>
      <div className="watches_submit">
        <button className="watches_button">Добавить</button>
      </div>
    </form>
  );
};

WatchesForm.defaultProps = {
  onSubmit: () => null,
};

export default WatchesForm;
