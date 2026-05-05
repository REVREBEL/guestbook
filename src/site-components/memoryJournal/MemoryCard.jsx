"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { ComponentSizeVariant } from "../parts/ComponentSizeVariant";
import { listOfElementsToText } from "../webflow_modules/Basic/helpers/listOfElementsToText";

export function MemoryCard({
  backgroundColorCardBackgroundColorCardRuntimeProps = {},
  backgroundColorCardBackgroundColorCardSlot = "",
  backgroundImageDevLinkImageVisibility = false,
  backgroundImageMemoryCardImage = "https://cdn.prod.website-files.com/69219eaa23d0fd8b7effe1fe/692eba253aebf63e64eb12d8_patricia-lanning-timeline-cover.avif",
  backgroundImageMemoryCardImageAltText2 = "__wf_reserved_inherit",
  backgroundImageMemoryCardImageId = "",
  backgroundImageMemoryCardImageRuntimeProps = {},
  backgroundImageMemoryCardImageSlot = "",
  backgroundImageMemoryCardVisibility = false,
  bottomCardBottomCardRuntimeProps = {},
  bottomCardBottomCardSlot = "",
  componentComponentColorVariant = "Warm Sandston",
  componentComponentId = "",
  componentComponentSizeVariant = "1x1",
  componentComponentVisibility = true,
  componentNumber = 0,
  componentVarCardSize = "This is the default text value",
  componentVisibility = true,
  image = "",
  likeIconLikeIconRuntimeProps = {},
  likeIconLikeIconVisibility = true,
  memoryDateBottomCardMemoryDateRuntimeProps = {},
  memoryDateBottomCardMemoryDateSlot = "",
  memoryDateTopCardMemoryDateMmmmYyyy = <br />,
  memoryDateTopCardMemoryDateRuntimeProps = {},
  memoryDateTopCardMemoryDateSlot = "",
  memoryDateTopCardMetaCountTimeRuntimeProps = {},
  memoryDateTopCardMetaCountTimeSlot = "",
  memoryDateTopCardMetaCountTimeText = "5 days ago",
  memoryDetailMemoryDetailParagraph = "Patricia went on to complete cosmetology training at Boulder High School. This early chapter of her life reflected her creative spirit and her love of helping others feel their best, leading her to become a licensed beautician in Colorado.",
  memoryDetailMemoryDetailRuntimeProps = {},
  memoryDetailMemoryDetailSlot = "",
  metaLcoationLocationText = "Baseline Lake",
  metaLcoationMetaLocationIconVisibility = true,
  metaLcoationMetaLocationRuntimeProps = {},
  metaLcoationMetaLocationSlot = "",
  readMoreButtonReadMoreButtonRuntimeProps = {},
  readMoreButtonReadMoreButtonSlot = "",
  readMoreButtonReadMoreButtonText = "Read More ",
  sharedBySharedByRuntimeProps = {},
  sharedBySharedBySlot = "",
  sharedBySharedByText = "Shared by: Gary Stringham",
  topCardMemoryHeadlineTag = "h2",
  topCardMemoryHeadlineText = "Becoming a Licensed Beautician",
}) {
  const _styleVariantMap = {
    "Warm Sandston": "",
    "Rustwood Red": "w-variant-bc1388a3-2956-51d3-5b2a-cd6ec82a62f2",
    "Rose Clay": "w-variant-5895fbf3-61ee-25b0-ef66-5700a0890057",
    Tertiary: "w-variant-f1fd8323-66ff-43cd-c923-7635f0fb3d8b",
    "Ocean Teal": "w-variant-c43689d3-b135-cd15-efed-45db3731f586",
  };

  const _activeStyleVariant = _styleVariantMap[componentComponentColorVariant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {componentComponentVisibility ? (
        <Block
          className={`component-memory-wall ${_activeStyleVariant}`}
          id={"w-node-_73eb0ae7-e9bf-61cd-60e7-10fbd84d8db9-d84d8db9"}
          tag={"div"}
          varCardSize={listOfElementsToText(componentVarCardSize)}
        >
          <ComponentSizeVariant
            backgroundCardImageDevLinkImageVisibility={
              backgroundImageDevLinkImageVisibility
            }
            backgroundCardImageMemoryCardImage={backgroundImageMemoryCardImage}
            backgroundCardImageMemoryCardImageAltText={
              backgroundImageMemoryCardImageAltText2
            }
            backgroundCardImageMemoryCardImageRuntimeProps={
              backgroundImageMemoryCardImageRuntimeProps
            }
            backgroundCardImageMemoryCardImageSlot={
              backgroundImageMemoryCardImageSlot
            }
            backgroundCardImageWebflowImageVisibility={
              backgroundImageMemoryCardVisibility
            }
            backgroundColorCardBackgroundColorCardRuntimeProps={
              backgroundColorCardBackgroundColorCardRuntimeProps
            }
            backgroundColorCardBackgroundColorCardSlot={
              backgroundColorCardBackgroundColorCardSlot
            }
            bottomCardBottomCardRuntimeProps={bottomCardBottomCardRuntimeProps}
            bottomCardBottomCardSlot={bottomCardBottomCardSlot}
            componentComponentSizeVariant={componentComponentSizeVariant}
            likeIconLikeIconRuntimeProps={likeIconLikeIconRuntimeProps}
            likeIconLikeIconVisibility={likeIconLikeIconVisibility}
            memoryDateBottomCardMemoryDateRuntimeProps={
              memoryDateBottomCardMemoryDateRuntimeProps
            }
            memoryDateBottomCardMemoryDateSlot={
              memoryDateBottomCardMemoryDateSlot
            }
            memoryDateTopCardMemoryCardImageId={
              backgroundImageMemoryCardImageId
            }
            memoryDateTopCardMemoryDateMmmYyyy={
              memoryDateTopCardMemoryDateMmmmYyyy
            }
            memoryDateTopCardMemoryDateRuntimeProps={
              memoryDateTopCardMemoryDateRuntimeProps
            }
            memoryDateTopCardMemoryDateSlot={memoryDateTopCardMemoryDateSlot}
            memoryDateTopCardTimeIndicator={memoryDateTopCardMetaCountTimeText}
            memoryDetailMemoryDetailParagraph={
              memoryDetailMemoryDetailParagraph
            }
            memoryDetailMemoryDetailRuntimeProps={
              memoryDetailMemoryDetailRuntimeProps
            }
            memoryDetailMemoryDetailSlot={memoryDetailMemoryDetailSlot}
            metaLocationLocationText={metaLcoationLocationText}
            metaLocationMetaLocationIconVisibility={
              metaLcoationMetaLocationIconVisibility
            }
            metaLocationMetaLocationRuntimeProps={
              metaLcoationMetaLocationRuntimeProps
            }
            metaLocationMetaLocationSlot={metaLcoationMetaLocationSlot}
            readMoreButtonReadMoreButtonRuntimeProps={
              readMoreButtonReadMoreButtonRuntimeProps
            }
            readMoreButtonReadMoreButtonSlot={readMoreButtonReadMoreButtonSlot}
            readMoreButtonReadMoreButtonText={readMoreButtonReadMoreButtonText}
            sharedBySharedByRuntimeProps={sharedBySharedByRuntimeProps}
            sharedBySharedBySlot={sharedBySharedBySlot}
            sharedBySharedByText={sharedBySharedByText}
            topCardMemoryHeadlineTag={topCardMemoryHeadlineTag}
            topCardMemoryHeadlineText={topCardMemoryHeadlineText}
            topCardMetaCountTimeRuntimeProps={
              memoryDateTopCardMetaCountTimeRuntimeProps
            }
            topCardMetaCountTimeSlot={memoryDateTopCardMetaCountTimeSlot}
          />
        </Block>
      ) : null}
    </div>
  );
}
