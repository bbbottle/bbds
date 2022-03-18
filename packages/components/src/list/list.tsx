// @ts-ignore
import cls from "classnames";
import React, { ReactElement, FunctionComponent } from "react";
export interface listProps {
  className?: string;
  compact?: boolean;
  items: any[];
  itemRenderer: (itemProps: any, index: number) => ReactElement;
  horizontal?: boolean;
}

export const List: FunctionComponent<listProps> = (props) => {
  const { items, itemRenderer, className, horizontal, compact } = props;

  const spaceCls = compact ? "" : horizontal ? "mr-3" : "mb-4";
  return (
    <ul
      className={cls(className, "list-style-none", {
        flex: horizontal,
        "align-center": horizontal,
      })}
    >
      {items.map((item, index) => {
        return (
          <li key={item.id || index} className={cls(spaceCls, "flex-shrink-0")}>
            {itemRenderer(item, index)}
          </li>
        );
      })}
    </ul>
  );
};
