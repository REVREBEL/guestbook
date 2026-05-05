import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function Tag(props: {
  colorVariant?:
    | "Clear"
    | "Warm Sandston"
    | "Rustwood Red"
    | "Rose Clay"
    | "Slate Navy"
    | "Ocean Teal"
    | "Warm Sandston Outline"
    | "Rustwood Red Outline"
    | "Rose Clay Outline"
    | "Ocean Tea Outline"
    | "Slate Navy Outline"
    | "Ocean Teal Outline";
  id?: string;
  runtimeProps?: Types.Devlink.RuntimeProps;
  text?: React.ReactNode;
  visibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
