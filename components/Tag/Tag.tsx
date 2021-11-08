import styles from "./Tag.module.css";
import { DivProps } from "./Tag.props";
import cn from "classnames";

export const Div = ({
  children,
  size = "small",
  color = "ghost",
  className,
  href,
  ...props
}: DivProps): JSX.Element => {
  return (
    <div
      className={cn(styles.div, className, {
        [styles.small]: size == "small",
        [styles.large]: size == "large",
        [styles.ghost]: color == "ghost",
        [styles.red]: color == "red",
        [styles.green]: color == "green",
        [styles.gray]: color == "gray",
        [styles.primary]: color == "primary",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
