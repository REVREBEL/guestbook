import * as React from "react";
import * as Types from "./types";

declare function Button(
    props: {
        as?: React.ElementType;
        variant?: "Warm Sandston" | "Warm Sandston Outline" | "Slate Navy" | "Slate Navy Outline" | "Ocean Teal" | "Ocean Teal Outline" | "Rustwood Red" | "Rustwood Outline";
        buttonButtonRuntimeProps?: Types.Devlink.RuntimeProps;
        buttonButtonSlot?: Types.Devlink.Slot;
        buttonButtonVisibility?: Types.Visibility.VisibilityConditions;
        buttonButtonId?: Types.Basic.IdTextInput;
        buttonButtonLink?: Types.Basic.Link;
        buttonButtonText?: React.ReactNode;
        buttonButtonLinkRuntimeProps?: Types.Devlink.RuntimeProps;
    }
): React.JSX.Element