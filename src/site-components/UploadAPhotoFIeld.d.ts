import * as React from "react";
import * as Types from "./types";

declare function UploadAPhotoFIeld(
    props: {
        as?: React.ElementType;
        fullNameFormFieldId?: Types.Basic.IdTextInput;
        fullNameFormFieldVisibility?: Types.Visibility.VisibilityConditions;
        fullNameFormIconVisibility?: Types.Visibility.VisibilityConditions;
        uploadPhotoUploadPhotoRuntimeProps?: Types.Devlink.RuntimeProps;
        uploadPhotoUploadPhotoSlot?: Types.Devlink.Slot;
        uploadPhotoFormInputLabel?: React.ReactNode;
    }
): React.JSX.Element