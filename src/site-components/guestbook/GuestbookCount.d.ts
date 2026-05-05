import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function GuestbookCount(props: {
  countRuntimeProps?: Types.Devlink.RuntimeProps;
  countSlot?: Types.Devlink.Slot;
  description?: React.ReactNode;
  guestbookCountText?: React.ReactNode;
  visibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
