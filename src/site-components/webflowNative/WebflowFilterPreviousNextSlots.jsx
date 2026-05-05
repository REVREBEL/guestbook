"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function WebflowFilterPreviousNextSlots({
  nextNextSlot,
  nextNextSlot2 = "",
  previousPreviousSlot,
  previousPreviousSlot2 = "",
  viewMoreViewMoreSlot,
  viewMoreViewMoreSlot2 = "",
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
          <>
            {viewMoreViewMoreSlot}
            {viewMoreViewMoreSlot}
          </>
          <>
            {previousPreviousSlot}
            {previousPreviousSlot}
          </>
          <>
            {nextNextSlot}
            {nextNextSlot}
          </>
        </Block>
      </Block>
    </div>
  );
}
