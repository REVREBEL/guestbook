import * as React from "react";
import * as Types from "./types";

declare function PlaceOrLocationField(
    props: {
        as?: React.ElementType;
        memoryDateFieldFormInputLabel?: React.ReactNode;
        memoryDateFieldFormInputId?: Types.Basic.IdTextInput;
        memoryDateFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        memoryDateFieldFormInputVisibility2?: Types.Visibility.VisibilityConditions;
        memoryDateFieldFormInputId2?: Types.Basic.IdTextInput;
        memoryDateFieldFormInputRuntimeProps2?: Types.Devlink.RuntimeProps;
        memoryDateFieldFormInputSlot?: Types.Devlink.Slot;
        memoryPlaceLocationFormInputVisibility?: Types.Visibility.VisibilityConditions;
        memoryPlaceLocationMemoryLocationFieldText?: React.ReactNode;
        memoryPlaceLocationFormInputIconVisibility?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element