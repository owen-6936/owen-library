import { JSX } from "react";
import "../../../styles/file-manager.scss";
import NavBar from "../common/Navbar";

export default function FileManagerUI(): JSX.Element {
  return (
    <>
      <NavBar />
      <div className="file-manager" data-testid="file-manager-ui">
        <h2>File Manager UI</h2>
        <p>
          This is a temporary placeholder for the main File Manager interface.
        </p>
      </div>
    </>
  );
}
