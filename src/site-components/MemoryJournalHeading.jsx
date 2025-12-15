"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function MemoryJournalHeading(
    {
        as: _Component = _Builtin.Block,
        componentComponentId,
        componentComponentVisibility = true,
        memoryJournalMemoryJournalHeadingText = "Memory Journal",
        memoryJournalMemoryWallHeadlineTag = "h1",
        buttonFilledButtonFIlledSlot,
        buttonFilledButtonFIlledRuntimeProps = {},
        filterTagsFilterTagsVisibility = true,
        filterTagsFilterTagsSlot,
        filterTagsFilterTagsRuntimeProps = {},
        memoryJournalMemoryWallHeadingSlot,
        memoryJournalMemoryWallHeadingRuntimeProps = {},
        memoryJournalMemoryJournalSubHeadlineText = "We invite you to share your treasured memories.In celebration of Patricia Lanning's life, we warmly invite all who knew her to share their most treasured and lasting memories. Your stories, reflections, and anecdotes about Patricia are a cherished part of her legacy, and we encourage you to contribute them as we honor her memory. Whether it was a moment of profound kindness, a shared laugh, or an example of her enduring spirit, your personal recollections will provide comfort and serve as a beautiful tribute to the remarkable person she was."
    }
) {
    return componentComponentVisibility ? <_Component className="memory-wall" tag="section" id={componentComponentId}><_Builtin.Block className="flex_vertical flex-align_center" tag="div"><_Builtin.Heading
                className="memory-wall_heading flex_horizontal flex-align_center margin-bottom_xsmall text-color-dark-green"
                tag={memoryJournalMemoryWallHeadlineTag}
                {...memoryJournalMemoryWallHeadingRuntimeProps}>{memoryJournalMemoryWallHeadingSlot ?? memoryJournalMemoryJournalHeadingText}</_Builtin.Heading><_Builtin.Paragraph className="memory-wall_main-headline-paragraph">{memoryJournalMemoryJournalSubHeadlineText}</_Builtin.Paragraph></_Builtin.Block></_Component> : null;
}