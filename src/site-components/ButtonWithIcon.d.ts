import * as React from "react";
import * as Types from "./types";

declare function ButtonWithIcon(
    props: {
        as?: React.ElementType;
        componentVisibility?: Types.Visibility.VisibilityConditions;
        componentButtonId?: Types.Basic.IdTextInput;
        componentColorVariant?: "Warm Sandston" | "Slate Navy" | "Warm Sandston Outline" | "Slate Navy Outline";
        componentIconVariant?: "Flower" | "Book" | "Heart" | "Orange Half" | "Person" | "Location" | "No Icon";
        componentRuntimeProps?: Types.Devlink.RuntimeProps;
        componentSlot?: Types.Devlink.Slot;
        linkButtonLink?: Types.Basic.Link;
        linkButtonIcon?: React.ReactNode;
        linkButtonText?: React.ReactNode;
    }
): React.JSX.Element