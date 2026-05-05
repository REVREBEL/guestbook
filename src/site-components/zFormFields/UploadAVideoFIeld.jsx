"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import FormBlockLabel from "../webflow_modules/Form/components/FormBlockLabel";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-297":{"id":"e-297","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-76","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-298"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".form_input-background.is-timeline","originalId":"7eeb6230-e061-5f09-8f7c-e6b351a54431","appliesTo":"CLASS"},"targets":[{"selector":".form_input-background.is-timeline","originalId":"7eeb6230-e061-5f09-8f7c-e6b351a54431","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1766124540667}},"actionLists":{"a-76":{"id":"a-76","title":"UploadFile Image 1","actionItemGroups":[{"actionItems":[{"id":"a-76-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".uploader-animation.image-1","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019","b82dd088-706a-a5fb-9323-949055bb2ff3"]},"value":0,"unit":""}},{"id":"a-76-n-10","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".uploader-animation.image-1","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019","b82dd088-706a-a5fb-9323-949055bb2ff3"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-76-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":5000,"target":{"useEventTarget":"SIBLINGS","selector":".uploader-animation.image-1","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019","b82dd088-706a-a5fb-9323-949055bb2ff3"]},"value":0.45,"unit":""}},{"id":"a-76-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":5000,"easing":"","duration":10000,"target":{"useEventTarget":"SIBLINGS","selector":".uploader-animation.image-1","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019","b82dd088-706a-a5fb-9323-949055bb2ff3"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1765940061742}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function UploadAVideoFIeld({
  fullNameFormFieldId = "",
  fullNameFormFieldVisibility = true,
  fullNameFormIconVisibility = true,
  uploadPhotoFormInputLabel = "Upload a Photo",
  uploadPhotoUploadPhotoRuntimeProps = {},
  uploadPhotoUploadPhotoSlot = "",
  uploadVideoFormInputLabel = "Upload a Video",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {fullNameFormFieldVisibility ? (
        <Block
          className={"form_input-background"}
          id={fullNameFormFieldId}
          tag={"div"}
          {...uploadPhotoUploadPhotoRuntimeProps}
        >
          {uploadPhotoUploadPhotoSlot ?? (
            <Block className={"form-input is-upload"} tag={"div"}>
              <FormBlockLabel
                className={"input_label is-upload"}
                htmlFor={"Phone"}
              >
                {uploadVideoFormInputLabel}
              </FormBlockLabel>
              <Block className={"upload_inner-border"} tag={"div"}>
                {fullNameFormIconVisibility ? (
                  <HtmlEmbed
                    className={"icon-video"}
                    content={""}
                    value={
                      "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%22100px%22%20height%3D%22100px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M21%203.6V20.4C21%2020.7314%2020.7314%2021%2020.4%2021H3.6C3.26863%2021%203%2020.7314%203%2020.4V3.6C3%203.26863%203.26863%203%203.6%203H20.4C20.7314%203%2021%203.26863%2021%203.6Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M9.89768%208.51296C9.49769%208.28439%209%208.57321%209%209.03391V14.9661C9%2015.4268%209.49769%2015.7156%209.89768%2015.487L15.0883%2012.5209C15.4914%2012.2906%2015.4914%2011.7094%2015.0883%2011.4791L9.89768%208.51296Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                    }
                  />
                ) : null}
              </Block>
            </Block>
          )}
        </Block>
      ) : null}
    </div>
  );
}
