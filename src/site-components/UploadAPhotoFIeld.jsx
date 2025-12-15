"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function UploadAPhotoFIeld(
    {
        as: _Component = _Builtin.Block,
        fullNameFormFieldId,
        fullNameFormFieldVisibility = true,
        fullNameFormIconVisibility = true,
        uploadPhotoUploadPhotoRuntimeProps = {},
        uploadPhotoUploadPhotoSlot,
        uploadPhotoFormInputLabel = "Upload a Photo"
    }
) {
    return fullNameFormFieldVisibility ? <_Component
        className="form_input-background"
        tag="div"
        id={fullNameFormFieldId}
        {...uploadPhotoUploadPhotoRuntimeProps}>{uploadPhotoUploadPhotoSlot ?? <_Builtin.Block className="form-input_image-upload" tag="div"><_Builtin.FormBlockLabel className="input_label is-upload" htmlFor="Phone">{uploadPhotoFormInputLabel}</_Builtin.FormBlockLabel><_Builtin.Block className="upload_inner-border" tag="div">{fullNameFormIconVisibility ? <_Builtin.HtmlEmbed
                    className="icon-pictures"
                    value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%22100px%22%20height%3D%22100px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M21%207.6V20.4C21%2020.7314%2020.7314%2021%2020.4%2021H7.6C7.26863%2021%207%2020.7314%207%2020.4V7.6C7%207.26863%207.26863%207%207.6%207H20.4C20.7314%207%2021%207.26863%2021%207.6Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M18%204H4.6C4.26863%204%204%204.26863%204%204.6V18%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M7%2016.8L12.4444%2015L21%2018%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M16.5%2013C15.6716%2013%2015%2012.3284%2015%2011.5C15%2010.6716%2015.6716%2010%2016.5%2010C17.3284%2010%2018%2010.6716%2018%2011.5C18%2012.3284%2017.3284%2013%2016.5%2013Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}</_Builtin.Block></_Builtin.Block>}</_Component> : null;
}