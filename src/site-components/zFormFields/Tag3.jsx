"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import FormBlockLabel from "../webflow_modules/Form/components/FormBlockLabel";
import FormTextInput from "../webflow_modules/Form/components/FormTextInput";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";

export function Tag3({
  tag2FormInputIconVisibility = true,
  tag2FormInputId = "",
  tag2FromInputRuntimeProps = {},
  tag2TsgVisibility = true,
  tagField1FormInputId = "Tag-1",
  tagField1FormInputVisibility = true,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {tag2TsgVisibility ? (
        <Block
          className={"form_field-wrapper"}
          id={tag2FormInputId}
          tag={"div"}
        >
          <FormBlockLabel className={"input_label"} htmlFor={"Phone"}>
            {"Optional HasHtag"}
          </FormBlockLabel>
          <Block className={"form-field_icon-component"} tag={"div"}>
            <FormTextInput
              autoFocus={false}
              className={"input_field is-icon"}
              data-name={"Tag 1"}
              disabled={false}
              id={tagField1FormInputId}
              maxLength={256}
              name={"Tag-1"}
              placeholder={"CampTrips"}
              required={false}
              type={"text"}
              {...tag2FromInputRuntimeProps}
            />
            {tag2FormInputIconVisibility ? (
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
      ) : null}
    </div>
  );
}
