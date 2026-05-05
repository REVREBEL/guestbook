"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Section from "../webflow_modules/Layout/components/Section";

export function GuestbookComponentSlots({
  componentComponentId = "",
  componentComponentVisibility = true,
  filterPreviousNextFilterPreviousNextSlotsSlot = "",
  filterPreviousNextRuntimeProps = {},
  filterTagComponentFilterTagComponentSlot = "",
  filterTagComponentRuntimeProps = {},
  guestbookCard1GuestbookCardSlot = "",
  guestbookCard1RuntimeProps = {},
  guestbookCard2GuestbookCardSlot = "",
  guestbookCard2RuntimeProps = {},
  guestbookCard3GuestbookCardSlot = "",
  guestbookCard3RuntimeProps = {},
  guestbookCard4GuestbookCardSlot = "",
  guestbookCard4RuntimeProps = {},
  guestbookCard5GuestbookCardSlot = "",
  guestbookCard5RuntimeProps = {},
  guestbookCard6GuestbookCardSlot = "",
  guestbookCard6RuntimeProps = {},
  guestbookCard7GuestbookCardSlot = "",
  guestbookCard7RuntimeProps = {},
  guestbookCard8GuestbookCardSlot = "",
  guestbookCard8RuntimeProps = {},
  guestbookCard9GuestbookCardSlot = "",
  guestbookCard9RuntimeProps = {},
  guestbookMainHeadingGuestbookMainHeadingSlot = "",
  guestbookMainHeadingRuntimeProps = {},
  guestbookNameHeadingGuestbookNameHeadingSlot = "",
  guestbookNameHeadingRuntimeProps = {},
  leftContentBlockGuestbookCountRuntimeProps = {},
  leftContentBlockGuestbookCountSlot = "",
  leftContentBlockGuestbookSubHeadingRuntimeProps = {},
  leftContentBlockGuestbookSubHeadingSlot = "",
  rightContentBlockGuestbookFormSlot = "",
  rightContentBlockRuntimeProps = {},
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
          className={"component_guestbook"}
          id={componentComponentId}
          tag={"div"}
        >
          <Block tag={"div"} {...guestbookMainHeadingRuntimeProps}>
            {guestbookMainHeadingGuestbookMainHeadingSlot}
          </Block>
          <Block className={"guestbook_form-wrapper"} tag={"div"}>
            <Block
              className={"section_guestbook-content"}
              id={"w-node-bfd3544e-a64c-1ba0-a595-401b5f9589db-5f9589d8"}
              tag={"section"}
            >
              <Block
                tag={"div"}
                {...leftContentBlockGuestbookSubHeadingRuntimeProps}
              >
                {leftContentBlockGuestbookSubHeadingSlot}
              </Block>
              <Block
                tag={"div"}
                {...leftContentBlockGuestbookCountRuntimeProps}
              >
                {leftContentBlockGuestbookCountSlot}
              </Block>
            </Block>
            <Block
              className={"section_guestbook-form"}
              id={"w-node-bfd3544e-a64c-1ba0-a595-401b5f9589de-5f9589d8"}
              tag={"section"}
            >
              <Block className={"guestbook_form-container"} tag={"div"}>
                <Block tag={"div"} {...rightContentBlockRuntimeProps}>
                  {rightContentBlockGuestbookFormSlot}
                </Block>
              </Block>
            </Block>
          </Block>
          <Section
            className={"guestbook-cards-section"}
            grid={{
              type: "section",
            }}
            tag={"section"}
          >
            <Block className={"guestbook_names-container"} tag={"div"}>
              <Block tag={"div"} {...guestbookNameHeadingRuntimeProps}>
                {guestbookNameHeadingGuestbookNameHeadingSlot}
              </Block>
            </Block>
            <Block className={"guestbook_names-section"} tag={"section"}>
              <Block className={"filter-bar_padding"} tag={"div"}>
                <Block className={"component_filter-tags"} tag={"div"}>
                  <Block tag={"div"} {...filterTagComponentRuntimeProps}>
                    {filterTagComponentFilterTagComponentSlot}
                  </Block>
                </Block>
              </Block>
            </Block>
            <BlockContainer
              className={"guestbook_card-container"}
              grid={{
                type: "container",
              }}
              id={"w-node-bfd3544e-a64c-1ba0-a595-401b5f9589e3-5f9589d8"}
              tag={"div"}
            >
              <Block tag={"div"} {...guestbookCard1RuntimeProps}>
                {guestbookCard1GuestbookCardSlot}
              </Block>
              <Block tag={"div"} {...guestbookCard2RuntimeProps}>
                {guestbookCard2GuestbookCardSlot}
              </Block>
              <Block tag={"div"} {...guestbookCard3RuntimeProps}>
                {guestbookCard3GuestbookCardSlot}
              </Block>
              <Block tag={"div"} {...guestbookCard4RuntimeProps}>
                {guestbookCard4GuestbookCardSlot}
              </Block>
              <Block tag={"div"} {...guestbookCard5RuntimeProps}>
                {guestbookCard5GuestbookCardSlot}
              </Block>
              <Block tag={"div"} {...guestbookCard6RuntimeProps}>
                {guestbookCard6GuestbookCardSlot}
              </Block>
              <Block tag={"div"} {...guestbookCard7RuntimeProps}>
                {guestbookCard7GuestbookCardSlot}
              </Block>
              <Block tag={"div"} {...guestbookCard8RuntimeProps}>
                {guestbookCard8GuestbookCardSlot}
              </Block>
              <Block tag={"div"} {...guestbookCard9RuntimeProps}>
                {guestbookCard9GuestbookCardSlot}
              </Block>
            </BlockContainer>
            <Block className={"filter-bar_padding"} tag={"div"}>
              <Block tag={"div"} {...filterPreviousNextRuntimeProps}>
                {filterPreviousNextFilterPreviousNextSlotsSlot}
              </Block>
            </Block>
          </Section>
        </Block>
      ) : null}
    </div>
  );
}
