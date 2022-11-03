import React, { useState } from "react";

import { Box, Image, Flex } from "ui/atoms";
import { Page } from "ui/molecules";

import Icons from "assets/icons";
import useWindowDimensions from "hooks/useWindowDimensions";
import { WINDOW_SIZES } from "config/dimensions";

const Home = () => {
  const { deviceWidth } = useWindowDimensions();
  const [logoColor, setLogoColor] = useState<"redBlack" | "blackRed">(
    "blackRed"
  );
  return (
    <Page className="page-home" backgroundColor="#F5F3AD">
      <Flex justifyContent="center" alignItems="center" height={"100%"}>
        <Box
          onMouseEnter={() => {
            setLogoColor(logoColor === "blackRed" ? "redBlack" : "blackRed");
          }}
          position="relative"
        >
          <Flex justifyContent="center" alignItems="center">
            <Image
              image={logoColor === "blackRed" ? Icons.logoBr : Icons.logoRb}
              width={deviceWidth > WINDOW_SIZES.SIZE_768 ? "auto" : "50%"}
            />
          </Flex>
        </Box>
      </Flex>
    </Page>
  );
};

export default Home;
