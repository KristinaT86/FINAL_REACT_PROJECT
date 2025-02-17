import React, { useState } from "react"; // Removed useContext and useEffect
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useTranslation } from "react-i18next"; // Removed translation related imports
// import ToggleThemeButton from "./ToggleTheme";

// import ThemeContext from "../../ThemeContext"; // Removed theme context
import logo from "../../assets/svg/logo.svg";
import icon from "../../assets/svg/icon.svg";
// import sunIcon from "../../assets/svg/sun.svg"; // Removed theme icons
// import moonIcon from "../../assets/svg/moon.svg";
// import globeIcon from "../../assets/svg/globe.svg";
import burgerIcon from "../../assets/svg/list.svg";

import styles from "./header.module.css";

function SuperNavLink({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        const className = isActive ? styles.activeLink : styles.inactiveLink;
        return className;
      }}
    >
      {children}
    </NavLink>
  );
}

function Header() {
  // const { t, i18n } = useTranslation(); // Removed translation hook
  // const [language, setLanguage] = useState(i18n.language);
  const cartCount = useSelector((state) => state.cart.count);
  const [menuOpen, setMenuOpen] = useState(false);
  // const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const handleLanguageChange = (e) => {
  //   const newLanguage = e.target.value;
  //   setLanguage(newLanguage);
  //   i18n.changeLanguage(newLanguage);
  // };

  // useEffect(() => {
  //   console.log("Current language:", i18n.language);
  //   console.log("Translations loaded:", i18n.store.data);
  // }, [i18n.language, i18n.store.data]);

  return (
    <header className={styles.header}>
      <div className={styles.header_logo1}>
        <Link to="/">
          <img src={logo} alt="img" />
        </Link>
      </div>
      <nav
        className={`${styles.header_nav} ${menuOpen ? styles.nav_open : ""}`}
      >
        <SuperNavLink to="/" /*t={t}*/>
          Main Page
        </SuperNavLink>
        <SuperNavLink to="/categories" /*t={t}*/>
          Categories
        </SuperNavLink>
        <SuperNavLink to="/allProducts" /*t={t}*/>
          All Products
        </SuperNavLink>
        <SuperNavLink to="/allSales" /*t={t}*/>
          All Sales
        </SuperNavLink>
      </nav>
      <div className={styles.burger_menu} onClick={toggleMenu}>
        <img src={burgerIcon} alt="Menu" />
      </div>
      <div className={styles.header_right}>
        {/* <select
          className={styles.header_select}
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="en">En</option>
          <option value="ru">Ru</option>
          <option value="ua">Ua</option>
          <option value="de">De</option>
          <option value="pl">Pl</option>
        </select> */}

        {/* <div className={styles.toggleTheme}>
          <button className="button" onClick={toggleTheme}>
            <img
              src={theme === "light" ? sunIcon : moonIcon}
              alt="Toggle Theme"
            />
          </button>
        </div> */}

        <Link to="/cart">
          <div className={styles.header_logo}>
            <div className={styles.cart_icon}>
              <img src={icon} alt="img" />
              {cartCount > 0 && (
                <div className={styles.cart_count}>{cartCount}</div>
              )}
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
