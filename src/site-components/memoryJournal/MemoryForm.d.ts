import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function MemoryForm(props: {
  addContentHeadlineText?: React.ReactNode;
  addContentParagraphText?: React.ReactNode;
  collectionIdFieldCollectionIdVariable?: string;
  collectionIdFieldFormSectionRuntimeProps?: Types.Devlink.RuntimeProps;
  contentLinkFieldFormInputId?: string;
  /** Enables users to share and upload a photo or video via a dedicated asset link, which, once added, is downloaded to the CMS and insert to the memory card.*/
  contentLinkFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
  /** Enables users to share and upload a photo or video via a dedicated asset link, which, once added, is downloaded to the CMS and insert to the memory card.*/
  contentLinkFieldFormSectionProps?: Types.Devlink.RuntimeProps;
  contentLinkFieldFormSectionSlot?: Types.Devlink.Slot;
  /** Include the entire section for all three tags input fields.*/
  contentLinkFieldFormSectionVisibility?: Types.Visibility.VisibilityConditions;
  emailFormFieldFormInputDisclaimer?: React.ReactNode;
  emailFormFieldFormInputId?: string;
  emailFormFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
  emailFormFieldFormInputVisibility?: Types.Visibility.VisibilityConditions;
  emailFormFieldFormSectionRuntimeProps?: Types.Devlink.RuntimeProps;
  emailFormFieldFormSectionSlot?: Types.Devlink.Slot;
  emailFormFieldIconVisibility?: Types.Visibility.VisibilityConditions;
  firstNameFieldFormInputId?: string;
  firstNameFieldFormInputLabel?: React.ReactNode;
  firstNameFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
  firstNameFieldFormInputVisibility?: Types.Visibility.VisibilityConditions;
  firstNameFieldFormSectionRuntimeProps?: Types.Devlink.RuntimeProps;
  firstNameFieldFormSectionSlot?: Types.Devlink.Slot;
  firstNameFieldIconVisibility?: Types.Visibility.VisibilityConditions;
  formComponentFornVisibility?: Types.Visibility.VisibilityConditions;
  formComponentMemoryJournalComponentId?: string;
  imageUploadFieldIconVisibility?: Types.Visibility.VisibilityConditions;
  imageUploadFieldImageUploadRuntimeProps?: Types.Devlink.RuntimeProps;
  imageUploadFieldImageUploadSlot?: Types.Devlink.Slot;
  lastNameFieldFormInputId?: string;
  lastNameFieldFormInputLabel?: React.ReactNode;
  lastNameFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
  lastNameFieldFormInputVisibility?: Types.Visibility.VisibilityConditions;
  lastNameFieldFormSectionRuntimeProps?: Types.Devlink.RuntimeProps;
  lastNameFieldFormSectionSlot?: Types.Devlink.Slot;
  memoryDateFieldFormInputId?: string;
  memoryDateFieldFormInputLabel?: React.ReactNode;
  memoryDateFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
  memoryDateFieldFormInputVisibility?: Types.Visibility.VisibilityConditions;
  memoryDateFieldFormSectionRuntimeProps?: Types.Devlink.RuntimeProps;
  memoryDateFieldFormSectionSlot?: Types.Devlink.Slot;
  memoryDateFieldIconVisibility?: Types.Visibility.VisibilityConditions;
  memoryDetailFieldFormInputId?: string;
  memoryDetailFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
  memoryDetailFieldFormSectionRuntimeProps?: Types.Devlink.RuntimeProps;
  memoryLocationFieldFormInputId?: string;
  memoryLocationFieldFormInputLabel?: React.ReactNode;
  memoryLocationFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
  memoryLocationFieldFormInputVisibility?: Types.Visibility.VisibilityConditions;
  memoryLocationFieldFormSectionRuntimeProps?: Types.Devlink.RuntimeProps;
  memoryLocationFieldFormSectionSlot?: Types.Devlink.Slot;
  memoryLocationFieldIconVisibility?: Types.Visibility.VisibilityConditions;
  memoryNameFieldFormInputId?: string;
  /** Give your memory a name or title that captures its essence.*/
  memoryNameFieldFormInputLabel?: React.ReactNode;
  memoryNameFieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
  submitButtonSubmitButtonColorVariant?:
    | "Warm Sandston"
    | "Warm Sandston Outline"
    | "Slate Navy"
    | "Slate Navy Outline"
    | "Ocean Teal"
    | "Ocean Teal Outline"
    | "Rustwood Red"
    | "Rustwood Outline";
  submitButtonSubmitButtonId?: string;
  submitButtonSubmitButtonInnerRuntimeProps?: Types.Devlink.RuntimeProps;
  submitButtonSubmitButtonOuterRuntimeProps?: Types.Devlink.RuntimeProps;
  submitButtonSubmitButtonSlot?: Types.Devlink.Slot;
  submitButtonSubmitButtonText?: string;
  submitButtonSubmitButtonVisibility?: Types.Visibility.VisibilityConditions;
  submitButtonUserLoadingText?: string;
  tag1FieldFormInputId?: string;
  tag1FieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
  tag1FieldIconVisibility?: Types.Visibility.VisibilityConditions;
  tag2FieldFormInputId?: string;
  tag2FieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
  tag2FieldIconVisibility?: Types.Visibility.VisibilityConditions;
  tag3FieldFormInputId?: string;
  tag3FieldFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
  tag3FieldIconVisibility?: Types.Visibility.VisibilityConditions;
  tagsGroupFormInputLabel?: React.ReactNode;
  tagsGroupFormSectionRuntimeProps?: Types.Devlink.RuntimeProps;
  tagsGroupFormSectionSlot?: Types.Devlink.Slot;
  tagsGroupTagsGroupVisibility?: Types.Visibility.VisibilityConditions;
  testFieldTestVariable?: string;
  videoUploadFieldIconVisibility?: Types.Visibility.VisibilityConditions;
  videoUploadFieldVideoUploadRuntimeProps?: Types.Devlink.RuntimeProps;
  videoUploadFieldVideoUploadSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
