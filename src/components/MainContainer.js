import styled from "styled-components";

const MainContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  font-size: calc(10px + 2vmin);
`;

export default MainContainer;
