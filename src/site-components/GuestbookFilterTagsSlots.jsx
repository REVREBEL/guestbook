"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function GuestbookFilterTagsSlots(
    {
        as: _Component = _Builtin.Block,
        componentRuntimeProps = {},
        componentComponentId,
        componentComponentVisibility = true,
        tag1NewestTagSlot,
        tag1RuntimeProps = {},
        tag2FamilyTagSlot,
        tag2RuntimeProps = {},
        tag3RelativeTagSlot,
        tag3RuntimeProps = {},
        tag4FriendsTagSlot,
        tag4RuntimeProps = {},
        tag4Visibility = true,
        tag5CoWorkerTagSlot,
        tag6BusinessPartnerTagSlot,
        tag5RuntimeProps = {},
        tag5Visibility = true,
        tag6RuntimeProps = {},
        tag1Visibility = true,
        tag2Visibility = true,
        tag3Visibility = true,
        tag6Visibility = true,
        tag7ChurchFriendSlot,
        tag7RuntimeProps = {},
        tag7Visibility = true,
        tag8NeverMetTagSlot,
        tag8RuntimeProps = {},
        tag8Visibility = true
    }
) {
    return componentComponentVisibility ? <_Component
        className="component_filter-tags"
        tag="div"
        id={componentComponentId}
        {...componentRuntimeProps}><_Builtin.Block
            className="flex_horizontal width_100percent flex-align_center gap-xsmall padding-inline_mediumn"
            tag="div">{tag1Visibility ? <_Builtin.Block tag="div" {...tag1RuntimeProps}>{tag1NewestTagSlot}</_Builtin.Block> : null}{tag2Visibility ? <_Builtin.Block tag="div" {...tag2RuntimeProps}>{tag2FamilyTagSlot}</_Builtin.Block> : null}{tag3Visibility ? <_Builtin.Block tag="div" {...tag3RuntimeProps}>{tag3RelativeTagSlot}</_Builtin.Block> : null}{tag4Visibility ? <_Builtin.Block tag="div" {...tag4RuntimeProps}>{tag4FriendsTagSlot}</_Builtin.Block> : null}{tag5Visibility ? <_Builtin.Block tag="div" {...tag5RuntimeProps}>{tag5CoWorkerTagSlot}</_Builtin.Block> : null}{tag6Visibility ? <_Builtin.Block tag="div" {...tag6RuntimeProps}>{tag6BusinessPartnerTagSlot}</_Builtin.Block> : null}{tag8Visibility ? <_Builtin.Block tag="div" {...tag8RuntimeProps}>{tag8NeverMetTagSlot}</_Builtin.Block> : null}{tag7Visibility ? <_Builtin.Block tag="div" {...tag7RuntimeProps}>{tag7ChurchFriendSlot}</_Builtin.Block> : null}</_Builtin.Block></_Component> : null;
}