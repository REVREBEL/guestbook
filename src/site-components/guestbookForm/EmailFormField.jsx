"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import FormBlockLabel from "../webflow_modules/Form/components/FormBlockLabel";
import FormTextInput from "../webflow_modules/Form/components/FormTextInput";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import Span from "../webflow_modules/Basic/components/Span";

export function EmailFormField({
  emailFieldBottomDisclaimerLabel = "",
  emailFieldDisclaimerVisibility = true,
  emailFieldFormFieldId = "",
  emailFieldFormFieldLabel = "Email * (Your email is not displayed publicly)",
  emailFieldFormFieldVisibility = true,
  emailFieldFormIconVisibility = true,
  emailFieldFormInputRuntimeProps = {},
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {emailFieldFormFieldVisibility ? (
        <Block
          className={"form_field-wrapper"}
          id={emailFieldFormFieldId}
          tag={"div"}
        >
          <FormBlockLabel
            className={"form_label input_label"}
            htmlFor={"Phone"}
          >
            {"Email * "}
            <Span className={"text-span-22"}>
              {
                "Your email address will remain private and not be shared publicly."
              }
            </Span>
          </FormBlockLabel>
          <Block className={"form-field_icon-component"} tag={"div"}>
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
              data-name={"Email"}
              disabled={false}
              id={"Email"}
              maxLength={256}
              name={"Email"}
              placeholder={"Enter your best e-mail..."}
              required={true}
              type={"text"}
              {...emailFieldFormInputRuntimeProps}
            />
          </Block>
        </Block>
      ) : null}
    </div>
  );
}
