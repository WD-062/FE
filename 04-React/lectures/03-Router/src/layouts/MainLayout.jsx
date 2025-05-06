import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
function MainLayout() {
  return (
    <div>
      <header>
       <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Footer</p>
      </footer>
      
    </div>
  );
}

export default MainLayout;
