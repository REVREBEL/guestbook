import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function MemoryJournalFilterTagsSlots(props: {
  /** When activated, Filter Tags allow users to showcase a memory card on-screen for one or more designated Filter Tags. The component will then present any records that align with the tag criteria.*/
  allPostsFIlterTagAllFilterTagSlot?: Types.Devlink.Slot;
  allPostsFIlterTagAllMemoriesTagSlot?: Types.Devlink.Slot;
  /** All Posts FIlter Tag*/
  allPostsFIlterTagAllPostsFIlterTagRuntimeProps?: Types.Devlink.RuntimeProps;
  /** All Posts FIlter Tag*/
  allPostsFIlterTagAllPostsFIlterTagSlot?: Types.Devlink.Slot;
  allPostsFIlterTagFilterTagVariant?:
    | "Clear"
    | "All"
    | "Newest"
    | "User Tag 1"
    | "User Tag 2"
    | "User Tag 3"
    | "User Tag 4"
    | "User Tag 5";
  allPostsFIlterTagTagId?: string;
  allPostsFIlterTagTagRuntimeProps?: Types.Devlink.RuntimeProps;
  allPostsFIlterTagTagText?: React.ReactNode;
  allPostsFIlterTagTagVisibility?: Types.Visibility.VisibilityConditions;
  componentComponentId?: string;
  componentComponentVisibility?: Types.Visibility.VisibilityConditions;
  componentRuntimeProps?: Types.Devlink.RuntimeProps;
  filterAllTagFilterAllTagVisibility?: Types.Visibility.VisibilityConditions;
  newestFilterTagFilterTagVariant?:
    | "Clear"
    | "All"
    | "Newest"
    | "User Tag 1"
    | "User Tag 2"
    | "User Tag 3"
    | "User Tag 4"
    | "User Tag 5";
  /** Newest Posts*/
  newestFIlterTagNewestFIlterTagRuntimeProps?: Types.Devlink.RuntimeProps;
  /** Newest Posts*/
  newestFIlterTagNewestFilterTagSlot?: Types.Devlink.Slot;
  newestFilterTagNewestFilterTagVisibility?: Types.Visibility.VisibilityConditions;
  newestFilterTagTagId?: string;
  newestFIlterTagTagRuntimeProps?: Types.Devlink.RuntimeProps;
  /** When activated, Filter Tags allow users to showcase a memory card on-screen for one or more designated Filter Tags. The component will then present any records that align with the tag criteria.*/
  newestFIlterTagTagText?: React.ReactNode;
  tag1Visibility?: Types.Visibility.VisibilityConditions;
  tag3RelativeTagSlot?: Types.Devlink.Slot;
  tag3RuntimeProps?: Types.Devlink.RuntimeProps;
  tag3Visibility?: Types.Visibility.VisibilityConditions;
  tag4FriendsTagSlot?: Types.Devlink.Slot;
  tag4RuntimeProps?: Types.Devlink.RuntimeProps;
  tag4Visibility?: Types.Visibility.VisibilityConditions;
  tag5CoWorkerTagSlot?: Types.Devlink.Slot;
  tag5RuntimeProps?: Types.Devlink.RuntimeProps;
  tag5Visibility?: Types.Visibility.VisibilityConditions;
  tag6BusinessPartnerTagSlot?: Types.Devlink.Slot;
  tag6Visibility?: Types.Visibility.VisibilityConditions;
  tag7ChurchFriendSlot?: Types.Devlink.Slot;
  tag7RuntimeProps?: Types.Devlink.RuntimeProps;
  tag7Visibility?: Types.Visibility.VisibilityConditions;
  tag8NeverMetTagSlot?: Types.Devlink.Slot;
  tag8RuntimeProps?: Types.Devlink.RuntimeProps;
  tag8Visibility?: Types.Visibility.VisibilityConditions;
  userFilterTagsFilterTagVariant?:
    | "Clear"
    | "All"
    | "Newest"
    | "User Tag 1"
    | "User Tag 2"
    | "User Tag 3"
    | "User Tag 4"
    | "User Tag 5";
  /** When submitting a memory, the user is presented with input options to specify hashtags related to their post. Suggestions populate the remaining filter tag options in the UI and are generated based on the content entered in the hashtag input field.*/
  userFilterTagsTagText?: React.ReactNode;
  /** Inserted Based On User Generated Tags when Submitting the Memory Form*/
  userFilterTagsUserFilterTagsRuntimeProps?: Types.Devlink.RuntimeProps;
  /** Inserted Based On User Generated Tags when Submitting the Memory Form*/
  userFilterTagsUserFilterTagsSlot?: Types.Devlink.Slot;
  userGeneratedTagId?: string;
  userGeneratedTagVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
