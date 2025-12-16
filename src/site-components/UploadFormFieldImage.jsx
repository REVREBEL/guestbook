"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function UploadFormFieldImage(
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
            {...photo1UploadFIeldImageUploadRuntimeProps}>{photo1UploadFIeldImageUploadSlot ?? <_Builtin.Block className="form-input_image-upload" tag="div"><_Builtin.HtmlEmbed
                    className="code-embed_upload"
                    value="%3Cdiv%20data-timeline-image-upload%3D%22photo1%22%20%0A%20%20%20%20%20data-upload-label%3D%22Upload%20First%20Photo%22%0A%20%20%20%20%20data-max-size-mb%3D%2210%22%3E%0A%3C%2Fdiv%3E" /></_Builtin.Block>}</_Component>
    );
}