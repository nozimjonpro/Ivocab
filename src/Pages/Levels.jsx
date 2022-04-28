import React from "react";
import "./Level.scss";
import Edit from "../Assets/Img/edit.svg";
import Delete from "../Assets/Img/delete.svg";
import Modal from "../Components/Modal/Modal";

function Level({ isNavOpen }) {
  const [level, setLevel] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [del, setDel] = React.useState("");
  const [delModal, setDelModal] = React.useState(false);

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

  const handleDelete = (evt) => {
    const levelId = evt.target.dataset.levelId;
    setDel(levelId);
    setDelModal(true);
  };

  return (
    <main className={`level ${isNavOpen ? "level--active" : ""}`}>
      <div className="level__top">
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
                      <img className="table-edit" src={Edit} alt="icon" />
                    </button>
                    <button className="table__delete-btn">
                      <img
                        className="table-delete"
                        src={Delete}
                        alt="icon"
                        onClick={handleDelete}
                        data-level-id={item._id}
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div className="pagination">
        <span className="pagination__span">1 of 1</span>
        <button className="pagination-prev">&#x3c;</button>
        <button className="pagination-next">&#x3e;</button>
      </div>
      <Modal
        setDelModal={setDelModal}
        setIsOpen={setIsOpen}
        delModal={delModal}
        isOpen={isOpen}
        level={level}
        del={del}
        setLevel={setLevel}
      ></Modal>
    </main>
  );
}

export default Level;
