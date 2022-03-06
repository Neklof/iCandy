import styled from "styled-components";

const Campo = ({ width, nombreCampo, type }) => {
	return (
		<ContainerCampo width={width || "45%"}>
			<Label>{nombreCampo}</Label>
			<Input placeholder={nombreCampo} type={type || "text"}></Input>
		</ContainerCampo>
	);
};

export default Campo;

const ContainerCampo = styled.div`
	display: flex;
	flex-direction: column;
	width: ${({ width }) => width};
`;

const Input = styled.input`
	content-box: border-box;
	font-size: 16px;
	border: none;
	border-bottom: 2px solid #000;
	margin-bottom: -2px;
	width: 100%;

	&:focus {
		outline: none;
		border-bottom: 2px solid #08b5ff;
	}
`;

const Label = styled.label`
	content-box: border-box;
	font-size: 20px;
	margin: 0;
	margin-bottom: 10px;
	padding: 0;
	color: black;
	text-align: left;
	border: none;
	width: 100%;
`;
