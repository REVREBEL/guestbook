"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import FormErrorMessage from "../webflow_modules/Form/components/FormErrorMessage";
import FormForm from "../webflow_modules/Form/components/FormForm";
import FormSuccessMessage from "../webflow_modules/Form/components/FormSuccessMessage";
import FormWrapper from "../webflow_modules/Form/components/FormWrapper";
import { EmailFormField } from "../guestbookForm/EmailFormField";
import { FirstNameField } from "../zFormFields/FirstNameField";
import { LastNameField } from "../zFormFields/LastNameField";
import { MonthYearField } from "../zFormFields/MonthYearField";
import { PlaceOrLocationField } from "../zFormFields/PlaceOrLocationField";
import { ShareAMemoryField } from "../zFormFields/ShareAMemoryField";
import { SubmitLinkField } from "../zFormFields/SubmitLinkField";
import { Tag1 } from "../zFormFields/Tag1";
import { Tag2 } from "../zFormFields/Tag2";
import { Tag3 } from "../zFormFields/Tag3";
import { UploadAPhotoFIeld } from "../zFormFields/UploadAPhotoFIeld";
import { UploadAVideoFIeld } from "../zFormFields/UploadAVideoFIeld";

export function MemoryJournalForm({
  buttonButtonIconVisibility = true,
  buttonId = "",
  buttonLabelText = "Sign the Guestbook",
  buttonLoadingMessage = "Signing the Guestbook.....",
  buttonRuntimeProps = {},
  buttonSlot = "",
  buttonVisibility = true,
  componentId = "",
  componentVisibility = true,
  emailFieldBottomDisclaimerLabel = "",
  emailFieldDisclaimerVisibility = true,
  emailFieldFormFieldId = "",
  emailFieldFormFieldLabel = "Email*",
  emailFieldFormFieldVisibility = true,
  emailFieldFormIconVisibility = true,
  emailFieldFormInputRuntimeProps = {},
  firstMetFieldFormFieldId = "",
  firstMetFieldFormFieldLabel = "",
  firstMetFieldFormFieldVisibility = true,
  firstMetFieldFormIconVisibility = true,
  firstMetFieldFormInputRuntimeProps = {},
  firstNameFieldFormFieldIconVisibility = true,
  firstNameFieldFormFieldId = "First-Name",
  firstNameFieldFormFieldInput = "FIrst Name",
  formComponentRuntimeProps = {},
  fullNameFormFieldId = "",
  fullNameFormFieldLabel = "Your Name *",
  fullNameFormFieldVisibility = true,
  fullNameFormIconVisibility = true,
  locationFieldFormFieldId = "",
  locationFieldFormFieldLabel = "",
  locationFieldFormFieldVisibility = true,
  locationFieldFormIconVisibility = true,
  locationFieldFormInputLabel = "Place or Location *",
  locationFieldFormInputRuntimeProps = {},
  memoryJournalMemoryInputCharactersRuntimeProps = {},
  memoryJournalMemoryInputRuntimeProps = {},
  memoryPlaceLocationFormInputId = "",
  messageFieldCharacterLabel = "",
  messageFieldCharactersRuntimeProps = {},
  messageFieldCharactersSlot = "",
  messageFieldCharactersVisibility = true,
  messageFieldFormFieldId = "",
  messageFieldFormFieldLabel = "",
  messageFieldInputFieldId = "Message",
  messageFieldInputFieldRuntimeProps = {},
  messageFieldVisibility = true,
  placeOrLocation1MemoryDateFieldFormInputRuntimeProps = {},
  relationshipFieldFormFieldLabel = "",
  relationshipFieldFormId = "",

  relationshipFieldInputFieldLink = {
    href: "#",
  },

  relationshipFieldInputFieldRuntimeProps = {},
  relationshipFieldInputFieldSlot = "",
  relationshipFieldPlaceholderText = "How do you know her?",
  relationshipFieldRuntimePropsList = {},
  relationshipFieldRuntimePropsListLink = {},
  relationshipFieldSelectInputDropdownRuntimeProps = {},
  relationshipFieldVisibility = true,
  userMessagesErrorMessageText = "Oops! Something went wrong. Please try again or check your details and submit again.",
  userMessagesMemoryJournalUserMessageSuccess = (
    <>
      {
        "Your shared memory of Patricia is a wonderful addition to our memory journal and wall. Thank you for helping us keep her memory alive by allowing everyone to relive that moment with you."
      }
      <br />
    </>
  ),
  userMessagesSuccessMessageText = "Thank you for signing the Guestbook. It will be displayed shortly, and we appreciate you being part of her tribute.",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {componentVisibility ? (
        <Block
          className={"component_section-guestbook-form on-click_form"}
          id={componentId}
          tag={"section"}
        >
          <Block className={"memory_form-padding"} tag={"div"}>
            <Block className={"memory_inner-form"} tag={"div"}>
              <Block className={"memory-component"} tag={"div"}>
                <Block
                  className={"memory_form-card"}
                  id={"w-node-_75c85eaa-742c-11b4-baac-9d3a916f558c-916f5588"}
                  tag={"div"}
                >
                  <FormWrapper
                    className={"form_component"}
                    {...formComponentRuntimeProps}
                  >
                    <FormForm
                      className={"memory_form-wrapper"}
                      data-name={"Contact Form"}
                      id={"wf-form-Contact-Form"}
                      method={"get"}
                      name={"wf-form-Contact-Form"}
                    >
                      <Block className={"memory-form-columns"} tag={"div"}>
                        <Block
                          className={"form-inputs_field-groups"}
                          tag={"div"}
                        >
                          <ShareAMemoryField
                            id={
                              "w-node-b41c38d8-92a4-4440-f9f5-867143dfe36c-916f5588"
                            }
                            messageCharactersRuntimeProps={
                              memoryJournalMemoryInputCharactersRuntimeProps
                            }
                            messageFormFieldId={""}
                            messageFormFieldLabel={"Share Your Memory *"}
                            messageInputFieldId={"Message"}
                            messageInputFieldRuntimeProps={
                              memoryJournalMemoryInputRuntimeProps
                            }
                          />
                          <PlaceOrLocationField
                            id={
                              "w-node-_6349a5e5-f062-193e-263f-58d85abf7dcf-916f5588"
                            }
                            memoryDateFieldFormInputId={
                              memoryPlaceLocationFormInputId
                            }
                            memoryDateFieldFormInputId2={""}
                            memoryDateFieldFormInputRuntimeProps={
                              placeOrLocation1MemoryDateFieldFormInputRuntimeProps
                            }
                          />
                          <MonthYearField
                            id={
                              "w-node-cbf231c2-d1d5-b23e-23e7-d27610853127-916f5588"
                            }
                          />
                        </Block>
                        <Block
                          className={"memory-journal_tags-wrapper"}
                          id={
                            "w-node-b114da8f-9d6b-c46e-7be7-ac7894daeebc-916f5588"
                          }
                          tag={"div"}
                        >
                          <Tag1
                            id={
                              "w-node-cd3409da-1fff-b373-f87b-abb31ddb455b-916f5588"
                            }
                          />
                          <Tag2
                            id={
                              "w-node-_6b372c54-9f6e-680b-9b5f-f31f8f02a3b8-916f5588"
                            }
                            tagField1FormInputId2={"Form-Input"}
                          />
                          <Tag3
                            id={
                              "w-node-_41703ef7-84df-1e12-0071-5ac7c60cd8e3-916f5588"
                            }
                          />
                        </Block>
                      </Block>
                      <Block
                        className={"memory-form-columns"}
                        id={
                          "w-node-f9b00d91-1bf6-96ba-a562-b66a88085250-916f5588"
                        }
                        tag={"div"}
                      >
                        <Block
                          className={"form-inputs_field-groups"}
                          tag={"div"}
                        >
                          <Block tag={"div"}>
                            <SubmitLinkField formInputVisibility={true} />
                          </Block>
                          <Block className={"div-block-66"} tag={"div"}>
                            <UploadAVideoFIeld />
                            <UploadAPhotoFIeld
                              id={
                                "w-node-e66e56a1-4d50-02d4-34de-e48c2c5ec1e8-916f5588"
                              }
                            />
                          </Block>
                        </Block>
                        <Block
                          className={"memory-form_input-group"}
                          id={
                            "w-node-da2da3d7-ea9e-806f-a4fc-a2d3d0a2f0e0-916f5588"
                          }
                          tag={"div"}
                        >
                          <FirstNameField
                            firstNameFormFieldFormInputId={
                              firstNameFieldFormFieldId
                            }
                            firstNameFormFieldFormInputLabel={
                              firstNameFieldFormFieldInput
                            }
                            id={
                              "w-node-_3d5fa24c-c5bd-e0ae-609e-1b6bd7d966cc-916f5588"
                            }
                          />
                          <LastNameField
                            id={
                              "w-node-c0c3dd37-b3a1-b3bf-7c0a-db3e7ddbb342-916f5588"
                            }
                          />
                          <EmailFormField
                            emailFieldBottomDisclaimerLabel={
                              emailFieldBottomDisclaimerLabel
                            }
                            emailFieldDisclaimerVisibility={
                              emailFieldDisclaimerVisibility
                            }
                            emailFieldFormFieldId={emailFieldFormFieldId}
                            emailFieldFormFieldLabel={emailFieldFormFieldLabel}
                            emailFieldFormFieldVisibility={
                              emailFieldFormFieldVisibility
                            }
                            emailFieldFormIconVisibility={
                              emailFieldFormIconVisibility
                            }
                            emailFieldFormInputRuntimeProps={
                              emailFieldFormInputRuntimeProps
                            }
                          />
                        </Block>
                      </Block>
                    </FormForm>
                    <FormSuccessMessage className={"form_message-success"}>
                      <Block tag={"div"}>
                        {userMessagesMemoryJournalUserMessageSuccess}
                      </Block>
                    </FormSuccessMessage>
                    <FormErrorMessage className={"form_message-error"}>
                      <Block tag={"div"}>{userMessagesErrorMessageText}</Block>
                    </FormErrorMessage>
                  </FormWrapper>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      ) : null}
    </div>
  );
}
