"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import NotSupported from "./webflow_modules/Builtin/components/NotSupported";
import Section from "./webflow_modules/Layout/components/Section";
import { Footer } from "./siteComponents/Footer";
import { GuestbookFilterTag } from "./guestbook/GuestbookFilterTag";
import { MemoryCard } from "./memoryJournal/MemoryCard";
import { MemoryForm } from "./memoryJournal/MemoryForm";
import { MemoryJournalHeading } from "./memoryJournal/MemoryJournalHeading";
import { MemoryJournalSubHeading } from "./memoryJournal/MemoryJournalSubHeading";
import { Navigation } from "./siteComponents/Navigation";

export function MoveMemories({}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block tag={"div"}>
        <Navigation />
        <Section
          className={"section-7"}
          grid={{
            type: "section",
          }}
          tag={"section"}
        />
        <Block className={"div-block-70"} tag={"div"}>
          <MemoryJournalHeading />
        </Block>
        <MemoryForm />
        <Block className={"div-block-71"} tag={"div"}>
          <MemoryJournalSubHeading
            memoryJournalMemoryJournalSubHeadingText={"share a story"}
          />
        </Block>
        <NotSupported _atom={"Collection List"} />
        <Footer />
        <GuestbookFilterTag />
      </Block>
    </div>
  );
}
