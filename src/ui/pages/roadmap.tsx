import React from "react";

import { Box, Flex, Text } from "ui/atoms";
import { Page } from "ui/molecules";
import { WINDOW_SIZES } from "config/dimensions";
import useWindowDimensions from "hooks/useWindowDimensions";

const RoadMap = () => {
  const { deviceWidth } = useWindowDimensions();
  return (
    <Page className="page-team" backgroundColor="#F5F3AD">
      <Flex justifyContent="center" alignItems="center" height={"100%"}>
        <Box padding={30} width="100%" height={"100%"}>
          <Box
            borderColor="black"
            borderWidth={6}
            width="100%"
            height={"100%"}
            padding={20}
          >
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
                    deviceWidth > WINDOW_SIZES.SIZE_768
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
                    deviceWidth > WINDOW_SIZES.SIZE_768
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
                deviceWidth > WINDOW_SIZES.SIZE_768 ? "row" : "column"
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
                >
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
                            deviceWidth > WINDOW_SIZES.SIZE_768
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
                            deviceWidth > WINDOW_SIZES.SIZE_768
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
                          deviceWidth > WINDOW_SIZES.SIZE_768
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
                  <Text color="black">
                    Grand launch of our ApeBet casino where we will have a
                    massive player base of players who extend out side of the
                    NFT space. <br /> What does this mean to you?
                    <br /> It will largely increase the profits what the casino
                    will bring in. Giving our holders a very high rake back for
                    holding the ApeBet NFT.
                  </Text>
                </Box>
                <Box
                  cursor
                  borderColor="black"
                  borderWidth={8}
                  paddingHorizontal={20}
                  paddingVertical={15}
                  backgroundColor="#F3F097"
                >
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
                          deviceWidth > WINDOW_SIZES.SIZE_768
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
                          deviceWidth > WINDOW_SIZES.SIZE_768
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
                  <Text color="black">
                    Utility : 1. Enter massive raffles 2. Swap to crypto in real
                    time 3. Payment for APEBET products and services The $ABET
                    token is the utility token for ApeBet ecosystem. <br />
                    It will have a large liquidity pool backing it up at all
                    times so when our holders receive the token for holding
                    their NFT. They can exchange it for crypto in real time.
                    Enter massive raffles that will be ongoing on our website at
                    all times. $ABET token is a separate bonus from our
                    periodical payouts what we will have every 2 weeks for our
                    loyal holders.
                  </Text>
                </Box>
                <Box
                  cursor
                  borderColor="black"
                  borderWidth={8}
                  paddingHorizontal={20}
                  paddingVertical={15}
                  backgroundColor="#F3F097"
                >
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
                          deviceWidth > WINDOW_SIZES.SIZE_768
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
                          deviceWidth > WINDOW_SIZES.SIZE_768
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
                  <Text color="black">
                    Ape Juice airdrop to APEBET NFT holders. You can either hold
                    the Juice as it gets scares it will go up in value or use it
                    on your ApeBet NFT.
                  </Text>
                </Box>
              </Flex>
              <Flex flex={3} height="100%">
                <Box
                  cursor
                  borderColor="black"
                  borderWidth={8}
                  paddingHorizontal={20}
                  paddingVertical={15}
                  backgroundColor="transparent"
                  width={"100%"}
                >
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
                          deviceWidth > WINDOW_SIZES.SIZE_768
                            ? "subtitle"
                            : deviceWidth > WINDOW_SIZES.SIZE_375
                            ? "paragraph"
                            : "plain"
                        }
                        color={"black"}
                        fontWeight={600}
                      >
                        Infected
                      </Text>
                      <Text
                        type={
                          deviceWidth > WINDOW_SIZES.SIZE_768
                            ? "subtitle"
                            : deviceWidth > WINDOW_SIZES.SIZE_375
                            ? "paragraph"
                            : "plain"
                        }
                        color={"red"}
                        fontWeight={600}
                      >
                        Apes
                      </Text>
                    </Flex>
                  </Box>
                  <Box height={10} />
                  <Text color="black">
                    Infected apes will be an extension collection of our ApeBet
                    collection. Using ape juice on the ApeBet NFT will create
                    another NFT under a new collection. The traits of your
                    Infected ape will be corresponding to your current NFTs
                    traits. <br />
                    Utility - Owning APEBET NFT and INFECTED APE NFT will grant
                    you a special access to bonus rewards and rake backs -
                    Staking of Infected apes and APEBET NFTs will increase your
                    earnings of $ABET and periodical profit payouts by the
                    casino by 150%
                  </Text>

                  <Box height={20} />
                  <Flex
                    gap={20}
                    justifyContent="center"
                    flexDirection={
                      deviceWidth > WINDOW_SIZES.SIZE_768 ? "row" : "column"
                    }
                  >
                    <Flex flex={1} justifyContent="center">
                      {/* <Box
                        borderWidth={6}
                        borderColor="black"
                        padding={10}
                      >
                        <Text color="black">Normal Ape</Text>
                      </Box> */}
                      <div className="square">
                        <Text color="black" center>Normal Ape</Text>
                      </div>
                    </Flex>
                    <Flex flex={1} justifyContent="center">
                      <div className="square">
                        <Text color="black" center>Ape Juice</Text>
                      </div>
                    </Flex>
                    <Flex flex={1} justifyContent="center">
                      <div className="square">
                        <Text color="black" center>Infected Ape</Text>
                      </div>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Page>
  );
};

export default RoadMap;
