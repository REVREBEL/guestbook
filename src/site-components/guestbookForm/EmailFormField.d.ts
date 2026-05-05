import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function EmailFormField(props: {
  emailFieldBottomDisclaimerLabel?: React.ReactNode;
  emailFieldDisclaimerVisibility?: Types.Visibility.VisibilityConditions;
  emailFieldFormFieldId?: string;
  emailFieldFormFieldLabel?: React.ReactNode;
  emailFieldFormFieldVisibility?: Types.Visibility.VisibilityConditions;
  emailFieldFormIconVisibility?: Types.Visibility.VisibilityConditions;
  emailFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
