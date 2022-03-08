import styled from "styled-components";

const Campo = ({ width, nombreCampo, type, register, name, error }) => {
	return (
		<ContainerCampo width={width || "45%"}>
			<Label>{nombreCampo}</Label>
			<Input
				{...register(name, { required: true })}
				placeholder={nombreCampo}
				type={type || "text"}
				error={error}
			></Input>
			{error?.type === "required" && <Error>Favor de completar</Error>}
		</ContainerCampo>
	);
};

export default Campo;

const ContainerCampo = styled.div`
	display: flex;
	flex-direction: column;
	width: ${({ width }) => width};
	position: relative;
`;

const Input = styled.input`
	content-box: border-box;
	font-size: 16px;
	border: none;
	border-bottom: 2px solid ${({ error }) => (error ? "red" : "#000")};
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

const Error = styled.span`
	color: red;
	font-size: 12px;
	text-align: left;
	position: absolute;
	bottom: -18px;
`;
