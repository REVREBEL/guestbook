import * as React from "react";
import * as Types from "./types";

declare function UploadAVideo(
    props: {
        as?: React.ElementType;
        fullNameFormFieldVisibility?: Types.Visibility.VisibilityConditions;
        fullNameFormFieldId?: Types.Basic.IdTextInput;
        fullNameFormFieldLabel?: React.ReactNode;
        fullNameFormIconVisibility?: Types.Visibility.VisibilityConditions;
        fullNameFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
    }
): React.JSX.Element