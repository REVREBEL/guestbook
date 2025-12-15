import * as React from "react";
import * as Types from "./types";

declare function SubmitLinkField(
    props: {
        as?: React.ElementType;
        formInputVisibility?: Types.Visibility.VisibilityConditions;
        memoryDateFieldFormInputLabel?: React.ReactNode;
        memoryDateFieldFormInputId?: Types.Basic.IdTextInput;
        memoryDateFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        memoryDateFieldFormInputVisibility2?: Types.Visibility.VisibilityConditions;
        memoryDateFieldFormInputId2?: Types.Basic.IdTextInput;
        memoryDateFieldFormInputRuntimeProps2?: Types.Devlink.RuntimeProps;
        memoryDateFieldFormInputSlot?: Types.Devlink.Slot;
        memoryPlaceLocationMemoryLocationFieldText?: React.ReactNode;
        memoryPlaceLocationFormInputIconVisibility?: Types.Visibility.VisibilityConditions;
        submitLinkFormInputId?: Types.Basic.IdTextInput;
        submitLinkFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        submitLinkFormInputSlot?: Types.Devlink.Slot;
        runtimeProps?: Types.Devlink.RuntimeProps;
        contentUrlFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        contentUrlFormInputId?: Types.Basic.IdTextInput;
        formInputId?: Types.Basic.IdTextInput;
        contentUrlFormFieldLabel?: React.ReactNode;
    }
): React.JSX.Element