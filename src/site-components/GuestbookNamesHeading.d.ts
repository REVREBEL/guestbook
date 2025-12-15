import * as React from "react";
import * as Types from "./types";

declare function GuestbookNamesHeading(
    props: {
        as?: React.ElementType;
        headlineTag?: Types.Basic.HeadingTag;
        headline?: React.ReactNode;
        headlineNamesHeadingText?: React.ReactNode;
    }
): React.JSX.Element