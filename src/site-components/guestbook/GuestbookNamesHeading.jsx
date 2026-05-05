"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";

export function GuestbookNamesHeading({
  headline = "guestbook entries",
  headlineNamesHeadingText = "Explore the heartfelt messages and connections shared by family and friends who have signed the guestbook. Each card offers a glimpse into the cherished relationships and memories that bind this community together.",
  headlineTag = "h2",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"flex_vertical flex-align_center"} tag={"div"}>
        <Heading className={"guestbook_names-heading"} tag={headlineTag}>
          {headline}
        </Heading>
        <Paragraph className={"guestbook_names-text"}>
          {headlineNamesHeadingText}
        </Paragraph>
      </Block>
    </div>
  );
}
