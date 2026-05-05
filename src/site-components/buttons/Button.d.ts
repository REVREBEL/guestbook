import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function Button(props: {
  buttonButtonId?: string;
  buttonButtonLink?: Types.Basic.Link;
  buttonButtonLinkRuntimeProps?: Types.Devlink.RuntimeProps;
  buttonButtonRuntimeProps?: Types.Devlink.RuntimeProps;
  buttonButtonSlot?: Types.Devlink.Slot;
  buttonButtonText?: React.ReactNode;
  buttonButtonVisibility?: Types.Visibility.VisibilityConditions;
  variant?:
    | "Warm Sandston"
    | "Warm Sandston Outline"
    | "Slate Navy"
    | "Slate Navy Outline"
    | "Ocean Teal"
    | "Ocean Teal Outline"
    | "Rustwood Red"
    | "Rustwood Outline";
}): React.JSX.Element;
