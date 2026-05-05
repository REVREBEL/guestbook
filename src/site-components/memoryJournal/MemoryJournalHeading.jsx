"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";

export function MemoryJournalHeading({
  buttonFilledButtonFIlledRuntimeProps = {},
  buttonFilledButtonFIlledSlot = "",
  componentComponentId = "",
  componentComponentVisibility = true,
  filterTagsFilterTagsRuntimeProps = {},
  filterTagsFilterTagsSlot = "",
  filterTagsFilterTagsVisibility = true,
  memoryJournalMemoryJournalHeadingText = "Memory Journal",
  memoryJournalMemoryJournalSubHeadlineText = "We invite you to share your treasured memories.In celebration of Patricia Lanning's life, we warmly invite all who knew her to share their most treasured and lasting memories. Your stories, reflections, and anecdotes about Patricia are a cherished part of her legacy, and we encourage you to contribute them as we honor her memory. Whether it was a moment of profound kindness, a shared laugh, or an example of her enduring spirit, your personal recollections will provide comfort and serve as a beautiful tribute to the remarkable person she was.",
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
              className={
                "memory-wall_heading flex_horizontal flex-align_center margin-bottom_xsmall text-color-dark-green"
              }
              tag={memoryJournalMemoryWallHeadlineTag}
              {...memoryJournalMemoryWallHeadingRuntimeProps}
            >
              {memoryJournalMemoryWallHeadingSlot ??
                memoryJournalMemoryJournalHeadingText}
            </Heading>
            <Paragraph className={"memory-wall_main-headline-paragraph"}>
              {memoryJournalMemoryJournalSubHeadlineText}
            </Paragraph>
          </Block>
        </Block>
      ) : null}
    </div>
  );
}
