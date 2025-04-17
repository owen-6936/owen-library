import { JSXElement } from "../../../../types/GeneralTypes";
import NavBar from "../common/Navbar";

export default function ImageLibraryUI(): JSXElement {
  // This is the image gallery UI component. It is a placeholder for now and will be implemented later.
  return (
    <>
      <NavBar />
      <div className="image-library" data-testid="image-library-ui">
        <h1>Image Library UI</h1>
        <p>This is the image library UI component.</p>
      </div>
    </>
  );
}
