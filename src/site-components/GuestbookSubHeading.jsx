"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function GuestbookSubHeading(
    {
        as: _Component = _Builtin.Block,
        headline = "Sign the Guestbook",
        subHeadlineText = "Share a message, memory, or simply let us know you visited. Every note adds to her story.",
        headlineTag = "h2",
        id,
        visibility = true
    }
) {
    return visibility ? <_Component className="flex_vertical flex-align_center" tag="div" id={id}><_Builtin.Heading className="guestbook_sub-heading" tag={headlineTag}>{headline}</_Builtin.Heading><_Builtin.Paragraph className="guestbook_paragraph">{subHeadlineText}</_Builtin.Paragraph></_Component> : null;
}