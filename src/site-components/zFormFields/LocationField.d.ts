import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function LocationField(props: {
  locationFormFieldId?: string;
  locationFormFieldLabel?: React.ReactNode;
  locationFormFieldVisibility?: Types.Visibility.VisibilityConditions;
  locationFormIconVisibility?: Types.Visibility.VisibilityConditions;
  locationFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
