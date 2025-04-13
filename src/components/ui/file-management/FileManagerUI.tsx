import { JSX } from "react";

export const FileMgrJSXElement = (
  <div className="file-manager-ui" data-testid="file-manager-ui">
    <h1>File Manager UI</h1>
    <p>This is a placeholder for the File Manager UI component.</p>
  </div>
);

export default function FileManagerUI(): JSX.Element {
  return FileMgrJSXElement;
}
