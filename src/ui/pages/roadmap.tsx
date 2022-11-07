import React from "react";

import { Box, Flex, Text, Image } from "ui/atoms";
import { Page } from "ui/molecules";
import Images from "assets/images";
import Icons from "assets/icons";
import { WINDOW_SIZES } from "config/dimensions";
import useWindowDimensions from "hooks/useWindowDimensions";

const RoadMap = () => {
  const { deviceWidth } = useWindowDimensions();
  return (
    <Page className="page-team" backgroundColor="#F5F3AD">
      <Flex justifyContent="center" alignItems="center" height={"100%"}>
        <Box
          paddingHorizontal={30}
          paddingVertical={deviceWidth >= WINDOW_SIZES.SIZE_768 ? 30 : 0}
          width="100%"
          height={"100%"}
          marginLeft={deviceWidth < WINDOW_SIZES.SIZE_768 ? -60 : 0}
        >
          <Box
            borderColor={
              deviceWidth >= WINDOW_SIZES.SIZE_768 ? "black" : "transparent"
            }
            borderWidth={6}
            width="100%"
            height={"100%"}
            paddingHorizontal={20}
            paddingVertical={deviceWidth >= WINDOW_SIZES.SIZE_768 ? 20 : 0}
          >
            <Flex gap={20}>
              {deviceWidth < WINDOW_SIZES.SIZE_768 && (
                <Flex flex={1}>
                  <Box
                    width={6}
                    marginTop={10}
                    height="100%"
                    backgroundColor="black"
                  ></Box>
                </Flex>
              )}
              <Box>
                <Box
                  cursor
                  borderColor="black"
                  borderWidth={8}
                  paddingHorizontal={20}
                  paddingVertical={5}
                  backgroundColor="white"
                  width={"fit-content"}
                  marginLeft={deviceWidth < WINDOW_SIZES.SIZE_768 ? -40 : 0}
                >
                  <Flex justifyContent="space-between" gap={20}>
                    <Text
                      type={
                        deviceWidth >= WINDOW_SIZES.SIZE_768
                          ? "subtitle"
                          : deviceWidth > WINDOW_SIZES.SIZE_375
                          ? "paragraph"
                          : "plain"
                      }
                      color={"black"}
                      fontWeight={600}
                    >
                      ROADMAP
                    </Text>
                    <Text
                      type={
                        deviceWidth >= WINDOW_SIZES.SIZE_768
                          ? "subtitle"
                          : deviceWidth > WINDOW_SIZES.SIZE_375
                          ? "paragraph"
                          : "plain"
                      }
                      color={"red"}
                      fontWeight={600}
                    >
                      Q4 2022
                    </Text>
                  </Flex>
                </Box>
                <Box height={20} />
                <Flex
                  justifyContent="space-between"
                  gap={20}
                  alignItems="flex-start"
                  flexDirection={
                    deviceWidth >= WINDOW_SIZES.SIZE_768 ? "row" : "column"
                  }
                >
                  <Flex
                    flex={2}
                    flexDirection="column"
                    justifyContent="space-around"
                    gap={30}
                  >
                    <Box
                      cursor
                      borderColor="black"
                      borderWidth={8}
                      paddingHorizontal={20}
                      paddingVertical={15}
                      backgroundColor="#F3F097"
                      position="relative"
                    >
                      {deviceWidth < WINDOW_SIZES.SIZE_768 && (
                        <Box
                          position="absolute"
                          left={-30}
                          top="50%"
                          width={30}
                          height={6}
                          backgroundColor="black"
                        />
                      )}
                      <Box
                        cursor
                        borderColor="black"
                        borderWidth={8}
                        paddingHorizontal={20}
                        paddingVertical={5}
                        backgroundColor="white"
                        width={"fit-content"}
                      >
                        <Flex justifyContent="space-between" gap={20}>
                          <Flex>
                            <Text
                              type={
                                deviceWidth >= WINDOW_SIZES.SIZE_768
                                  ? "subtitle"
                                  : deviceWidth > WINDOW_SIZES.SIZE_375
                                  ? "paragraph"
                                  : "plain"
                              }
                              color={"black"}
                              fontWeight={600}
                            >
                              APE
                            </Text>
                            <Text
                              type={
                                deviceWidth >= WINDOW_SIZES.SIZE_768
                                  ? "subtitle"
                                  : deviceWidth > WINDOW_SIZES.SIZE_375
                                  ? "paragraph"
                                  : "plain"
                              }
                              color={"red"}
                              fontWeight={600}
                            >
                              BET
                            </Text>
                          </Flex>
                          <Text
                            type={
                              deviceWidth >= WINDOW_SIZES.SIZE_768
                                ? "subtitle"
                                : deviceWidth > WINDOW_SIZES.SIZE_375
                                ? "paragraph"
                                : "plain"
                            }
                            color={"black"}
                            fontWeight={600}
                          >
                            CASINO
                          </Text>
                        </Flex>
                      </Box>
                      <Box height={10} />
                      <Flex gap={30}>
                        {deviceWidth >= WINDOW_SIZES.SIZE_768 && (
                          <Text color="black">
                            Grand launch of our ApeBet casino.
                            <br />
                            <br /> We will have a massive player base of players
                            who extend out side of the NFT space.
                            <br />
                            <br /> What does this mean to you?
                            <br />
                            <br /> It will largely increase the profits what the
                            casino will bring in.
                            <br />
                            <br /> Giving our holders a very high rakeback for
                            holding the ApeBet NFT.
                          </Text>
                        )}
                        {deviceWidth < WINDOW_SIZES.SIZE_768 && (
                          <Text color="black">
                            Grand launch of our ApeBet casino.
                          </Text>
                        )}
                        <Box width="100%">
                          <Image image={Images.apeBetSlider} width="100%" />
                        </Box>
                      </Flex>
                    </Box>
                    <Box
                      cursor
                      borderColor="black"
                      borderWidth={8}
                      paddingHorizontal={20}
                      paddingVertical={15}
                      backgroundColor="#F3F097"
                      position="relative"
                    >
                      {deviceWidth < WINDOW_SIZES.SIZE_768 && (
                        <Box
                          position="absolute"
                          left={-30}
                          top="50%"
                          width={30}
                          height={6}
                          backgroundColor="black"
                        />
                      )}
                      <Box
                        cursor
                        borderColor="black"
                        borderWidth={8}
                        paddingHorizontal={20}
                        paddingVertical={5}
                        backgroundColor="white"
                        width={"fit-content"}
                      >
                        <Flex justifyContent="space-between" gap={20}>
                          <Text
                            type={
                              deviceWidth >= WINDOW_SIZES.SIZE_768
                                ? "subtitle"
                                : deviceWidth > WINDOW_SIZES.SIZE_375
                                ? "paragraph"
                                : "plain"
                            }
                            color={"red"}
                            fontWeight={600}
                          >
                            $ABET
                          </Text>
                          <Text
                            type={
                              deviceWidth >= WINDOW_SIZES.SIZE_768
                                ? "subtitle"
                                : deviceWidth > WINDOW_SIZES.SIZE_375
                                ? "paragraph"
                                : "plain"
                            }
                            color={"black"}
                            fontWeight={600}
                          >
                            TOKEN
                          </Text>
                        </Flex>
                      </Box>
                      <Box height={10} />
                      <Flex gap={30}>
                        {deviceWidth >= WINDOW_SIZES.SIZE_768 && (
                          <Text color="black">
                            Utility :<br />
                            <br /> 1. Enter massive raffles
                            <br /> 2. Swap to crypto in real time
                            <br /> 3. Payment for ApeBet products and services
                            <br />
                            <br /> The $ABET token is the utility token for
                            ApeBet ecosystem. It will have a large liquidity
                            pool backing it up at all times so when our holders
                            receive the token for holding their NFT. They can
                            exchange it for crypto in real time. Enter massive
                            raffles that will be ongoing on our website at all
                            times. $ABET token is a separate bonus from our
                            periodical payouts what we will have every 2 weeks
                            for our loyal holders.
                          </Text>
                        )}
                        {deviceWidth < WINDOW_SIZES.SIZE_768 && (
                          <Text color="black">
                            1. Enter massive raffles
                            <br /> 2. Swap to crypto in real time
                            <br /> 3. Payment for ApeBet products and services
                          </Text>
                        )}
                        <Box>
                          <Image image={Images.apeBetTarget} width="100%" />
                        </Box>
                      </Flex>
                    </Box>
                    <Box
                      cursor
                      borderColor="black"
                      borderWidth={8}
                      paddingHorizontal={20}
                      paddingVertical={15}
                      backgroundColor="#F3F097"
                      position="relative"
                    >
                      {deviceWidth < WINDOW_SIZES.SIZE_768 && (
                        <Box
                          position="absolute"
                          left={-30}
                          top="50%"
                          width={30}
                          height={6}
                          backgroundColor="black"
                        />
                      )}
                      <Box
                        cursor
                        borderColor="black"
                        borderWidth={8}
                        paddingHorizontal={20}
                        paddingVertical={5}
                        backgroundColor="white"
                        width={"fit-content"}
                      >
                        <Flex justifyContent="flex-start">
                          <Text
                            type={
                              deviceWidth >= WINDOW_SIZES.SIZE_768
                                ? "subtitle"
                                : deviceWidth > WINDOW_SIZES.SIZE_375
                                ? "paragraph"
                                : "plain"
                            }
                            color={"black"}
                            fontWeight={600}
                          >
                            AIR
                          </Text>
                          <Text
                            type={
                              deviceWidth >= WINDOW_SIZES.SIZE_768
                                ? "subtitle"
                                : deviceWidth > WINDOW_SIZES.SIZE_375
                                ? "paragraph"
                                : "plain"
                            }
                            color={"red"}
                            fontWeight={600}
                          >
                            DROP
                          </Text>
                        </Flex>
                      </Box>
                      <Box height={10} />
                      <Flex gap={30}>
                        {deviceWidth >= WINDOW_SIZES.SIZE_768 && (
                          <Text color="black">
                            Ape Juice airdrop to APEBET NFT holders.
                            <br />
                            <br /> You can either hold the Juice as it gets
                            scares it will go up in value or use it on your
                            ApeBet NFT.
                          </Text>
                        )}
                        {deviceWidth < WINDOW_SIZES.SIZE_768 && (
                          <Text color="black">
                            Ape Juice airdrop to APEBET NFT holders.
                          </Text>
                        )}
                        <Box width="100%">
                          <Image image={Images.apeBetFlag} width="100%" />
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                  <Flex flex={3} height="100%">
                    <Box
                      cursor
                      borderColor="black"
                      borderWidth={8}
                      paddingHorizontal={20}
                      paddingVertical={15}
                      backgroundColor="#F3F097"
                      width={"100%"}
                      position="relative"
                    >
                      {deviceWidth < WINDOW_SIZES.SIZE_768 && (
                        <Box
                          position="absolute"
                          left={-30}
                          top="50%"
                          width={30}
                          height={6}
                          backgroundColor="black"
                        />
                      )}
                      <Box
                        cursor
                        borderColor="black"
                        borderWidth={8}
                        paddingHorizontal={20}
                        paddingVertical={5}
                        backgroundColor="white"
                        width={"fit-content"}
                      >
                        <Flex justifyContent="space-between" gap={20}>
                          <Text
                            type={
                              deviceWidth >= WINDOW_SIZES.SIZE_768
                                ? "subtitle"
                                : deviceWidth > WINDOW_SIZES.SIZE_375
                                ? "paragraph"
                                : "plain"
                            }
                            color={"black"}
                            fontWeight={600}
                          >
                            INFECTED
                          </Text>
                          <Text
                            type={
                              deviceWidth >= WINDOW_SIZES.SIZE_768
                                ? "subtitle"
                                : deviceWidth > WINDOW_SIZES.SIZE_375
                                ? "paragraph"
                                : "plain"
                            }
                            color={"red"}
                            fontWeight={600}
                          >
                            APES
                          </Text>
                        </Flex>
                      </Box>
                      <Box height={10} />
                      <Flex>
                        {deviceWidth >= WINDOW_SIZES.SIZE_768 && (
                          <Text color="black">
                            Infected apes will be an extension collection of our
                            ApeBet collection. Using ape juice on the ApeBet NFT
                            will create another NFT under a new collection. The
                            traits of your Infected ape will be corresponding to
                            your current NFTs traits.
                            <br />
                            <br /> Utility
                            <br />
                            <br /> - Owning APEBET NFT and INFECTED APE NFT will
                            grant you a special access to bonus rewards and
                            rakebacks
                            <br /> - Staking Infected apes and APEBET NFTs will
                            increase your earnings of $ABET and periodical
                            profit payouts by the casino by 150%
                            <br /> - Much more to come
                          </Text>
                        )}
                        {deviceWidth < WINDOW_SIZES.SIZE_768 && (
                          <Text color="black">
                            Use Ape Juice to transform ApeBet NFT in to a
                            Infected Ape
                          </Text>
                        )}
                        {/* <Icon icon={Icons.logo} size="EXTRA_SUPER_LARGE" /> */}
                        <div
                          className="square"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                        >
                          <Image image={Icons.logo} width="100%" />
                        </div>
                      </Flex>

                      <Box height={20} />
                      <Box position="relative">
                        <Flex
                          gap={0}
                          justifyContent="center"
                          alignItems="center"
                          flexDirection={
                            deviceWidth >= WINDOW_SIZES.SIZE_768
                              ? "row"
                              : "column"
                          }
                        >
                          <Flex flex={2} justifyContent="center">
                            <div className="square">
                              <Image
                                image={Images.infectedJuice}
                                width="100%"
                              />
                            </div>
                          </Flex>
                          <Flex
                            flex={1}
                            justifyContent="center"
                            alignItems="center"
                            height={"100%"}
                          >
                            <Text color="black" type="title">
                              +
                            </Text>
                          </Flex>
                          <Flex flex={2} justifyContent="center">
                            <div className="square">
                              <Image image={Images.apeBetFlag} width="100%" />
                            </div>
                          </Flex>
                          <Flex
                            flex={1}
                            justifyContent="center"
                            alignItems="center"
                            height={"100%"}
                          >
                            <Text color="black" type="title">
                              =
                            </Text>
                          </Flex>
                          <Flex flex={2} justifyContent="center">
                            <div className="square">
                              <Image
                                image={Images.infectedNormal}
                                width="100%"
                              />
                            </div>
                          </Flex>
                        </Flex>
                      </Box>
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Page>
  );
};

export default RoadMap;
