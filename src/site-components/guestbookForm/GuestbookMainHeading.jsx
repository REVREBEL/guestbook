"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";

export function GuestbookMainHeading({
  headline = "become part of her tribute",
  headlineTag = "h1",
  subHeadlineDescriptionText = "For those who wish to honor her memory, signing her guestbook is a meaningful way to contribute. You can share a heartfelt message, recount a cherished memory, or simply acknowledge your visit. Each entry enriches her legacy, weaving together the stories and sentiments of all who knew her.",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"guestbook_header-section"} tag={"section"}>
        <Block className={"guestbook_main-heading-wrapper"} tag={"div"}>
          <Heading className={"guestbook_heading"} tag={headlineTag}>
            {headline}
          </Heading>
          <Paragraph className={"guestbook_heading-text"}>
            {subHeadlineDescriptionText}
          </Paragraph>
        </Block>
      </Block>
    </div>
  );
}
