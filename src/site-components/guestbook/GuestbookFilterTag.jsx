"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function GuestbookFilterTag({
  filterVariant = "Clear",
  id = "",
  runtimeProps = {},
  tagSlot = "",
  text = "Tag Label",
  visibility = true,
}) {
  const _styleVariantMap = {
    Clear: "",
    "Newest Tag": "w-variant-52187c72-1048-778e-1544-aa09b68c1120",
    Family: "w-variant-f3baf07a-9b17-7c1c-8615-2addb2ee2e5e",
    Relatives: "w-variant-52187c72-1048-778e-1544-aa09b68c111b",
    Friends: "w-variant-52187c72-1048-778e-1544-aa09b68c111c",
    "Co-Workers": "w-variant-52187c72-1048-778e-1544-aa09b68c111d",
    "Business Partners": "w-variant-52187c72-1048-778e-1544-aa09b68c111e",
    "Secondary Outline": "w-variant-52187c72-1048-778e-1544-aa09b68c111f",
  };

  const _activeStyleVariant = _styleVariantMap[filterVariant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {visibility ? (
        <Block
          className={`tag ${_activeStyleVariant}`}
          fs-list-field={"relationship"}
          id={id}
          tag={"div"}
          {...runtimeProps}
        >
          {tagSlot ?? text}
        </Block>
      ) : null}
    </div>
  );
}
