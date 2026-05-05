import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function NameField(props: {
  fullNameFormFieldId?: string;
  fullNameFormFieldLabel?: React.ReactNode;
  fullNameFormFieldVisibility?: Types.Visibility.VisibilityConditions;
  fullNameFormIconVisibility?: Types.Visibility.VisibilityConditions;
  fullNameFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
