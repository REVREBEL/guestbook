import * as React from "react";
import * as Types from "./types";

declare function MemoryJournalFilterTagsSlots(
    props: {
        as?: React.ElementType;
        /** Newest Posts*/
        newestFIlterTagNewestFIlterTagRuntimeProps?: Types.Devlink.RuntimeProps;
        /** Newest Posts*/
        newestFIlterTagNewestFilterTagSlot?: Types.Devlink.Slot;
        /** All Posts FIlter Tag*/
        allPostsFIlterTagAllPostsFIlterTagRuntimeProps?: Types.Devlink.RuntimeProps;
        /** All Posts FIlter Tag*/
        allPostsFIlterTagAllPostsFIlterTagSlot?: Types.Devlink.Slot;
        /** When activated, Filter Tags allow users to showcase a memory card on-screen for one or more designated Filter Tags. The component will then present any records that align with the tag criteria.*/
        allPostsFIlterTagAllFilterTagSlot?: Types.Devlink.Slot;
        /** Inserted Based On User Generated Tags when Submitting the Memory Form*/
        userFilterTagsUserFilterTagsRuntimeProps?: Types.Devlink.RuntimeProps;
        componentRuntimeProps?: Types.Devlink.RuntimeProps;
        componentComponentId?: Types.Basic.IdTextInput;
        componentComponentVisibility?: Types.Visibility.VisibilityConditions;
        tag3RelativeTagSlot?: Types.Devlink.Slot;
        tag3RuntimeProps?: Types.Devlink.RuntimeProps;
        tag4FriendsTagSlot?: Types.Devlink.Slot;
        tag4RuntimeProps?: Types.Devlink.RuntimeProps;
        tag4Visibility?: Types.Visibility.VisibilityConditions;
        tag5CoWorkerTagSlot?: Types.Devlink.Slot;
        tag6BusinessPartnerTagSlot?: Types.Devlink.Slot;
        tag5RuntimeProps?: Types.Devlink.RuntimeProps;
        tag5Visibility?: Types.Visibility.VisibilityConditions;
        tag1Visibility?: Types.Visibility.VisibilityConditions;
        tag3Visibility?: Types.Visibility.VisibilityConditions;
        tag6Visibility?: Types.Visibility.VisibilityConditions;
        tag7ChurchFriendSlot?: Types.Devlink.Slot;
        tag7RuntimeProps?: Types.Devlink.RuntimeProps;
        tag7Visibility?: Types.Visibility.VisibilityConditions;
        tag8NeverMetTagSlot?: Types.Devlink.Slot;
        tag8RuntimeProps?: Types.Devlink.RuntimeProps;
        tag8Visibility?: Types.Visibility.VisibilityConditions;
        /** Inserted Based On User Generated Tags when Submitting the Memory Form*/
        userFilterTagsUserFilterTagsSlot?: Types.Devlink.Slot;
        filterAllTagFilterAllTagVisibility?: Types.Visibility.VisibilityConditions;
        newestFilterTagFilterTagVariant?: "Clear" | "All" | "Newest" | "User Tag 1" | "User Tag 2" | "User Tag 3" | "User Tag 4" | "User Tag 5";
        newestFilterTagNewestFilterTagVisibility?: Types.Visibility.VisibilityConditions;
        newestFilterTagTagId?: Types.Basic.IdTextInput;
        /** When activated, Filter Tags allow users to showcase a memory card on-screen for one or more designated Filter Tags. The component will then present any records that align with the tag criteria.*/
        newestFIlterTagTagText?: React.ReactNode;
        newestFIlterTagTagRuntimeProps?: Types.Devlink.RuntimeProps;
        allPostsFIlterTagTagText?: React.ReactNode;
        allPostsFIlterTagTagId?: Types.Basic.IdTextInput;
        allPostsFIlterTagTagVisibility?: Types.Visibility.VisibilityConditions;
        allPostsFIlterTagAllMemoriesTagSlot?: Types.Devlink.Slot;
        allPostsFIlterTagTagRuntimeProps?: Types.Devlink.RuntimeProps;
        allPostsFIlterTagFilterTagVariant?: "Clear" | "All" | "Newest" | "User Tag 1" | "User Tag 2" | "User Tag 3" | "User Tag 4" | "User Tag 5";
        userGeneratedTagVisibility?: Types.Visibility.VisibilityConditions;
        userGeneratedTagId?: Types.Basic.IdTextInput;
        /** When submitting a memory, the user is presented with input options to specify hashtags related to their post. Suggestions populate the remaining filter tag options in the UI and are generated based on the content entered in the hashtag input field.*/
        userFilterTagsTagText?: React.ReactNode;
        userFilterTagsFilterTagVariant?: "Clear" | "All" | "Newest" | "User Tag 1" | "User Tag 2" | "User Tag 3" | "User Tag 4" | "User Tag 5";
    }
): React.JSX.Element