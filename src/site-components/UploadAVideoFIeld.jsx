"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function UploadAVideoFIeld(
    {
        as: _Component = _Builtin.Block,
        fullNameFormFieldId,
        fullNameFormFieldVisibility = true,
        fullNameFormIconVisibility = true,
        uploadPhotoUploadPhotoRuntimeProps = {},
        uploadPhotoUploadPhotoSlot,
        uploadPhotoFormInputLabel = "Upload a Photo",
        uploadVideoFormInputLabel = "Upload a Video"
    }
) {
    return fullNameFormFieldVisibility ? <_Component
        className="form_input-background"
        tag="div"
        id={fullNameFormFieldId}
        {...uploadPhotoUploadPhotoRuntimeProps}>{uploadPhotoUploadPhotoSlot ?? <_Builtin.Block className="form-input is-upload" tag="div"><_Builtin.FormBlockLabel className="input_label is-upload" htmlFor="Phone">{uploadVideoFormInputLabel}</_Builtin.FormBlockLabel><_Builtin.Block className="upload_inner-border" tag="div">{fullNameFormIconVisibility ? <_Builtin.HtmlEmbed
                    className="icon-video"
                    value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%22100px%22%20height%3D%22100px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M21%203.6V20.4C21%2020.7314%2020.7314%2021%2020.4%2021H3.6C3.26863%2021%203%2020.7314%203%2020.4V3.6C3%203.26863%203.26863%203%203.6%203H20.4C20.7314%203%2021%203.26863%2021%203.6Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M9.89768%208.51296C9.49769%208.28439%209%208.57321%209%209.03391V14.9661C9%2015.4268%209.49769%2015.7156%209.89768%2015.487L15.0883%2012.5209C15.4914%2012.2906%2015.4914%2011.7094%2015.0883%2011.4791L9.89768%208.51296Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}</_Builtin.Block></_Builtin.Block>}</_Component> : null;
}