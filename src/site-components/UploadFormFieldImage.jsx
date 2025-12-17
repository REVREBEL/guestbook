"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{"e-265":{"id":"e-265","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-76","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-266"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".uploader-animation.image-1","originalId":"41952196-b944-3ee5-d8b1-c78793580e2f","appliesTo":"CLASS"},"targets":[{"selector":".uploader-animation.image-1","originalId":"41952196-b944-3ee5-d8b1-c78793580e2f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1765942279360},"e-267":{"id":"e-267","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-76","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-268"}},"mediaQueries":["main","small","tiny"],"target":{"selector":".uploader-animation.image-2","originalId":"8432e584-73f2-4805-ccca-e48e1cdc08b7","appliesTo":"CLASS"},"targets":[{"selector":".uploader-animation.image-2","originalId":"8432e584-73f2-4805-ccca-e48e1cdc08b7","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1765959500973}},"actionLists":{"a-76":{"id":"a-76","title":"UploadFile","actionItemGroups":[{"actionItems":[{"id":"a-76-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".uploader-animation","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019"]},"value":0,"unit":""}},{"id":"a-76-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":2000,"target":{"useEventTarget":"SIBLINGS","selector":".form_input-background.is-timeline","selectorGuids":["acc27bff-1688-b271-4f06-b20e620f10aa","68e4f708-7841-9fca-c992-0ba81af5574b"]},"value":1,"unit":""}},{"id":"a-76-n-10","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".uploader-animation","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-76-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":10000,"target":{"selector":".uploader-animation","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-76-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":5000,"target":{"selector":".uploader-animation","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019"]},"value":0.45,"unit":""}},{"id":"a-76-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":"easeOut","duration":2000,"target":{"useEventTarget":"SIBLINGS","selector":".form_input-background.is-timeline","selectorGuids":["acc27bff-1688-b271-4f06-b20e620f10aa","68e4f708-7841-9fca-c992-0ba81af5574b"]},"value":0.5,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1765940061742}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
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