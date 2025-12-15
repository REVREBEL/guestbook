import * as React from "react";
import * as Types from "./types";

declare function LastNameField(
    props: {
        as?: React.ElementType;
        formFieldLabel?: React.ReactNode;
        fullNameFormFieldVisibility?: Types.Visibility.VisibilityConditions;
        fullNameFormIconVisibility?: Types.Visibility.VisibilityConditions;
        fullNameFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        lastNameFieldLastNameFormFieldLabel?: React.ReactNode;
        lastNameFieldFormFieldId?: Types.Basic.IdTextInput;
        formFieldVisibility?: Types.Visibility.VisibilityConditions;
        lastNameFieldFormFieldIconVisibility?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element