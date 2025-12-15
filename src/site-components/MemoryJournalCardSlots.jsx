"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function MemoryJournalCardSlots(
    {
        as: _Component = _Builtin.Block,
        card1CardVisibility = true,
        card1CardSlotId,
        card1CardSlot,
        card1CardRuntimeProps = {},
        card2CardVisibility = true,
        card2CardId,
        card2CardSlot,
        card2CardRuntimeProps = {},
        card3WIdeCardSlotVisibility = true,
        card3WIdeCardSlotId,
        card3WIdeCardSlot,
        card3WIdeCardRuntimeProps = {},
        card4CardVisibility = true,
        card4CardId,
        card4CardSlot,
        card4CardRuntimeProps = {},
        card5CardVisibility = true,
        card5CardId,
        card5CardSlot,
        card5CardRuntimeProps = {},
        card6TallCardTallVisibility = true,
        card6TallCardTallId,
        card6TallCardTallSlot,
        card6TallCardTallRuntimeProps = {},
        card7CardVisibility = true,
        card7CardId,
        card7CardSlot,
        card7CardRuntimeProps = {},
        card8WIdeCardWIdeVisibility = true,
        card8WIdeCardWIdeId,
        card8WIdeCardWIdeSlot,
        card8WIdeCardWIdeRuntimeProps = {},
        card9CardSlot,
        card9CardRuntimeProps = {},
        card9CardVisibility = true,
        card9CardId,
        card10CardVisibility = true,
        card10CardId,
        card10CardSlot,
        card10CardRuntimeProps = {},
        card11TallCardTallVisibility = true,
        card11TallCardTallId,
        card11TallCardTallSlot,
        card11TallCardTallRuntimeProps = {},
        memoryJournalMainParagraph = "We invite you to share your treasured memories.In celebration of Patricia Lanning's life, we warmly invite all who knew her to share their most treasured and lasting memories. Your stories, reflections, and anecdotes about Patricia are a cherished part of her legacy, and we encourage you to contribute them as we honor her memory. Whether it was a moment of profound kindness, a shared laugh, or an example of her enduring spirit, your personal recollections will provide comfort and serve as a beautiful tribute to the remarkable person she was.",
        memoryJournalMainParagraphVisibility = true,
        memoryJournalMainHeadlineTag = "h1",
        memoryJournalMemoryJournalMainHeadlineText = "Memory Journal",
        memoryJournalSubHeadlineTag = "h3",
        memoryJournalSubHeadlineText = "share the memories",
        formButtonButtonRuntimeProps = {},
        formButtonButtonSlot,
        formButtonButtonVisibility = true,
        formButtonButtonId,
        fIlterSlotsFIlterSlotsVisibility = true,
        fIlterSlotsFIlterSlotsId,
        fIlterSlotsFIlterSlotsRuntimeProps = {},
        fIlterSlotsFIlterSlot
    }
) {
    return (
        <_Component className="memory-journal_cards-section" tag="section"><_Builtin.Block className="memory-wall" tag="section"><_Builtin.Block className="flex_vertical flex-align_center" tag="div"><_Builtin.Heading className="memory-wall_heading" tag={memoryJournalMainHeadlineTag}>{memoryJournalMemoryJournalMainHeadlineText}</_Builtin.Heading>{memoryJournalMainParagraphVisibility ? <_Builtin.Paragraph className="memory-wall_main-headline-paragraph">{memoryJournalMainParagraph}</_Builtin.Paragraph> : null}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="memory-wall" tag="section"><_Builtin.Block className="flex_vertical flex-align_center" tag="div"><_Builtin.Heading className="memory-wall_sub-heading" tag={memoryJournalSubHeadlineTag}>{memoryJournalSubHeadlineText}</_Builtin.Heading>{formButtonButtonVisibility ? <_Builtin.Block
                        className="margin-block_small"
                        tag="div"
                        id={formButtonButtonId}
                        {...formButtonButtonRuntimeProps}>{formButtonButtonSlot}</_Builtin.Block> : null}{fIlterSlotsFIlterSlotsVisibility ? <_Builtin.Block
                        tag="div"
                        id={fIlterSlotsFIlterSlotsId}
                        {...fIlterSlotsFIlterSlotsRuntimeProps}>{fIlterSlotsFIlterSlot}</_Builtin.Block> : null}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="memory-journal_card-section-padding" tag="div"><_Builtin.Block className="memory-journal_inner-form-container-copy" tag="div"><_Builtin.Block className="memory-journal_card-component" tag="div">{card1CardVisibility ? <_Builtin.Block
                            className="memory-journal_card-slot"
                            id="w-node-f309d1f2-e550-839f-91f3-170c067e7c5a-b7fbc9ef"
                            tag="div"
                            {...card1CardRuntimeProps}>{card1CardSlot}</_Builtin.Block> : null}{card2CardVisibility ? <_Builtin.Block
                            className="memory-journal_card-slot"
                            id="w-node-_53a186d6-7640-cf15-22c2-f946db2ed90a-b7fbc9ef"
                            tag="div"
                            {...card2CardRuntimeProps}>{card2CardSlot}</_Builtin.Block> : null}{card3WIdeCardSlotVisibility ? <_Builtin.Block
                            className="memory-journal_card-slot wide"
                            id="w-node-_17268966-65dc-4652-2cd3-57b429b88c16-b7fbc9ef"
                            tag="div"
                            {...card3WIdeCardRuntimeProps}>{card3WIdeCardSlot}</_Builtin.Block> : null}{card4CardVisibility ? <_Builtin.Block
                            className="memory-journal_card-slot"
                            id="w-node-_0ce6539f-ddda-a538-301c-96dcca4d1017-b7fbc9ef"
                            tag="div"
                            {...card4CardRuntimeProps}>{card4CardSlot}</_Builtin.Block> : null}{card5CardVisibility ? <_Builtin.Block
                            className="memory-journal_card-slot"
                            id="w-node-f7df0f53-be96-4d5a-62d8-e5c5f2d7678f-b7fbc9ef"
                            tag="div"
                            {...card5CardRuntimeProps}>{card5CardSlot}</_Builtin.Block> : null}{card6TallCardTallVisibility ? <_Builtin.Block
                            className="memory-journal_card-slot tall"
                            id="w-node-_602791fe-7bcc-f357-cd71-f9c84111cc1f-b7fbc9ef"
                            tag="div"
                            {...card6TallCardTallRuntimeProps}>{card6TallCardTallSlot}</_Builtin.Block> : null}{card7CardVisibility ? <_Builtin.Block
                            className="memory-journal_card-slot"
                            id="w-node-_1857250b-771d-c775-831e-845d04bb2d18-b7fbc9ef"
                            tag="div"
                            {...card7CardRuntimeProps}>{card7CardSlot}</_Builtin.Block> : null}{card8WIdeCardWIdeVisibility ? <_Builtin.Block
                            className="memory-journal_card-slot"
                            id="w-node-_4a51b95a-903b-6833-6ab5-ec9ec8d9c73b-b7fbc9ef"
                            tag="div"
                            {...card8WIdeCardWIdeRuntimeProps}>{card8WIdeCardWIdeSlot}</_Builtin.Block> : null}{card9CardVisibility ? <_Builtin.Block
                            className="memory-journal_card-slot"
                            id="w-node-b6ba9c62-701c-844b-d544-40dad5bf02f6-b7fbc9ef"
                            tag="div"
                            {...card9CardRuntimeProps}>{card9CardSlot}</_Builtin.Block> : null}{card10CardVisibility ? <_Builtin.Block
                            className="memory-journal_card-slot"
                            id="w-node-_6093f9ba-07bc-13bf-4c76-a9af1545ec5b-b7fbc9ef"
                            tag="div"
                            {...card10CardRuntimeProps}>{card10CardSlot}</_Builtin.Block> : null}{card11TallCardTallVisibility ? <_Builtin.Block
                            className="memory-journal_card-slot tall"
                            id="w-node-_2621c7ac-c9de-d2b4-6d40-62a962e5aced-b7fbc9ef"
                            tag="div"
                            {...card11TallCardTallRuntimeProps}>{card11TallCardTallSlot}</_Builtin.Block> : null}</_Builtin.Block></_Builtin.Block></_Builtin.Block></_Component>
    );
}