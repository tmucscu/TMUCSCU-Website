import React, { forwardRef } from "react";

import clsx from "clsx";

interface AdminTextAreaType
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const AdminTextArea = forwardRef<HTMLTextAreaElement, AdminTextAreaType>(
  (props, ref) => {
    return (
      <div className="mb-3">
        <label
          className={clsx("block uppercase", props.error && "text-red-600")}
          htmlFor={props.label}
        >
          {props.label}
          <textarea
            className={clsx(
              props.error && "border-red-600 border",
              "appearance-none w-full rounded text-black py-3 px-4 mt-2 focus:outline-none focus:bg-white block"
            )}
            ref={ref}
            rows={10}
            {...props}
          />
        </label>
        {props.error && (
          <span className="text-red-600 text-xs">{props.error}</span>
        )}
      </div>
    );
  }
);

export default AdminTextArea;
