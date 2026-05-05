"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import FormBlockLabel from "../webflow_modules/Form/components/FormBlockLabel";
import FormButton from "../webflow_modules/Form/components/FormButton";
import FormErrorMessage from "../webflow_modules/Form/components/FormErrorMessage";
import FormForm from "../webflow_modules/Form/components/FormForm";
import FormInlineLabel from "../webflow_modules/Form/components/FormInlineLabel";
import FormRadioInput from "../webflow_modules/Form/components/FormRadioInput";
import FormRadioWrapper from "../webflow_modules/Form/components/FormRadioWrapper";
import FormSelect from "../webflow_modules/Form/components/FormSelect";
import FormSuccessMessage from "../webflow_modules/Form/components/FormSuccessMessage";
import FormTextarea from "../webflow_modules/Form/components/FormTextarea";
import FormTextInput from "../webflow_modules/Form/components/FormTextInput";
import FormWrapper from "../webflow_modules/Form/components/FormWrapper";
import Heading from "../webflow_modules/Basic/components/Heading";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import VFlex from "../webflow_modules/Layout/components/VFlex";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-291":{"id":"e-291","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-80","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-292"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".close-button","originalId":"195647e0-c64d-d0db-a38a-918ff8d0c0e4","appliesTo":"CLASS"},"targets":[{"selector":".close-button","originalId":"195647e0-c64d-d0db-a38a-918ff8d0c0e4","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1766032238750}},"actionLists":{"a-80":{"id":"a-80","title":"Inverse [ON-HOVER]","actionItemGroups":[{"actionItems":[{"id":"a-80-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".on-click-open","selectorGuids":["f8682163-9c88-80e9-0919-4fd75635f366"]},"value":1,"unit":""}},{"id":"a-80-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".on-click_close","selectorGuids":["bed93150-a184-89f6-0e07-d587e4dd055c"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1766032244301}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function GuestbookForm({
  buttonButtonIconVisibility = true,
  buttonId = "",
  buttonLabelText = "Sign the Guestbook",
  buttonLoadingMessage = "Signing the Guestbook.....",
  buttonRuntimeProps = {},
  buttonSlot = "",
  buttonSubmitButtonId = "submit-button",
  buttonSubmitButtonVisibility = true,
  buttonVisibility = true,
  componentId = "",
  componentVisibility = true,
  emailFieldBottomDisclaimerLabel = "",
  emailFieldDisclaimerVisibility = true,
  emailFieldFormFieldLabel = "Email*",
  emailFieldFormFieldVisibility = true,
  emailFieldFormIconVisibility = true,
  emailFieldFormInputId = "email",
  emailFieldFormInputRuntimeProps = {},
  firstMetFieldFormFieldId = "guestbook_first_met",
  firstMetFieldFormFieldLabel = "",
  firstMetFieldFormFieldVisibility = true,
  firstMetFieldFormIconVisibility = true,
  firstMetFieldFormInputRuntimeProps = {},
  formComponentRuntimeProps = {},
  fullNameFormIconVisibility = true,
  fullNameFormInputId = "full_name",
  fullNameFormInputLabel = "Your Name *",
  fullNameFormInputVisibility = true,
  guestbookCollectionIdCollectionIdVariable = "{{GUESTBOOK_COLLECTION_ID}}",
  guestbookCollectionIdFormInputId = "collection_id",
  locationFieldFormIconVisibility = true,
  locationFieldFormInputId = "guestbook_location",
  locationFieldFormInputLabel = "",
  locationFieldFormInputRuntimeProps = {},
  locationFieldFormInputVisibility = true,
  messageFieldCharacterLabel = "",
  messageFieldCharactersRuntimeProps = {},
  messageFieldCharactersSlot = "",
  messageFieldCharactersVisibility = true,
  messageFieldFormFieldLabel = "",
  messageFieldFormFieldVisibility = true,
  messageFieldFormInputId = "guestbook_message",
  messageFieldInputFieldRuntimeProps = {},
  relationshipFieldFormFieldLabel = "",
  relationshipFieldFormFieldVisibility = true,
  relationshipFieldFormInputId = "guestbook_relationship",

  relationshipFieldInputFieldLink = {
    href: "#",
    preload: "none",
  },

  relationshipFieldInputFieldRuntimeProps = {},
  relationshipFieldInputFieldSlot = "",
  relationshipFieldPlaceholderText = "How do you know her?",
  relationshipFieldRuntimeProps = {},
  relationshipFieldRuntimePropsList = {},
  relationshipFieldRuntimePropsListLink = {},
  relationshipFieldSelectDropdownSlot = "",
  relationshipFieldSelectInputDropdownRuntimeProps = {},
  userMessagesErrorMessageText = "Oops! Something went wrong. Please try again or check your details and submit again.",
  userMessagesSuccessMessageText = "Thank you for signing the Guestbook. It will be displayed shortly, and we appreciate you being part of her tribute.",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {componentVisibility ? (
        <Block
          className={"on-click_form is-memory-form"}
          id={componentId}
          tag={"section"}
        >
          <Block className={"memory_form-padding"} tag={"div"}>
            <Block className={"memory_inner-form"} tag={"div"}>
              <Block className={"memory-component"} tag={"div"}>
                <Block
                  className={"memory_form-card"}
                  id={"w-node-_5f2baab6-9d72-7f84-b35c-2ad8e0493c36-22a0067e"}
                  tag={"div"}
                >
                  <Block className={"form-headline_wrapper"} tag={"div"}>
                    <Heading className={"heading_h3"} tag={"h1"}>
                      {"sign the guestbook"}
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
                        <Block
                          className={"memory-form-columns is-100pct"}
                          tag={"div"}
                        >
                          {fullNameFormInputVisibility ? (
                            <Block className={"form_field-wrapper"} tag={"div"}>
                              <FormBlockLabel
                                className={"input_label"}
                                htmlFor={"Phone"}
                              >
                                {fullNameFormInputLabel}
                              </FormBlockLabel>
                              <Block
                                className={"form-field_icon-component"}
                                tag={"div"}
                              >
                                {fullNameFormIconVisibility ? (
                                  <HtmlEmbed
                                    className={"form-field_icon is-adjusted"}
                                    content={""}
                                    value={
                                      "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22%20currentColor%22%3E%3Cpath%20d%3D%22M7%2018V17C7%2014.2386%209.23858%2012%2012%2012V12C14.7614%2012%2017%2014.2386%2017%2017V18%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2012C13.6569%2012%2015%2010.6569%2015%209C15%207.34315%2013.6569%206%2012%206C10.3431%206%209%207.34315%209%209C9%2010.6569%2010.3431%2012%2012%2012Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M21%203.6V20.4C21%2020.7314%2020.7314%2021%2020.4%2021H3.6C3.26863%2021%203%2020.7314%203%2020.4V3.6C3%203.26863%203.26863%203%203.6%203H20.4C20.7314%203%2021%203.26863%2021%203.6Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                                    }
                                  />
                                ) : null}
                                <FormTextInput
                                  autoFocus={false}
                                  className={"input_field is-icon"}
                                  data-name={"full_name"}
                                  disabled={false}
                                  id={fullNameFormInputId}
                                  maxLength={256}
                                  name={"full_name"}
                                  placeholder={"Enter your full name..."}
                                  required={true}
                                  type={"text"}
                                />
                              </Block>
                            </Block>
                          ) : null}
                          <Block
                            className={"guesbook_form-input-group"}
                            tag={"div"}
                          >
                            {locationFieldFormInputVisibility ? (
                              <Block
                                className={"form_field-wrapper"}
                                tag={"div"}
                              >
                                <FormBlockLabel
                                  className={"input_label"}
                                  htmlFor={"Phone"}
                                >
                                  {"Location *"}
                                </FormBlockLabel>
                                <Block
                                  className={"form-field_icon-component"}
                                  tag={"div"}
                                >
                                  <FormTextInput
                                    autoFocus={false}
                                    className={"input_field is-icon"}
                                    data-name={"guestbook_location"}
                                    disabled={false}
                                    id={locationFieldFormInputId}
                                    maxLength={256}
                                    name={"guestbook_location"}
                                    placeholder={"Boulder, CO"}
                                    required={true}
                                    type={"text"}
                                    {...locationFieldFormInputRuntimeProps}
                                  />
                                  {locationFieldFormIconVisibility ? (
                                    <HtmlEmbed
                                      className={"form-field_icon"}
                                      content={""}
                                      value={
                                        "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22%20currentColor%22%3E%3Cpath%20d%3D%22M20%2010C20%2014.4183%2012%2022%2012%2022C12%2022%204%2014.4183%204%2010C4%205.58172%207.58172%202%2012%202C16.4183%202%2020%205.58172%2020%2010Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2011C12.5523%2011%2013%2010.5523%2013%2010C13%209.44772%2012.5523%209%2012%209C11.4477%209%2011%209.44772%2011%2010C11%2010.5523%2011.4477%2011%2012%2011Z%22%20fill%3D%22%20currentColor%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                                      }
                                    />
                                  ) : null}
                                </Block>
                              </Block>
                            ) : null}
                            {firstMetFieldFormFieldVisibility ? (
                              <Block
                                className={"form_field-wrapper"}
                                tag={"div"}
                              >
                                <FormBlockLabel
                                  className={"input_label"}
                                  htmlFor={"Phone"}
                                >
                                  {"Where did you first meet? (optional)"}
                                </FormBlockLabel>
                                <Block
                                  className={"form-field_icon-component"}
                                  tag={"div"}
                                >
                                  <FormTextInput
                                    autoFocus={false}
                                    className={"input_field is-icon"}
                                    data-name={"guestbook_first_met"}
                                    disabled={false}
                                    id={firstMetFieldFormFieldId}
                                    maxLength={256}
                                    name={"guestbook_first_met"}
                                    placeholder={
                                      "School, Work Event, Mutual Friend"
                                    }
                                    required={false}
                                    type={"text"}
                                    {...firstMetFieldFormInputRuntimeProps}
                                  />
                                  {firstMetFieldFormIconVisibility ? (
                                    <HtmlEmbed
                                      className={"form-field_icon"}
                                      content={""}
                                      value={
                                        "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Crect%20width%3D%227%22%20height%3D%225%22%20rx%3D%220.6%22%20transform%3D%22matrix(1%200%200%20-1%203%2022)%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-width%3D%221.5%22%3E%3C%2Frect%3E%3Crect%20width%3D%227%22%20height%3D%225%22%20rx%3D%220.6%22%20transform%3D%22matrix(1%200%200%20-1%208.5%207)%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-width%3D%221.5%22%3E%3C%2Frect%3E%3Crect%20width%3D%227%22%20height%3D%225%22%20rx%3D%220.6%22%20transform%3D%22matrix(1%200%200%20-1%2014%2022)%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-width%3D%221.5%22%3E%3C%2Frect%3E%3Cpath%20d%3D%22M6.5%2017V13.5C6.5%2012.3954%207.39543%2011.5%208.5%2011.5H15.5C16.6046%2011.5%2017.5%2012.3954%2017.5%2013.5V17%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2011.5V7%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                                      }
                                    />
                                  ) : null}
                                </Block>
                              </Block>
                            ) : null}
                          </Block>
                          <Block
                            className={"guesbook_form-input-group"}
                            tag={"div"}
                          >
                            {emailFieldFormFieldVisibility ? (
                              <Block
                                className={"form_field-wrapper"}
                                id={"email"}
                                tag={"div"}
                              >
                                <FormBlockLabel
                                  className={"input_label"}
                                  htmlFor={"Phone"}
                                >
                                  {emailFieldFormFieldLabel}
                                </FormBlockLabel>
                                <Block
                                  className={"form-field_icon-component"}
                                  tag={"div"}
                                >
                                  {emailFieldFormIconVisibility ? (
                                    <HtmlEmbed
                                      className={"form-field_icon"}
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
                                    id={emailFieldFormInputId}
                                    maxLength={256}
                                    name={"email"}
                                    placeholder={"Enter your best e-mail..."}
                                    required={true}
                                    type={"email"}
                                    {...emailFieldFormInputRuntimeProps}
                                  />
                                </Block>
                                <Block
                                  className={"input_label is-disclaimer"}
                                  tag={"div"}
                                >
                                  {"Your email won't be displayed publicly"}
                                </Block>
                              </Block>
                            ) : null}
                            {relationshipFieldFormFieldVisibility ? (
                              <Block
                                className={"form_field-wrapper"}
                                id={relationshipFieldFormInputId}
                                tag={"div"}
                              >
                                <FormBlockLabel
                                  className={"input_label"}
                                  htmlFor={"Phone"}
                                >
                                  {"Your RElationship to her"}
                                </FormBlockLabel>
                                <Block
                                  className={"input_field"}
                                  id={
                                    "w-node-d88e972a-2135-ff8c-8003-f5f076c1752b-22a0067e"
                                  }
                                  tag={"div"}
                                >
                                  <FormSelect
                                    className={"select-input_field"}
                                    data-name={"Select Field"}
                                    multiple={false}
                                    name={"Select-Field"}
                                    options={[
                                      {
                                        t: "Select one...",
                                        v: "",
                                      },
                                      {
                                        t: "Family",
                                        v: "Family",
                                      },
                                      {
                                        t: "Relative",
                                        v: "Relative",
                                      },
                                      {
                                        t: "Co-Worker",
                                        v: "Co-Worker",
                                      },
                                      {
                                        t: "Church Friend",
                                        v: "Church Friend",
                                      },
                                      {
                                        t: "Other",
                                        v: "Fith",
                                      },
                                      {
                                        t: "Never Met",
                                        v: "Never Met",
                                      },
                                    ]}
                                    required={false}
                                  />
                                </Block>
                              </Block>
                            ) : null}
                          </Block>
                          {messageFieldFormFieldVisibility ? (
                            <Block
                              className={"form_field-wrapper"}
                              id={"message"}
                              tag={"div"}
                            >
                              <FormBlockLabel
                                className={"input_label"}
                                htmlFor={"Phone"}
                              >
                                {"Your Message *"}
                              </FormBlockLabel>
                              <Block
                                className={
                                  "text-area_component margin-top_none"
                                }
                                tag={"div"}
                              >
                                <HtmlEmbed
                                  className={"hide"}
                                  content={""}
                                  value={
                                    "%3Cscript%3E%0A%20%20%2F%2F%20Function%20to%20auto-expand%20the%20textarea%0A%20%20function%20autoExpandTextarea(textarea)%20%7B%0A%20%20%20%20textarea.style.height%20%3D%20'auto'%3B%20%2F%2F%20Reset%20the%20height%0A%20%20%20%20textarea.style.height%20%3D%20textarea.scrollHeight%20%2B%20'px'%3B%20%2F%2F%20Set%20the%20height%20to%20match%20the%20content%0A%20%20%7D%0A%0A%20%20%2F%2F%20Find%20all%20textareas%20with%20the%20custom%20data%20attribute%0A%20%20document.addEventListener(%22DOMContentLoaded%22%2C%20function()%20%7B%0A%20%20%20%20const%20textareas%20%3D%20document.querySelectorAll('%5Bdata-auto-expand%3D%22true%22%5D')%3B%0A%0A%20%20%20%20%2F%2F%20Loop%20through%20all%20matching%20textareas%20and%20add%20the%20event%20listener%0A%20%20%20%20textareas.forEach(textarea%20%3D%3E%20%7B%0A%20%20%20%20%20%20textarea.addEventListener('input'%2C%20function()%20%7B%0A%20%20%20%20%20%20%20%20autoExpandTextarea(textarea)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Optionally%2C%20trigger%20the%20function%20on%20page%20load%20to%20adjust%20height%20if%20there's%20pre-filled%20content%0A%20%20%20%20%20%20autoExpandTextarea(textarea)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%3C%2Fscript%3E"
                                  }
                                />
                                <FormTextarea
                                  autoFocus={false}
                                  className={"input_field"}
                                  data-auto-expand={"true"}
                                  data-name={"guestbook_message"}
                                  id={messageFieldFormInputId}
                                  maxLength={5000}
                                  name={"guestbook_message"}
                                  placeholder={
                                    "Share your thoughts, memories, or well wishes"
                                  }
                                  required={true}
                                  {...messageFieldInputFieldRuntimeProps}
                                />
                              </Block>
                            </Block>
                          ) : null}
                          <Block
                            className={"guesbook_form-input-group"}
                            tag={"div"}
                          >
                            {relationshipFieldFormFieldVisibility ? (
                              <Block
                                className={"form_field-wrapper"}
                                id={relationshipFieldFormInputId}
                                tag={"div"}
                              >
                                <FormBlockLabel
                                  className={"input_label margin-botom_5pct"}
                                  htmlFor={"Phone"}
                                >
                                  {"Choose you card color"}
                                </FormBlockLabel>
                                <VFlex className={"flex-block-2"} tag={"div"}>
                                  <Block tag={"div"}>
                                    <FormRadioWrapper>
                                      <FormRadioInput
                                        className={"radio-button"}
                                        customClassName={
                                          "w-form-formradioinput--inputType-custom"
                                        }
                                        data-name={"Guestbook Card Color"}
                                        form={{
                                          type: "radio-input",
                                          name: "Guestbook Card Color",
                                        }}
                                        id={"Warm-Sandstone-2"}
                                        inputType={"custom"}
                                        name={"Guestbook-Card-Color"}
                                        required={true}
                                        type={"radio"}
                                        value={"Warm Sandstone"}
                                      />
                                      <FormInlineLabel
                                        className={"radio-button-label"}
                                      >
                                        {"Warm Sandstone"}
                                      </FormInlineLabel>
                                    </FormRadioWrapper>
                                    <FormRadioWrapper>
                                      <FormRadioInput
                                        className={"radio-button"}
                                        customClassName={
                                          "w-form-formradioinput--inputType-custom"
                                        }
                                        data-name={"Guestbook Card Color"}
                                        form={{
                                          type: "radio-input",
                                          name: "Guestbook Card Color",
                                        }}
                                        id={"Ocean-Teal-3"}
                                        inputType={"custom"}
                                        name={"Guestbook-Card-Color"}
                                        required={true}
                                        type={"radio"}
                                        value={"Ocean Teal"}
                                      />
                                      <FormInlineLabel
                                        className={"radio-button-label"}
                                      >
                                        {"Ocean Teal"}
                                      </FormInlineLabel>
                                    </FormRadioWrapper>
                                    <FormRadioWrapper>
                                      <FormRadioInput
                                        className={"radio-button"}
                                        customClassName={
                                          "w-form-formradioinput--inputType-custom"
                                        }
                                        data-name={"Guestbook Card Color"}
                                        form={{
                                          type: "radio-input",
                                          name: "Guestbook Card Color",
                                        }}
                                        id={"Rustwood-Red-3"}
                                        inputType={"custom"}
                                        name={"Guestbook-Card-Color"}
                                        required={true}
                                        type={"radio"}
                                        value={"Rustwood Red"}
                                      />
                                      <FormInlineLabel
                                        className={"radio-button-label"}
                                      >
                                        {"Rustwood Red"}
                                      </FormInlineLabel>
                                    </FormRadioWrapper>
                                  </Block>
                                  <Block tag={"div"}>
                                    <FormRadioWrapper>
                                      <FormRadioInput
                                        className={"radio-button"}
                                        customClassName={
                                          "w-form-formradioinput--inputType-custom"
                                        }
                                        data-name={"Guestbook Card Color"}
                                        form={{
                                          type: "radio-input",
                                          name: "Guestbook Card Color",
                                        }}
                                        id={"Slate-Blue"}
                                        inputType={"custom"}
                                        name={"Guestbook-Card-Color"}
                                        required={true}
                                        type={"radio"}
                                        value={"Slate Blue"}
                                      />
                                      <FormInlineLabel
                                        className={"radio-button-label"}
                                      >
                                        {"Slate Blue"}
                                      </FormInlineLabel>
                                    </FormRadioWrapper>
                                    <FormRadioWrapper>
                                      <FormRadioInput
                                        className={"radio-button"}
                                        customClassName={
                                          "w-form-formradioinput--inputType-custom"
                                        }
                                        data-name={"Guestbook Card Color"}
                                        form={{
                                          type: "radio-input",
                                          name: "Guestbook Card Color",
                                        }}
                                        id={"Twilight-Smoke"}
                                        inputType={"custom"}
                                        name={"Guestbook-Card-Color"}
                                        required={true}
                                        type={"radio"}
                                        value={"Twilight Smoke"}
                                      />
                                      <FormInlineLabel
                                        className={"radio-button-label"}
                                      >
                                        {"Twilight Smoke"}
                                      </FormInlineLabel>
                                    </FormRadioWrapper>
                                    <FormRadioWrapper>
                                      <FormRadioInput
                                        className={"radio-button"}
                                        customClassName={
                                          "w-form-formradioinput--inputType-custom"
                                        }
                                        data-name={"Guestbook Card Color"}
                                        form={{
                                          type: "radio-input",
                                          name: "Guestbook Card Color",
                                        }}
                                        id={"Rose-Clay"}
                                        inputType={"custom"}
                                        name={"Guestbook-Card-Color"}
                                        required={true}
                                        type={"radio"}
                                        value={"Rose Clay"}
                                      />
                                      <FormInlineLabel
                                        className={"radio-button-label"}
                                      >
                                        {"Rose Clay"}
                                      </FormInlineLabel>
                                    </FormRadioWrapper>
                                  </Block>
                                </VFlex>
                              </Block>
                            ) : null}
                            <Block
                              className={"form_field-wrapper margin-left_none"}
                              tag={"div"}
                            >
                              <Block
                                className={"button-wrapper max-width_800px"}
                                tag={"div"}
                              >
                                {buttonSubmitButtonVisibility ? (
                                  <Block
                                    className={
                                      "button-13 is-accent-tertiary hero_button"
                                    }
                                    id={buttonSubmitButtonId}
                                    tag={"div"}
                                  >
                                    <FormButton
                                      className={"button_label"}
                                      data-wait={buttonLoadingMessage}
                                      type={"submit"}
                                      value={"Sign the Guestbook"}
                                    />
                                  </Block>
                                ) : null}
                              </Block>
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
