"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-297":{"id":"e-297","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-76","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-298"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".form_input-background.is-timeline","originalId":"7eeb6230-e061-5f09-8f7c-e6b351a54431","appliesTo":"CLASS"},"targets":[{"selector":".form_input-background.is-timeline","originalId":"7eeb6230-e061-5f09-8f7c-e6b351a54431","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1766124540667}},"actionLists":{"a-76":{"id":"a-76","title":"UploadFile Image 1","actionItemGroups":[{"actionItems":[{"id":"a-76-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".uploader-animation.image-1","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019","b82dd088-706a-a5fb-9323-949055bb2ff3"]},"value":0,"unit":""}},{"id":"a-76-n-10","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".uploader-animation.image-1","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019","b82dd088-706a-a5fb-9323-949055bb2ff3"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-76-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":5000,"target":{"useEventTarget":"SIBLINGS","selector":".uploader-animation.image-1","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019","b82dd088-706a-a5fb-9323-949055bb2ff3"]},"value":0.45,"unit":""}},{"id":"a-76-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":5000,"easing":"","duration":10000,"target":{"useEventTarget":"SIBLINGS","selector":".uploader-animation.image-1","selectorGuids":["ecb27e2e-d6f1-61cb-231b-6bef41cb0019","b82dd088-706a-a5fb-9323-949055bb2ff3"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1765940061742}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function UploadFormFieldImage({
  photo1UploadFIeldIconVisibility = true,
  photo1UploadFIeldImageUploadRuntimeProps = {},
  photo1UploadFIeldImageUploadSlot = "",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={"form_input-background is-timeline"}
        tag={"div"}
        {...photo1UploadFIeldImageUploadRuntimeProps}
      >
        {photo1UploadFIeldImageUploadSlot ?? (
          <Block className={"form-input_image-upload"} tag={"div"}>
            <HtmlEmbed
              className={"code-embed_upload"}
              content={""}
              value={
                "%3Cdiv%20data-timeline-image-upload%3D%22photo1%22%20%0A%20%20%20%20%20data-upload-label%3D%22Upload%20First%20Photo%22%0A%20%20%20%20%20data-max-size-mb%3D%2210%22%3E%0A%3C%2Fdiv%3E"
              }
            />
          </Block>
        )}
      </Block>
    </div>
  );
}
