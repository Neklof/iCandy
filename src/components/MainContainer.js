import styled from "styled-components";

const MainContainer = ({ children }) => {
	return <Container>{children}</Container>;
};

const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	font-size: calc(10px + 2vmin);
	color: white;
`;

export default MainContainer;
