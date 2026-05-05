import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function Navigation(props: {
  guestbookLink?: Types.Basic.Link;
  homeLink?: Types.Basic.Link;
  memoriesLink?: Types.Basic.Link;
  memoriesText?: React.ReactNode;
  recipesLink?: Types.Basic.Link;
  recipesText?: React.ReactNode;
  timelineLink?: Types.Basic.Link;
  timelineText?: React.ReactNode;
}): React.JSX.Element;
