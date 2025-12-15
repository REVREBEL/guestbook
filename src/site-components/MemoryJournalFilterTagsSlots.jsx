"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { MemoryJournalFilterTags } from "./MemoryJournalFilterTags";

export function MemoryJournalFilterTagsSlots(
    {
        as: _Component = _Builtin.Block,
        newestFIlterTagNewestFIlterTagRuntimeProps = {},
        newestFIlterTagNewestFilterTagSlot,
        allPostsFIlterTagAllPostsFIlterTagRuntimeProps = {},
        allPostsFIlterTagAllPostsFIlterTagSlot,
        allPostsFIlterTagAllFilterTagSlot,
        userFilterTagsUserFilterTagsRuntimeProps = {},
        componentRuntimeProps = {},
        componentComponentId,
        componentComponentVisibility = true,
        tag3RelativeTagSlot,
        tag3RuntimeProps = {},
        tag4FriendsTagSlot,
        tag4RuntimeProps = {},
        tag4Visibility = true,
        tag5CoWorkerTagSlot,
        tag6BusinessPartnerTagSlot,
        tag5RuntimeProps = {},
        tag5Visibility = true,
        tag1Visibility = true,
        tag3Visibility = true,
        tag6Visibility = true,
        tag7ChurchFriendSlot,
        tag7RuntimeProps = {},
        tag7Visibility = true,
        tag8NeverMetTagSlot,
        tag8RuntimeProps = {},
        tag8Visibility = true,
        userFilterTagsUserFilterTagsSlot,
        filterAllTagFilterAllTagVisibility = true,
        newestFilterTagFilterTagVariant = null,
        newestFilterTagNewestFilterTagVisibility = true,
        newestFilterTagTagId,
        newestFIlterTagTagText = "Newest",
        newestFIlterTagTagRuntimeProps = {},
        allPostsFIlterTagTagText = "All Memories",
        allPostsFIlterTagTagId,
        allPostsFIlterTagTagVisibility = true,
        allPostsFIlterTagAllMemoriesTagSlot,
        allPostsFIlterTagTagRuntimeProps = {},
        allPostsFIlterTagFilterTagVariant = null,
        userGeneratedTagVisibility = true,
        userGeneratedTagId,
        userFilterTagsTagText = "{{HASHTAG}}",
        userFilterTagsFilterTagVariant = null
    }
) {
    return componentComponentVisibility ? <_Component
        className="component_filter-tags"
        tag="div"
        id={componentComponentId}
        {...componentRuntimeProps}><_Builtin.Block
            className="flex_horizontal width_100percent flex-align_center gap-xsmall padding-inline_mediumn"
            tag="div">{tag1Visibility ? <_Builtin.Block tag="div" {...newestFIlterTagNewestFIlterTagRuntimeProps}>{newestFIlterTagNewestFilterTagSlot ?? <MemoryJournalFilterTags
                    filterVariant={newestFilterTagFilterTagVariant}
                    tagTagText={newestFIlterTagTagText}
                    tagTagVisibility={newestFilterTagNewestFilterTagVisibility}
                    tagTagSlot={allPostsFIlterTagAllFilterTagSlot}
                    tagTagId={newestFilterTagTagId}
                    tagTagRuntimeProps={newestFIlterTagTagRuntimeProps} />}</_Builtin.Block> : null}{filterAllTagFilterAllTagVisibility ? <_Builtin.Block tag="div" {...allPostsFIlterTagAllPostsFIlterTagRuntimeProps}>{allPostsFIlterTagAllPostsFIlterTagSlot ?? <MemoryJournalFilterTags
                    filterVariant={allPostsFIlterTagFilterTagVariant}
                    tagTagText={allPostsFIlterTagTagText}
                    tagTagId={allPostsFIlterTagTagId}
                    tagTagVisibility={allPostsFIlterTagTagVisibility}
                    tagTagSlot={allPostsFIlterTagAllMemoriesTagSlot}
                    tagTagRuntimeProps={allPostsFIlterTagTagRuntimeProps} />}</_Builtin.Block> : null}{tag6Visibility ? <_Builtin.Block tag="div" {...userFilterTagsUserFilterTagsRuntimeProps}>{userFilterTagsUserFilterTagsSlot ?? <MemoryJournalFilterTags
                    filterVariant={userFilterTagsFilterTagVariant}
                    tagTagVisibility={userGeneratedTagVisibility}
                    tagTagId={userGeneratedTagId}
                    tagTagText={userFilterTagsTagText} />}</_Builtin.Block> : null}</_Builtin.Block></_Component> : null;
}