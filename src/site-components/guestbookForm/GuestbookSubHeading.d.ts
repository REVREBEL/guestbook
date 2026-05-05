import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function GuestbookSubHeading(props: {
  headline?: React.ReactNode;
  headlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  id?: string;
  subHeadlineText?: React.ReactNode;
  visibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
