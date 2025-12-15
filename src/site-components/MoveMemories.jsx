"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Navigation } from "./Navigation";
import { MemoryJournalHeading } from "./MemoryJournalHeading";
import { MemoryForm } from "./MemoryForm";
import { MemoryJournalSubHeading } from "./MemoryJournalSubHeading";
import { MemoryCard } from "./MemoryCard";
import { Footer } from "./Footer";
import { GuestbookFilterTag } from "./GuestbookFilterTag";

export function MoveMemories(
    {
        as: _Component = _Builtin.Block
    }
) {
    return (
        <_Component tag="div"><Navigation /><_Builtin.Section
                className="section-7"
                grid={{
                    type: "section"
                }}
                tag="section" /><_Builtin.Block className="div-block-70" tag="div"><MemoryJournalHeading /></_Builtin.Block><MemoryForm /><_Builtin.Block className="div-block-71" tag="div"><MemoryJournalSubHeading memoryJournalMemoryJournalSubHeadingText="share a story" /></_Builtin.Block><_Builtin.NotSupported _atom="DynamoWrapper" /><Footer /><GuestbookFilterTag /></_Component>
    );
}