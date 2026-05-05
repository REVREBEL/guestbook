"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function MemoryJournalFilterTags({
  filterVariant = "Clear",
  tagTagId = "",
  tagTagRuntimeProps = {},
  tagTagSlot = "",
  tagTagText = "Tag Label",
  tagTagVisibility = true,
}) {
  const _styleVariantMap = {
    Clear: "",
    All: "w-variant-3074d042-2074-ef0a-075a-519801904e81",
    Newest: "w-variant-3074d042-2074-ef0a-075a-519801904e80",
    "User Tag 1": "w-variant-3074d042-2074-ef0a-075a-519801904e82",
    "User Tag 2": "w-variant-3074d042-2074-ef0a-075a-519801904e83",
    "User Tag 3": "w-variant-3074d042-2074-ef0a-075a-519801904e84",
    "User Tag 4": "w-variant-3074d042-2074-ef0a-075a-519801904e85",
    "User Tag 5": "w-variant-3074d042-2074-ef0a-075a-519801904e86",
  };

  const _activeStyleVariant = _styleVariantMap[filterVariant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {tagTagVisibility ? (
        <Block
          className={`tag ${_activeStyleVariant}`}
          id={tagTagId}
          tag={"div"}
          {...tagTagRuntimeProps}
        >
          {tagTagSlot ?? tagTagText}
        </Block>
      ) : null}
    </div>
  );
}
