"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{"e-293":{"id":"e-293","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-83","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-294"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".form-input_image-upload.image-2","originalId":"bb0cab24-5249-5afd-b74c-7f7876fd0e23","appliesTo":"CLASS"},"targets":[{"selector":".form-input_image-upload.image-2","originalId":"bb0cab24-5249-5afd-b74c-7f7876fd0e23","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1766036690280},"e-295":{"id":"e-295","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-76","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-296"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".form-input_image-upload.image-1","originalId":"bb0cab24-5249-5afd-b74c-7f7876fd0e1c","appliesTo":"CLASS"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1766038783120}},"actionLists":{"a-83":{"id":"a-83","title":"UploadFile Image 2","actionItemGroups":[{"actionItems":[{"id":"a-83-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","id":"bb0cab24-5249-5afd-b74c-7f7876fd0e20"},"value":0,"unit":""}},{"id":"a-83-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"bb0cab24-5249-5afd-b74c-7f7876fd0e27"},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-83-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":5000,"target":{"id":"bb0cab24-5249-5afd-b74c-7f7876fd0e27"},"value":0.45,"unit":""}},{"id":"a-83-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":5000,"easing":"","duration":10000,"target":{"id":"bb0cab24-5249-5afd-b74c-7f7876fd0e27"},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1765940061742},"a-76":{"id":"a-76","title":"UploadFile Image 1","actionItemGroups":[{"actionItems":[{"id":"a-76-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","id":"bb0cab24-5249-5afd-b74c-7f7876fd0e20"},"value":0,"unit":""}},{"id":"a-76-n-10","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"bb0cab24-5249-5afd-b74c-7f7876fd0e27"},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-76-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":5000,"target":{"id":"bb0cab24-5249-5afd-b74c-7f7876fd0e27"},"value":0.45,"unit":""}},{"id":"a-76-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":5000,"easing":"","duration":10000,"target":{"id":"bb0cab24-5249-5afd-b74c-7f7876fd0e27"},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1765940061742}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function UploadFormFieldImage(
    {
        as: _Component = _Builtin.Block,
        photo1UploadFIeldIconVisibility = true,
        photo1UploadFIeldImageUploadRuntimeProps = {},
        photo1UploadFIeldImageUploadSlot
    }
) {
    _interactions.useInteractions(_interactionsData);

    return (
        <_Component
            className="form_input-background is-timeline"
            tag="div"
            {...photo1UploadFIeldImageUploadRuntimeProps}>{photo1UploadFIeldImageUploadSlot ?? <_Builtin.Block className="form-input_image-upload" tag="div"><_Builtin.HtmlEmbed
                    className="code-embed_upload"
                    value="%3Cdiv%20data-timeline-image-upload%3D%22photo1%22%20%0A%20%20%20%20%20data-upload-label%3D%22Upload%20First%20Photo%22%0A%20%20%20%20%20data-max-size-mb%3D%2210%22%3E%0A%3C%2Fdiv%3E" /></_Builtin.Block>}</_Component>
    );
}