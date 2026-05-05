"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Span from "../webflow_modules/Basic/components/Span";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-159":{"id":"e-159","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-178"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"42559019-68e5-39f0-820b-942110e60484","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"42559019-68e5-39f0-820b-942110e60484","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764767973748},"e-160":{"id":"e-160","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-177"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"42559019-68e5-39f0-820b-942110e60484","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"42559019-68e5-39f0-820b-942110e60484","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764767973748},"e-161":{"id":"e-161","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-162"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".on-click_show","originalId":"6922263caf3f8676a995b64f|97fa6ebd-a714-35af-19e4-9e414fc7f178","appliesTo":"CLASS"},"targets":[{"selector":".on-click_show","originalId":"6922263caf3f8676a995b64f|97fa6ebd-a714-35af-19e4-9e414fc7f178","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764768029167},"e-162":{"id":"e-162","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-161"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".on-click_show","originalId":"6922263caf3f8676a995b64f|97fa6ebd-a714-35af-19e4-9e414fc7f178","appliesTo":"CLASS"},"targets":[{"selector":".on-click_show","originalId":"6922263caf3f8676a995b64f|97fa6ebd-a714-35af-19e4-9e414fc7f178","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764768029167},"e-163":{"id":"e-163","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-164"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".memory-wall_days-count","originalId":"42559019-68e5-39f0-820b-942110e60485","appliesTo":"CLASS"},"targets":[{"selector":".memory-wall_days-count","originalId":"42559019-68e5-39f0-820b-942110e60485","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764768705219},"e-164":{"id":"e-164","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-163"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".memory-wall_days-count","originalId":"42559019-68e5-39f0-820b-942110e60485","appliesTo":"CLASS"},"targets":[{"selector":".memory-wall_days-count","originalId":"42559019-68e5-39f0-820b-942110e60485","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764768705220},"e-167":{"id":"e-167","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-168"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".memory-wall_move-rotate","originalId":"692f7cd9818359e904b9f167|ec37340d-8dcb-089d-d9e3-14fd58250420","appliesTo":"CLASS"},"targets":[{"selector":".memory-wall_move-rotate","originalId":"692f7cd9818359e904b9f167|ec37340d-8dcb-089d-d9e3-14fd58250420","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764772390272},"e-168":{"id":"e-168","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-167"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".memory-wall_move-rotate","originalId":"692f7cd9818359e904b9f167|ec37340d-8dcb-089d-d9e3-14fd58250420","appliesTo":"CLASS"},"targets":[{"selector":".memory-wall_move-rotate","originalId":"692f7cd9818359e904b9f167|ec37340d-8dcb-089d-d9e3-14fd58250420","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764772390273},"e-211":{"id":"e-211","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-212"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".memory-wall_days-count","originalId":"6930921aaa3df371b6c0a733|5f0970dd-9635-c226-22e9-d11f7f95d4df","appliesTo":"CLASS"},"targets":[{"selector":".memory-wall_days-count","originalId":"6930921aaa3df371b6c0a733|5f0970dd-9635-c226-22e9-d11f7f95d4df","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764802385538},"e-212":{"id":"e-212","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-211"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".memory-wall_days-count","originalId":"6930921aaa3df371b6c0a733|5f0970dd-9635-c226-22e9-d11f7f95d4df","appliesTo":"CLASS"},"targets":[{"selector":".memory-wall_days-count","originalId":"6930921aaa3df371b6c0a733|5f0970dd-9635-c226-22e9-d11f7f95d4df","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764802385538},"e-223":{"id":"e-223","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-224"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"72a65641-083c-d3d7-a5f1-54689110319e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"72a65641-083c-d3d7-a5f1-54689110319e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764956763749},"e-227":{"id":"e-227","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-232"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".memory-wall_days-count","originalId":"5dfec0d9-8b9b-bb30-cc8e-6ceb358f312a","appliesTo":"CLASS"},"targets":[{"selector":".memory-wall_days-count","originalId":"5dfec0d9-8b9b-bb30-cc8e-6ceb358f312a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764785782879},"e-232":{"id":"e-232","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-227"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".memory-wall_days-count","originalId":"5dfec0d9-8b9b-bb30-cc8e-6ceb358f312a","appliesTo":"CLASS"},"targets":[{"selector":".memory-wall_days-count","originalId":"5dfec0d9-8b9b-bb30-cc8e-6ceb358f312a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764785782879},"e-317":{"id":"e-317","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-318"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"37b1bdf8-4e3b-474f-9f65-e34c2ab39aa2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"37b1bdf8-4e3b-474f-9f65-e34c2ab39aa2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1766139142196},"e-318":{"id":"e-318","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-317"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"37b1bdf8-4e3b-474f-9f65-e34c2ab39aa2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"37b1bdf8-4e3b-474f-9f65-e34c2ab39aa2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1766139142196},"e-327":{"id":"e-327","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-328"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".guestbook_message-card","originalId":"6934a94672f0038d25a76119|761d9fcb-6ef5-ce92-4cff-8ffebcaff6b0","appliesTo":"CLASS"},"targets":[{"selector":".guestbook_message-card","originalId":"6934a94672f0038d25a76119|761d9fcb-6ef5-ce92-4cff-8ffebcaff6b0","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1766142493625},"e-329":{"id":"e-329","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-330"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".guestbook_message-wrapper.is-close","originalId":"6934a94672f0038d25a76119|761d9fcb-6ef5-ce92-4cff-8ffebcaff6b8","appliesTo":"CLASS"},"targets":[{"selector":".guestbook_message-wrapper.is-close","originalId":"6934a94672f0038d25a76119|761d9fcb-6ef5-ce92-4cff-8ffebcaff6b8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1766142873412}},"actionLists":{"a-39":{"id":"a-39","title":"Show Card [ON CLICK]","actionItemGroups":[{"actionItems":[{"id":"a-39-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"42559019-68e5-39f0-820b-942110e60484"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-39-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":10,"target":{"useEventTarget":true,"id":"42559019-68e5-39f0-820b-942110e60484"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1764774729585},"a-40":{"id":"a-40","title":"Hide Card [ON CLICK]","actionItemGroups":[{"actionItems":[{"id":"a-40-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":10,"target":{"useEventTarget":"PARENT","selector":".guestbook_message-card","selectorGuids":["c2644b77-efda-82dc-2158-d0a0f3cb02fa"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1764774815444},"a-37":{"id":"a-37","title":"Show Message [ON_CLICK]","actionItemGroups":[{"actionItems":[{"id":"a-37-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".guestbook_message-card","selectorGuids":["c2644b77-efda-82dc-2158-d0a0f3cb02fa"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1764768046901},"a-38":{"id":"a-38","title":"Show Message [OFF CLICK]","actionItemGroups":[{"actionItems":[{"id":"a-38-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeOut","duration":1500,"target":{"selector":".memory-wall_botom-content","selectorGuids":["f302f035-1b12-87ab-fa79-ab1aa4fa0949"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}},{"id":"a-38-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".memory-wall_bottom-paragraph","selectorGuids":["1881fdc8-69bb-9b99-b797-06a4260f0d8e"]},"value":0,"unit":""}},{"id":"a-38-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".memory-wall_heading-wrapper","selectorGuids":["a11dfe58-9e14-7a84-d511-8b6e5593c092"]},"value":1,"unit":""}},{"id":"a-38-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":1000,"target":{"selector":".guestbook_month-year","selectorGuids":["1f9cb317-b6af-0acc-34ef-7423da8921cf"]},"xValue":-35,"yValue":130,"xUnit":"px","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-38-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":1500,"target":{"selector":".guestbook_month-year","selectorGuids":["1f9cb317-b6af-0acc-34ef-7423da8921cf"]},"zValue":-90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1764768046901},"a-53":{"id":"a-53","title":"Show Message [ON_CLICK]","actionItemGroups":[{"actionItems":[{"id":"a-53-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".guestbook_message-wrapper","selectorGuids":["cd68b341-d8d2-6f1f-a8dc-73b76df0959b"]},"value":0,"unit":""}},{"id":"a-53-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":1500,"target":{"useEventTarget":true,"id":"3689d08e-4566-5cce-acd7-70fe0543160f"},"value":0,"unit":""}},{"id":"a-53-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".guesttbook_button-view-detail","selectorGuids":["6eb2702d-f4ab-1073-047b-4e42e6a6798c"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-53-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"3689d08e-4566-5cce-acd7-70fe0543160f"},"value":1,"unit":""}},{"id":"a-53-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".guestbook_message-wrapper","selectorGuids":["cd68b341-d8d2-6f1f-a8dc-73b76df0959b"]},"value":1,"unit":""}},{"id":"a-53-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":750,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".guesttbook_button-view-detail","selectorGuids":["6eb2702d-f4ab-1073-047b-4e42e6a6798c"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1764768046901},"a-54":{"id":"a-54","title":"Show Message [OFF CLICK]","actionItemGroups":[{"actionItems":[{"id":"a-54-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"3689d08e-4566-5cce-acd7-70fe0543160f"},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1764768046901}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function GuestbookCard({
  cardDetailsButtonButtonText = "close",
  cardDetailsButtonCardDetailButtonSlot = "",
  cardDetailsButtonRuntimeProps = {},
  guestbookDateDateLabel = "Added",
  guestbookDateId = "",
  guestbookDateRuntimeProps = {},
  guestbookDateVisibility = true,
  howWeMetHeadingText = (
    <>
      {"how we met"}
      <br />
    </>
  ),
  howWeMetHowWeMetSlot = "",
  howWeMetHowWeMetText = "We met a Omni Financial",
  howWeMetRuntimeProps = {},
  howWeMetVisibility = true,
  locationIconVisibility = true,
  locationId = "",
  locationLocationText = (
    <>
      {"Boulder, CO"}
      <br />
    </>
  ),
  locationRuntimeProps = {},
  locationVisibility = true,
  mainComponentColorVariant = "Warm Sandston",
  mainComponentId = "",
  mainComponentVisibility = true,
  messageCardMessageCardSlot = "",
  messageCardRuntimeProps = {},
  messageHeadingText = "message",
  messageMessageSlot = "",
  messageMessageText = "You' be missed. I'll always remember your warm smile",
  messageRuntimeProps = {},
  messageVisibility = true,
  nameFullName = "first name last name",
  tag2Id = "",
  tag2RuntimeProps = {},
  tag2Tag2Slot = "",
  tag2Text = "co-worker",
  tag2Visibility = true,
  viewMessageButtonArrowIconVisibility = true,
  viewMessageButtonButtonText = (
    <>
      {"View Message"}
      <br />
    </>
  ),
  viewMessageButtonRuntimeProps = {},
  viewMessageButtonSlot = "",
  viewMessageButtonVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    "Warm Sandston": "",
    "Slate Blue": "w-variant-acd405c7-f8cf-c479-8d20-4182289c84fc",
    "Slate Navy": "w-variant-db85ccea-8578-785e-3cac-50eea47c37cb",
    "Ocean Teal": "w-variant-3d29cd7f-708c-35e7-f839-44ba41e87c40",
    "Rustwood Red": "w-variant-1382dac3-79bd-15c9-48bb-2fad64084561",
    "Rose Clay": "w-variant-f870ba70-a76c-b3e4-5bee-5dfd8572c825",
  };

  const _activeStyleVariant = _styleVariantMap[mainComponentColorVariant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {mainComponentVisibility ? (
        <Block
          className={`component-guestbook-card component_guesbook-card ${_activeStyleVariant}`}
          data-w-id={"72a65641-083c-d3d7-a5f1-54689110319e"}
          id={"w-node-_72a65641-083c-d3d7-a5f1-54689110319e-9110319e"}
          tag={"div"}
        >
          <Block
            className={`background_color-variant ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Block
              className={`guestbook_top-section ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`guestbook_card-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                {guestbookDateVisibility ? (
                  <Block
                    className={`guestbook_date_wrapper ${_activeStyleVariant}`}
                    id={guestbookDateId}
                    tag={"div"}
                  >
                    <Block
                      className={`transparent-outline ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`guestbook_date-label ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        {guestbookDateDateLabel}
                      </Block>
                    </Block>
                    <Block
                      className={`outter-outline ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`guestbook_date ${_activeStyleVariant}`}
                        tag={"div"}
                        {...guestbookDateRuntimeProps}
                      >
                        <Span
                          className={`guestbook_month-year ${_activeStyleVariant}`}
                        >
                          {"November 1978"}
                        </Span>
                        <br />
                      </Block>
                    </Block>
                  </Block>
                ) : null}
                <Block
                  className={`guestbook_name-wrapper ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`guestbook_item-wrapper ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {locationVisibility ? (
                      <Block
                        className={`guestbook_location ${_activeStyleVariant}`}
                        id={locationId}
                        tag={"div"}
                      >
                        <Block
                          className={`guestbook_location-item ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          {locationIconVisibility ? (
                            <HtmlEmbed
                              className={`icon location-icon ${_activeStyleVariant}`}
                              content={""}
                              value={
                                "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M20%2010C20%2014.4183%2012%2022%2012%2022C12%2022%204%2014.4183%204%2010C4%205.58172%207.58172%202%2012%202C16.4183%202%2020%205.58172%2020%2010Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2011C12.5523%2011%2013%2010.5523%2013%2010C13%209.44772%2012.5523%209%2012%209C11.4477%209%2011%209.44772%2011%2010C11%2010.5523%2011.4477%2011%2012%2011Z%22%20fill%3D%22currentColor%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                              }
                            />
                          ) : null}
                          <Block
                            className={`guesbook_location component_color ${_activeStyleVariant}`}
                            tag={"div"}
                            {...locationRuntimeProps}
                          >
                            {locationLocationText}
                          </Block>
                        </Block>
                      </Block>
                    ) : null}
                  </Block>
                  <Block
                    className={`guestbook_item-wrapper is-full-name ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Heading
                      className={`guestbook_name ${_activeStyleVariant}`}
                      tag={"h3"}
                    >
                      {nameFullName}
                    </Heading>
                  </Block>
                </Block>
                <Block
                  className={`guestroom_tags-wrapper ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`relationship-wrapper ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={`guestbook_first-meeting ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      {"they were"}
                    </Block>
                    <Block
                      className={`guestbook_buton-group-wrapper ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`bg-color-compoent ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        {tag2Tag2Slot ??
                          (tag2Visibility ? (
                            <Block
                              className={`guestbook_relationship-tag ${_activeStyleVariant}`}
                              fs-list-field={"relationship"}
                              id={tag2Id}
                              tag={"div"}
                              {...tag2RuntimeProps}
                            >
                              {tag2Text}
                            </Block>
                          ) : null)}
                      </Block>
                    </Block>
                  </Block>
                  {viewMessageButtonVisibility ? (
                    <Block
                      className={`guestbook_view-message ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`guestbook_message-item ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        <Block
                          className={`guesbook_view-message ${_activeStyleVariant}`}
                          tag={"div"}
                          {...viewMessageButtonRuntimeProps}
                        >
                          {viewMessageButtonSlot ?? viewMessageButtonButtonText}
                        </Block>
                        {viewMessageButtonArrowIconVisibility ? (
                          <HtmlEmbed
                            className={`icon arrow-icon ${_activeStyleVariant}`}
                            content={""}
                            value={
                              "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M8%2012H16M16%2012L12.5%208.5M16%2012L12.5%2015.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2022C17.5228%2022%2022%2017.5228%2022%2012C22%206.47715%2017.5228%202%2012%202C6.47715%202%202%206.47715%202%2012C2%2017.5228%206.47715%2022%2012%2022Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                            }
                          />
                        ) : null}
                      </Block>
                    </Block>
                  ) : null}
                </Block>
              </Block>
            </Block>
          </Block>
          <Block
            className={`guestbook_message-card reverse-side ${_activeStyleVariant}`}
            data-w-id={"37b1bdf8-4e3b-474f-9f65-e34c2ab39aa2"}
            tag={"div"}
            {...messageCardRuntimeProps}
          >
            {messageCardMessageCardSlot ?? (
              <>
                {messageVisibility ? (
                  <Block
                    className={`guestbook_message-wrapper is-backside margin-top_small w-clearfix ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Paragraph
                      className={`guestbook_message-headline ${_activeStyleVariant}`}
                    >
                      {howWeMetHeadingText}
                    </Paragraph>
                    <Block
                      className={`guestbook_message-text ${_activeStyleVariant}`}
                      tag={"div"}
                      {...howWeMetRuntimeProps}
                    >
                      {howWeMetHowWeMetSlot ?? howWeMetHowWeMetText}
                    </Block>
                  </Block>
                ) : null}
                {howWeMetVisibility ? (
                  <Block
                    className={`guestbook_message-wrapper w-clearfix ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Paragraph
                      className={`guestbook_message-headline ${_activeStyleVariant}`}
                    >
                      {messageHeadingText}
                    </Paragraph>
                    <Block
                      className={`guestbook_message-text ${_activeStyleVariant}`}
                      tag={"div"}
                      {...messageRuntimeProps}
                    >
                      {messageMessageSlot ?? messageMessageText}
                    </Block>
                  </Block>
                ) : null}
                <Block
                  className={`guestbook_message-wrapper is-close ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`guesttbook_button-view-detail tag ${_activeStyleVariant}`}
                    tag={"div"}
                    {...cardDetailsButtonRuntimeProps}
                  >
                    {cardDetailsButtonCardDetailButtonSlot ??
                      cardDetailsButtonButtonText}
                  </Block>
                </Block>
              </>
            )}
          </Block>
        </Block>
      ) : null}
    </div>
  );
}
