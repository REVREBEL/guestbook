import * as React from "react";
import * as Types from "./types";

declare function FilterPreviousNextSlots(
    props: {
        as?: React.ElementType;
        viewMoreSlotVisibility?: Types.Visibility.VisibilityConditions;
        viewMoreViewMoreSlot?: Types.Devlink.Slot;
        viewMoreRuntimeProps?: Types.Devlink.RuntimeProps;
        nextSlotVisibility?: Types.Visibility.VisibilityConditions;
        nextNextSlot?: Types.Devlink.Slot;
        nextRuntimeProps?: Types.Devlink.RuntimeProps;
        previousSlotVisibility?: Types.Visibility.VisibilityConditions;
        previousPreviousSlot?: Types.Devlink.Slot;
        previousRuntimeProps?: Types.Devlink.RuntimeProps;
    }
): React.JSX.Element