import * as React from "react";
import * as Types from "./types";

declare function GuestbookSubHeading(
    props: {
        as?: React.ElementType;
        headline?: React.ReactNode;
        subHeadlineText?: React.ReactNode;
        headlineTag?: Types.Basic.HeadingTag;
        id?: Types.Basic.IdTextInput;
        visibility?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element