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

export function UploadAPhotoFIeld({
  fullNameFormFieldId = "",
  fullNameFormFieldVisibility = true,
  fullNameFormIconVisibility = true,
  uploadPhotoFormInputLabel = "Upload a Photo",
  uploadPhotoUploadPhotoRuntimeProps = {},
  uploadPhotoUploadPhotoSlot = "",
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
            <Block className={"form-input_image-upload"} tag={"div"}>
              <FormBlockLabel
                className={"input_label is-upload"}
                htmlFor={"Phone"}
              >
                {uploadPhotoFormInputLabel}
              </FormBlockLabel>
              <Block className={"upload_inner-border"} tag={"div"}>
                {fullNameFormIconVisibility ? (
                  <HtmlEmbed
                    className={"icon-pictures"}
                    content={""}
                    value={
                      "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%22100px%22%20height%3D%22100px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M21%207.6V20.4C21%2020.7314%2020.7314%2021%2020.4%2021H7.6C7.26863%2021%207%2020.7314%207%2020.4V7.6C7%207.26863%207.26863%207%207.6%207H20.4C20.7314%207%2021%207.26863%2021%207.6Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M18%204H4.6C4.26863%204%204%204.26863%204%204.6V18%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M7%2016.8L12.4444%2015L21%2018%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M16.5%2013C15.6716%2013%2015%2012.3284%2015%2011.5C15%2010.6716%2015.6716%2010%2016.5%2010C17.3284%2010%2018%2010.6716%2018%2011.5C18%2012.3284%2017.3284%2013%2016.5%2013Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
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
