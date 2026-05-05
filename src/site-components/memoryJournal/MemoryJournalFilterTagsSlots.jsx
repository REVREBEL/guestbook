"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { MemoryJournalFilterTags } from "./MemoryJournalFilterTags";

export function MemoryJournalFilterTagsSlots({
  allPostsFIlterTagAllFilterTagSlot = "",
  allPostsFIlterTagAllMemoriesTagSlot = "",
  allPostsFIlterTagAllPostsFIlterTagRuntimeProps = {},
  allPostsFIlterTagAllPostsFIlterTagSlot = "",
  allPostsFIlterTagFilterTagVariant = "All",
  allPostsFIlterTagTagId = "",
  allPostsFIlterTagTagRuntimeProps = {},
  allPostsFIlterTagTagText = "All Memories",
  allPostsFIlterTagTagVisibility = true,
  componentComponentId = "",
  componentComponentVisibility = true,
  componentRuntimeProps = {},
  filterAllTagFilterAllTagVisibility = true,
  newestFilterTagFilterTagVariant = "Newest",
  newestFIlterTagNewestFIlterTagRuntimeProps = {},
  newestFIlterTagNewestFilterTagSlot = "",
  newestFilterTagNewestFilterTagVisibility = true,
  newestFilterTagTagId = "",
  newestFIlterTagTagRuntimeProps = {},
  newestFIlterTagTagText = "Newest",
  tag1Visibility = true,
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
  tag6Visibility = true,
  tag7ChurchFriendSlot = "",
  tag7RuntimeProps = {},
  tag7Visibility = true,
  tag8NeverMetTagSlot = "",
  tag8RuntimeProps = {},
  tag8Visibility = true,
  userFilterTagsFilterTagVariant = "User Tag 2",
  userFilterTagsTagText = "{{HASHTAG}}",
  userFilterTagsUserFilterTagsRuntimeProps = {},
  userFilterTagsUserFilterTagsSlot = "",
  userGeneratedTagId = "",
  userGeneratedTagVisibility = true,
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
              <Block
                tag={"div"}
                {...newestFIlterTagNewestFIlterTagRuntimeProps}
              >
                {newestFIlterTagNewestFilterTagSlot ?? (
                  <MemoryJournalFilterTags
                    filterVariant={newestFilterTagFilterTagVariant}
                    tagTagId={newestFilterTagTagId}
                    tagTagRuntimeProps={newestFIlterTagTagRuntimeProps}
                    tagTagSlot={allPostsFIlterTagAllFilterTagSlot}
                    tagTagText={newestFIlterTagTagText}
                    tagTagVisibility={newestFilterTagNewestFilterTagVisibility}
                  />
                )}
              </Block>
            ) : null}
            {filterAllTagFilterAllTagVisibility ? (
              <Block
                tag={"div"}
                {...allPostsFIlterTagAllPostsFIlterTagRuntimeProps}
              >
                {allPostsFIlterTagAllPostsFIlterTagSlot ?? (
                  <MemoryJournalFilterTags
                    filterVariant={allPostsFIlterTagFilterTagVariant}
                    tagTagId={allPostsFIlterTagTagId}
                    tagTagRuntimeProps={allPostsFIlterTagTagRuntimeProps}
                    tagTagSlot={allPostsFIlterTagAllMemoriesTagSlot}
                    tagTagText={allPostsFIlterTagTagText}
                    tagTagVisibility={allPostsFIlterTagTagVisibility}
                  />
                )}
              </Block>
            ) : null}
            {tag6Visibility ? (
              <Block tag={"div"} {...userFilterTagsUserFilterTagsRuntimeProps}>
                {userFilterTagsUserFilterTagsSlot ?? (
                  <MemoryJournalFilterTags
                    filterVariant={userFilterTagsFilterTagVariant}
                    tagTagId={userGeneratedTagId}
                    tagTagText={userFilterTagsTagText}
                    tagTagVisibility={userGeneratedTagVisibility}
                  />
                )}
              </Block>
            ) : null}
          </Block>
        </Block>
      ) : null}
    </div>
  );
}
