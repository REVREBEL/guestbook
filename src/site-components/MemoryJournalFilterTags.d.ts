import * as React from "react";
import * as Types from "./types";

declare function MemoryJournalFilterTags(
    props: {
        as?: React.ElementType;
        tagTagText?: React.ReactNode;
        tagTagRuntimeProps?: Types.Devlink.RuntimeProps;
        tagTagSlot?: Types.Devlink.Slot;
        tagTagVisibility?: Types.Visibility.VisibilityConditions;
        tagTagId?: Types.Basic.IdTextInput;
        filterVariant?: "Clear" | "All" | "Newest" | "User Tag 1" | "User Tag 2" | "User Tag 3" | "User Tag 4" | "User Tag 5";
    }
): React.JSX.Element