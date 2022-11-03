import React from "react";

import { Box, Image, Flex, Text } from "ui/atoms";
import { Accordian, Page } from "ui/molecules";
import { faqData } from "config/faqs";
import Images from "assets/images";
import useWindowDimensions from "hooks/useWindowDimensions";
import { WINDOW_SIZES } from "config/dimensions";

const Team = () => {
  const { deviceWidth } = useWindowDimensions();
  return (
    <Page className="page-team" backgroundColor="#F5F3AD">
      <Flex justifyContent="center" alignItems="center" height={"100%"}>
        <Box padding={30} width="100%" height={"100%"}>
          <Box borderColor="black" borderWidth={6} width="100%" height={"100%"}>
            <Flex
              justifyContent="space-between"
              gap={20}
              alignItems="center"
              flexDirection={
                deviceWidth > WINDOW_SIZES.SIZE_768 ? "row" : "column"
              }
            >
              <Flex flex={1}>
                <Box padding={20}>
                  <Box paddingHorizontal={30} paddingVertical={10}>
                    <Text type="logo" color="black" fontWeight={600}>
                      FAQ
                    </Text>
                  </Box>
                  <Accordian contents={faqData} />
                </Box>
              </Flex>
              <Flex flex={1}>
                <Box padding={20}>
                  <Flex flexDirection="column" gap={20}>
                    <Flex
                      flexDirection={
                        deviceWidth > WINDOW_SIZES.SIZE_768 ? "row" : "column"
                      }
                      gap={20}
                    >
                      <Box
                        borderWidth={6}
                        borderColor="black"
                        backgroundColor="black"
                        position="relative"
                      >
                        <Flex flexDirection="column" gap={6}>
                          <Image image={Images.founder} width="100%" />
                          <Box backgroundColor="white">
                            <Flex flexDirection="column">
                              <Text color="red" center>
                                AP3
                              </Text>
                              <Text color="black" center>
                                Founder
                              </Text>
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
                      <Box
                        borderWidth={6}
                        borderColor="black"
                        backgroundColor="black"
                      >
                        <Flex flexDirection="column" gap={6}>
                          <Image image={Images.leader} />
                          <Box backgroundColor="white">
                            <Flex flexDirection="column">
                              <Text color="red" center>
                                CollabAPG
                              </Text>
                              <Text color="black" center>
                                Community Lead
                              </Text>
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
                    </Flex>
                    <Flex
                      flexDirection={
                        deviceWidth > WINDOW_SIZES.SIZE_768 ? "row" : "column"
                      }
                      gap={20}
                    >
                      <Box
                        borderWidth={6}
                        borderColor="black"
                        backgroundColor="black"
                      >
                        <Flex flexDirection="column" gap={6}>
                          <Image image={Images.manager} />
                          <Box backgroundColor="white">
                            <Flex flexDirection="column">
                              <Text color="red" center>
                                0xSabik
                              </Text>
                              <Text color="black" center>
                                Community Manager
                              </Text>
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
                      <Box
                        borderWidth={6}
                        borderColor="black"
                        backgroundColor="black"
                      >
                        <Flex flexDirection="column" gap={6}>
                          <Image image={Images.marketer} />
                          <Box backgroundColor="white">
                            <Flex flexDirection="column">
                              <Text color="red" center>
                                HNZSY
                              </Text>
                              <Text color="black" center>
                                Marketing Specialist
                              </Text>
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
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

export default Team;
