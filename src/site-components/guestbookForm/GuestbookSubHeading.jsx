"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";

export function GuestbookSubHeading({
  headline = "Sign the Guestbook",
  headlineTag = "h2",
  id = "",
  subHeadlineText = "Share a message, memory, or simply let us know you visited. Every note adds to her story.",
  visibility = true,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {visibility ? (
        <Block
          className={"flex_vertical flex-align_center"}
          id={id}
          tag={"div"}
        >
          <Heading className={"guestbook_sub-heading"} tag={headlineTag}>
            {headline}
          </Heading>
          <Paragraph className={"guestbook_paragraph"}>
            {subHeadlineText}
          </Paragraph>
        </Block>
      ) : null}
    </div>
  );
}
