import * as React from "react";
import * as Types from "./types";

declare function GuestbookCount(
    props: {
        as?: React.ElementType;
        guestbookCountText?: React.ReactNode;
        visibility?: Types.Visibility.VisibilityConditions;
        description?: React.ReactNode;
        countSlot?: Types.Devlink.Slot;
        countRuntimeProps?: Types.Devlink.RuntimeProps;
    }
): React.JSX.Element