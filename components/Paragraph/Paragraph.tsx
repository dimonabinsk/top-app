import styles from "./Paragraph.module.css";
import { ParagraphProps } from "./Paragraph.props";
import cn from "classnames";

export const Paragraph = ({
  children,
  size = "middle",
  className,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: size == "small",
        [styles.middle]: size == "middle",
        [styles.large]: size == "large",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
