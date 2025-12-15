import * as React from "react";
import * as Types from "./types";

declare function Tag(
    props: {
        as?: React.ElementType;
        visibility?: Types.Visibility.VisibilityConditions;
        id?: Types.Basic.IdTextInput;
        colorVariant?: "Clear" | "Warm Sandston" | "Rustwood Red" | "Rose Clay" | "Slate Navy" | "Ocean Teal" | "Warm Sandston Outline" | "Rustwood Red Outline" | "Rose Clay Outline" | "Ocean Tea Outline" | "Slate Navy Outline" | "Ocean Teal Outline";
        text?: React.ReactNode;
        runtimeProps?: Types.Devlink.RuntimeProps;
    }
): React.JSX.Element