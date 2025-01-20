import React, { useState } from "react";
import Style from "./ItemRow.module.css";
import { Link } from "react-router-dom";

interface Item {
  id: number;
  name: string;
  title?: string;
  poster_path: string;
}

interface ItemRowProps {
  list: Item[];
  title: string;
}

const imageURL = process.env.REACT_APP_IMG;

const ItemRow: React.FC<ItemRowProps> = ({ list = [], title }) => {
  const [x, setX] = useState(0);

  const goLeft = () => {
    let position = x + Math.round(window.innerWidth / 3);
    if (position > 0) {
      position = 0;
    }
    setX(position);
  };

  const goRigth = () => {
    let position = x + Math.round(window.innerWidth / -3);
    let w = list.length * 200;
    if (window.innerWidth - w > position) {
      position = window.innerWidth - w - 60;
    }
    setX(position);
  };

  return (
    <div className={Style.container}>
      <h2>{title}</h2>
      <button className={Style.btn_left} onClick={goLeft}>
        ◄
      </button>
      <button className={Style.btn_rigth} onClick={goRigth}>
        ►
      </button>
      <div className={Style.list_area}>
        <div
          className={Style.list}
          style={{ marginLeft: x, width: list.length * 200 }}
        >
          {list.length === 0 ? (
            <p>Loading...</p>
          ) : (
            list.map((item, key) => (
              <div className={Style.item} key={key}>
                <Link to={`/title/${item.name ? "tv" : "movie"}/${item.id}`}>
                  <img
                    src={imageURL + item.poster_path}
                    alt={item.title || item.name}
                  />
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemRow;
