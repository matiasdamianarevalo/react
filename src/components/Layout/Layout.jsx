import Navbar from "./components/Navbar/NavBar";
import { PAGES } from "../../utils/main-pages";


export default function Layout(props) {
  const { children } = props;

  return (
    <div className="container-fluid">
      <Navbar pages={PAGES} />
      {children}
    </div>
  );
}
