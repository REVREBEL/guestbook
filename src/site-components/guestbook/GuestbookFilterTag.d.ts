import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function GuestbookFilterTag(props: {
  filterVariant?:
    | "Clear"
    | "Newest Tag"
    | "Family"
    | "Relatives"
    | "Friends"
    | "Co-Workers"
    | "Business Partners"
    | "Secondary Outline";
  id?: string;
  runtimeProps?: Types.Devlink.RuntimeProps;
  tagSlot?: Types.Devlink.Slot;
  text?: React.ReactNode;
  visibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
