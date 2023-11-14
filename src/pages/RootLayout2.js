import { Outlet } from "react-router-dom";
import NavbarMenu from "../components/mainPage/NavbarMenu";

function RootLayout2() {
  return (
    <>
      <NavbarMenu />
      <main>
        <Outlet /> 
      </main>
    </>
  );
}

export default RootLayout2;