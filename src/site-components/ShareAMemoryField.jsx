"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ShareAMemoryField(
    {
        as: _Component = _Builtin.Block,
        messageVisibility = true,
        messageFormFieldId,
        messageFormFieldLabel = "",
        messageInputFieldId = "Message",
        messageInputFieldRuntimeProps = {},
        messageCharactersVisibility = true,
        messageCharacterLabel = "",
        messageCharactersRuntimeProps = {},
        messageCharactersSlot
    }
) {
    return messageVisibility ? <_Component className="form_field-wrapper" tag="div" id={messageFormFieldId}><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{messageFormFieldLabel}</_Builtin.FormBlockLabel><_Builtin.Block className="text-area_component" tag="div"><_Builtin.HtmlEmbed
                className="hide"
                value="%3Cscript%3E%0A%20%20%2F%2F%20Function%20to%20auto-expand%20the%20textarea%0A%20%20function%20autoExpandTextarea(textarea)%20%7B%0A%20%20%20%20textarea.style.height%20%3D%20'auto'%3B%20%2F%2F%20Reset%20the%20height%0A%20%20%20%20textarea.style.height%20%3D%20textarea.scrollHeight%20%2B%20'px'%3B%20%2F%2F%20Set%20the%20height%20to%20match%20the%20content%0A%20%20%7D%0A%0A%20%20%2F%2F%20Find%20all%20textareas%20with%20the%20custom%20data%20attribute%0A%20%20document.addEventListener(%22DOMContentLoaded%22%2C%20function()%20%7B%0A%20%20%20%20const%20textareas%20%3D%20document.querySelectorAll('%5Bdata-auto-expand%3D%22true%22%5D')%3B%0A%0A%20%20%20%20%2F%2F%20Loop%20through%20all%20matching%20textareas%20and%20add%20the%20event%20listener%0A%20%20%20%20textareas.forEach(textarea%20%3D%3E%20%7B%0A%20%20%20%20%20%20textarea.addEventListener('input'%2C%20function()%20%7B%0A%20%20%20%20%20%20%20%20autoExpandTextarea(textarea)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Optionally%2C%20trigger%20the%20function%20on%20page%20load%20to%20adjust%20height%20if%20there's%20pre-filled%20content%0A%20%20%20%20%20%20autoExpandTextarea(textarea)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%3C%2Fscript%3E" /><_Builtin.FormTextarea
                className="input_field is-message-box"
                name="Message"
                maxLength={5000}
                data-name="Message"
                placeholder="Share your thoughts, memories, or well wishes"
                required={false}
                autoFocus={false}
                data-auto-expand="true"
                id={messageInputFieldId}
                {...messageInputFieldRuntimeProps} />{messageCharactersVisibility ? <_Builtin.FormBlockLabel className="form_label" htmlFor="Phone" {...messageCharactersRuntimeProps}>{messageCharactersSlot ?? messageCharacterLabel}</_Builtin.FormBlockLabel> : null}</_Builtin.Block></_Component> : null;
}