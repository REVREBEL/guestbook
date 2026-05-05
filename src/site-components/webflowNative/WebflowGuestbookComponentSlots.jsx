"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Section from "../webflow_modules/Layout/components/Section";
import { ButtonNextPrevious } from "../buttons/ButtonNextPrevious";
import { GuestbookFilterTag } from "../guestbook/GuestbookFilterTag";

export function WebflowGuestbookComponentSlots({
  componentComponentId = "",
  componentComponentVisibility = true,
  filterPreviousNextFilterPreviousNextSlotsSlot = "",
  filterPreviousNextRuntimeProps = {},
  filterTagComponentFilterTagComponentSlot = "",
  filterTagComponentRuntimeProps = {},
  guestbookCard1GuestbookCard1,
  guestbookCard1GuestbookCardSlot = "",
  guestbookCard1RuntimeProps = {},
  guestbookCard2GuestbookCard2,
  guestbookCard2GuestbookCardSlot = "",
  guestbookCard2RuntimeProps = {},
  guestbookCard3GuestbookCard3,
  guestbookCard3GuestbookCardSlot = "",
  guestbookCard3RuntimeProps = {},
  guestbookCard4GuestbookCard4,
  guestbookCard4GuestbookCardSlot = "",
  guestbookCard4RuntimeProps = {},
  guestbookCard5GuestbookCard5,
  guestbookCard5GuestbookCardSlot = "",
  guestbookCard5RuntimeProps = {},
  guestbookCard6GuestbookCard6,
  guestbookCard6GuestbookCardSlot = "",
  guestbookCard6RuntimeProps = {},
  guestbookCard7GuestbookCard7,
  guestbookCard7GuestbookCardSlot = "",
  guestbookCard7RuntimeProps = {},
  guestbookCard8GuestbookCard8,
  guestbookCard8GuestbookCardSlot = "",
  guestbookCard8RuntimeProps = {},
  guestbookCard9GuestbookCard9,
  guestbookCard9GuestbookCardSlot = "",
  guestbookCard9RuntimeProps = {},
  guestbookMainHeadingGuestbookMainHeading,
  guestbookMainHeadingGuestbookMainHeadingSlot = "",
  guestbookMainHeadingRuntimeProps = {},
  guestbookNameHeadingGuestbookNameHeadingSlot = "",
  guestbookNameHeadingGuestbookNamesHeading,
  guestbookNameHeadingRuntimeProps = {},
  leftContentBlockGuestbookCount,
  leftContentBlockGuestbookCountRuntimeProps = {},
  leftContentBlockGuestbookCountSlot = "",
  leftContentBlockGuestbookSubHeading,
  leftContentBlockGuestbookSubHeadingRuntimeProps = {},
  leftContentBlockGuestbookSubHeadingSlot = "",
  rightContentBlockGuestbookForm,
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
          <>
            {guestbookMainHeadingGuestbookMainHeading}
            {guestbookMainHeadingGuestbookMainHeadingSlot}
          </>
          <Block className={"guestbook_form-wrapper"} tag={"div"}>
            <Block
              className={"section_guestbook-content"}
              id={"w-node-_979f49be-b8d8-5dd3-3701-ee2451751161-5175115e"}
              tag={"section"}
            >
              <>
                {leftContentBlockGuestbookSubHeading}
                {leftContentBlockGuestbookSubHeadingSlot}
              </>
              <>
                {leftContentBlockGuestbookCount}
                {leftContentBlockGuestbookCountSlot}
              </>
            </Block>
            <Block
              className={"section_guestbook-form"}
              id={"w-node-_979f49be-b8d8-5dd3-3701-ee2451751164-5175115e"}
              tag={"section"}
            >
              <Block className={"guestbook_form-container"} tag={"div"}>
                <>
                  {rightContentBlockGuestbookForm}
                  {rightContentBlockGuestbookFormSlot}
                </>
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
              <>
                {guestbookNameHeadingGuestbookNamesHeading}
                {guestbookNameHeadingGuestbookNameHeadingSlot}
              </>
            </Block>
            <Block className={"guestbook_names-section"} tag={"section"}>
              <Block className={"filter-bar_padding"} tag={"div"}>
                <Block className={"component_filter-tags"} tag={"div"}>
                  <Block className={"component_filter-tags"} tag={"div"}>
                    <Block
                      className={
                        "flex_horizontal width_100percent flex-align_center gap-xsmall padding-inline_mediumn"
                      }
                      tag={"div"}
                    >
                      <Block tag={"div"} />
                      <Block tag={"div"} />
                      <Block tag={"div"} />
                      <Block tag={"div"} />
                      <Block tag={"div"} />
                      <Block tag={"div"} />
                      <Block tag={"div"} />
                      <Block tag={"div"} />
                      <Block tag={"div"}>
                        <GuestbookFilterTag
                          filterVariant={"Newest Tag"}
                          text={"newest"}
                        />
                      </Block>
                      <Block tag={"div"}>
                        <GuestbookFilterTag
                          filterVariant={"Family"}
                          text={"family"}
                        />
                      </Block>
                      <Block tag={"div"}>
                        <GuestbookFilterTag
                          filterVariant={"Relatives"}
                          text={"Relatives"}
                        />
                      </Block>
                      <Block tag={"div"}>
                        <GuestbookFilterTag
                          filterVariant={"Friends"}
                          text={"friends"}
                        />
                      </Block>
                      <Block tag={"div"}>
                        <GuestbookFilterTag
                          filterVariant={"Co-Workers"}
                          text={"co-workers"}
                        />
                      </Block>
                      <Block tag={"div"}>
                        <GuestbookFilterTag
                          filterVariant={"Newest Tag"}
                          text={"business partners"}
                        />
                      </Block>
                      <Block tag={"div"}>
                        <GuestbookFilterTag
                          filterVariant={"Newest Tag"}
                          text={"church friends"}
                        />
                      </Block>
                      <Block tag={"div"}>
                        <GuestbookFilterTag
                          filterVariant={"Newest Tag"}
                          text={"never met directly"}
                        />
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
            <BlockContainer
              className={"guestbook_card-container"}
              grid={{
                type: "container",
              }}
              id={"w-node-_979f49be-b8d8-5dd3-3701-ee245175116e-5175115e"}
              tag={"div"}
            >
              <>
                {guestbookCard1GuestbookCard1}
                {guestbookCard1GuestbookCardSlot}
              </>
              <>
                {guestbookCard2GuestbookCard2}
                {guestbookCard2GuestbookCardSlot}
              </>
              <>
                {guestbookCard3GuestbookCard3}
                {guestbookCard3GuestbookCardSlot}
              </>
              <>
                {guestbookCard4GuestbookCard4}
                {guestbookCard4GuestbookCardSlot}
              </>
              <>
                {guestbookCard5GuestbookCard5}
                {guestbookCard5GuestbookCardSlot}
              </>
              <>
                {guestbookCard6GuestbookCard6}
                {guestbookCard6GuestbookCardSlot}
              </>
              <>
                {guestbookCard7GuestbookCard7}
                {guestbookCard7GuestbookCardSlot}
              </>
              <>
                {guestbookCard8GuestbookCard8}
                {guestbookCard8GuestbookCardSlot}
              </>
              <>
                {guestbookCard9GuestbookCard9}
                {guestbookCard9GuestbookCardSlot}
              </>
            </BlockContainer>
            <Block className={"filter-bar_padding"} tag={"div"}>
              <Block className={"component_filter-tags"} tag={"div"}>
                <Block
                  className={
                    "flex_horizontal width_100percent flex-align_center gap-xsmall padding-inline_mediumn"
                  }
                  tag={"div"}
                >
                  <Block tag={"div"}>
                    <ButtonNextPrevious />
                  </Block>
                  <Block tag={"div"}>
                    <ButtonNextPrevious buttonVariantType={"Previous"} />
                  </Block>
                  <Block tag={"div"}>
                    <ButtonNextPrevious buttonVariantType={"Next"} />
                  </Block>
                </Block>
              </Block>
            </Block>
          </Section>
        </Block>
      ) : null}
    </div>
  );
}
