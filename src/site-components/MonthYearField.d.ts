import * as React from "react";
import * as Types from "./types";

declare function MonthYearField(
    props: {
        as?: React.ElementType;
        memoryDateFieldFormInputLabel?: React.ReactNode;
        memoryDateFieldFormInputVisibility?: Types.Visibility.VisibilityConditions;
        memoryDateFieldFormInputId?: Types.Basic.IdTextInput;
        memoryDateFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        memoryDateFieldFormInputSlot?: Types.Devlink.Slot;
        memoryDateFieldFormInputVisibility2?: Types.Visibility.VisibilityConditions;
        memoryDateFieldFormInputId2?: Types.Basic.IdTextInput;
        memoryDateFieldFormInputRuntimeProps2?: Types.Devlink.RuntimeProps;
    }
): React.JSX.Element