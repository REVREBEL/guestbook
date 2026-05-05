"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function GuestbookFilterTagsSlots({
  componentComponentId = "",
  componentComponentVisibility = true,
  componentRuntimeProps = {},
  tag1NewestTagSlot = "",
  tag1RuntimeProps = {},
  tag1Visibility = true,
  tag2FamilyTagSlot = "",
  tag2RuntimeProps = {},
  tag2Visibility = true,
  tag3RelativeTagSlot = "",
  tag3RuntimeProps = {},
  tag3Visibility = true,
  tag4FriendsTagSlot = "",
  tag4RuntimeProps = {},
  tag4Visibility = true,
  tag5CoWorkerTagSlot = "",
  tag5RuntimeProps = {},
  tag5Visibility = true,
  tag6BusinessPartnerTagSlot = "",
  tag6RuntimeProps = {},
  tag6Visibility = true,
  tag7ChurchFriendSlot = "",
  tag7RuntimeProps = {},
  tag7Visibility = true,
  tag8NeverMetTagSlot = "",
  tag8RuntimeProps = {},
  tag8Visibility = true,
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
          className={"component_filter-tags"}
          id={componentComponentId}
          tag={"div"}
          {...componentRuntimeProps}
        >
          <Block
            className={
              "flex_horizontal width_100percent flex-align_center gap-xsmall padding-inline_mediumn"
            }
            tag={"div"}
          >
            {tag1Visibility ? (
              <Block tag={"div"} {...tag1RuntimeProps}>
                {tag1NewestTagSlot}
              </Block>
            ) : null}
            {tag2Visibility ? (
              <Block tag={"div"} {...tag2RuntimeProps}>
                {tag2FamilyTagSlot}
              </Block>
            ) : null}
            {tag3Visibility ? (
              <Block tag={"div"} {...tag3RuntimeProps}>
                {tag3RelativeTagSlot}
              </Block>
            ) : null}
            {tag4Visibility ? (
              <Block tag={"div"} {...tag4RuntimeProps}>
                {tag4FriendsTagSlot}
              </Block>
            ) : null}
            {tag5Visibility ? (
              <Block tag={"div"} {...tag5RuntimeProps}>
                {tag5CoWorkerTagSlot}
              </Block>
            ) : null}
            {tag6Visibility ? (
              <Block tag={"div"} {...tag6RuntimeProps}>
                {tag6BusinessPartnerTagSlot}
              </Block>
            ) : null}
            {tag8Visibility ? (
              <Block tag={"div"} {...tag8RuntimeProps}>
                {tag8NeverMetTagSlot}
              </Block>
            ) : null}
            {tag7Visibility ? (
              <Block tag={"div"} {...tag7RuntimeProps}>
                {tag7ChurchFriendSlot}
              </Block>
            ) : null}
          </Block>
        </Block>
      ) : null}
    </div>
  );
}
