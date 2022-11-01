import React from "react";

import { Box, Flex, Icon, Text } from "ui/atoms";
import Icons from "assets/icons";

const Footer = () => {
  return (
    <Box backgroundColor="#F5F3AD" padding={20}>
      <Flex justifyContent="space-between">
        <Box />
        <Box>
          <Flex flexDirection="column" gap={10} alignItems="center">
            <Text color="black" fontWeight={600} center>
              Follow Us
            </Text>
            <Box>
              <Flex gap={10} justifyContent="center">
                <Box
                  cursor
                  onClick={() => {
                    window.location.replace("https://twitter.com/ApeBetNFT");
                  }}
                >
                  <Icon icon={Icons.twitter}></Icon>
                </Box>
                <Box
                  cursor
                  onClick={() => {
                    window.location.replace("/#");
                  }}
                >
                  <Icon icon={Icons.discord}></Icon>
                </Box>
                <Box
                  cursor
                  onClick={() => {
                    window.location.replace("/#");
                  }}
                >
                  <Icon icon={Icons.instagram}></Icon>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex flexDirection="column" gap={5}>
            <Text color="black" fontWeight={600}>
              ©APEBET Limited
            </Text>
            <Text color="black" fontWeight={600} justify>
              2019-2022
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
