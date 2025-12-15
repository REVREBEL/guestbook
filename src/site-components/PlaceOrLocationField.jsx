"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function PlaceOrLocationField(
    {
        as: _Component = _Builtin.Block,
        memoryDateFieldFormInputLabel = "Month + Year",
        memoryDateFieldFormInputId,
        memoryDateFieldFormInputRuntimeProps = {},
        memoryDateFieldFormInputVisibility2 = true,
        memoryDateFieldFormInputId2,
        memoryDateFieldFormInputRuntimeProps2 = {},
        memoryDateFieldFormInputSlot,
        memoryPlaceLocationFormInputVisibility = true,
        memoryPlaceLocationMemoryLocationFieldText = "Place or Location",
        memoryPlaceLocationFormInputIconVisibility = true
    }
) {
    return memoryPlaceLocationFormInputVisibility ? <_Component className="form_field-wrapper" tag="div" id={memoryDateFieldFormInputId}>{memoryPlaceLocationFormInputVisibility ? <_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{memoryPlaceLocationMemoryLocationFieldText}</_Builtin.FormBlockLabel> : null}<_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.FormTextInput
                className="input_field is-icon"
                name="Location"
                maxLength={256}
                data-name="Location"
                placeholder="Boulder, CO"
                disabled={false}
                type="text"
                required={true}
                autoFocus={false}
                id={memoryDateFieldFormInputId2}
                {...memoryDateFieldFormInputRuntimeProps} />{memoryPlaceLocationFormInputIconVisibility ? <_Builtin.HtmlEmbed
                className="location-icon"
                value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M15%204V2M15%204V6M15%204H10.5M3%2010V19C3%2020.1046%203.89543%2021%205%2021H19C20.1046%2021%2021%2020.1046%2021%2019V10H3Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M3%2010V6C3%204.89543%203.89543%204%205%204H7%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M7%202V6%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M21%2010V6C21%204.89543%2020.1046%204%2019%204H18.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}</_Builtin.Block></_Component> : null;
}