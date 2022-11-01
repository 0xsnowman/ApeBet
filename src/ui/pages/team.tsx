import React from "react";

import { Box, Image, Flex, Grid, GridItem, Text } from "ui/atoms";
import { Accordian, Page } from "ui/molecules";
import { faqData } from "config/faqs";
import Images from "assets/images";

const Team = () => {
  return (
    <Page className="page-team" backgroundColor="#F5F3AD">
      <Flex justifyContent="center" alignItems="center" height={"100%"}>
        <Box padding={30} width="100%" height={"100%"}>
          <Box borderColor="black" borderWidth={6} width="100%" height={"100%"}>
            <Flex justifyContent="space-between" gap={20} alignItems="center">
              <Flex flex={1}>
                <Box padding={20}>
                  <Accordian contents={faqData} />
                </Box>
              </Flex>
              <Flex flex={1}>
                <Box padding={20}>
                  <Grid gap={40}>
                    <GridItem columns={6}>
                      <Box
                        borderWidth={6}
                        borderColor="black"
                        backgroundColor="black"
                      >
                        <Flex flexDirection="column" gap={6}>
                          <Image image={Images.founder} />
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
                    </GridItem>
                    <GridItem columns={6}>
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
                    </GridItem>
                    <GridItem columns={6}>
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
                    </GridItem>
                    <GridItem columns={6}>
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
                    </GridItem>
                  </Grid>
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
