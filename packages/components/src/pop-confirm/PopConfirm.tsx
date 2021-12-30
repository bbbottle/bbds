import React, { EventHandler } from "react";
import { Button, ButtonType } from "../button/Button";
import { Panel } from "../panel/Panel";

export type PopConfirmProps = {
  onOk?: EventHandler<React.MouseEvent<HTMLButtonElement>>;
  onCancel?: EventHandler<React.MouseEvent<HTMLButtonElement>>;
  className?: string;
  content?: any;
  children?: any;
  width?: number;
};

export const PopConfirm = (props: PopConfirmProps) => {
  const { onOk, onCancel, children, content, className } = props;
  return (
    <Panel className={className}>
      <div className="mb-32">{children || content}</div>
      <div className="flex justify-end">
        {onCancel && (
          <Button onClick={onCancel} type={ButtonType.NORMAL}>
            Cancel
          </Button>
        )}
        {onOk && (
          <Button onClick={onOk} className="ml-16" type={ButtonType.PRIMARY}>
            OK
          </Button>
        )}
      </div>
    </Panel>
  );
};
