"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SubmitLinkField(
    {
        as: _Component = _Builtin.Block,
        formInputVisibility = true,
        memoryDateFieldFormInputLabel = "Month + Year",
        memoryDateFieldFormInputId,
        memoryDateFieldFormInputRuntimeProps = {},
        memoryDateFieldFormInputVisibility2 = true,
        memoryDateFieldFormInputId2,
        memoryDateFieldFormInputRuntimeProps2 = {},
        memoryDateFieldFormInputSlot,
        memoryPlaceLocationMemoryLocationFieldText = "Place or Location",
        memoryPlaceLocationFormInputIconVisibility = true,
        submitLinkFormInputId,
        submitLinkFormInputRuntimeProps = {},
        submitLinkFormInputSlot,
        runtimeProps = {},
        contentUrlFormInputRuntimeProps = {},
        contentUrlFormInputId,
        formInputId,
        contentUrlFormFieldLabel = "Content Link (Videos | Photos)"
    }
) {
    return formInputVisibility ? <_Component className="form_field-wrapper" tag="div" id="Content-Link-ID">{formInputVisibility ? <_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{contentUrlFormFieldLabel}</_Builtin.FormBlockLabel> : null}<_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.FormTextInput
                className="input_field is-content-link"
                name="Content-Link"
                maxLength={256}
                data-name="Content Link"
                placeholder="https://image|video.link"
                disabled={false}
                type="url"
                required={true}
                autoFocus={false}
                id={contentUrlFormInputId}
                {...contentUrlFormInputRuntimeProps} /><_Builtin.Block tag="div" /></_Builtin.Block></_Component> : null;
}