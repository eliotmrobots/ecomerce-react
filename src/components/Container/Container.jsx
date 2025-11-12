import "./Container.css";
import NavBar from "../Navbar/NavBar.jsx";
import ItemListContainer from "../itemListContainer/ItemListContainer.jsx";





function Container() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default Container;