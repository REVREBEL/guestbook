import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function TimelineForm(props: {
  addContentHeadlineText?: React.ReactNode;
  addContentParagraphText?: React.ReactNode;
  buttonSubmitButtonColorVariant?:
    | "Warm Sandston"
    | "Warm Sandston Outline"
    | "Slate Navy"
    | "Slate Navy Outline"
    | "Ocean Teal"
    | "Ocean Teal Outline"
    | "Rustwood Red"
    | "Rustwood Outline";
  buttonSubmitButtonId?: string;
  buttonSubmitButtonInnerRuntimeProps?: Types.Devlink.RuntimeProps;
  buttonSubmitButtonOuterRuntimeProps?: Types.Devlink.RuntimeProps;
  buttonSubmitButtonSlot?: Types.Devlink.Slot;
  buttonSubmitButtonVisibility?: Types.Visibility.VisibilityConditions;
  buttonUserLoadingText?: string;
  emailFieldFormInputDisclaimer?: React.ReactNode;
  emailFieldFormInputId?: string;
  emailFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
  emailFieldFormInputVisibility?: Types.Visibility.VisibilityConditions;
  emailFieldFormSectionRuntimeProps?: Types.Devlink.RuntimeProps;
  emailFieldFormSectionSlot?: Types.Devlink.Slot;
  emailFieldIconVisibility?: Types.Visibility.VisibilityConditions;
  fullNameFieldFormInputId?: string;
  fullNameFieldFormInputLabel?: React.ReactNode;
  fullNameFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
  fullNameFieldFormInputVisibility?: Types.Visibility.VisibilityConditions;
  locationFieldFormInputId?: string;
  locationFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
  locationFieldFormInputVisibility?: Types.Visibility.VisibilityConditions;
  locationFieldFormSectionSlot?: Types.Devlink.Slot;
  locationFieldIconVisibility?: Types.Visibility.VisibilityConditions;
  submitButtonText?: string;
  timelineDateFieldFormInputId?: string;
  timelineDateFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
  timelineDateFieldFormInputVisibility?: Types.Visibility.VisibilityConditions;
  timelineDateFieldFormSectionRuntimeProps?: Types.Devlink.RuntimeProps;
  timelineDateFieldFormSectionSlot?: Types.Devlink.Slot;
  timelineDateFieldIconVisibility?: Types.Visibility.VisibilityConditions;
  timelineDetailFieldFormInputId?: string;
  timelineDetailFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
  timelineDetailFieldFormInputVisibility?: Types.Visibility.VisibilityConditions;
  timelineNameLine1FormInputId?: string;
  timelineNameLine1FormInputRuntimeProps?: Types.Devlink.RuntimeProps;
  timelineNameLine1FormInputVisibility?: Types.Visibility.VisibilityConditions;
  tImelineNameLine2FormInputId?: string;
  tImelineNameLine2FormInputRuntimeProps?: Types.Devlink.RuntimeProps;
  tImelineNameLine2FormInputVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
