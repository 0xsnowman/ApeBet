import React from "react";

import { Container, Box, Image, Flex } from "ui/atoms";
import { Page } from "ui/molecules";

import Icons from "assets/icons";

const Home = () => {
  return (
    <Page className="page-home" backgroundColor="#F5F3AD">
      <Flex justifyContent="center" alignItems="center" height={"100%"}>
        <Box>
          <Image image={Icons.mainImg} />
        </Box>
      </Flex>
    </Page>
  );
};

export default Home;
