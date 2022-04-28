import React from "react";
import "../Modal/Modal.scss";

function Modal({ setIsOpen, isOpen, level }) {
  const handleClick = () => {
    setIsOpen(false);
  };

  const handleClickModal = (evt) => {
    if (evt.target.matches(".modal")) {
      setIsOpen(false);
    }
  };

 
  return (
    <div
      className={`modal ${isOpen ? "modal--active" : ""}`}
      onClick={handleClickModal}
    >
      <div className="modal__inner">
        <div className="modal__top">
          <h4 className="modal__heading">Levels add</h4>
          <button className="modal__top-btn" onClick={handleClick}>
            &times;
          </button>
        </div>
        <form
          className="modal__form"
          onSubmit={(evt) => {
            evt.preventDefault();
            const { name, minute, mark, max, min } = evt.target.elements;
            const nameValue = name.value.trim();
            const minuteValue = minute.value.trim();
            const markValue = mark.value.trim();
            const maxValue = max.value.trim();
            const minValue = min.value.trim();

            name.value = null;
            minute.value = null;
            mark.value = null;
            max.value = null;
            min.value = null;

            fetch("https://api.gooded.xyz/api/docs/#/Levels/post_api_level", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: nameValue,
                markForMin: minuteValue,
                mark: markValue,
                accessMark: {
                  min: maxValue,
                  max: minValue,
                },
                status: "active",
              }),
            })
              .then((response) => response.json()).then(data=>console.log(data))
              
          }}
        >
          <label className="modal__label">
            <span className="modal__span">Name:</span>
            <input
              className="modal__input"
              name="name"
              type="text"
              required
              defaultValue="Beginner"
            />
          </label>
          <label className="modal__label">
            <span className="modal__span">Max for 60sec:</span>
            <input
              className="modal__input"
              name="minute"
              type="number"
              required
              defaultValue="100"
            />
          </label>
          <label className="modal__label">
            <span className="modal__span">Mark:</span>
            <input
              className="modal__input"
              name="mark"
              type="number"
              required
              defaultValue="100"
            />
          </label>
          <label className="modal__label">
            <span className="modal__span">Access mark min:</span>
            <input
              className="modal__input"
              name="min"
              type="number"
              required
              defaultValue="0"
            />
          </label>
          <label className="modal__label">
            <span className="modal__span">Access mark max:</span>
            <input
              className="modal__input"
              name="max"
              type="number"
              required
              defaultValue="100"
            />
          </label>
          <div className="modal__bottom">
            <button className="modal__cancel-btn" onClick={handleClick}>
              Cancel
            </button>
            <button className="modal__dave-btn">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
