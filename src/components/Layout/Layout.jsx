import style from "./Layout.module.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <header className={style.header}>
      <Logo />
      <Navigation />
    </header>

    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;