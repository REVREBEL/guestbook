"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{"e-265":{"id":"e-265","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-76","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-266"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".uploader-animation.image-1","originalId":"41952196-b944-3ee5-d8b1-c78793580e2f","appliesTo":"CLASS"},"targets":[{"selector":".uploader-animation.image-1","originalId":"41952196-b944-3ee5-d8b1-c78793580e2f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1765942279360},"e-267":{"id":"e-267","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-76","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-268"}},"mediaQueries":["main","small","tiny"],"target":{"selector":".uploader-animation.image-2","originalId":"8432e584-73f2-4805-ccca-e48e1cdc08b7","appliesTo":"CLASS"},"targets":[{"selector":".uploader-animation.image-2","originalId":"8432e584-73f2-4805-ccca-e48e1cdc08b7","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1765959500973}},"actionLists":{"a-76":{"id":"a-76","title":"UploadFile","actionItemGroups":[{"actionItems":[{"id":"a-76-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".uploader-animation","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019"]},"value":0,"unit":""}},{"id":"a-76-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":2000,"target":{"useEventTarget":"SIBLINGS","selector":".form_input-background.is-timeline","selectorGuids":["acc27bff-1688-b271-4f06-b20e620f10aa","68e4f708-7841-9fca-c992-0ba81af5574b"]},"value":1,"unit":""}},{"id":"a-76-n-10","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".uploader-animation","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-76-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":10000,"target":{"selector":".uploader-animation","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-76-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":5000,"target":{"selector":".uploader-animation","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019"]},"value":0.45,"unit":""}},{"id":"a-76-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":"easeOut","duration":2000,"target":{"useEventTarget":"SIBLINGS","selector":".form_input-background.is-timeline","selectorGuids":["acc27bff-1688-b271-4f06-b20e620f10aa","68e4f708-7841-9fca-c992-0ba81af5574b"]},"value":0.5,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1765940061742}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

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
    _interactions.useInteractions(_interactionsData);

    return fullNameFormFieldVisibility ? <_Component
        className="form_input-background"
        tag="div"
        id={fullNameFormFieldId}
        {...uploadPhotoUploadPhotoRuntimeProps}>{uploadPhotoUploadPhotoSlot ?? <_Builtin.Block className="form-input is-upload" tag="div"><_Builtin.FormBlockLabel className="input_label is-upload" htmlFor="Phone">{uploadVideoFormInputLabel}</_Builtin.FormBlockLabel><_Builtin.Block className="upload_inner-border" tag="div">{fullNameFormIconVisibility ? <_Builtin.HtmlEmbed
                    className="icon-video"
                    value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%22100px%22%20height%3D%22100px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M21%203.6V20.4C21%2020.7314%2020.7314%2021%2020.4%2021H3.6C3.26863%2021%203%2020.7314%203%2020.4V3.6C3%203.26863%203.26863%203%203.6%203H20.4C20.7314%203%2021%203.26863%2021%203.6Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M9.89768%208.51296C9.49769%208.28439%209%208.57321%209%209.03391V14.9661C9%2015.4268%209.49769%2015.7156%209.89768%2015.487L15.0883%2012.5209C15.4914%2012.2906%2015.4914%2011.7094%2015.0883%2011.4791L9.89768%208.51296Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}</_Builtin.Block></_Builtin.Block>}</_Component> : null;
}