import "react";
import "./header.css";
import { useState } from "react";

const Header = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <header className="flex justify-between px-5 py-3   ">
      <button
        onClick={() => {
          setShowModel(true);
        }}
        className="menu"
      >
        <i className=" fa-solid fa-bars "></i>
      </button>
      <div />
      <nav className=" ">
        <ul className="mover flex gap-4 justify-center items-center ">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">speacking</a>
          </li>
          <li>
            <a href="">Uses</a>
          </li>
        </ul>
      </nav>
      <button className="moon py-1 px-4 "><i className="fa-regular fa-moon"></i></button>
      {showModel && (
        <div className="model">
          <ul className="modelBar">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">speacking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
            <button
              onClick={() => {
                setShowModel(false);
              }}
              className="hide"
            >
              <i className="cancle fa-solid fa-xmark text-xl"></i>
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
