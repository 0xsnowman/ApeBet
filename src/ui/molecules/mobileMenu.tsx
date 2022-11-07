import React, { useState } from "react";
import { Box, Flex, Icon, Text } from "ui/atoms";
import Icons from "assets/icons";
import { COLORS } from "config/colors";
import { Z_INDEX_LEVELS } from "config/dimensions";
import useWindowDimensions from "hooks/useWindowDimensions";
import { useNavigate } from "react-router-dom";

interface IMobileMenuProps {
  hasDeals?: boolean;
}

const MobileMenu: React.FC<IMobileMenuProps> = ({ hasDeals = true }) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const { deviceWidth, deviceHeight } = useWindowDimensions();
  const navigate = useNavigate();

  return (
    <>
      <Box zIndex={Z_INDEX_LEVELS.MAXIMUM} cursor>
        {<Box padding={2} />}
        <Icon
          icon={!collapsed ? Icons.close : Icons.menu}
          size={collapsed ? "UPPERMEDIUM" : "MEDIUM"}
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        />
        {!collapsed && (
          <Box
            position="fixed"
            width={deviceWidth}
            height={deviceHeight}
            backgroundColor={COLORS.BLUE_THEME_DARK_BLUE}
            top={0}
            left={0}
            padding={20}
          >
            <Box
              position="absolute"
              top={0}
              right={0}
              cursor
              padding={40}
              zIndex={Z_INDEX_LEVELS.MAXIMUM}
              onClick={() => {
                setCollapsed(true);
              }}
            >
              <Icon icon={Icons.close}></Icon>
            </Box>
            <Box padding={30} />
            <Flex flexDirection="column">
              <Box
                width="100%"
                padding={20}
                onClick={() => {
                  setCollapsed(true);
                  navigate("/home");
                }}
              >
                <Flex justifyContent="space-between">
                  <Text
                    type="undersubtitle"
                    fontWeight={600}
                    color={COLORS.BLUE_THEME_WHITE_BLUE}
                  >
                    Home
                  </Text>
                </Flex>
              </Box>
              <Box
                width="100%"
                padding={20}
                onClick={() => {
                  setCollapsed(true);
                  navigate("/roadmap");
                }}
              >
                <Flex justifyContent="space-between">
                  <Text
                    type="undersubtitle"
                    fontWeight={600}
                    color={COLORS.BLUE_THEME_WHITE_BLUE}
                  >
                    Roadmap
                  </Text>
                </Flex>
              </Box>
              <Box
                width="100%"
                padding={20}
                onClick={() => {
                  setCollapsed(true);
                  navigate("/team");
                }}
              >
                <Flex justifyContent="space-between">
                  <Text
                    type="undersubtitle"
                    fontWeight={600}
                    color={COLORS.BLUE_THEME_WHITE_BLUE}
                  >
                    Team
                  </Text>
                </Flex>
              </Box>
              <Box
                width="100%"
                padding={20}
                cursor
                onClick={() => {
                  setCollapsed(true);
                  window.location.replace("https://twitter.com/ApeBetNFT");
                }}
              >
                <Flex justifyContent="flex-start" alignItems="center" gap={20}>
                  <Text
                    type="undersubtitle"
                    fontWeight={600}
                    color={COLORS.BLUE_THEME_WHITE_BLUE}
                  >
                    Twitter
                  </Text>
                  <Box marginTop={4}>
                    <Icon icon={Icons.twitter} size="MEDIUM"></Icon>
                  </Box>
                </Flex>
              </Box>
              <Box
                width="100%"
                padding={20}
                cursor
                onClick={() => {
                  window.location.replace("https://discord.gg/EbmhvkrzUm");
                }}
              >
                <Flex justifyContent="flex-start" alignItems="center" gap={20}>
                  <Text
                    type="undersubtitle"
                    fontWeight={600}
                    color={COLORS.BLUE_THEME_WHITE_BLUE}
                  >
                    Discord
                  </Text>
                  <Box marginTop={4}>
                    <Icon icon={Icons.discord} size="MEDIUM"></Icon>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        )}
      </Box>
    </>
  );
};

export default MobileMenu;
