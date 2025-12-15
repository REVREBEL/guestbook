import * as React from "react";
import * as Types from "./types";

declare function GuestbookFilterTag(
    props: {
        as?: React.ElementType;
        visibility?: Types.Visibility.VisibilityConditions;
        id?: Types.Basic.IdTextInput;
        filterVariant?: "Clear" | "Newest Tag" | "Family" | "Relatives" | "Friends" | "Co-Workers" | "Business Partners" | "Secondary Outline";
        text?: React.ReactNode;
        tagSlot?: Types.Devlink.Slot;
        runtimeProps?: Types.Devlink.RuntimeProps;
    }
): React.JSX.Element