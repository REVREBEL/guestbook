"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function GuestbookNamesHeading(
    {
        as: _Component = _Builtin.Block,
        headlineTag = "h2",
        headline = "guestbook entries",
        headlineNamesHeadingText = "Explore the heartfelt messages and connections shared by family and friends who have signed the guestbook. Each card offers a glimpse into the cherished relationships and memories that bind this community together."
    }
) {
    return <_Component className="flex_vertical flex-align_center" tag="div"><_Builtin.Heading className="guestbook_names-heading" tag={headlineTag}>{headline}</_Builtin.Heading><_Builtin.Paragraph className="guestbook_names-text">{headlineNamesHeadingText}</_Builtin.Paragraph></_Component>;
}