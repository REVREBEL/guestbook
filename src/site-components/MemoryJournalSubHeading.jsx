"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { MemoryJournalFilterTagsSlots } from "./MemoryJournalFilterTagsSlots";

export function MemoryJournalSubHeading(
    {
        as: _Component = _Builtin.Block,
        componentComponentId,
        componentComponentVisibility = true,
        memoryJournalMemoryJournalHeadingText = "Memory Journal",
        memoryJournalMemoryWallHeadlineTag = "h1",
        buttonButtonRuntimeProps = {},
        buttonButtonSlot,
        buttonButtonSlotId,
        filterTagsFilterTagsVisibility = true,
        filterTagsFilterTagsSlot,
        filterTagsFilterTagsRuntimeProps = {},
        filterTagsFilterTagsId,
        memoryJournalMemoryWallHeadingSlot,
        memoryJournalMemoryWallHeadingRuntimeProps = {},
        memoryJournalMemoryJournalParagr = "Share your precious memories",
        memoryJournalMemoryJournalSubHeadingTag = "h3",
        memoryJournalMemoryJournalSubHeadingText = "Share Your Story",
        memoryJournalMemoryJournalSubHeadingRuntimeProps = {},
        memoryJournalMemoryJournalSubHeadingSlot
    }
) {
    return componentComponentVisibility ? <_Component className="memory-wall" tag="section" id={componentComponentId}><_Builtin.Block className="flex_vertical flex-align_center" tag="div"><_Builtin.Heading
                className="memory-wall_sub-heading"
                tag={memoryJournalMemoryJournalSubHeadingTag}
                {...memoryJournalMemoryJournalSubHeadingRuntimeProps}>{memoryJournalMemoryJournalSubHeadingSlot ?? memoryJournalMemoryJournalSubHeadingText}</_Builtin.Heading><_Builtin.Block
                className="margin-block_small"
                tag="div"
                id={buttonButtonSlotId}
                {...buttonButtonRuntimeProps}>{buttonButtonSlot ?? <_Builtin.HtmlEmbed
                    value="%3Cdiv%20id%3D%22memory-button-container%22%0A%20%20data-button-text%3D%22Share%20Your%20Story%22%0A%20%20data-button-variant%3D%22Ocean%20Teal%22%3E%0A%3C%2Fdiv%3E%0A%0A%3Cscript%20src%3D%22%2Fmemory-form%2Fmemory-embed.js%22%3E%3C%2Fscript%3E" />}</_Builtin.Block>{filterTagsFilterTagsVisibility ? <_Builtin.Block
                tag="div"
                id={filterTagsFilterTagsId}
                {...filterTagsFilterTagsRuntimeProps}>{filterTagsFilterTagsSlot ?? <MemoryJournalFilterTagsSlots />}</_Builtin.Block> : null}</_Builtin.Block></_Component> : null;
}