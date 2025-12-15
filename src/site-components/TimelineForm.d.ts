import * as React from "react";
import * as Types from "./types";

declare function TimelineForm(
    props: {
        as?: React.ElementType;
        timelineDetailFieldFormInputId?: Types.Basic.IdTextInput;
        timelineDetailFieldFormInputVisibility?: Types.Visibility.VisibilityConditions;
        timelineDetailFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        timelineNameLine1FormInputId?: Types.Basic.IdTextInput;
        tImelineNameLine2FormInputId?: Types.Basic.IdTextInput;
        locationFieldFormInputId?: Types.Basic.IdTextInput;
        locationFieldFormInputVisibility?: Types.Visibility.VisibilityConditions;
        locationFieldIconVisibility?: Types.Visibility.VisibilityConditions;
        locationFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        locationFieldFormSectionSlot?: Types.Devlink.Slot;
        timelineDateFieldFormInputId?: Types.Basic.IdTextInput;
        timelineDateFieldFormInputVisibility?: Types.Visibility.VisibilityConditions;
        timelineDateFieldIconVisibility?: Types.Visibility.VisibilityConditions;
        timelineDateFieldFormSectionRuntimeProps?: Types.Devlink.RuntimeProps;
        timelineDateFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        timelineDateFieldFormSectionSlot?: Types.Devlink.Slot;
        addContentHeadlineText?: React.ReactNode;
        addContentParagraphText?: React.ReactNode;
        timelineNameLine1FormInputVisibility?: Types.Visibility.VisibilityConditions;
        tImelineNameLine2FormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        tImelineNameLine2FormInputVisibility?: Types.Visibility.VisibilityConditions;
        photo1UploadFIeldIconVisibility?: Types.Visibility.VisibilityConditions;
        photo1UploadFIeldImageUploadRuntimeProps?: Types.Devlink.RuntimeProps;
        photo1UploadFIeldImageUploadSlot?: Types.Devlink.Slot;
        photo2UploadFIeldIconVisibility?: Types.Visibility.VisibilityConditions;
        photo2UploadFIeldImageUploadRuntimeProps?: Types.Devlink.RuntimeProps;
        photo2UploadFIeldImageUploadSlot?: Types.Devlink.Slot;
        fullNameFieldFormInputId?: Types.Basic.IdTextInput;
        fullNameFieldFormInputVisibility?: Types.Visibility.VisibilityConditions;
        fullNameFieldFormInputLabel?: React.ReactNode;
        emailFieldFormInputId?: Types.Basic.IdTextInput;
        emailFieldFormInputVisibility?: Types.Visibility.VisibilityConditions;
        emailFieldIconVisibility?: Types.Visibility.VisibilityConditions;
        emailFieldFormInputDisclaimer?: React.ReactNode;
        emailFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        emailFieldFormSectionRuntimeProps?: Types.Devlink.RuntimeProps;
        emailFieldFormSectionSlot?: Types.Devlink.Slot;
        collectionIdFieldFormInputId?: Types.Basic.IdTextInput;
        /** Inserts the collection id dynamically from the app setup variables.*/
        collectionIdFieldCollectionIdVariable?: Types.Builtin.Text;
        collectionIdFieldFormSectionRuntimeProps?: Types.Devlink.RuntimeProps;
        fullNameFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        submitButtonSubmitButtonId?: Types.Basic.IdTextInput;
        submitButtonSubmitButtonVisibility?: Types.Visibility.VisibilityConditions;
        submitButtonSubmitButtonColorVariant?: "Warm Sandston" | "Warm Sandston Outline" | "Slate Navy" | "Slate Navy Outline" | "Ocean Teal" | "Ocean Teal Outline" | "Rustwood Red" | "Rustwood Outline";
        submitButtonSubmitButtonText?: Types.Builtin.Text;
        submitButtonUserLoadingText?: Types.Builtin.Text;
        submitButtonSubmitButtonInnerRuntimeProps?: Types.Devlink.RuntimeProps;
        submitButtonSubmitButtonOuterRuntimeProps?: Types.Devlink.RuntimeProps;
        submitButtonSubmitButtonSlot?: Types.Devlink.Slot;
        timelineNameLine1FormInputRuntimeProps?: Types.Devlink.RuntimeProps;
    }
): React.JSX.Element