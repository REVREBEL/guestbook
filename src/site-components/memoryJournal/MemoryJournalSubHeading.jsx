"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import { MemoryJournalFilterTagsSlots } from "./MemoryJournalFilterTagsSlots";

export function MemoryJournalSubHeading({
  buttonButtonRuntimeProps = {},
  buttonButtonSlot = "",
  buttonButtonSlotId = "",
  componentComponentId = "",
  componentComponentVisibility = true,
  filterTagsFilterTagsId = "",
  filterTagsFilterTagsRuntimeProps = {},
  filterTagsFilterTagsSlot = "",
  filterTagsFilterTagsVisibility = true,
  memoryJournalMemoryJournalHeadingText = "Memory Journal",
  memoryJournalMemoryJournalParagr = "Share your precious memories",
  memoryJournalMemoryJournalSubHeadingRuntimeProps = {},
  memoryJournalMemoryJournalSubHeadingSlot = "",
  memoryJournalMemoryJournalSubHeadingTag = "h3",
  memoryJournalMemoryJournalSubHeadingText = "Share Your Story",
  memoryJournalMemoryWallHeadingRuntimeProps = {},
  memoryJournalMemoryWallHeadingSlot = "",
  memoryJournalMemoryWallHeadlineTag = "h1",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {componentComponentVisibility ? (
        <Block
          className={"memory-wall"}
          id={componentComponentId}
          tag={"section"}
        >
          <Block className={"flex_vertical flex-align_center"} tag={"div"}>
            <Heading
              className={"memory-wall_sub-heading"}
              tag={memoryJournalMemoryJournalSubHeadingTag}
              {...memoryJournalMemoryJournalSubHeadingRuntimeProps}
            >
              {memoryJournalMemoryJournalSubHeadingSlot ??
                memoryJournalMemoryJournalSubHeadingText}
            </Heading>
            <Block
              className={"margin-block_small"}
              id={buttonButtonSlotId}
              tag={"div"}
              {...buttonButtonRuntimeProps}
            >
              {buttonButtonSlot ?? (
                <HtmlEmbed
                  content={""}
                  value={
                    "%3Cdiv%20id%3D%22memory-button-container%22%0A%20%20data-button-text%3D%22Share%20Your%20Story%22%0A%20%20data-button-variant%3D%22Ocean%20Teal%22%3E%0A%3C%2Fdiv%3E%0A%0A%3Cscript%20src%3D%22%2Fmemory-form%2Fmemory-embed.js%22%3E%3C%2Fscript%3E"
                  }
                />
              )}
            </Block>
            {filterTagsFilterTagsVisibility ? (
              <Block
                id={filterTagsFilterTagsId}
                tag={"div"}
                {...filterTagsFilterTagsRuntimeProps}
              >
                {filterTagsFilterTagsSlot ?? <MemoryJournalFilterTagsSlots />}
              </Block>
            ) : null}
          </Block>
        </Block>
      ) : null}
    </div>
  );
}
