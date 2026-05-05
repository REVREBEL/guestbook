import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function ButtonNextPrevious(props: {
  buttonId?: string;
  buttonRuntimeProps?: Types.Devlink.RuntimeProps;
  buttonVariantType?: "View More" | "Previous" | "Next";
  componentVisibility?: Types.Visibility.VisibilityConditions;
  nextButtonText?: React.ReactNode;
  nextVisibility?: Types.Visibility.VisibilityConditions;
  previousPageButtonText?: React.ReactNode;
  previousPageVisibility?: Types.Visibility.VisibilityConditions;
  viewMoreButtonText?: React.ReactNode;
  viewMoreVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
