import React from "react";
import "./Level.scss";
import Edit from "../Assets/Img/edit.svg";
import Delete from "../Assets/Img/delete.svg";
import Modal from "../Components/Modal/Modal";

function Level({isNavOpen}) {
  const [level, setLevel] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);

  let numId = 1;
  React.useEffect(() => {
    fetch("https://api.gooded.xyz/api/level")
      .then((response) => response.json())
      .then((data) => {
        const levelArr = data.data.levels;

       
        if (levelArr?.length > 0) {
          setLevel(levelArr);
        }
      });
  }, []);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <main className={`level ${isNavOpen? 'level--active' : ''}`}>
      <div className='level__top'>
        <span className="level__top-span">Limit:</span>
        <select className="level__top-select">
          <option hidden>{level.length}</option>
          <option value="10">10</option>
          <option value="5">5</option>
        </select>
        <button className="level__top-btn" onClick={handleClick}>
          Create
        </button>
      </div>
      <table className="level__table">
        <thead>
          <tr className="level__table-row" border="true">
            <th className="level__table-heading">id</th>
            <th className="level__table-heading">Name</th>
            <th className="level__table-heading">Mark for 60sek.</th>
            <th className="level__table-heading">Mark</th>
            <th className="level__table-heading">Access mark</th>
            <th className="level__table-heading">Actions</th>
          </tr>
        </thead>
        <tbody>
          {level.length > 0 &&
            level.slice(0, 10).map((item) => (
              <tr className="level__table-row" key={item._id}>
                <td className="level__table-data" key={item._id}>
                  {numId++}
                </td>
                <td className="level__table-data">{item.name}</td>
                <td className="level__table-data">{item.markForMin}</td>
                <td className="level__table-data">{item.mark}</td>
                <td className="level__table-data">
                  {item.accessMark.min + "-" + item.accessMark.max}
                </td>
                <td className="level__table-data">
                  <div className="level__table-buttons">
                    <button className="table__edit-btn">
                      <img src={Edit} alt="icon" />
                    </button>
                    <button className="table__delete-btn">
                      <img src={Delete} alt="icon" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Modal setIsOpen = {setIsOpen} isOpen = {isOpen} level = {level}></Modal>
    </main>
  );
}

export default Level;
