"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ShareAMemoryField } from "./ShareAMemoryField";
import { PlaceOrLocationField } from "./PlaceOrLocationField";
import { MonthYearField } from "./MonthYearField";
import { Tag1 } from "./Tag1";
import { Tag2 } from "./Tag2";
import { Tag3 } from "./Tag3";
import { SubmitLinkField } from "./SubmitLinkField";
import { UploadAVideoFIeld } from "./UploadAVideoFIeld";
import { UploadAPhotoFIeld } from "./UploadAPhotoFIeld";
import { FirstNameField } from "./FirstNameField";
import { LastNameField } from "./LastNameField";
import { EmailFormField } from "./EmailFormField";

export function MemoryJournalForm(
    {
        as: _Component = _Builtin.Block,
        fullNameFormFieldVisibility = true,
        fullNameFormFieldId,
        fullNameFormFieldLabel = "Your Name *",
        fullNameFormIconVisibility = true,
        locationFieldFormFieldVisibility = true,
        locationFieldFormFieldId,
        locationFieldFormFieldLabel = "",
        locationFieldFormIconVisibility = true,
        locationFieldFormInputRuntimeProps = {},
        firstMetFieldFormFieldVisibility = true,
        firstMetFieldFormFieldId,
        firstMetFieldFormFieldLabel = "",
        firstMetFieldFormIconVisibility = true,
        firstMetFieldFormInputRuntimeProps = {},
        relationshipFieldVisibility = true,
        relationshipFieldFormId,
        relationshipFieldFormFieldLabel = "",
        relationshipFieldPlaceholderText = "How do you know her?",

        relationshipFieldInputFieldLink = {
            href: "#"
        },

        relationshipFieldInputFieldRuntimeProps = {},
        relationshipFieldInputFieldSlot,
        relationshipFieldRuntimePropsList = {},
        relationshipFieldRuntimePropsListLink = {},
        relationshipFieldSelectInputDropdownRuntimeProps = {},
        messageFieldVisibility = true,
        messageFieldFormFieldId,
        messageFieldFormFieldLabel = "",
        messageFieldInputFieldId = "Message",
        messageFieldInputFieldRuntimeProps = {},
        messageFieldCharactersVisibility = true,
        messageFieldCharacterLabel = "",
        messageFieldCharactersRuntimeProps = {},
        messageFieldCharactersSlot,
        emailFieldFormFieldId,
        emailFieldFormFieldVisibility = true,
        emailFieldFormFieldLabel = "Email*",
        emailFieldBottomDisclaimerLabel = "",
        emailFieldDisclaimerVisibility = true,
        emailFieldFormIconVisibility = true,
        emailFieldFormInputRuntimeProps = {},
        buttonVisibility = true,
        buttonId,
        buttonButtonIconVisibility = true,
        buttonLabelText = "Sign the Guestbook",
        buttonLoadingMessage = "Signing the Guestbook.....",
        buttonRuntimeProps = {},
        buttonSlot,
        userMessagesSuccessMessageText = "Thank you for signing the Guestbook. It will be displayed shortly, and we appreciate you being part of her tribute.",
        userMessagesErrorMessageText = "Oops! Something went wrong. Please try again or check your details and submit again.",
        componentVisibility = true,
        componentId,
        formComponentRuntimeProps = {},
        userMessagesMemoryJournalUserMessageSuccess = <>{"Your shared memory of Patricia is a wonderful addition to our memory journal and wall. Thank you for helping us keep her memory alive by allowing everyone to relive that moment with you."}<br /></>,
        memoryJournalMemoryInputCharactersRuntimeProps = {},
        memoryJournalMemoryInputRuntimeProps = {},
        firstNameFieldFormFieldIconVisibility = true,
        firstNameFieldFormFieldInput = "FIrst Name",
        firstNameFieldFormFieldId = "First-Name",
        locationFieldFormInputLabel = "Place or Location *",
        memoryPlaceLocationFormInputId,
        placeOrLocation1MemoryDateFieldFormInputRuntimeProps = {}
    }
) {
    return componentVisibility ? <_Component
        className="component_section-guestbook-form component_section-memory-journal-form"
        tag="section"
        id={componentId}><_Builtin.Block className="memory-journal_form-padding" tag="div"><_Builtin.Block className="memory-journal_inner-form" tag="div"><_Builtin.Block className="memory-journal_component" tag="div"><_Builtin.Block
                        className="memory-jourrnal_form-card"
                        id="w-node-_75c85eaa-742c-11b4-baac-9d3a916f558c-916f5588"
                        tag="div"><_Builtin.FormWrapper className="form_component" {...formComponentRuntimeProps}><_Builtin.FormForm
                                className="memory-journal_form-wrapper"
                                name="wf-form-Contact-Form"
                                data-name="Contact Form"
                                method="get"
                                id="wf-form-Contact-Form"><_Builtin.Block className="memory-form-columns" tag="div"><_Builtin.Block className="form-inputs_field-groups" tag="div"><ShareAMemoryField
                                            messageInputFieldRuntimeProps={memoryJournalMemoryInputRuntimeProps}
                                            messageCharactersRuntimeProps={memoryJournalMemoryInputCharactersRuntimeProps}
                                            messageFormFieldLabel="Share Your Memory *"
                                            messageInputFieldId="Message"
                                            messageFormFieldId="" /><PlaceOrLocationField
                                            memoryDateFieldFormInputId={memoryPlaceLocationFormInputId}
                                            memoryDateFieldFormInputRuntimeProps={placeOrLocation1MemoryDateFieldFormInputRuntimeProps}
                                            memoryDateFieldFormInputId2="" /><MonthYearField id="w-node-cbf231c2-d1d5-b23e-23e7-d27610853127-916f5588" /></_Builtin.Block><_Builtin.Block
                                        className="memory-journal_tags-wrapper"
                                        id="w-node-b114da8f-9d6b-c46e-7be7-ac7894daeebc-916f5588"
                                        tag="div"><Tag1 id="w-node-cd3409da-1fff-b373-f87b-abb31ddb455b-916f5588" /><Tag2 tagField1FormInputId2="Form-Input" /><Tag3 id="w-node-_41703ef7-84df-1e12-0071-5ac7c60cd8e3-916f5588" /></_Builtin.Block></_Builtin.Block><_Builtin.Block
                                    className="memory-form-columns"
                                    id="w-node-f9b00d91-1bf6-96ba-a562-b66a88085250-916f5588"
                                    tag="div"><_Builtin.Block className="form-inputs_field-groups" tag="div"><_Builtin.Block tag="div"><SubmitLinkField formInputVisibility={true} /></_Builtin.Block><_Builtin.Block className="div-block-66" tag="div"><UploadAVideoFIeld /><UploadAPhotoFIeld id="w-node-e66e56a1-4d50-02d4-34de-e48c2c5ec1e8-916f5588" /></_Builtin.Block></_Builtin.Block><_Builtin.Block
                                        className="memory-form_input-group"
                                        id="w-node-da2da3d7-ea9e-806f-a4fc-a2d3d0a2f0e0-916f5588"
                                        tag="div"><FirstNameField
                                            firstNameFormFieldFormInputLabel={firstNameFieldFormFieldInput}
                                            firstNameFormFieldFormInputId={firstNameFieldFormFieldId} /><LastNameField id="w-node-c0c3dd37-b3a1-b3bf-7c0a-db3e7ddbb342-916f5588" /><EmailFormField
                                            emailFieldFormFieldId={emailFieldFormFieldId}
                                            emailFieldFormFieldVisibility={emailFieldFormFieldVisibility}
                                            emailFieldFormFieldLabel={emailFieldFormFieldLabel}
                                            emailFieldBottomDisclaimerLabel={emailFieldBottomDisclaimerLabel}
                                            emailFieldDisclaimerVisibility={emailFieldDisclaimerVisibility}
                                            emailFieldFormIconVisibility={emailFieldFormIconVisibility}
                                            emailFieldFormInputRuntimeProps={emailFieldFormInputRuntimeProps} /></_Builtin.Block></_Builtin.Block></_Builtin.FormForm><_Builtin.FormSuccessMessage className="form_message-success"><_Builtin.Block tag="div">{userMessagesMemoryJournalUserMessageSuccess}</_Builtin.Block></_Builtin.FormSuccessMessage><_Builtin.FormErrorMessage className="form_message-error"><_Builtin.Block tag="div">{userMessagesErrorMessageText}</_Builtin.Block></_Builtin.FormErrorMessage></_Builtin.FormWrapper></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Component> : null;
}