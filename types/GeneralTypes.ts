import { JSX } from "react";

export type JSXElement = JSX.Element | JSX.Element[] | null;

export interface NavItemInterface {
  label: string;
  path: string;
}
