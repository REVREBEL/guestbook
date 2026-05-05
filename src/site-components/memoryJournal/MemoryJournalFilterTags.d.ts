import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function MemoryJournalFilterTags(props: {
  filterVariant?:
    | "Clear"
    | "All"
    | "Newest"
    | "User Tag 1"
    | "User Tag 2"
    | "User Tag 3"
    | "User Tag 4"
    | "User Tag 5";
  tagTagId?: string;
  tagTagRuntimeProps?: Types.Devlink.RuntimeProps;
  tagTagSlot?: Types.Devlink.Slot;
  tagTagText?: React.ReactNode;
  tagTagVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
