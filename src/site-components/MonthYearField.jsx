"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function MonthYearField(
    {
        as: _Component = _Builtin.Block,
        memoryDateFieldFormInputLabel = "Month + Year",
        memoryDateFieldFormInputVisibility = true,
        memoryDateFieldFormInputId,
        memoryDateFieldFormInputRuntimeProps = {},
        memoryDateFieldFormInputSlot,
        memoryDateFieldFormInputVisibility2 = true,
        memoryDateFieldFormInputId2,
        memoryDateFieldFormInputRuntimeProps2 = {}
    }
) {
    return memoryDateFieldFormInputVisibility ? <_Component className="form_field-wrapper" tag="div" id={memoryDateFieldFormInputId}>{memoryDateFieldFormInputVisibility2 ? <_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{"MOnth +Date of Memory"}</_Builtin.FormBlockLabel> : null}<_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.FormTextInput
                className="input_field is-icon"
                name="Location"
                maxLength={256}
                data-name="Location"
                placeholder="June 1990"
                disabled={false}
                type="text"
                required={true}
                autoFocus={false}
                id={memoryDateFieldFormInputId2}
                {...memoryDateFieldFormInputRuntimeProps} /><_Builtin.HtmlEmbed
                className="location-icon"
                value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M20%2010C20%2014.4183%2012%2022%2012%2022C12%2022%204%2014.4183%204%2010C4%205.58172%207.58172%202%2012%202C16.4183%202%2020%205.58172%2020%2010Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2011C12.5523%2011%2013%2010.5523%2013%2010C13%209.44772%2012.5523%209%2012%209C11.4477%209%2011%209.44772%2011%2010C11%2010.5523%2011.4477%2011%2012%2011Z%22%20fill%3D%22currentColor%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /></_Builtin.Block></_Component> : null;
}