"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";

export function GuestbookCount({
  countRuntimeProps = {},
  countSlot = "",
  description = "Family, friends, and loved ones have already signed the guestbook. Join them by adding your own message.",
  guestbookCountText = "0",
  visibility = true,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={"guestbook_count-container"}
        tag={"div"}
        {...countRuntimeProps}
      >
        {countSlot ?? (
          <>
            <HtmlEmbed
              className={"code-embed-hidden"}
              content={""}
              value={
                "%3Cscript%20src%3D%22%2Fguestbook-form%2Fguestbook-count-embed.js%22%3E%3C%2Fscript%3E"
              }
            />
            <Block
              className={"guestbook_count-wrapper"}
              id={"w-node-d5060127-3298-5396-645e-d9e062c4df12-728a209f"}
              tag={"div"}
              {...countRuntimeProps}
            >
              {countSlot ?? (
                <>
                  {visibility ? (
                    <Block
                      className={
                        "number-accent guestbook_count w-node-d3e658c3-2779-15e0-efb0-7233728a20a0-728a209f"
                      }
                      data-count-target={""}
                      id={"guestbook-count"}
                      tag={"div"}
                      {...countRuntimeProps}
                    >
                      {countSlot ?? guestbookCountText}
                    </Block>
                  ) : null}
                  <Block
                    className={"paragraph"}
                    id={"w-node-d3e658c3-2779-15e0-efb0-7233728a20a2-728a209f"}
                    tag={"div"}
                  >
                    {description}
                  </Block>
                </>
              )}
            </Block>
          </>
        )}
      </Block>
    </div>
  );
}
