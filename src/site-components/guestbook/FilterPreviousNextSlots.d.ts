import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function FilterPreviousNextSlots(props: {
  nextNextSlot?: Types.Devlink.Slot;
  nextRuntimeProps?: Types.Devlink.RuntimeProps;
  nextSlotVisibility?: Types.Visibility.VisibilityConditions;
  previousPreviousSlot?: Types.Devlink.Slot;
  previousRuntimeProps?: Types.Devlink.RuntimeProps;
  previousSlotVisibility?: Types.Visibility.VisibilityConditions;
  viewMoreRuntimeProps?: Types.Devlink.RuntimeProps;
  viewMoreSlotVisibility?: Types.Visibility.VisibilityConditions;
  viewMoreViewMoreSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
