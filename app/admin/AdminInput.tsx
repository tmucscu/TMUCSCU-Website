import React, { forwardRef } from "react";

import clsx from "clsx";

interface AdminInputType extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const AdminInput = forwardRef<HTMLInputElement, AdminInputType>(
  (props, ref) => {
    return (
      <div className="mb-3">
        <label
          className={clsx("block uppercase", props.error && "text-red-600")}
          htmlFor={props.label}
        >
          {props.label}
          <input
            className={clsx(
              props.error && "border-red-600 border",
              "appearance-none w-full rounded text-black py-3 px-4 mt-2 focus:outline-none focus:bg-white block"
            )}
            ref={ref}
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

export default AdminInput;
