"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ComponentSizeVariant } from "./ComponentSizeVariant";

export function MemoryCard(
    {
        as: _Component = _Builtin.Block,
        image = "",
        componentComponentVisibility = true,
        componentComponentId,
        componentComponentColorVariant = "Warm Sandston",
        componentComponentSizeVariant = "Warm Sandston",
        componentVisibility,
        componentVarCardSize = "This is the default text value",
        componentNumber,
        topCardMemoryHeadlineTag = "h2",
        topCardMemoryHeadlineText = "Becoming a Licensed Beautician",
        backgroundColorCardBackgroundColorCardSlot,
        backgroundColorCardBackgroundColorCardRuntimeProps = {},
        backgroundImageMemoryCardVisibility = false,
        backgroundImageMemoryCardImageId,
        backgroundImageMemoryCardImage = "https://cdn.prod.website-files.com/69219eaa23d0fd8b7effe1fe/692eba253aebf63e64eb12d8_patricia-lanning-timeline-cover.avif",
        backgroundImageMemoryCardImageAltText2 = "__wf_reserved_inherit",
        backgroundImageMemoryCardImageSlot,
        backgroundImageMemoryCardImageRuntimeProps = {},
        memoryDateTopCardMemoryDateMmmmYyyy = <br />,
        memoryDateTopCardMemoryDateSlot,
        memoryDateTopCardMemoryDateRuntimeProps = {},
        sharedBySharedByText = "Shared by: Gary Stringham",
        sharedBySharedByRuntimeProps = {},
        sharedBySharedBySlot,
        metaLcoationMetaLocationIconVisibility = true,
        metaLcoationLocationText = "Baseline Lake",
        metaLcoationMetaLocationSlot,
        metaLcoationMetaLocationRuntimeProps = {},
        readMoreButtonReadMoreButtonRuntimeProps = {},
        readMoreButtonReadMoreButtonSlot,
        readMoreButtonReadMoreButtonText = "Read More ",
        bottomCardBottomCardSlot,
        bottomCardBottomCardRuntimeProps = {},
        memoryDateBottomCardMemoryDateSlot,
        memoryDateBottomCardMemoryDateRuntimeProps = {},
        memoryDetailMemoryDetailParagraph = "Patricia went on to complete cosmetology training at Boulder High School. This early chapter of her life reflected her creative spirit and her love of helping others feel their best, leading her to become a licensed beautician in Colorado.",
        memoryDetailMemoryDetailSlot,
        memoryDetailMemoryDetailRuntimeProps = {},
        likeIconLikeIconVisibility = true,
        likeIconLikeIconRuntimeProps = {},
        memoryDateTopCardMetaCountTimeText = "5 days ago",
        memoryDateTopCardMetaCountTimeSlot,
        memoryDateTopCardMetaCountTimeRuntimeProps = {},
        backgroundImageDevLinkImageVisibility = false
    }
) {
    const _styleVariantMap = {
        "Warm Sandston": "",
        "Rustwood Red": "w-variant-bc1388a3-2956-51d3-5b2a-cd6ec82a62f2",
        "Rose Clay": "w-variant-5895fbf3-61ee-25b0-ef66-5700a0890057",
        "Tertiary": "w-variant-f1fd8323-66ff-43cd-c923-7635f0fb3d8b",
        "Ocean Teal": "w-variant-c43689d3-b135-cd15-efed-45db3731f586"
    };

    const _activeStyleVariant = _styleVariantMap[componentComponentColorVariant];

    return componentComponentVisibility ? <_Component
        className={`component-memory-wall ${_activeStyleVariant}`}
        id="w-node-_73eb0ae7-e9bf-61cd-60e7-10fbd84d8db9-d84d8db9"
        tag="div"><ComponentSizeVariant
            componentComponentSizeVariant={componentComponentSizeVariant}
            readMoreButtonReadMoreButtonText={readMoreButtonReadMoreButtonText}
            backgroundCardImageMemoryCardImage={backgroundImageMemoryCardImage}
            backgroundCardImageWebflowImageVisibility={backgroundImageMemoryCardVisibility}
            memoryDateTopCardMemoryDateMmmYyyy={memoryDateTopCardMemoryDateMmmmYyyy}
            metaLocationLocationText={metaLcoationLocationText}
            memoryDateTopCardTimeIndicator={memoryDateTopCardMetaCountTimeText}
            topCardMemoryHeadlineText={topCardMemoryHeadlineText}
            memoryDetailMemoryDetailParagraph={memoryDetailMemoryDetailParagraph}
            likeIconLikeIconVisibility={likeIconLikeIconVisibility}
            sharedBySharedByText={sharedBySharedByText}
            backgroundCardImageMemoryCardImageAltText={backgroundImageMemoryCardImageAltText2}
            topCardMemoryHeadlineTag={topCardMemoryHeadlineTag}
            backgroundColorCardBackgroundColorCardSlot={backgroundColorCardBackgroundColorCardSlot}
            backgroundColorCardBackgroundColorCardRuntimeProps={backgroundColorCardBackgroundColorCardRuntimeProps}
            backgroundCardImageMemoryCardImageRuntimeProps={backgroundImageMemoryCardImageRuntimeProps}
            backgroundCardImageMemoryCardImageSlot={backgroundImageMemoryCardImageSlot}
            memoryDateTopCardMemoryCardImageId={backgroundImageMemoryCardImageId}
            memoryDateTopCardMemoryDateSlot={memoryDateTopCardMemoryDateSlot}
            memoryDateTopCardMemoryDateRuntimeProps={memoryDateTopCardMemoryDateRuntimeProps}
            sharedBySharedByRuntimeProps={sharedBySharedByRuntimeProps}
            sharedBySharedBySlot={sharedBySharedBySlot}
            metaLocationMetaLocationIconVisibility={metaLcoationMetaLocationIconVisibility}
            metaLocationMetaLocationSlot={metaLcoationMetaLocationSlot}
            metaLocationMetaLocationRuntimeProps={metaLcoationMetaLocationRuntimeProps}
            readMoreButtonReadMoreButtonRuntimeProps={readMoreButtonReadMoreButtonRuntimeProps}
            readMoreButtonReadMoreButtonSlot={readMoreButtonReadMoreButtonSlot}
            bottomCardBottomCardRuntimeProps={bottomCardBottomCardRuntimeProps}
            bottomCardBottomCardSlot={bottomCardBottomCardSlot}
            memoryDateBottomCardMemoryDateRuntimeProps={memoryDateBottomCardMemoryDateRuntimeProps}
            memoryDateBottomCardMemoryDateSlot={memoryDateBottomCardMemoryDateSlot}
            memoryDetailMemoryDetailRuntimeProps={memoryDetailMemoryDetailRuntimeProps}
            memoryDetailMemoryDetailSlot={memoryDetailMemoryDetailSlot}
            likeIconLikeIconRuntimeProps={likeIconLikeIconRuntimeProps}
            topCardMetaCountTimeSlot={memoryDateTopCardMetaCountTimeSlot}
            topCardMetaCountTimeRuntimeProps={memoryDateTopCardMetaCountTimeRuntimeProps}
            backgroundCardImageDevLinkImageVisibility={backgroundImageDevLinkImageVisibility} /></_Component> : null;
}