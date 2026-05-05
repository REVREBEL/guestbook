import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function ButtonWithIcon(props: {
  componentButtonId?: string;
  componentColorVariant?:
    | "Warm Sandston"
    | "Slate Navy"
    | "Warm Sandston Outline"
    | "Slate Navy Outline";
  componentIconVariant?:
    | "Flower"
    | "Book"
    | "Heart"
    | "Orange Half"
    | "Person"
    | "Location"
    | "No Icon";
  componentRuntimeProps?: Types.Devlink.RuntimeProps;
  componentSlot?: Types.Devlink.Slot;
  componentVisibility?: Types.Visibility.VisibilityConditions;
  linkButtonIcon?: React.ReactNode;
  linkButtonLink?: Types.Basic.Link;
  linkButtonText?: React.ReactNode;
}): React.JSX.Element;
