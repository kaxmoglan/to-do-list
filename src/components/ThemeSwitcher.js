import React from "react";

const ThemeSwitcher = (props) => {
  return (
    <div className="themeSwitchSection">
      <h2 className={`themeSwitchTitle ${props.theme}`}>Select A Theme:</h2>
      <div className="themeSwitcher">
        <div
          onClick={() => props.setTheme("theme_darkblue")}
          className="themeSwitcher__darkblue"
        ></div>
        <div
          onClick={() => props.setTheme("theme_red")}
          className="themeSwitcher__red"
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
          onClick={() => props.setTheme("theme_orange")}
          className="themeSwitcher__orange"
        ></div>
        <div
          onClick={() => props.setTheme("theme_purple")}
          className="themeSwitcher__purple"
        ></div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
