"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function FilterPreviousNextSlots({
  nextNextSlot = "",
  nextRuntimeProps = {},
  nextSlotVisibility = true,
  previousPreviousSlot = "",
  previousRuntimeProps = {},
  previousSlotVisibility = true,
  viewMoreRuntimeProps = {},
  viewMoreSlotVisibility = true,
  viewMoreViewMoreSlot = "",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"component_filter-tags"} tag={"div"}>
        <Block
          className={
            "flex_horizontal width_100percent flex-align_center gap-xsmall padding-inline_mediumn"
          }
          tag={"div"}
        >
          {viewMoreSlotVisibility ? (
            <Block tag={"div"} {...viewMoreRuntimeProps}>
              {viewMoreViewMoreSlot}
            </Block>
          ) : null}
          {previousSlotVisibility ? (
            <Block tag={"div"} {...previousRuntimeProps}>
              {previousPreviousSlot}
            </Block>
          ) : null}
          {nextSlotVisibility ? (
            <Block tag={"div"} {...nextRuntimeProps}>
              {nextNextSlot}
            </Block>
          ) : null}
        </Block>
      </Block>
    </div>
  );
}
