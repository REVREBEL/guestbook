"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";

export function ButtonNextPrevious({
  buttonId = "",
  buttonRuntimeProps = {},
  buttonVariantType = "View More",
  componentVisibility = true,
  nextButtonText = "Next Page",
  nextVisibility = true,
  previousPageButtonText = "Previous Page",
  previousPageVisibility = true,
  viewMoreButtonText = "View More",
  viewMoreVisibility = true,
}) {
  const _styleVariantMap = {
    "View More": "",
    Previous: "w-variant-35fdfe12-a636-2f7f-c1e4-e4c9ad71f45b",
    Next: "w-variant-35fdfe12-a636-2f7f-c1e4-e4c9ad71f45a",
  };

  const _activeStyleVariant = _styleVariantMap[buttonVariantType];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {componentVisibility ? (
        <Block
          className={`component-button_previous-next ${_activeStyleVariant}`}
          id={buttonId}
          tag={"div"}
          {...buttonRuntimeProps}
        >
          {viewMoreVisibility ? (
            <Block
              className={`button_next-previous view-more ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`text-block-13 ${_activeStyleVariant}`}
                tag={"div"}
              >
                {viewMoreButtonText}
              </Block>
            </Block>
          ) : null}
          {nextVisibility ? (
            <Block
              className={`button_next-previous next ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`button_next-previous-text ${_activeStyleVariant}`}
                tag={"div"}
              >
                {nextButtonText}
              </Block>
              <HtmlEmbed
                className={`code-embed_next-icon next ${_activeStyleVariant}`}
                content={""}
                value={
                  "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%20stroke-width%3D%221.5%22%3E%3Cpath%20d%3D%22M6.90588%204.53682C6.50592%204.2998%206%204.58808%206%205.05299V18.947C6%2019.4119%206.50592%2019.7002%206.90588%2019.4632L18.629%2012.5162C19.0211%2012.2838%2019.0211%2011.7162%2018.629%2011.4838L6.90588%204.53682Z%22%20fill%3D%22currentColor%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                }
              />
            </Block>
          ) : null}
          {previousPageVisibility ? (
            <Block
              className={`button_next-previous previous ${_activeStyleVariant}`}
              tag={"div"}
            >
              <HtmlEmbed
                className={`code-embed_previous-icon previous ${_activeStyleVariant}`}
                content={""}
                value={
                  "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%20stroke-width%3D%221.5%22%3E%3Cpath%20d%3D%22M6.90588%204.53682C6.50592%204.2998%206%204.58808%206%205.05299V18.947C6%2019.4119%206.50592%2019.7002%206.90588%2019.4632L18.629%2012.5162C19.0211%2012.2838%2019.0211%2011.7162%2018.629%2011.4838L6.90588%204.53682Z%22%20fill%3D%22currentColor%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                }
              />
              <Block
                className={`button_next-previous-text ${_activeStyleVariant}`}
                tag={"div"}
              >
                {previousPageButtonText}
              </Block>
            </Block>
          ) : null}
        </Block>
      ) : null}
    </div>
  );
}
