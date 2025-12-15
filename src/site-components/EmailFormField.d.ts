import * as React from "react";
import * as Types from "./types";

declare function EmailFormField(
    props: {
        as?: React.ElementType;
        emailFieldFormFieldVisibility?: Types.Visibility.VisibilityConditions;
        emailFieldBottomDisclaimerLabel?: React.ReactNode;
        emailFieldDisclaimerVisibility?: Types.Visibility.VisibilityConditions;
        emailFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        emailFieldFormFieldLabel?: React.ReactNode;
        emailFieldFormIconVisibility?: Types.Visibility.VisibilityConditions;
        emailFieldFormFieldId?: Types.Basic.IdTextInput;
    }
): React.JSX.Element