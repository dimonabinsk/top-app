import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface DivProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: "small" | "large";
  color?: "ghost" | "red" | "green" | "gray" | "primary";
  href?: string;
}
