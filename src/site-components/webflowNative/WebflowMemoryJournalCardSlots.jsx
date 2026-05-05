"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function WebflowMemoryJournalCardSlots({
  card10Card10Slot,
  card11Card11Slot,
  card12Card12SlotTall,
  card1Card1Slot,
  card2Card2Slot,
  card3Card3SlotWide,
  card4Card4Slot,
  card5Card5Slot,
  card6Card6SlotTall,
  card7Card7Slot,
  card8Card8Slot,
  card9Card9Slot,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"memory-journal_cards-section"} tag={"section"}>
        <Block className={"memory-journal_card-section-padding"} tag={"div"}>
          <Block
            className={"memory-journal_inner-form-container-copy"}
            tag={"div"}
          >
            <Block className={"memory-journal_card-component"} tag={"div"}>
              {card1Card1Slot}
              {card2Card2Slot}
              {card3Card3SlotWide}
              {card4Card4Slot}
              {card5Card5Slot}
              {card6Card6SlotTall}
              {card7Card7Slot}
              {card8Card8Slot}
              {card9Card9Slot}
              {card10Card10Slot}
              {card11Card11Slot}
              {card12Card12SlotTall}
            </Block>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
