"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { GuestbookFilterTag } from "./GuestbookFilterTag";
import { ButtonNextPrevious } from "./ButtonNextPrevious";

export function WebflowGuestbookComponentSlots(
    {
        as: _Component = _Builtin.Block,
        componentComponentVisibility = true,
        componentComponentId,
        guestbookMainHeadingGuestbookMainHeadingSlot,
        leftContentBlockGuestbookSubHeadingSlot,
        leftContentBlockGuestbookCountSlot,
        rightContentBlockGuestbookFormSlot,
        guestbookNameHeadingGuestbookNameHeadingSlot,
        filterTagComponentFilterTagComponentSlot,
        guestbookCard1GuestbookCardSlot,
        guestbookCard2GuestbookCardSlot,
        guestbookCard3GuestbookCardSlot,
        guestbookCard4GuestbookCardSlot,
        guestbookCard3RuntimeProps = {},
        guestbookCard3Slot,
        guestbookCard5GuestbookCardSlot,
        guestbookCard6GuestbookCardSlot,
        guestbookCard7GuestbookCardSlot,
        guestbookCard8GuestbookCardSlot,
        guestbookCard1RuntimeProps = {},
        guestbookCard1Slot,
        guestbookCard2RuntimeProps = {},
        guestbookCard2Slot,
        guestbookCard4RuntimeProps = {},
        guestbookCard4Slot,
        guestbookCard6RuntimeProps = {},
        guestbookCard6Slot,
        guestbookCard5RuntimeProps = {},
        guestbookCard5Slot,
        guestbookCard7RuntimeProps = {},
        guestbookCard7Slot,
        guestbookCard8RuntimeProps = {},
        guestbookCard8Slot,
        guestbookCard9GuestbookCardSlot,
        guestbookCard9RuntimeProps = {},
        guestbookCard9Slot,
        filterPreviousNextFilterPreviousNextSlotsSlot,
        filterPreviousNextRuntimeProps = {},
        guestbookMainHeadingRuntimeProps = {},
        guestbookMainHeadingSlot,
        leftContentBlockGuestbookSubHeadingRuntimeProps = {},
        leftContentBlockGuestbookCountRuntimeProps = {},
        leftContentBlockSlot,
        leftContentBlockSlot2,
        rightContentBlockRuntimeProps = {},
        rightContentBlockSlot,
        filterTagComponentRuntimeProps = {},
        guestbookNameHeadingRuntimeProps = {},
        guestbookNameHeadingSlot
    }
) {
    return componentComponentVisibility ? <_Component className="component_guestbook" tag="div" id={componentComponentId}><_Builtin.NotSupported _atom="Slot" /><_Builtin.Block className="guestbook_form-wrapper" tag="div"><_Builtin.Block
                className="section_guestbook-content"
                id="w-node-_979f49be-b8d8-5dd3-3701-ee2451751161-5175115e"
                tag="section"><_Builtin.NotSupported _atom="Slot" /><_Builtin.NotSupported _atom="Slot" /></_Builtin.Block><_Builtin.Block
                className="section_guestbook-form"
                id="w-node-_979f49be-b8d8-5dd3-3701-ee2451751164-5175115e"
                tag="section"><_Builtin.Block className="guestbook_form-container" tag="div"><_Builtin.NotSupported _atom="Slot" /></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Section
            className="guestbook-cards-section"
            grid={{
                type: "section"
            }}
            tag="section"><_Builtin.Block className="guestbook_names-container" tag="div"><_Builtin.NotSupported _atom="Slot" /></_Builtin.Block><_Builtin.Block className="guestbook_names-section" tag="section"><_Builtin.Block className="filter-bar_padding" tag="div"><_Builtin.Block className="component_filter-tags" tag="div"><_Builtin.Block className="component_filter-tags" tag="div"><_Builtin.Block
                                className="flex_horizontal width_100percent flex-align_center gap-xsmall padding-inline_mediumn"
                                tag="div"><_Builtin.Block tag="div" /><_Builtin.Block tag="div" /><_Builtin.Block tag="div" /><_Builtin.Block tag="div" /><_Builtin.Block tag="div" /><_Builtin.Block tag="div" /><_Builtin.Block tag="div" /><_Builtin.Block tag="div" /><_Builtin.Block tag="div"><GuestbookFilterTag filterVariant="Newest Tag" text="newest" /></_Builtin.Block><_Builtin.Block tag="div"><GuestbookFilterTag filterVariant="Family" text="family" /></_Builtin.Block><_Builtin.Block tag="div"><GuestbookFilterTag filterVariant="Relatives" text="Relatives" /></_Builtin.Block><_Builtin.Block tag="div"><GuestbookFilterTag filterVariant="Friends" text="friends" /></_Builtin.Block><_Builtin.Block tag="div"><GuestbookFilterTag filterVariant="Co-Workers" text="co-workers" /></_Builtin.Block><_Builtin.Block tag="div"><GuestbookFilterTag filterVariant="Newest Tag" text="business partners" /></_Builtin.Block><_Builtin.Block tag="div"><GuestbookFilterTag filterVariant="Newest Tag" text="church friends" /></_Builtin.Block><_Builtin.Block tag="div"><GuestbookFilterTag filterVariant="Newest Tag" text="never met directly" /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.BlockContainer
                className="guestbook_card-container"
                id="w-node-_979f49be-b8d8-5dd3-3701-ee245175116e-5175115e"
                grid={{
                    type: "container"
                }}
                tag="div"><_Builtin.NotSupported _atom="Slot" /><_Builtin.NotSupported _atom="Slot" /><_Builtin.NotSupported _atom="Slot" /><_Builtin.NotSupported _atom="Slot" /><_Builtin.NotSupported _atom="Slot" /><_Builtin.NotSupported _atom="Slot" /><_Builtin.NotSupported _atom="Slot" /><_Builtin.NotSupported _atom="Slot" /><_Builtin.NotSupported _atom="Slot" /></_Builtin.BlockContainer><_Builtin.Block className="filter-bar_padding" tag="div"><_Builtin.Block className="component_filter-tags" tag="div"><_Builtin.Block
                        className="flex_horizontal width_100percent flex-align_center gap-xsmall padding-inline_mediumn"
                        tag="div"><_Builtin.Block tag="div"><ButtonNextPrevious /></_Builtin.Block><_Builtin.Block tag="div"><ButtonNextPrevious buttonVariantType="Previous" /></_Builtin.Block><_Builtin.Block tag="div"><ButtonNextPrevious buttonVariantType="Next" /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Section></_Component> : null;
}