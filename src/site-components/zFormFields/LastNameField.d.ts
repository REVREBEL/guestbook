import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function LastNameField(props: {
  formFieldLabel?: React.ReactNode;
  formFieldVisibility?: Types.Visibility.VisibilityConditions;
  fullNameFormFieldVisibility?: Types.Visibility.VisibilityConditions;
  fullNameFormIconVisibility?: Types.Visibility.VisibilityConditions;
  fullNameFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
  lastNameFieldFormFieldIconVisibility?: Types.Visibility.VisibilityConditions;
  lastNameFieldFormFieldId?: string;
  lastNameFieldLastNameFormFieldLabel?: React.ReactNode;
}): React.JSX.Element;
