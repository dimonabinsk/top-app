import { DetailedHTMLProps, HTMLAttributes } from "react";

type NewVoid = void;

export interface RatingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => NewVoid;
}