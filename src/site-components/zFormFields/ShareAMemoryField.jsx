"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import FormBlockLabel from "../webflow_modules/Form/components/FormBlockLabel";
import FormTextarea from "../webflow_modules/Form/components/FormTextarea";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";

export function ShareAMemoryField({
  messageCharacterLabel = "",
  messageCharactersRuntimeProps = {},
  messageCharactersSlot = "",
  messageCharactersVisibility = true,
  messageFormFieldId = "",
  messageFormFieldLabel = "",
  messageInputFieldId = "Message",
  messageInputFieldRuntimeProps = {},
  messageVisibility = true,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {messageVisibility ? (
        <Block
          className={"form_field-wrapper"}
          id={messageFormFieldId}
          tag={"div"}
        >
          <FormBlockLabel className={"input_label"} htmlFor={"Phone"}>
            {messageFormFieldLabel}
          </FormBlockLabel>
          <Block className={"text-area_component"} tag={"div"}>
            <HtmlEmbed
              className={"hide"}
              content={""}
              value={
                "%3Cscript%3E%0A%20%20%2F%2F%20Function%20to%20auto-expand%20the%20textarea%0A%20%20function%20autoExpandTextarea(textarea)%20%7B%0A%20%20%20%20textarea.style.height%20%3D%20'auto'%3B%20%2F%2F%20Reset%20the%20height%0A%20%20%20%20textarea.style.height%20%3D%20textarea.scrollHeight%20%2B%20'px'%3B%20%2F%2F%20Set%20the%20height%20to%20match%20the%20content%0A%20%20%7D%0A%0A%20%20%2F%2F%20Find%20all%20textareas%20with%20the%20custom%20data%20attribute%0A%20%20document.addEventListener(%22DOMContentLoaded%22%2C%20function()%20%7B%0A%20%20%20%20const%20textareas%20%3D%20document.querySelectorAll('%5Bdata-auto-expand%3D%22true%22%5D')%3B%0A%0A%20%20%20%20%2F%2F%20Loop%20through%20all%20matching%20textareas%20and%20add%20the%20event%20listener%0A%20%20%20%20textareas.forEach(textarea%20%3D%3E%20%7B%0A%20%20%20%20%20%20textarea.addEventListener('input'%2C%20function()%20%7B%0A%20%20%20%20%20%20%20%20autoExpandTextarea(textarea)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Optionally%2C%20trigger%20the%20function%20on%20page%20load%20to%20adjust%20height%20if%20there's%20pre-filled%20content%0A%20%20%20%20%20%20autoExpandTextarea(textarea)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%3C%2Fscript%3E"
              }
            />
            <FormTextarea
              autoFocus={false}
              className={"input_field is-message-box"}
              data-auto-expand={"true"}
              data-name={"Message"}
              id={messageInputFieldId}
              maxLength={5000}
              name={"Message"}
              placeholder={"Share your thoughts, memories, or well wishes"}
              required={false}
              {...messageInputFieldRuntimeProps}
            />
            {messageCharactersVisibility ? (
              <FormBlockLabel
                className={"form_label"}
                htmlFor={"Phone"}
                {...messageCharactersRuntimeProps}
              >
                {messageCharactersSlot ?? messageCharacterLabel}
              </FormBlockLabel>
            ) : null}
          </Block>
        </Block>
      ) : null}
    </div>
  );
}
