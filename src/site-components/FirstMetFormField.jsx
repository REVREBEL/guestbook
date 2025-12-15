"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FirstMetFormField(
    {
        as: _Component = _Builtin.Block,
        firstMetFormFieldVisibility = true,
        firstMetFormFieldId,
        firstMetFormFieldLabel = "",
        firstMetFormIconVisibility = true,
        firstMetFormInputRuntimeProps = {}
    }
) {
    return firstMetFormFieldVisibility ? <_Component className="form_field-wrapper" tag="div" id={firstMetFormFieldId}><_Builtin.FormBlockLabel className="form_label" htmlFor="Phone">{firstMetFormFieldLabel}</_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.FormTextInput
                className="input_field is-icon"
                name="Email"
                maxLength={256}
                data-name="Email"
                placeholder="School, Work Event, Mutual Friend"
                disabled={false}
                type="text"
                required={false}
                autoFocus={false}
                id="Email"
                {...firstMetFormInputRuntimeProps} />{firstMetFormIconVisibility ? <_Builtin.HtmlEmbed
                className="form-field_icon"
                value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Crect%20width%3D%227%22%20height%3D%225%22%20rx%3D%220.6%22%20transform%3D%22matrix(1%200%200%20-1%203%2022)%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-width%3D%221.5%22%3E%3C%2Frect%3E%3Crect%20width%3D%227%22%20height%3D%225%22%20rx%3D%220.6%22%20transform%3D%22matrix(1%200%200%20-1%208.5%207)%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-width%3D%221.5%22%3E%3C%2Frect%3E%3Crect%20width%3D%227%22%20height%3D%225%22%20rx%3D%220.6%22%20transform%3D%22matrix(1%200%200%20-1%2014%2022)%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-width%3D%221.5%22%3E%3C%2Frect%3E%3Cpath%20d%3D%22M6.5%2017V13.5C6.5%2012.3954%207.39543%2011.5%208.5%2011.5H15.5C16.6046%2011.5%2017.5%2012.3954%2017.5%2013.5V17%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2011.5V7%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}</_Builtin.Block></_Component> : null;
}