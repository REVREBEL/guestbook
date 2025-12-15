import * as React from "react";
import * as Types from "./types";

declare function WebflowFilterPreviousNextSlots(
    props: {
        as?: React.ElementType;
        viewMoreSlot2?: Types.Slots.SlotContent;
        viewMoreViewMoreSlot?: Types.Devlink.Slot;
        nextSlot?: Types.Slots.SlotContent;
        previousSlot?: Types.Slots.SlotContent;
        previousPreviousSlot?: Types.Devlink.Slot;
        nextNextSlot?: Types.Devlink.Slot;
    }
): React.JSX.Element