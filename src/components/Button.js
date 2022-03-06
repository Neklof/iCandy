import styled from "styled-components";

const Button = ({ children, onClick }) => {
	return <Btn onClick={onClick}>{children}</Btn>;
};

const Btn = styled.button`
	&& {
		background: #5790ff;
		color: white;
		font-size: 18px;
		border: none;
		padding: 6px;
	}

	&:active {
		background: #021e73;
	}
`;

export default Button;
