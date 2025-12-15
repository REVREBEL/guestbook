import * as React from "react";
import * as Types from "./types";

declare function MemoryForm(
    props: {
        as?: React.ElementType;
        formComponentFornVisibility?: Types.Visibility.VisibilityConditions;
        formComponentMemoryJournalComponentId?: Types.Basic.IdTextInput;
        addContentHeadlineText?: React.ReactNode;
        addContentParagraphText?: React.ReactNode;
        memoryNameFieldFormInputId?: Types.Basic.IdTextInput;
        /** Give your memory a name or title that captures its essence.*/
        memoryNameFieldFormInputLabel?: React.ReactNode;
        memoryNameFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        memoryDetailFieldFormInputId?: Types.Basic.IdTextInput;
        memoryDetailFieldFormSectionRuntimeProps?: Types.Devlink.RuntimeProps;
        memoryDetailFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        firstNameFieldFormInputId?: Types.Basic.IdTextInput;
        firstNameFieldFormInputVisibility?: Types.Visibility.VisibilityConditions;
        firstNameFieldIconVisibility?: Types.Visibility.VisibilityConditions;
        firstNameFieldFormInputLabel?: React.ReactNode;
        firstNameFieldFormSectionRuntimeProps?: Types.Devlink.RuntimeProps;
        firstNameFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        lastNameFieldFormInputId?: Types.Basic.IdTextInput;
        lastNameFieldFormInputVisibility?: Types.Visibility.VisibilityConditions;
        lastNameFieldFormInputLabel?: React.ReactNode;
        lastNameFieldFormSectionRuntimeProps?: Types.Devlink.RuntimeProps;
        lastNameFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        emailFormFieldFormInputId?: Types.Basic.IdTextInput;
        emailFormFieldFormInputVisibility?: Types.Visibility.VisibilityConditions;
        emailFormFieldIconVisibility?: Types.Visibility.VisibilityConditions;
        memoryLocationFieldFormInputId?: Types.Basic.IdTextInput;
        memoryLocationFieldFormInputVisibility?: Types.Visibility.VisibilityConditions;
        memoryLocationFieldIconVisibility?: Types.Visibility.VisibilityConditions;
        memoryDateFieldFormInputId?: Types.Basic.IdTextInput;
        memoryDateFieldFormInputVisibility?: Types.Visibility.VisibilityConditions;
        memoryDateFieldIconVisibility?: Types.Visibility.VisibilityConditions;
        memoryDateFieldFormInputLabel?: React.ReactNode;
        memoryDateFieldFormSectionRuntimeProps?: Types.Devlink.RuntimeProps;
        firstNameFieldFormSectionSlot?: Types.Devlink.Slot;
        contentLinkFieldFormInputId?: Types.Basic.IdTextInput;
        /** Include the entire section for all three tags input fields.*/
        contentLinkFieldFormSectionVisibility?: Types.Visibility.VisibilityConditions;
        /** Enables users to share and upload a photo or video via a dedicated asset link, which, once added, is downloaded to the CMS and insert to the memory card.*/
        contentLinkFieldFormSectionProps?: Types.Devlink.RuntimeProps;
        /** Enables users to share and upload a photo or video via a dedicated asset link, which, once added, is downloaded to the CMS and insert to the memory card.*/
        contentLinkFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        imageUploadFieldIconVisibility?: Types.Visibility.VisibilityConditions;
        imageUploadFieldImageUploadRuntimeProps?: Types.Devlink.RuntimeProps;
        imageUploadFieldImageUploadSlot?: Types.Devlink.Slot;
        videoUploadFieldIconVisibility?: Types.Visibility.VisibilityConditions;
        videoUploadFieldVideoUploadRuntimeProps?: Types.Devlink.RuntimeProps;
        videoUploadFieldVideoUploadSlot?: Types.Devlink.Slot;
        tagsGroupTagsGroupVisibility?: Types.Visibility.VisibilityConditions;
        tagsGroupFormInputLabel?: React.ReactNode;
        tagsGroupFormSectionRuntimeProps?: Types.Devlink.RuntimeProps;
        tagsGroupFormSectionSlot?: Types.Devlink.Slot;
        memoryDateFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        memoryDateFieldFormSectionSlot?: Types.Devlink.Slot;
        collectionIdFieldFormSectionRuntimeProps?: Types.Devlink.RuntimeProps;
        lastNameFieldFormSectionSlot?: Types.Devlink.Slot;
        emailFormFieldFormInputDisclaimer?: React.ReactNode;
        emailFormFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        emailFormFieldFormSectionRuntimeProps?: Types.Devlink.RuntimeProps;
        emailFormFieldFormSectionSlot?: Types.Devlink.Slot;
        memoryLocationFieldFormInputLabel?: React.ReactNode;
        memoryLocationFieldFormSectionRuntimeProps?: Types.Devlink.RuntimeProps;
        memoryLocationFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        memoryLocationFieldFormSectionSlot?: Types.Devlink.Slot;
        tag1FieldFormInputId?: Types.Basic.IdTextInput;
        tag1FieldIconVisibility?: Types.Visibility.VisibilityConditions;
        tag2FieldFormInputId?: Types.Basic.IdTextInput;
        tag2FieldIconVisibility?: Types.Visibility.VisibilityConditions;
        tag3FieldFormInputId?: Types.Basic.IdTextInput;
        tag3FieldIconVisibility?: Types.Visibility.VisibilityConditions;
        tag1FieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        tag3FieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        submitButtonSubmitButtonId?: Types.Basic.IdTextInput;
        submitButtonSubmitButtonVisibility?: Types.Visibility.VisibilityConditions;
        submitButtonSubmitButtonColorVariant?: "Warm Sandston" | "Warm Sandston Outline" | "Slate Navy" | "Slate Navy Outline" | "Ocean Teal" | "Ocean Teal Outline" | "Rustwood Red" | "Rustwood Outline";
        contentLinkFieldFormSectionSlot?: Types.Devlink.Slot;
        submitButtonSubmitButtonText?: Types.Builtin.Text;
        submitButtonUserLoadingText?: Types.Builtin.Text;
        submitButtonSubmitButtonInnerRuntimeProps?: Types.Devlink.RuntimeProps;
        submitButtonSubmitButtonOuterRuntimeProps?: Types.Devlink.RuntimeProps;
        submitButtonSubmitButtonSlot?: Types.Devlink.Slot;
        tag2FieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
        collectionIdFieldCollectionIdVariable?: Types.Builtin.Text;
        testFieldTestVariable?: Types.Builtin.Text;
    }
): React.JSX.Element