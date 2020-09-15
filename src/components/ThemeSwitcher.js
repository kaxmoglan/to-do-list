import React from "react";

const ThemeSwitcher = (props) => {
  const handleMenu = () => {
    switch (props.menu) {
      case "menu_closed":
        props.setMenu("menu_open");
        break;
      default:
        props.setMenu("menu_closed");
        break;
    }
  };
  return (
    <div className={`themeSwitchSection ${props.theme}`}>
      <div className={`themeSwitcher ${props.menu}`}>
        <div
          onClick={() => props.setTheme("theme_darkmode")}
          className="themeSwitcher__darkmode"
        ></div>
        <div
          onClick={() => props.setTheme("theme_darkblue")}
          className="themeSwitcher__darkblue"
        ></div>
        <div
          onClick={() => props.setTheme("theme_grey")}
          className="themeSwitcher__grey"
        ></div>
        <div
          onClick={() => props.setTheme("theme_midblue")}
          className="themeSwitcher__midblue"
        ></div>
        <div
          onClick={() => props.setTheme("theme_red")}
          className="themeSwitcher__red"
        ></div>
        <div
          onClick={() => props.setTheme("theme_purple")}
          className="themeSwitcher__purple"
        ></div>
        <div
          onClick={() => props.setTheme("theme_orange")}
          className="themeSwitcher__orange"
        ></div>
      </div>
      <div onClick={handleMenu} className={`menu_btn ${props.menu}`}>
        <i className={`fas fa-palette ${props.theme}`}></i>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
