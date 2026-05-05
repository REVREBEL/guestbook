import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function GuestbookFormButton(props: {
  buttonButtonIconVisibility?: Types.Visibility.VisibilityConditions;
  buttonId?: string;
  buttonLabelText?: string;
  buttonLoadingMessage?: string;
  buttonRuntimeProps?: Types.Devlink.RuntimeProps;
  buttonSlot?: Types.Devlink.Slot;
  buttonVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
