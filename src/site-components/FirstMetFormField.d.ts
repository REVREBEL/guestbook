import * as React from "react";
import * as Types from "./types";

declare function FirstMetFormField(
    props: {
        as?: React.ElementType;
        firstMetFormFieldVisibility?: Types.Visibility.VisibilityConditions;
        firstMetFormFieldId?: Types.Basic.IdTextInput;
        firstMetFormFieldLabel?: React.ReactNode;
        firstMetFormIconVisibility?: Types.Visibility.VisibilityConditions;
        firstMetFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
    }
): React.JSX.Element