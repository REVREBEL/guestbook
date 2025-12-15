"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function GuestbookMainHeading(
    {
        as: _Component = _Builtin.Block,
        headline = "become part of her tribute",
        subHeadlineDescriptionText = "For those who wish to honor her memory, signing her guestbook is a meaningful way to contribute. You can share a heartfelt message, recount a cherished memory, or simply acknowledge your visit. Each entry enriches her legacy, weaving together the stories and sentiments of all who knew her.",
        headlineTag = "h1"
    }
) {
    return <_Component className="guestbook_header-section" tag="section"><_Builtin.Block className="guestbook_main-heading-wrapper" tag="div"><_Builtin.Heading className="guestbook_heading" tag={headlineTag}>{headline}</_Builtin.Heading><_Builtin.Paragraph className="guestbook_heading-text">{subHeadlineDescriptionText}</_Builtin.Paragraph></_Builtin.Block></_Component>;
}