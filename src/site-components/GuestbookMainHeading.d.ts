import * as React from "react";
import * as Types from "./types";

declare function GuestbookMainHeading(
    props: {
        as?: React.ElementType;
        headline?: React.ReactNode;
        subHeadlineDescriptionText?: React.ReactNode;
        headlineTag?: Types.Basic.HeadingTag;
    }
): React.JSX.Element