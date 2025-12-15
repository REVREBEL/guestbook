"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function EmailFormField(
    {
        as: _Component = _Builtin.Block,
        emailFieldFormFieldVisibility = true,
        emailFieldBottomDisclaimerLabel = "",
        emailFieldDisclaimerVisibility = true,
        emailFieldFormInputRuntimeProps = {},
        emailFieldFormFieldLabel = "Email * (Your email is not displayed publicly)",
        emailFieldFormIconVisibility = true,
        emailFieldFormFieldId
    }
) {
    return emailFieldFormFieldVisibility ? <_Component className="form_field-wrapper" tag="div" id={emailFieldFormFieldId}><_Builtin.FormBlockLabel className="form_label input_label" htmlFor="Phone">{"Email * "}<_Builtin.Span className="text-span-22">{"Your email address will remain private and not be shared publicly."}</_Builtin.Span></_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div">{emailFieldFormIconVisibility ? <_Builtin.HtmlEmbed
                className="form-field_icon"
                value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22%20currentColor%22%3E%3Cpath%20d%3D%22M7%209L12%2012.5L17%209%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M2%2017V7C2%205.89543%202.89543%205%204%205H20C21.1046%205%2022%205.89543%2022%207V17C22%2018.1046%2021.1046%2019%2020%2019H4C2.89543%2019%202%2018.1046%202%2017Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}<_Builtin.FormTextInput
                className="input_field is-icon"
                name="Email"
                maxLength={256}
                data-name="Email"
                placeholder="Enter your best e-mail..."
                disabled={false}
                type="text"
                required={true}
                autoFocus={false}
                id="Email"
                {...emailFieldFormInputRuntimeProps} /></_Builtin.Block></_Component> : null;
}