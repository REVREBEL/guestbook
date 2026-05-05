"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";

export function MemoryJournalCardSlots({
  card10CardId = "",
  card10CardRuntimeProps = {},
  card10CardSlot = "",
  card10CardVisibility = true,
  card11TallCardTallId = "",
  card11TallCardTallRuntimeProps = {},
  card11TallCardTallSlot = "",
  card11TallCardTallVisibility = true,
  card1CardRuntimeProps = {},
  card1CardSlot = "",
  card1CardSlotId = "",
  card1CardVisibility = true,
  card2CardId = "",
  card2CardRuntimeProps = {},
  card2CardSlot = "",
  card2CardVisibility = true,
  card3WIdeCardRuntimeProps = {},
  card3WIdeCardSlot = "",
  card3WIdeCardSlotId = "",
  card3WIdeCardSlotVisibility = true,
  card4CardId = "",
  card4CardRuntimeProps = {},
  card4CardSlot = "",
  card4CardVisibility = true,
  card5CardId = "",
  card5CardRuntimeProps = {},
  card5CardSlot = "",
  card5CardVisibility = true,
  card6TallCardTallId = "",
  card6TallCardTallRuntimeProps = {},
  card6TallCardTallSlot = "",
  card6TallCardTallVisibility = true,
  card7CardId = "",
  card7CardRuntimeProps = {},
  card7CardSlot = "",
  card7CardVisibility = true,
  card8WIdeCardWIdeId = "",
  card8WIdeCardWIdeRuntimeProps = {},
  card8WIdeCardWIdeSlot = "",
  card8WIdeCardWIdeVisibility = true,
  card9CardId = "",
  card9CardRuntimeProps = {},
  card9CardSlot = "",
  card9CardVisibility = true,
  fIlterSlotsFIlterSlot = "",
  fIlterSlotsFIlterSlotsId = "",
  fIlterSlotsFIlterSlotsRuntimeProps = {},
  fIlterSlotsFIlterSlotsVisibility = true,
  formButtonButtonId = "",
  formButtonButtonRuntimeProps = {},
  formButtonButtonSlot = "",
  formButtonButtonVisibility = true,
  memoryJournalMainHeadlineTag = "h1",
  memoryJournalMainParagraph = "We invite you to share your treasured memories.In celebration of Patricia Lanning's life, we warmly invite all who knew her to share their most treasured and lasting memories. Your stories, reflections, and anecdotes about Patricia are a cherished part of her legacy, and we encourage you to contribute them as we honor her memory. Whether it was a moment of profound kindness, a shared laugh, or an example of her enduring spirit, your personal recollections will provide comfort and serve as a beautiful tribute to the remarkable person she was.",
  memoryJournalMainParagraphVisibility = true,
  memoryJournalMemoryJournalMainHeadlineText = "Memory Journal",
  memoryJournalSubHeadlineTag = "h3",
  memoryJournalSubHeadlineText = "share the memories",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"memory-journal_cards-section"} tag={"section"}>
        <Block className={"memory-wall"} tag={"section"}>
          <Block className={"flex_vertical flex-align_center"} tag={"div"}>
            <Heading
              className={"memory-wall_heading"}
              tag={memoryJournalMainHeadlineTag}
            >
              {memoryJournalMemoryJournalMainHeadlineText}
            </Heading>
            {memoryJournalMainParagraphVisibility ? (
              <Paragraph className={"memory-wall_main-headline-paragraph"}>
                {memoryJournalMainParagraph}
              </Paragraph>
            ) : null}
          </Block>
        </Block>
        <Block className={"memory-wall"} tag={"section"}>
          <Block className={"flex_vertical flex-align_center"} tag={"div"}>
            <Heading
              className={"memory-wall_sub-heading"}
              tag={memoryJournalSubHeadlineTag}
            >
              {memoryJournalSubHeadlineText}
            </Heading>
            {formButtonButtonVisibility ? (
              <Block
                className={"margin-block_small"}
                id={formButtonButtonId}
                tag={"div"}
                {...formButtonButtonRuntimeProps}
              >
                {formButtonButtonSlot}
              </Block>
            ) : null}
            {fIlterSlotsFIlterSlotsVisibility ? (
              <Block
                id={fIlterSlotsFIlterSlotsId}
                tag={"div"}
                {...fIlterSlotsFIlterSlotsRuntimeProps}
              >
                {fIlterSlotsFIlterSlot}
              </Block>
            ) : null}
          </Block>
        </Block>
        <Block className={"memory-journal_card-section-padding"} tag={"div"}>
          <Block
            className={"memory-journal_inner-form-container-copy"}
            tag={"div"}
          >
            <Block className={"memory-journal_card-component"} tag={"div"}>
              {card1CardVisibility ? (
                <Block
                  className={"memory-journal_card-slot"}
                  id={"w-node-f309d1f2-e550-839f-91f3-170c067e7c5a-b7fbc9ef"}
                  tag={"div"}
                  {...card1CardRuntimeProps}
                >
                  {card1CardSlot}
                </Block>
              ) : null}
              {card2CardVisibility ? (
                <Block
                  className={"memory-journal_card-slot"}
                  id={"w-node-_53a186d6-7640-cf15-22c2-f946db2ed90a-b7fbc9ef"}
                  tag={"div"}
                  {...card2CardRuntimeProps}
                >
                  {card2CardSlot}
                </Block>
              ) : null}
              {card3WIdeCardSlotVisibility ? (
                <Block
                  className={"memory-journal_card-slot wide"}
                  id={"w-node-_17268966-65dc-4652-2cd3-57b429b88c16-b7fbc9ef"}
                  tag={"div"}
                  {...card3WIdeCardRuntimeProps}
                >
                  {card3WIdeCardSlot}
                </Block>
              ) : null}
              {card4CardVisibility ? (
                <Block
                  className={"memory-journal_card-slot"}
                  id={"w-node-_0ce6539f-ddda-a538-301c-96dcca4d1017-b7fbc9ef"}
                  tag={"div"}
                  {...card4CardRuntimeProps}
                >
                  {card4CardSlot}
                </Block>
              ) : null}
              {card5CardVisibility ? (
                <Block
                  className={"memory-journal_card-slot"}
                  id={"w-node-f7df0f53-be96-4d5a-62d8-e5c5f2d7678f-b7fbc9ef"}
                  tag={"div"}
                  {...card5CardRuntimeProps}
                >
                  {card5CardSlot}
                </Block>
              ) : null}
              {card6TallCardTallVisibility ? (
                <Block
                  className={"memory-journal_card-slot tall"}
                  id={"w-node-_602791fe-7bcc-f357-cd71-f9c84111cc1f-b7fbc9ef"}
                  tag={"div"}
                  {...card6TallCardTallRuntimeProps}
                >
                  {card6TallCardTallSlot}
                </Block>
              ) : null}
              {card7CardVisibility ? (
                <Block
                  className={"memory-journal_card-slot"}
                  id={"w-node-_1857250b-771d-c775-831e-845d04bb2d18-b7fbc9ef"}
                  tag={"div"}
                  {...card7CardRuntimeProps}
                >
                  {card7CardSlot}
                </Block>
              ) : null}
              {card8WIdeCardWIdeVisibility ? (
                <Block
                  className={"memory-journal_card-slot"}
                  id={"w-node-_4a51b95a-903b-6833-6ab5-ec9ec8d9c73b-b7fbc9ef"}
                  tag={"div"}
                  {...card8WIdeCardWIdeRuntimeProps}
                >
                  {card8WIdeCardWIdeSlot}
                </Block>
              ) : null}
              {card9CardVisibility ? (
                <Block
                  className={"memory-journal_card-slot"}
                  id={"w-node-b6ba9c62-701c-844b-d544-40dad5bf02f6-b7fbc9ef"}
                  tag={"div"}
                  {...card9CardRuntimeProps}
                >
                  {card9CardSlot}
                </Block>
              ) : null}
              {card10CardVisibility ? (
                <Block
                  className={"memory-journal_card-slot"}
                  id={"w-node-_6093f9ba-07bc-13bf-4c76-a9af1545ec5b-b7fbc9ef"}
                  tag={"div"}
                  {...card10CardRuntimeProps}
                >
                  {card10CardSlot}
                </Block>
              ) : null}
              {card11TallCardTallVisibility ? (
                <Block
                  className={"memory-journal_card-slot tall"}
                  id={"w-node-_2621c7ac-c9de-d2b4-6d40-62a962e5aced-b7fbc9ef"}
                  tag={"div"}
                  {...card11TallCardTallRuntimeProps}
                >
                  {card11TallCardTallSlot}
                </Block>
              ) : null}
            </Block>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
