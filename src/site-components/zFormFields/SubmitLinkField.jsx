"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import FormBlockLabel from "../webflow_modules/Form/components/FormBlockLabel";
import FormTextInput from "../webflow_modules/Form/components/FormTextInput";

export function SubmitLinkField({
  contentUrlFormFieldLabel = "Content Link (Videos | Photos)",
  contentUrlFormInputId = "",
  contentUrlFormInputRuntimeProps = {},
  formInputId = "",
  formInputVisibility = true,
  memoryDateFieldFormInputId = "",
  memoryDateFieldFormInputId2 = "",
  memoryDateFieldFormInputLabel = "Month + Year",
  memoryDateFieldFormInputRuntimeProps = {},
  memoryDateFieldFormInputRuntimeProps2 = {},
  memoryDateFieldFormInputSlot = "",
  memoryDateFieldFormInputVisibility2 = true,
  memoryPlaceLocationFormInputIconVisibility = true,
  memoryPlaceLocationMemoryLocationFieldText = "Place or Location",
  runtimeProps = {},
  submitLinkFormInputId = "",
  submitLinkFormInputRuntimeProps = {},
  submitLinkFormInputSlot = "",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {formInputVisibility ? (
        <Block
          className={"form_field-wrapper"}
          id={"Content-Link-ID"}
          tag={"div"}
        >
          {formInputVisibility ? (
            <FormBlockLabel className={"input_label"} htmlFor={"Phone"}>
              {contentUrlFormFieldLabel}
            </FormBlockLabel>
          ) : null}
          <Block className={"form-field_icon-component"} tag={"div"}>
            <FormTextInput
              autoFocus={false}
              className={"input_field is-content-link"}
              data-name={"Content Link"}
              disabled={false}
              id={contentUrlFormInputId}
              maxLength={256}
              name={"Content-Link"}
              placeholder={"https://image|video.link"}
              required={true}
              type={"url"}
              {...contentUrlFormInputRuntimeProps}
            />
            <Block tag={"div"} />
          </Block>
        </Block>
      ) : null}
    </div>
  );
}
