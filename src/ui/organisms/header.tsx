import React, { useState } from "react";

import { Box, Flex, Icon, Text } from "ui/atoms";
import Icons from "assets/icons";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [currentSelection, setCurrentSelection] = useState<
    "home" | "roadmap" | "team" | "whitepaper"
  >("home");
  const [currentHovered, setCurrentHovered] = useState<
    "home" | "roadmap" | "team" | "whitepaper" | "none"
  >("none");
  const [logoColor, setLogoColor] = useState<"redBlack" | "blackRed">(
    "blackRed"
  );

  return (
    <Box backgroundColor="#F5F3AD" padding={20}>
      <Flex justifyContent="space-between" alignItems="center">
        <Box
          onMouseEnter={() => {
            setLogoColor(logoColor === "blackRed" ? "redBlack" : "blackRed");
          }}
        >
          <Icon
            icon={logoColor === "blackRed" ? Icons.logoBr : Icons.logoRb}
            size="EXTRA_SUPER_LARGE"
          />
        </Box>
        <Box
          borderColor="black"
          borderWidth={8}
          paddingHorizontal={20}
          paddingVertical={5}
          backgroundColor="white"
        >
          <Flex justifyContent="space-between" gap={30} alignItems="center">
            <Box
              cursor
              onClick={() => {
                setCurrentSelection("home");
                navigate("/home");
              }}
              onMouseEnter={() => {
                setCurrentHovered("home");
              }}
              onMouseLeave={() => {
                setCurrentHovered("none");
              }}
            >
              <Text
                type="title"
                color={
                  currentSelection === "home" || currentHovered === "home"
                    ? "red"
                    : "black"
                }
                fontWeight={600}
              >
                HOME
              </Text>
            </Box>
            <Box
              cursor
              onClick={() => {
                setCurrentSelection("roadmap");
                navigate("/roadmap");
              }}
              onMouseEnter={() => {
                setCurrentHovered("roadmap");
              }}
              onMouseLeave={() => {
                setCurrentHovered("none");
              }}
            >
              <Text
                type="title"
                color={
                  currentSelection === "roadmap" || currentHovered === "roadmap"
                    ? "red"
                    : "black"
                }
                fontWeight={600}
              >
                ROADMAP
              </Text>
            </Box>
            <Box
              cursor
              onClick={() => {
                setCurrentSelection("team");
                navigate("/team");
              }}
              onMouseEnter={() => {
                setCurrentHovered("team");
              }}
              onMouseLeave={() => {
                setCurrentHovered("none");
              }}
            >
              <Text
                type="title"
                color={
                  currentSelection === "team" || currentHovered === "team"
                    ? "red"
                    : "black"
                }
                fontWeight={600}
              >
                TEAM
              </Text>
            </Box>
            <Box
              cursor
              onClick={() => {
                setCurrentSelection("whitepaper");
                navigate("/whitepaper");
              }}
              onMouseEnter={() => {
                setCurrentHovered("whitepaper");
              }}
              onMouseLeave={() => {
                setCurrentHovered("none");
              }}
            >
              <Text
                type="title"
                color={
                  currentSelection === "whitepaper" ||
                  currentHovered === "whitepaper"
                    ? "red"
                    : "black"
                }
                fontWeight={600}
              >
                WHITEPAPER
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
