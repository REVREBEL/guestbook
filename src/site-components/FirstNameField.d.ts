import * as React from "react";
import * as Types from "./types";

declare function FirstNameField(
    props: {
        as?: React.ElementType;
        firstNameFormFieldFormInputVisibility?: Types.Visibility.VisibilityConditions;
        firstNameFormFieldFormInputId?: Types.Basic.IdTextInput;
        firstNameFormFieldFormInputSlot?: Types.Devlink.Slot;
        firstNameFormFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        firstNameFormFieldFormInputLabel?: React.ReactNode;
    }
): React.JSX.Element