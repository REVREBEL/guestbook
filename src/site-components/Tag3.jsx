"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function Tag3(
    {
        as: _Component = _Builtin.Block,
        tagField1FormInputId = "Tag-1",
        tagField1FormInputVisibility = true,
        tag2FormInputId,
        tag2TsgVisibility = true,
        tag2FromInputRuntimeProps = {},
        tag2FormInputIconVisibility = true
    }
) {
    return tag2TsgVisibility ? <_Component className="form_field-wrapper" tag="div" id={tag2FormInputId}><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{"Optional HasHtag"}</_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.FormTextInput
                className="input_field is-icon"
                name="Tag-1"
                maxLength={256}
                data-name="Tag 1"
                placeholder="CampTrips"
                disabled={false}
                type="text"
                required={false}
                autoFocus={false}
                id={tagField1FormInputId}
                {...tag2FromInputRuntimeProps} />{tag2FormInputIconVisibility ? <_Builtin.HtmlEmbed
                className="form-field_icon"
                value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M10%203L6%2021%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M20.5%2016H2.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M22%207H4%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M18%203L14%2021%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}</_Builtin.Block></_Component> : null;
}