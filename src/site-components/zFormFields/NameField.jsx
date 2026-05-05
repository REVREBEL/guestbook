"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import FormBlockLabel from "../webflow_modules/Form/components/FormBlockLabel";
import FormTextInput from "../webflow_modules/Form/components/FormTextInput";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";

export function NameField({
  fullNameFormFieldId = "",
  fullNameFormFieldLabel = "Your Name *",
  fullNameFormFieldVisibility = true,
  fullNameFormIconVisibility = true,
  fullNameFormInputRuntimeProps = {},
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {fullNameFormFieldVisibility ? (
        <Block
          className={"form_field-wrapper"}
          id={fullNameFormFieldId}
          tag={"div"}
        >
          <FormBlockLabel className={"input_label"} htmlFor={"Phone"}>
            {fullNameFormFieldLabel}
          </FormBlockLabel>
          <Block className={"form-field_icon-component"} tag={"div"}>
            <FormTextInput
              autoFocus={false}
              className={"input_field is-icon"}
              data-name={"Name"}
              disabled={false}
              id={"Name"}
              maxLength={256}
              name={"Name"}
              placeholder={"Enter your full name..."}
              required={true}
              type={"text"}
              {...fullNameFormInputRuntimeProps}
            />
            {fullNameFormIconVisibility ? (
              <HtmlEmbed
                className={"form-field_icon"}
                content={""}
                value={
                  "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22%20currentColor%22%3E%3Cpath%20d%3D%22M7%2018V17C7%2014.2386%209.23858%2012%2012%2012V12C14.7614%2012%2017%2014.2386%2017%2017V18%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2012C13.6569%2012%2015%2010.6569%2015%209C15%207.34315%2013.6569%206%2012%206C10.3431%206%209%207.34315%209%209C9%2010.6569%2010.3431%2012%2012%2012Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M21%203.6V20.4C21%2020.7314%2020.7314%2021%2020.4%2021H3.6C3.26863%2021%203%2020.7314%203%2020.4V3.6C3%203.26863%203.26863%203%203.6%203H20.4C20.7314%203%2021%203.26863%2021%203.6Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                }
              />
            ) : null}
          </Block>
        </Block>
      ) : null}
    </div>
  );
}
