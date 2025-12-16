"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function UploadFormField(
    {
        as: _Component = _Builtin.Block,
        photo1UploadFIeldIconVisibility = true,
        photo1UploadFIeldImageUploadRuntimeProps = {},
        photo1UploadFIeldImageUploadSlot
    }
) {
    return (
        <_Component
            className="form_input-background is-timeline"
            tag="div"
            {...photo1UploadFIeldImageUploadRuntimeProps}>{photo1UploadFIeldImageUploadSlot ?? <><_Builtin.Block className="form-input_image-upload" tag="div"><_Builtin.FormBlockLabel className="input_label is-upload" htmlFor="Phone">{"Photo 1"}</_Builtin.FormBlockLabel><_Builtin.Block className="upload_inner-border" tag="div">{photo1UploadFIeldIconVisibility ? <_Builtin.HtmlEmbed
                            className="icon-pictures"
                            value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2265px%22%20height%3D%2265px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20id%3D%22photo-%22%20data-id%3D%22photo-1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M13%2021H3.6C3.26863%2021%203%2020.7314%203%2020.4V3.6C3%203.26863%203.26863%203%203.6%203H20.4C20.7314%203%2021%203.26863%2021%203.6V13%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M3%2016L10%2013L15.5%2015.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M16%2010C14.8954%2010%2014%209.10457%2014%208C14%206.89543%2014.8954%206%2016%206C17.1046%206%2018%206.89543%2018%208C18%209.10457%2017.1046%2010%2016%2010Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M16%2019H19M22%2019H19M19%2019V16M19%2019V22%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}</_Builtin.Block></_Builtin.Block><_Builtin.HtmlEmbed
                    className="code-embed_upload"
                    value="%3Cdiv%20data-timeline-image-upload%3D%22photo1%22%20%0A%20%20%20%20%20data-upload-label%3D%22Upload%20First%20Photo%22%0A%20%20%20%20%20data-max-size-mb%3D%2210%22%3E%0A%3C%2Fdiv%3E" /></>}</_Component>
    );
}