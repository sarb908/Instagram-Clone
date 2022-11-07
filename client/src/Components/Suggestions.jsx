import React from "react";
import styled from "styled-components";
import UserInfo from "./UserInfo";
import { Box } from "@chakra-ui/react";
const Suggestions = () => {
  return (
    <Box display={["none", "none", "block"]}>
      <Widgets>
        <UserInfo />
        <SuggestionsContainer>
          <SuggestionsHeader>
            <h4>Suggestions For You</h4>
            <p>See All</p>
          </SuggestionsHeader>
        </SuggestionsContainer>
        <p style={{ color: "rgb(212 212 216)", fontSize: 13, marginTop: 50 }}>
          @ 2022 INSTAGRAM BY SARBJOT SINGH
        </p>
      </Widgets>
    </Box>
  );
};

export default Suggestions;

const Widgets = styled.div`
  min-width: 400px;
  padding: 0 20px;
`;
const SuggestionsContainer = styled.div``;
const SuggestionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  > p {
    font-weight: 100;
  }
  h4 {
    color: gray;
  }
`;
