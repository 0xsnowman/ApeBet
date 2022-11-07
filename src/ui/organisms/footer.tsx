import React from "react";

import { Box, Flex, Icon, Text } from "ui/atoms";
import Icons from "assets/icons";
import useWindowDimensions from "hooks/useWindowDimensions";
import { WINDOW_SIZES } from "config/dimensions";

const Footer = () => {
  const { deviceWidth } = useWindowDimensions();
  return (
    <Box
      backgroundColor="#F5F3AD"
      padding={20}
      borderTopWidth={6}
      borderColor={
        deviceWidth > WINDOW_SIZES.SIZE_768 ? "transparent" : "black"
      }
    >
      {deviceWidth >= WINDOW_SIZES.SIZE_768 && (
        <Flex justifyContent="space-around" gap={20}>
          <Flex flex={1}>
            <Box />
          </Flex>
          <Flex flex={1} flexDirection="column" gap={10} alignItems="center">
            <Text color="black" fontWeight={600} center>
              Follow Us
            </Text>
            <Box>
              <Flex justifyContent="center" gap={20}>
                <Box
                  cursor
                  onClick={() => {
                    window.location.replace("https://twitter.com/ApeBetNFT");
                  }}
                >
                  <Icon icon={Icons.twitterBlack} size="MEDIUM" />
                </Box>
                <Box
                  cursor
                  onClick={() => {
                    window.location.replace("https://discord.gg/EbmhvkrzUm");
                  }}
                >
                  <Icon icon={Icons.discordBlack} size="MEDIUM" />
                </Box>
              </Flex>
            </Box>
          </Flex>
          <Flex flex={1} flexDirection="column" gap={5} alignItems="flex-end">
            <Text color="black" fontWeight={600}>
              ©APEBET Limited
            </Text>
            <Text color="black" fontWeight={600} justify>
              2019-2022
            </Text>
          </Flex>
        </Flex>
      )}
      {deviceWidth < WINDOW_SIZES.SIZE_768 && (
        <Flex justifyContent="center" gap={40}>
          <Box
            cursor
            onClick={() => {
              window.location.replace("https://twitter.com/ApeBetNFT");
            }}
          >
            <Icon icon={Icons.twitterBlack} size="MEDIUM" />
          </Box>
          <Box
            cursor
            onClick={() => {
              window.location.replace("https://discord.gg/EbmhvkrzUm");
            }}
          >
            <Icon icon={Icons.discordBlack} size="MEDIUM" />
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default Footer;
