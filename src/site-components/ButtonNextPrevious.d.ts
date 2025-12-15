import * as React from "react";
import * as Types from "./types";

declare function ButtonNextPrevious(
    props: {
        as?: React.ElementType;
        buttonId?: Types.Basic.IdTextInput;
        componentVisibility?: Types.Visibility.VisibilityConditions;
        buttonVariantType?: "View More" | "Previous" | "Next";
        buttonRuntimeProps?: Types.Devlink.RuntimeProps;
        viewMoreButtonText?: React.ReactNode;
        nextButtonText?: React.ReactNode;
        previousPageButtonText?: React.ReactNode;
        viewMoreVisibility?: Types.Visibility.VisibilityConditions;
        nextVisibility?: Types.Visibility.VisibilityConditions;
        previousPageVisibility?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element