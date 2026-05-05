"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import FormBlockLabel from "../webflow_modules/Form/components/FormBlockLabel";
import FormButton from "../webflow_modules/Form/components/FormButton";
import FormErrorMessage from "../webflow_modules/Form/components/FormErrorMessage";
import FormForm from "../webflow_modules/Form/components/FormForm";
import FormSuccessMessage from "../webflow_modules/Form/components/FormSuccessMessage";
import FormTextarea from "../webflow_modules/Form/components/FormTextarea";
import FormTextInput from "../webflow_modules/Form/components/FormTextInput";
import FormWrapper from "../webflow_modules/Form/components/FormWrapper";
import Heading from "../webflow_modules/Basic/components/Heading";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-265":{"id":"e-265","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-76","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-266"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".uploader-animation.image-1","originalId":"41952196-b944-3ee5-d8b1-c78793580e2f","appliesTo":"CLASS"},"targets":[{"selector":".uploader-animation.image-1","originalId":"41952196-b944-3ee5-d8b1-c78793580e2f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1765942279360},"e-267":{"id":"e-267","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-76","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-268"}},"mediaQueries":["main","small","tiny"],"target":{"selector":".uploader-animation.image-2","originalId":"8432e584-73f2-4805-ccca-e48e1cdc08b7","appliesTo":"CLASS"},"targets":[{"selector":".uploader-animation.image-2","originalId":"8432e584-73f2-4805-ccca-e48e1cdc08b7","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1765959500973},"e-291":{"id":"e-291","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-80","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-292"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".close-button","originalId":"195647e0-c64d-d0db-a38a-918ff8d0c0e4","appliesTo":"CLASS"},"targets":[{"selector":".close-button","originalId":"195647e0-c64d-d0db-a38a-918ff8d0c0e4","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1766032238750},"e-295":{"id":"e-295","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-76","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-296"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"91a8e13d-edc8-56e1-79ba-812d539cc6e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"91a8e13d-edc8-56e1-79ba-812d539cc6e5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1766038783120},"e-297":{"id":"e-297","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-76","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-298"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".form_input-background.is-timeline","originalId":"7eeb6230-e061-5f09-8f7c-e6b351a54431","appliesTo":"CLASS"},"targets":[{"selector":".form_input-background.is-timeline","originalId":"7eeb6230-e061-5f09-8f7c-e6b351a54431","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1766124540667},"e-299":{"id":"e-299","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-83","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-300"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8432e584-73f2-4805-ccca-e48e1cdc08b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8432e584-73f2-4805-ccca-e48e1cdc08b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1766124612511},"e-301":{"id":"e-301","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-76","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-302"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"693afb7702b6d3e91216c00a|687bc307-b7e7-c6b4-9892-fc3f5e5c4af2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"693afb7702b6d3e91216c00a|687bc307-b7e7-c6b4-9892-fc3f5e5c4af2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1766125441408},"e-303":{"id":"e-303","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-83","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-304"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"693afb7702b6d3e91216c00a|687bc307-b7e7-c6b4-9892-fc3f5e5c4af9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"693afb7702b6d3e91216c00a|687bc307-b7e7-c6b4-9892-fc3f5e5c4af9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1766125441408}},"actionLists":{"a-76":{"id":"a-76","title":"UploadFile Image 1","actionItemGroups":[{"actionItems":[{"id":"a-76-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".uploader-animation.image-1","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019","b82dd088-706a-a5fb-9323-949055bb2ff3"]},"value":0,"unit":""}},{"id":"a-76-n-10","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".uploader-animation.image-1","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019","b82dd088-706a-a5fb-9323-949055bb2ff3"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-76-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":5000,"target":{"useEventTarget":"SIBLINGS","selector":".uploader-animation.image-1","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019","b82dd088-706a-a5fb-9323-949055bb2ff3"]},"value":0.45,"unit":""}},{"id":"a-76-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":5000,"easing":"","duration":10000,"target":{"useEventTarget":"SIBLINGS","selector":".uploader-animation.image-1","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019","b82dd088-706a-a5fb-9323-949055bb2ff3"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1765940061742},"a-80":{"id":"a-80","title":"Inverse [ON-HOVER]","actionItemGroups":[{"actionItems":[{"id":"a-80-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".on-click-open","selectorGuids":["f8682163-9c88-80e9-0919-4fd75635f366"]},"value":1,"unit":""}},{"id":"a-80-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".on-click_close","selectorGuids":["bed93150-a184-89f6-0e07-d587e4dd055c"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1766032244301},"a-83":{"id":"a-83","title":"UploadFile Image 2","actionItemGroups":[{"actionItems":[{"id":"a-83-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".uploader-animation.image-2","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019","73a711c3-fe8d-64f1-2e7c-5b3b79188c20"]},"value":0,"unit":""}},{"id":"a-83-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".uploader-animation.image-2","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019","73a711c3-fe8d-64f1-2e7c-5b3b79188c20"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-83-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":5000,"target":{"selector":".uploader-animation.image-2","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019","73a711c3-fe8d-64f1-2e7c-5b3b79188c20"]},"value":0.45,"unit":""}},{"id":"a-83-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":5000,"easing":"","duration":10000,"target":{"selector":".uploader-animation.image-2","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019","73a711c3-fe8d-64f1-2e7c-5b3b79188c20"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1765940061742}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function MemoryForm({
  addContentHeadlineText = "Add content",
  addContentParagraphText = "Bring your memories and stories to life by including a photo or video from the event to help others picture that special moment. You can do this by sharing a link or uploading a photo or video below.",
  collectionIdFieldCollectionIdVariable = "MEMORY_COLLECTION_ID",
  collectionIdFieldFormSectionRuntimeProps = {},
  contentLinkFieldFormInputId = "content_link",
  contentLinkFieldFormInputRuntimeProps = {},
  contentLinkFieldFormSectionProps = {},
  contentLinkFieldFormSectionSlot = "",
  contentLinkFieldFormSectionVisibility = true,
  emailFormFieldFormInputDisclaimer = "",
  emailFormFieldFormInputId = "email",
  emailFormFieldFormInputRuntimeProps = {},
  emailFormFieldFormInputVisibility = true,
  emailFormFieldFormSectionRuntimeProps = {},
  emailFormFieldFormSectionSlot = "",
  emailFormFieldIconVisibility = true,
  firstNameFieldFormInputId = "first_name",
  firstNameFieldFormInputLabel = "First Name",
  firstNameFieldFormInputRuntimeProps = {},
  firstNameFieldFormInputVisibility = true,
  firstNameFieldFormSectionRuntimeProps = {},
  firstNameFieldFormSectionSlot = "",
  firstNameFieldIconVisibility = true,
  formComponentFornVisibility = true,
  formComponentMemoryJournalComponentId = "",
  imageUploadFieldIconVisibility = true,
  imageUploadFieldImageUploadRuntimeProps = {},
  imageUploadFieldImageUploadSlot = "",
  lastNameFieldFormInputId = "last_name",
  lastNameFieldFormInputLabel = "Last Name",
  lastNameFieldFormInputRuntimeProps = {},
  lastNameFieldFormInputVisibility = true,
  lastNameFieldFormSectionRuntimeProps = {},
  lastNameFieldFormSectionSlot = "",
  memoryDateFieldFormInputId = "memory_date",
  memoryDateFieldFormInputLabel = "Month + Date of Memory",
  memoryDateFieldFormInputRuntimeProps = {},
  memoryDateFieldFormInputVisibility = true,
  memoryDateFieldFormSectionRuntimeProps = {},
  memoryDateFieldFormSectionSlot = "",
  memoryDateFieldIconVisibility = true,
  memoryDetailFieldFormInputId = "memory_detail",
  memoryDetailFieldFormInputRuntimeProps = {},
  memoryDetailFieldFormSectionRuntimeProps = {},
  memoryLocationFieldFormInputId = "memory_location",
  memoryLocationFieldFormInputLabel = "Place or Location",
  memoryLocationFieldFormInputRuntimeProps = {},
  memoryLocationFieldFormInputVisibility = true,
  memoryLocationFieldFormSectionRuntimeProps = {},
  memoryLocationFieldFormSectionSlot = "",
  memoryLocationFieldIconVisibility = true,
  memoryNameFieldFormInputId = "memory_name",
  memoryNameFieldFormInputLabel = "Memory Name + Description",
  memoryNameFieldFormInputRuntimeProps = {},
  submitButtonSubmitButtonColorVariant = "Slate Navy",
  submitButtonSubmitButtonId = "submit-button",
  submitButtonSubmitButtonInnerRuntimeProps = {},
  submitButtonSubmitButtonOuterRuntimeProps = {},
  submitButtonSubmitButtonSlot = "",
  submitButtonSubmitButtonText = "Share Your Story",
  submitButtonSubmitButtonVisibility = true,
  submitButtonUserLoadingText = "Writing your narrative now....",
  tag1FieldFormInputId = "memory_tag_1",
  tag1FieldFormInputRuntimeProps = {},
  tag1FieldIconVisibility = true,
  tag2FieldFormInputId = "memory_tag_2",
  tag2FieldFormInputRuntimeProps = {},
  tag2FieldIconVisibility = true,
  tag3FieldFormInputId = "memory_tag_3",
  tag3FieldFormInputRuntimeProps = {},
  tag3FieldIconVisibility = true,
  tagsGroupFormInputLabel = "Optional HasHtag",
  tagsGroupFormSectionRuntimeProps = {},
  tagsGroupFormSectionSlot = "",
  tagsGroupTagsGroupVisibility = true,
  testFieldTestVariable = "TEST_ID",
  videoUploadFieldIconVisibility = true,
  videoUploadFieldVideoUploadRuntimeProps = {},
  videoUploadFieldVideoUploadSlot = "",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {formComponentFornVisibility ? (
        <Block
          className={"on-click_form is-memory-form"}
          id={formComponentMemoryJournalComponentId}
          tag={"section"}
        >
          <HtmlEmbed content={""} />
          <Block className={"memory_form-padding"} tag={"div"}>
            <Block className={"memory_inner-form"} tag={"div"}>
              <Block className={"memory-component"} tag={"div"}>
                <Block
                  className={"memory_form-card"}
                  id={"w-node-_8370e215-8f01-80b6-7142-22700c60bf62-0c60bf5e"}
                  tag={"div"}
                >
                  <Block className={"form-headline_wrapper"} tag={"div"}>
                    <Heading className={"heading_h3"} tag={"h1"}>
                      {"memory journal"}
                    </Heading>
                    <Block className={"close-button"} tag={"div"} />
                  </Block>
                  <FormWrapper className={"memory_form-component"}>
                    <FormForm
                      action={"/guestbook-form/api/memory/submit"}
                      className={"memory_form-wrapper"}
                      data-file-upload={"form"}
                      data-name={"Share Your Memory"}
                      id={"wf-form-Share-Your-Memory"}
                      method={"post"}
                      name={"wf-form-Share-Your-Memory"}
                    >
                      <Block className={"memory_column-group"} tag={"div"}>
                        <Block className={"memory-form-columns"} tag={"div"}>
                          <Block
                            className={"form_field-wrapper is-content-block"}
                            tag={"div"}
                          >
                            <Heading
                              className={"memory-form-card-heading"}
                              tag={"h1"}
                            >
                              {"share a story"}
                            </Heading>
                          </Block>
                          <Block
                            className={"memory-form_field-group"}
                            tag={"div"}
                          >
                            <Block
                              className={"form_field-wrapper"}
                              tag={"div"}
                              {...memoryLocationFieldFormSectionRuntimeProps}
                            >
                              {memoryLocationFieldFormSectionSlot ?? (
                                <>
                                  <FormBlockLabel
                                    className={"input_label"}
                                    htmlFor={"Phone"}
                                  >
                                    {memoryNameFieldFormInputLabel}
                                  </FormBlockLabel>
                                  <Block
                                    className={"form-field_icon-component"}
                                    tag={"div"}
                                  >
                                    <FormTextInput
                                      autoFocus={false}
                                      className={"input_field"}
                                      data-name={"memory_name"}
                                      disabled={false}
                                      id={memoryNameFieldFormInputId}
                                      maxLength={256}
                                      name={"memory_name"}
                                      placeholder={"Summers at Baseline Lake"}
                                      required={true}
                                      type={"text"}
                                      {...memoryNameFieldFormInputRuntimeProps}
                                    />
                                  </Block>
                                </>
                              )}
                            </Block>
                            <Block className={"form_field-wrapper"} tag={"div"}>
                              <Block
                                className={"text-area_component"}
                                tag={"div"}
                                {...memoryDetailFieldFormSectionRuntimeProps}
                              >
                                <FormTextarea
                                  autoFocus={false}
                                  className={
                                    "memory-form_memory-detail is-message-box"
                                  }
                                  data-auto-expand={"true"}
                                  data-name={"memory_detail"}
                                  id={memoryDetailFieldFormInputId}
                                  maxLength={5000}
                                  name={"memory_detail"}
                                  placeholder={
                                    "Share your thoughts, memories, or well wishes"
                                  }
                                  required={true}
                                  {...memoryDetailFieldFormInputRuntimeProps}
                                />
                                <HtmlEmbed
                                  className={"hide"}
                                  content={""}
                                  value={
                                    "%3Cscript%3E%0A%20%20%2F%2F%20Function%20to%20auto-expand%20the%20textarea%0A%20%20function%20autoExpandTextarea(textarea)%20%7B%0A%20%20%20%20textarea.style.height%20%3D%20'auto'%3B%20%2F%2F%20Reset%20the%20height%0A%20%20%20%20textarea.style.height%20%3D%20textarea.scrollHeight%20%2B%20'px'%3B%20%2F%2F%20Set%20the%20height%20to%20match%20the%20content%0A%20%20%7D%0A%0A%20%20%2F%2F%20Find%20all%20textareas%20with%20the%20custom%20data%20attribute%0A%20%20document.addEventListener(%22DOMContentLoaded%22%2C%20function()%20%7B%0A%20%20%20%20const%20textareas%20%3D%20document.querySelectorAll('%5Bdata-auto-expand%3D%22true%22%5D')%3B%0A%0A%20%20%20%20%2F%2F%20Loop%20through%20all%20matching%20textareas%20and%20add%20the%20event%20listener%0A%20%20%20%20textareas.forEach(textarea%20%3D%3E%20%7B%0A%20%20%20%20%20%20textarea.addEventListener('input'%2C%20function()%20%7B%0A%20%20%20%20%20%20%20%20autoExpandTextarea(textarea)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Optionally%2C%20trigger%20the%20function%20on%20page%20load%20to%20adjust%20height%20if%20there's%20pre-filled%20content%0A%20%20%20%20%20%20autoExpandTextarea(textarea)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%3C%2Fscript%3E"
                                  }
                                />
                              </Block>
                            </Block>
                            <Block
                              className={"memory-form_field-group"}
                              tag={"div"}
                            >
                              {memoryLocationFieldFormInputVisibility ? (
                                <Block
                                  className={"form_field-wrapper"}
                                  tag={"div"}
                                  {...memoryLocationFieldFormSectionRuntimeProps}
                                >
                                  {memoryLocationFieldFormSectionSlot ?? (
                                    <>
                                      <FormBlockLabel
                                        className={"input_label"}
                                        htmlFor={"Phone"}
                                      >
                                        {memoryLocationFieldFormInputLabel}
                                      </FormBlockLabel>
                                      <Block
                                        className={
                                          "form-field_icon-component-4"
                                        }
                                        tag={"div"}
                                      >
                                        <FormTextInput
                                          autoFocus={false}
                                          className={"input_field is-icon"}
                                          data-name={"memory_location"}
                                          disabled={false}
                                          id={memoryLocationFieldFormInputId}
                                          maxLength={256}
                                          name={"memory_location"}
                                          placeholder={"Boulder, CO"}
                                          required={false}
                                          type={"text"}
                                          {...memoryLocationFieldFormInputRuntimeProps}
                                        />
                                        {memoryLocationFieldIconVisibility ? (
                                          <HtmlEmbed
                                            className={"icon_location"}
                                            content={""}
                                            value={
                                              "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M20%2010C20%2014.4183%2012%2022%2012%2022C12%2022%204%2014.4183%204%2010C4%205.58172%207.58172%202%2012%202C16.4183%202%2020%205.58172%2020%2010Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2011C12.5523%2011%2013%2010.5523%2013%2010C13%209.44772%2012.5523%209%2012%209C11.4477%209%2011%209.44772%2011%2010C11%2010.5523%2011.4477%2011%2012%2011Z%22%20fill%3D%22currentColor%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                                            }
                                          />
                                        ) : null}
                                      </Block>
                                    </>
                                  )}
                                </Block>
                              ) : null}
                              {memoryDateFieldFormInputVisibility ? (
                                <Block
                                  className={"form_field-wrapper"}
                                  tag={"div"}
                                  {...memoryDateFieldFormSectionRuntimeProps}
                                >
                                  {memoryDateFieldFormSectionSlot ?? (
                                    <>
                                      <FormBlockLabel
                                        className={"input_label"}
                                        htmlFor={"Phone"}
                                      >
                                        {memoryDateFieldFormInputLabel}
                                      </FormBlockLabel>
                                      <Block
                                        className={"form-field_icon-component"}
                                        tag={"div"}
                                      >
                                        <FormTextInput
                                          autoFocus={false}
                                          className={"input_field is-icon"}
                                          data-name={"memory_date"}
                                          disabled={false}
                                          id={memoryDateFieldFormInputId}
                                          maxLength={256}
                                          name={"memory_date"}
                                          placeholder={"June 1990"}
                                          required={false}
                                          type={"text"}
                                          {...memoryDateFieldFormInputRuntimeProps}
                                        />
                                        {memoryDateFieldIconVisibility ? (
                                          <HtmlEmbed
                                            className={"calendar-icon"}
                                            content={""}
                                            value={
                                              "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M15%204V2M15%204V6M15%204H10.5M3%2010V19C3%2020.1046%203.89543%2021%205%2021H19C20.1046%2021%2021%2020.1046%2021%2019V10H3Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M3%2010V6C3%204.89543%203.89543%204%205%204H7%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M7%202V6%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M21%2010V6C21%204.89543%2020.1046%204%2019%204H18.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                                            }
                                          />
                                        ) : null}
                                      </Block>
                                    </>
                                  )}
                                </Block>
                              ) : null}
                            </Block>
                          </Block>
                        </Block>
                        <Block
                          className={"memory-form-columns"}
                          id={
                            "w-node-_8370e215-8f01-80b6-7142-22700c60bf7d-0c60bf5e"
                          }
                          tag={"div"}
                        >
                          {tagsGroupTagsGroupVisibility ? (
                            <Block
                              className={"memory-form_field-group"}
                              id={
                                "w-node-_8370e215-8f01-80b6-7142-22700c60bf94-0c60bf5e"
                              }
                              tag={"div"}
                              {...tagsGroupFormSectionRuntimeProps}
                            >
                              {tagsGroupFormSectionSlot ?? (
                                <>
                                  <Block
                                    className={"form_field-wrapper"}
                                    tag={"div"}
                                  >
                                    <FormBlockLabel
                                      className={"input_label"}
                                      htmlFor={"Phone"}
                                    >
                                      {tagsGroupFormInputLabel}
                                    </FormBlockLabel>
                                    <Block
                                      className={"form-field_icon-component"}
                                      tag={"div"}
                                    >
                                      <FormTextInput
                                        autoFocus={false}
                                        className={"input_field is-icon"}
                                        data-name={"memory_tag_1"}
                                        disabled={false}
                                        id={tag1FieldFormInputId}
                                        maxLength={256}
                                        name={"memory_tag_1"}
                                        placeholder={
                                          'Use a Hashtag Like "Summertime"'
                                        }
                                        required={false}
                                        type={"text"}
                                        {...tag1FieldFormInputRuntimeProps}
                                      />
                                      {tag1FieldIconVisibility ? (
                                        <HtmlEmbed
                                          className={"form-field_icon"}
                                          content={""}
                                          value={
                                            "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M10%203L6%2021%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M20.5%2016H2.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M22%207H4%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M18%203L14%2021%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                                          }
                                        />
                                      ) : null}
                                    </Block>
                                  </Block>
                                  <Block
                                    className={"form_field-wrapper"}
                                    id={"Form-Input"}
                                    tag={"div"}
                                  >
                                    <Block
                                      className={"form-field_icon-component"}
                                      tag={"div"}
                                    >
                                      {tag2FieldIconVisibility ? (
                                        <HtmlEmbed
                                          className={"form-field_icon"}
                                          content={""}
                                          value={
                                            "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M10%203L6%2021%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M20.5%2016H2.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M22%207H4%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M18%203L14%2021%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                                          }
                                        />
                                      ) : null}
                                      <FormTextInput
                                        autoFocus={false}
                                        className={"input_field is-icon"}
                                        data-name={"memory_tag_2"}
                                        disabled={false}
                                        id={tag2FieldFormInputId}
                                        maxLength={256}
                                        name={"memory_tag_2"}
                                        placeholder={
                                          'Use a Hashtag Like "GoodAdvice"'
                                        }
                                        required={false}
                                        type={"text"}
                                        {...tag2FieldFormInputRuntimeProps}
                                      />
                                    </Block>
                                  </Block>
                                  <Block
                                    className={"form_field-wrapper"}
                                    tag={"div"}
                                  >
                                    <Block
                                      className={"form-field_icon-component"}
                                      tag={"div"}
                                    >
                                      <FormTextInput
                                        autoFocus={false}
                                        className={"input_field is-icon"}
                                        data-name={"memory_tag_3"}
                                        disabled={false}
                                        id={tag3FieldFormInputId}
                                        maxLength={256}
                                        name={"memory_tag_3"}
                                        placeholder={
                                          'Use a Hashtag Like "CampTrips"'
                                        }
                                        required={false}
                                        type={"text"}
                                        {...tag3FieldFormInputRuntimeProps}
                                      />
                                      {tag3FieldIconVisibility ? (
                                        <HtmlEmbed
                                          className={"form-field_icon"}
                                          content={""}
                                          value={
                                            "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M10%203L6%2021%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M20.5%2016H2.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M22%207H4%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M18%203L14%2021%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                                          }
                                        />
                                      ) : null}
                                    </Block>
                                  </Block>
                                </>
                              )}
                            </Block>
                          ) : null}
                          <Block
                            className={"memory-form_field-group"}
                            tag={"div"}
                          >
                            <Block
                              className={"form_field-wrapper is-content-block"}
                              tag={"div"}
                            >
                              <Heading
                                className={"timeline-form_content-heading-copy"}
                                tag={"h1"}
                              >
                                {"the contributor"}
                              </Heading>
                            </Block>
                            {firstNameFieldFormInputVisibility ? (
                              <Block
                                className={"form_field-wrapper"}
                                tag={"div"}
                                {...firstNameFieldFormSectionRuntimeProps}
                              >
                                {firstNameFieldFormSectionSlot ?? (
                                  <>
                                    <FormBlockLabel
                                      className={"input_label"}
                                      htmlFor={"Phone"}
                                    >
                                      {firstNameFieldFormInputLabel}
                                    </FormBlockLabel>
                                    <Block
                                      className={"form-field_icon-component"}
                                      tag={"div"}
                                    >
                                      {firstNameFieldIconVisibility ? (
                                        <HtmlEmbed
                                          className={
                                            "form-field_icon icon-person"
                                          }
                                          content={""}
                                          value={
                                            "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22%20currentColor%22%3E%3Cpath%20d%3D%22M7%2018V17C7%2014.2386%209.23858%2012%2012%2012V12C14.7614%2012%2017%2014.2386%2017%2017V18%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2012C13.6569%2012%2015%2010.6569%2015%209C15%207.34315%2013.6569%206%2012%206C10.3431%206%209%207.34315%209%209C9%2010.6569%2010.3431%2012%2012%2012Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M21%203.6V20.4C21%2020.7314%2020.7314%2021%2020.4%2021H3.6C3.26863%2021%203%2020.7314%203%2020.4V3.6C3%203.26863%203.26863%203%203.6%203H20.4C20.7314%203%2021%203.26863%2021%203.6Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                                          }
                                        />
                                      ) : null}
                                      <FormTextInput
                                        autoFocus={false}
                                        className={"input_field is-icon"}
                                        collection-id={"MEMORY_COLLECTION_ID"}
                                        data-name={"first_name"}
                                        disabled={false}
                                        id={firstNameFieldFormInputId}
                                        maxLength={256}
                                        name={"first_name"}
                                        placeholder={"Enter your first name"}
                                        required={true}
                                        type={"text"}
                                        {...firstNameFieldFormInputRuntimeProps}
                                      />
                                    </Block>
                                  </>
                                )}
                              </Block>
                            ) : null}
                            {lastNameFieldFormInputVisibility ? (
                              <Block
                                className={"form_field-wrapper"}
                                tag={"div"}
                                {...lastNameFieldFormSectionRuntimeProps}
                              >
                                {lastNameFieldFormSectionSlot ?? (
                                  <>
                                    <FormBlockLabel
                                      className={"input_label"}
                                      htmlFor={"Phone"}
                                    >
                                      {lastNameFieldFormInputLabel}
                                    </FormBlockLabel>
                                    <Block
                                      className={"form-field_icon-component"}
                                      tag={"div"}
                                    >
                                      <FormTextInput
                                        autoFocus={false}
                                        className={"input_field is-icon"}
                                        data-name={"last_name"}
                                        disabled={false}
                                        id={lastNameFieldFormInputId}
                                        maxLength={256}
                                        name={"last_name"}
                                        placeholder={"Enter your last name"}
                                        required={true}
                                        type={"text"}
                                        {...lastNameFieldFormInputRuntimeProps}
                                      />
                                      <HtmlEmbed
                                        className={
                                          "form-field_icon icon-person"
                                        }
                                        content={""}
                                        value={
                                          "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2225px%22%20height%3D%2225px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22%20currentColor%22%3E%3Cpath%20d%3D%22M7%2018V17C7%2014.2386%209.23858%2012%2012%2012V12C14.7614%2012%2017%2014.2386%2017%2017V18%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2012C13.6569%2012%2015%2010.6569%2015%209C15%207.34315%2013.6569%206%2012%206C10.3431%206%209%207.34315%209%209C9%2010.6569%2010.3431%2012%2012%2012Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M21%203.6V20.4C21%2020.7314%2020.7314%2021%2020.4%2021H3.6C3.26863%2021%203%2020.7314%203%2020.4V3.6C3%203.26863%203.26863%203%203.6%203H20.4C20.7314%203%2021%203.26863%2021%203.6Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                                        }
                                      />
                                    </Block>
                                  </>
                                )}
                              </Block>
                            ) : null}
                            {emailFormFieldFormInputVisibility ? (
                              <Block
                                className={"form_field-wrapper"}
                                tag={"div"}
                                {...emailFormFieldFormSectionRuntimeProps}
                              >
                                {emailFormFieldFormSectionSlot ?? (
                                  <>
                                    <FormBlockLabel
                                      className={"input_label"}
                                      htmlFor={"Phone"}
                                    >
                                      {"Email *"}
                                    </FormBlockLabel>
                                    <Block
                                      className={"form-field_icon-component"}
                                      tag={"div"}
                                    >
                                      {emailFormFieldIconVisibility ? (
                                        <HtmlEmbed
                                          className={
                                            "form-field_icon icon-email"
                                          }
                                          content={""}
                                          value={
                                            "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22%20currentColor%22%3E%3Cpath%20d%3D%22M7%209L12%2012.5L17%209%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M2%2017V7C2%205.89543%202.89543%205%204%205H20C21.1046%205%2022%205.89543%2022%207V17C22%2018.1046%2021.1046%2019%2020%2019H4C2.89543%2019%202%2018.1046%202%2017Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                                          }
                                        />
                                      ) : null}
                                      <FormTextInput
                                        autoFocus={false}
                                        className={"input_field is-icon"}
                                        data-name={"email"}
                                        disabled={false}
                                        id={emailFormFieldFormInputId}
                                        maxLength={256}
                                        name={"email"}
                                        placeholder={
                                          "Enter your best e-mail..."
                                        }
                                        required={true}
                                        type={"text"}
                                        {...emailFormFieldFormInputRuntimeProps}
                                      />
                                    </Block>
                                    <FormBlockLabel
                                      className={
                                        "form_label input_label is-disclaimer"
                                      }
                                      htmlFor={"Phone"}
                                    >
                                      {emailFormFieldFormInputDisclaimer}
                                    </FormBlockLabel>
                                  </>
                                )}
                              </Block>
                            ) : null}
                          </Block>
                        </Block>
                      </Block>
                      <Block className={"space_25px"} tag={"div"} />
                      <Block className={"memory_column-group"} tag={"div"}>
                        <Block
                          className={"memory-form-columns is-30pct"}
                          tag={"div"}
                        >
                          <Block
                            className={"memory-form_field-group"}
                            tag={"div"}
                          >
                            <Block
                              className={"form_field-wrapper is-content-block"}
                              tag={"div"}
                            >
                              <Heading
                                className={"memory-form_content-heading"}
                                tag={"h1"}
                              >
                                {addContentHeadlineText}
                              </Heading>
                              <Paragraph
                                className={"memory-form_content-paragraph"}
                              >
                                {addContentParagraphText}
                              </Paragraph>
                            </Block>
                          </Block>
                        </Block>
                        <Block
                          className={"memory-form-columns is-70pct"}
                          tag={"div"}
                        >
                          <Block
                            className={"form_field-wrapper is-file-upload"}
                            tag={"div"}
                          >
                            <Block
                              className={"upload-file-wrapper"}
                              tag={"div"}
                            >
                              <Block
                                className={"form_input-background is-timeline"}
                                tag={"div"}
                              >
                                <Block
                                  className={"form-input_image-upload image-1"}
                                  data-file-upload-input={"fileToUpload1"}
                                  data-w-id={
                                    "687bc307-b7e7-c6b4-9892-fc3f5e5c4af2"
                                  }
                                  id={"fileToUpload1"}
                                  tag={"div"}
                                >
                                  <HtmlEmbed
                                    className={"code-embed_upload"}
                                    content={""}
                                    data-file-upload={"trigger"}
                                    value={
                                      "%3Cdiv%20class%3D%22timeline_form-wrapper%22%20style%3D%22color%3Ainherit%22%3E%0A%20%20%3Cdiv%20class%3D%22flex_vertical.flex-align_center%22%20style%3D%22color%3Ainherit%22%3E%0A%20%20%20%20%3Cdiv%20style%3D%22color%3Ainherit%22%3E%0A%20%20%20%20%20%20Upload%3Cbr%3E%0A%20%20%20%20%20%20Photo%20One%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2264px%22%20height%3D%2264px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20id%3D%22photo1%22%20data-id%3D%22photo-1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M13%2021H3.6C3.26863%2021%203%2020.7314%203%2020.4V3.6C3%203.26863%203.26863%203%203.6%203H20.4C20.7314%203%2021%203.26863%2021%203.6V13%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M3%2016L10%2013L15.5%2015.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M16%2010C14.8954%2010%2014%209.10457%2014%208C14%206.89543%2014.8954%206%2016%206C17.1046%206%2018%206.89543%2018%208C18%209.10457%2017.1046%2010%2016%2010Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M16%2019H19M22%2019H19M19%2019V16M19%2019V22%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%3C%2Fsvg%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Fdiv%3E"
                                    }
                                  />
                                  <Block
                                    className={"filename"}
                                    data-file-upload={"filename"}
                                    tag={"div"}
                                  >
                                    {"filename.jpg"}
                                  </Block>
                                </Block>
                                <Block
                                  className={"uploader-animation image-1"}
                                  data-file-upload={"compressing"}
                                  id={"animation_upload-photo-1"}
                                  tag={"div"}
                                />
                              </Block>
                            </Block>
                            <Block
                              className={"upload-file-wrapper"}
                              tag={"div"}
                            >
                              <Block
                                className={"form_input-background is-timeline"}
                                tag={"div"}
                              >
                                <Block
                                  className={"form-input_image-upload image-2"}
                                  data-file-upload-input={"fileToUpload2"}
                                  data-w-id={
                                    "687bc307-b7e7-c6b4-9892-fc3f5e5c4af9"
                                  }
                                  id={"fileToUpload2"}
                                  tag={"div"}
                                >
                                  <HtmlEmbed
                                    className={"code-embed_upload"}
                                    content={""}
                                    data-file-upload={"trigger"}
                                    value={
                                      "%3Cdiv%20class%3D%22timeline_form-wrapper%22%20style%3D%22color%3Ainherit%22%3E%0A%20%20%3Cdiv%20class%3D%22flex_vertical.flex-align_center%22%20style%3D%22color%3Ainherit%22%3E%0A%20%20%20%20%3Cdiv%20style%3D%22color%3Ainherit%22%3E%0A%20%20%20%20%20%20Upload%3Cbr%3E%0A%20%20%20%20%20%20Photo%20Two%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2264px%22%20height%3D%2264px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20id%3D%22photo2%22%20data-id%3D%22photo-1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M13%2021H3.6C3.26863%2021%203%2020.7314%203%2020.4V3.6C3%203.26863%203.26863%203%203.6%203H20.4C20.7314%203%2021%203.26863%2021%203.6V13%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M3%2016L10%2013L15.5%2015.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M16%2010C14.8954%2010%2014%209.10457%2014%208C14%206.89543%2014.8954%206%2016%206C17.1046%206%2018%206.89543%2018%208C18%209.10457%2017.1046%2010%2016%2010Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M16%2019H19M22%2019H19M19%2019V16M19%2019V22%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%3C%2Fsvg%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Fdiv%3E"
                                    }
                                  />
                                  <Block
                                    className={"filename"}
                                    data-file-upload={"filename"}
                                    tag={"div"}
                                  >
                                    {"filename.jpg"}
                                  </Block>
                                </Block>
                                <Block
                                  className={"uploader-animation image-2"}
                                  data-file-upload={"compressing"}
                                  id={"animation_upload-photo-2"}
                                  tag={"div"}
                                />
                              </Block>
                            </Block>
                          </Block>
                          {contentLinkFieldFormSectionVisibility ? (
                            <Block
                              className={"form_field-wrapper padding-top_10px"}
                              id={"Content-Link-ID"}
                              tag={"div"}
                              {...contentLinkFieldFormSectionProps}
                            >
                              {contentLinkFieldFormSectionSlot ?? (
                                <>
                                  <Block
                                    className={"form-field_icon-component"}
                                    tag={"div"}
                                  >
                                    <FormTextInput
                                      autoFocus={false}
                                      className={"input_field is-content-link"}
                                      data-name={"content_link"}
                                      disabled={false}
                                      id={contentLinkFieldFormInputId}
                                      maxLength={256}
                                      name={"content_link"}
                                      placeholder={"https://image|video.link"}
                                      required={false}
                                      type={"url"}
                                      {...contentLinkFieldFormInputRuntimeProps}
                                    />
                                  </Block>
                                  <FormBlockLabel
                                    className={"input_label"}
                                    htmlFor={"Phone"}
                                  >
                                    {"Content LinkS (Videos | Photos)"}
                                  </FormBlockLabel>
                                </>
                              )}
                            </Block>
                          ) : null}
                        </Block>
                      </Block>
                      <Block className={"space_25px"} tag={"div"} />
                      <Block className={"memory_column-group"} tag={"div"}>
                        <Block
                          className={
                            "form_field-wrapper flex_horizontal flex-align_center"
                          }
                          tag={"div"}
                        >
                          <Block className={"button-group_wrapper"} tag={"div"}>
                            <Block className={"button-wrapper"} tag={"div"}>
                              {submitButtonSubmitButtonVisibility ? (
                                <Block
                                  className={
                                    "button is-accent-tertiary hero_button"
                                  }
                                  id={submitButtonSubmitButtonId}
                                  tag={"div"}
                                  {...submitButtonSubmitButtonOuterRuntimeProps}
                                >
                                  {submitButtonSubmitButtonSlot ?? (
                                    <FormButton
                                      className={"button_label"}
                                      data-file-upload-action={
                                        "/guestbook-form/api/memory/submit"
                                      }
                                      data-wait={submitButtonUserLoadingText}
                                      type={"submit"}
                                      value={submitButtonSubmitButtonText}
                                      {...submitButtonSubmitButtonInnerRuntimeProps}
                                    />
                                  )}
                                </Block>
                              ) : null}
                            </Block>
                            <Block
                              className={"button-wrapper is-hidden"}
                              tag={"div"}
                            >
                              {submitButtonSubmitButtonVisibility ? (
                                <Block
                                  className={
                                    "button is-accent-tertiary hero_button"
                                  }
                                  id={submitButtonSubmitButtonId}
                                  tag={"div"}
                                  {...submitButtonSubmitButtonOuterRuntimeProps}
                                >
                                  {submitButtonSubmitButtonSlot ?? (
                                    <FormButton
                                      className={"button_label"}
                                      collectionId={""}
                                      data-wait={submitButtonUserLoadingText}
                                      type={"submit"}
                                      value={submitButtonSubmitButtonText}
                                      {...submitButtonSubmitButtonInnerRuntimeProps}
                                    />
                                  )}
                                </Block>
                              ) : null}
                            </Block>
                          </Block>
                        </Block>
                      </Block>
                    </FormForm>
                    <FormSuccessMessage className={"form_message-success"}>
                      <Block tag={"div"}>
                        {
                          "Your shared memory is a wonderful addition to our memory journal and wall. Thank you for helping us keep her memory alive by allowing everyone to relive that moment with you."
                        }
                        <br />
                      </Block>
                    </FormSuccessMessage>
                    <FormErrorMessage className={"form_message-error"}>
                      <Block tag={"div"}>
                        {
                          "Oops! Something went wrong. Please try again or check your details and submit again."
                        }
                      </Block>
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
