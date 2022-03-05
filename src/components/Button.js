import styled from "styled-components";

const Button = ({ children }) => {
	return <Btn>{children}</Btn>;
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
		background: #5790cf;
	}
`;

export default Button;
