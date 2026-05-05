"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import Image from "../webflow_modules/Basic/components/Image";
import Link from "../webflow_modules/Basic/components/Link";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import SliderArrow from "../webflow_modules/Slider/components/SliderArrow";
import SliderMask from "../webflow_modules/Slider/components/SliderMask";
import SliderNav from "../webflow_modules/Slider/components/SliderNav";
import SliderSlide from "../webflow_modules/Slider/components/SliderSlide";
import SliderWrapper from "../webflow_modules/Slider/components/SliderWrapper";
import Span from "../webflow_modules/Basic/components/Span";

export function PhotoWall({}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"section_gallery17"} tag={"section"}>
        <Block className={"padding-global padding-section-large"} tag={"div"}>
          <Block className={"gallery17_component"} tag={"div"}>
            <Block className={"container-small"} tag={"div"}>
              <Block className={"gallery17_header"} tag={"div"}>
                <Block
                  className={"eyebrow_component is-align-center"}
                  tag={"div"}
                >
                  <HtmlEmbed
                    className={"icon-1x1-xsmall"}
                    content={""}
                    value={
                      "%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22currentColor%22%3E%3Cpath%20d%3D%22M20%2013C18.3221%2013%2016.7514%2013.4592%2015.4068%2014.2587C16.5908%2015.6438%2017.5269%2017.2471%2018.1465%2019H20V13ZM16.0037%2019C14.0446%2014.3021%209.4079%2011%204%2011V19H16.0037ZM4%209C7.82914%209%2011.3232%2010.4348%2013.9738%2012.7961C15.7047%2011.6605%2017.7752%2011%2020%2011V3H21.0082C21.556%203%2022%203.44495%2022%203.9934V20.0066C22%2020.5552%2021.5447%2021%2021.0082%2021H2.9918C2.44405%2021%202%2020.5551%202%2020.0066V3.9934C2%203.44476%202.45531%203%202.9918%203H6V1H8V5H4V9ZM18%201V5H10V3H16V1H18ZM16.5%2010C15.6716%2010%2015%209.32843%2015%208.5C15%207.67157%2015.6716%207%2016.5%207C17.3284%207%2018%207.67157%2018%208.5C18%209.32843%2017.3284%2010%2016.5%2010Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                    }
                  />
                  <Block tag={"div"}>{"Gallery"}</Block>
                </Block>
                <Heading className={"heading-style-h3"} tag={"h2"}>
                  {"Showcase your best work beautifully."}
                </Heading>
                <Paragraph
                  className={
                    "text-size-regular text-color-secondary text-width-50ch"
                  }
                >
                  {
                    "Use clear, high-quality images, maintain consistent layouts, and avoid clutter. Arrange visuals to tell a story and add captions for context."
                  }
                </Paragraph>
                <Block className={"margin-top margin-small"} tag={"div"}>
                  <Block className={"button-group"} tag={"div"}>
                    <Link
                      block={"inline"}
                      button={false}
                      className={"button-2"}
                      options={{
                        href: "#",
                        preload: "none",
                      }}
                    >
                      <Block tag={"div"}>
                        {"Get started"}
                        <Span
                          className={
                            " text-color-alternate-secondary hide-mobile-portrait"
                          }
                        >
                          {" - it's free"}
                        </Span>
                      </Block>
                    </Link>
                    <Link
                      block={"inline"}
                      button={false}
                      className={"button-2 is-secondary is-neutral"}
                      options={{
                        href: "#",
                        preload: "none",
                      }}
                    >
                      <Block tag={"div"}>{"View all galery"}</Block>
                    </Link>
                  </Block>
                </Block>
              </Block>
            </Block>
            <SliderWrapper
              animation={"slide"}
              autoMax={0}
              autoplay={false}
              className={"gallery17_slider"}
              data-animation={"slide"}
              data-duration={"500"}
              delay={4000}
              disableSwipe={false}
              duration={500}
              easing={"ease"}
              hideArrows={false}
              iconArrows={true}
              infinite={false}
              navInvert={true}
              navNumbers={false}
              navRound={true}
              navShadow={false}
              navSpacing={3}
            >
              <SliderMask className={"gallery17_mask"}>
                <SliderSlide className={"gallery17_slide"} tag={"div"}>
                  <Block
                    className={"gallery17_slider-layout"}
                    id={"w-node-d79743a6-5930-ce9d-23d1-7f7db4d82354-b4d8233a"}
                    tag={"div"}
                  >
                    <Block
                      className={"gallery17_image-wrapper"}
                      id={
                        "w-node-d79743a6-5930-ce9d-23d1-7f7db4d82355-b4d8233a"
                      }
                      tag={"div"}
                    >
                      <Image
                        alt={""}
                        className={"gallery17_image"}
                        height={"auto"}
                        loading={"lazy"}
                        src={
                          "https://cdn.prod.website-files.com/66dfe6c268b3831a9055e822/66eaa04f23d292df9efe918f_placeholder-image-1x1.webp"
                        }
                        width={"auto"}
                      />
                    </Block>
                    <Block
                      className={"gallery17_right-slider-layout"}
                      id={
                        "w-node-d79743a6-5930-ce9d-23d1-7f7db4d82357-b4d8233a"
                      }
                      tag={"div"}
                    >
                      <Block
                        className={"gallery17_image-wrapper"}
                        id={
                          "w-node-d79743a6-5930-ce9d-23d1-7f7db4d82358-b4d8233a"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={""}
                          className={"gallery17_image"}
                          height={"auto"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/66dfe6c268b3831a9055e822/66eaa04f23d292df9efe918f_placeholder-image-1x1.webp"
                          }
                          width={"auto"}
                        />
                      </Block>
                      <Block
                        className={"gallery17_image-wrapper"}
                        id={
                          "w-node-d79743a6-5930-ce9d-23d1-7f7db4d8235a-b4d8233a"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={""}
                          className={"gallery17_image"}
                          height={"auto"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/66dfe6c268b3831a9055e822/66eaa04f23d292df9efe918f_placeholder-image-1x1.webp"
                          }
                          width={"auto"}
                        />
                      </Block>
                    </Block>
                  </Block>
                </SliderSlide>
                <SliderSlide className={"gallery17_slide"} tag={"div"}>
                  <Block
                    className={"gallery17_slider-layout"}
                    id={"w-node-d79743a6-5930-ce9d-23d1-7f7db4d8235d-b4d8233a"}
                    tag={"div"}
                  >
                    <Block
                      className={"gallery17_image-wrapper"}
                      id={
                        "w-node-d79743a6-5930-ce9d-23d1-7f7db4d8235e-b4d8233a"
                      }
                      tag={"div"}
                    >
                      <Image
                        alt={""}
                        className={"gallery17_image"}
                        height={"auto"}
                        loading={"lazy"}
                        src={
                          "https://cdn.prod.website-files.com/66dfe6c268b3831a9055e822/66eaa04f23d292df9efe918f_placeholder-image-1x1.webp"
                        }
                        width={"auto"}
                      />
                    </Block>
                    <Block
                      className={"gallery17_right-slider-layout"}
                      id={
                        "w-node-d79743a6-5930-ce9d-23d1-7f7db4d82360-b4d8233a"
                      }
                      tag={"div"}
                    >
                      <Block
                        className={"gallery17_image-wrapper"}
                        id={
                          "w-node-d79743a6-5930-ce9d-23d1-7f7db4d82361-b4d8233a"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={""}
                          className={"gallery17_image"}
                          height={"auto"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/66dfe6c268b3831a9055e822/66eaa04f23d292df9efe918f_placeholder-image-1x1.webp"
                          }
                          width={"auto"}
                        />
                      </Block>
                      <Block
                        className={"gallery17_image-wrapper"}
                        id={
                          "w-node-d79743a6-5930-ce9d-23d1-7f7db4d82363-b4d8233a"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={""}
                          className={"gallery17_image"}
                          height={"auto"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/66dfe6c268b3831a9055e822/66eaa04f23d292df9efe918f_placeholder-image-1x1.webp"
                          }
                          width={"auto"}
                        />
                      </Block>
                    </Block>
                  </Block>
                </SliderSlide>
                <SliderSlide className={"gallery17_slide"} tag={"div"}>
                  <Block
                    className={"gallery17_slider-layout"}
                    id={"w-node-d79743a6-5930-ce9d-23d1-7f7db4d82366-b4d8233a"}
                    tag={"div"}
                  >
                    <Block
                      className={"gallery17_image-wrapper"}
                      id={
                        "w-node-d79743a6-5930-ce9d-23d1-7f7db4d82367-b4d8233a"
                      }
                      tag={"div"}
                    >
                      <Image
                        alt={""}
                        className={"gallery17_image"}
                        height={"auto"}
                        loading={"lazy"}
                        src={
                          "https://cdn.prod.website-files.com/66dfe6c268b3831a9055e822/66eaa04f23d292df9efe918f_placeholder-image-1x1.webp"
                        }
                        width={"auto"}
                      />
                    </Block>
                    <Block
                      className={"gallery17_right-slider-layout"}
                      id={
                        "w-node-d79743a6-5930-ce9d-23d1-7f7db4d82369-b4d8233a"
                      }
                      tag={"div"}
                    >
                      <Block
                        className={"gallery17_image-wrapper"}
                        id={
                          "w-node-d79743a6-5930-ce9d-23d1-7f7db4d8236a-b4d8233a"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={""}
                          className={"gallery17_image"}
                          height={"auto"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/66dfe6c268b3831a9055e822/66eaa04f23d292df9efe918f_placeholder-image-1x1.webp"
                          }
                          width={"auto"}
                        />
                      </Block>
                      <Block
                        className={"gallery17_image-wrapper"}
                        id={
                          "w-node-d79743a6-5930-ce9d-23d1-7f7db4d8236c-b4d8233a"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={""}
                          className={"gallery17_image"}
                          height={"auto"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/66dfe6c268b3831a9055e822/66eaa04f23d292df9efe918f_placeholder-image-1x1.webp"
                          }
                          width={"auto"}
                        />
                      </Block>
                    </Block>
                  </Block>
                </SliderSlide>
              </SliderMask>
              <SliderArrow
                className={
                  "gallery17_slider-arrow-button hide-mobile-landscape"
                }
                dir={"left"}
              >
                <HtmlEmbed
                  className={"icon-1x1-small"}
                  content={""}
                  value={
                    "%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22currentColor%22%3E%3Cpath%20d%3D%22M7.82843%2010.9999H20V12.9999H7.82843L13.1924%2018.3638L11.7782%2019.778L4%2011.9999L11.7782%204.22168L13.1924%205.63589L7.82843%2010.9999Z%22%2F%3E%3C%2Fsvg%3E"
                  }
                />
              </SliderArrow>
              <SliderArrow
                className={
                  "gallery17_slider-arrow-button hide-mobile-landscape"
                }
                dir={"right"}
              >
                <HtmlEmbed
                  className={"icon-1x1-small"}
                  content={""}
                  value={
                    "%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22currentColor%22%3E%3Cpath%20d%3D%22M16.1716%2010.9999L10.8076%205.63589L12.2218%204.22168L20%2011.9999L12.2218%2019.778L10.8076%2018.3638L16.1716%2012.9999H4V10.9999H16.1716Z%22%2F%3E%3C%2Fsvg%3E"
                  }
                />
              </SliderArrow>
              <SliderNav className={"gallery17_slide-nav"} />
            </SliderWrapper>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
