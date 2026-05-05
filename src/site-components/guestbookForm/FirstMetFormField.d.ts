import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function FirstMetFormField(props: {
  firstMetFormFieldId?: string;
  firstMetFormFieldLabel?: React.ReactNode;
  firstMetFormFieldVisibility?: Types.Visibility.VisibilityConditions;
  firstMetFormIconVisibility?: Types.Visibility.VisibilityConditions;
  firstMetFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
