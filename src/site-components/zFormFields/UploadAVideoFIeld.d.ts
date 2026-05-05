import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function UploadAVideoFIeld(props: {
  fullNameFormFieldId?: string;
  fullNameFormFieldVisibility?: Types.Visibility.VisibilityConditions;
  fullNameFormIconVisibility?: Types.Visibility.VisibilityConditions;
  uploadPhotoFormInputLabel?: React.ReactNode;
  uploadPhotoUploadPhotoRuntimeProps?: Types.Devlink.RuntimeProps;
  uploadPhotoUploadPhotoSlot?: Types.Devlink.Slot;
  uploadVideoFormInputLabel?: React.ReactNode;
}): React.JSX.Element;
