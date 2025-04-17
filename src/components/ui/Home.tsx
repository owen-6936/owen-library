import { Link } from "react-router";
import { UI } from "../../../types/UITypes";
import { JSXElement } from "../../../types/GeneralTypes";
import NavBar from "./common/Navbar";

export default function Home(): JSXElement {
  // This is the home page component that lists all the available UI components except ofcourse the Home UI.
  const UIList: string[] = Object.keys(UI).filter((key) => {
    return UI[key].label !== "Home";
  });
  return (
    <>
      <NavBar />
      <ul className="ui-list" data-testid="Home-Page">
        {UIList.map((ui) => {
          return (
            <Link
              key={ui}
              to={{ pathname: UI[ui].path }}
              className="ui-list-link"
            >
              <li key={ui} className="ui-list-item">
                {UI[ui].label}
              </li>{" "}
            </Link>
          );
        })}
      </ul>
    </>
  );
}
