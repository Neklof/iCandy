import styled from "styled-components";

const AdminContainer = ({ children }) => {
	return (
		<Container>
			<Content>{children}</Content>
		</Container>
	);
};

const Container = styled.section`
	display: flex;
	width: 72.5vw;
	height: 80vh;
	margin-right: 3.75vw;
	border: 1px solid rgba(0, 0, 0, 0.5);
	box-shadow: 6px 24px 4px rgba(0, 0, 0, 0.25);
`;

const Content = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	position: relative;
`;

export default AdminContainer;
