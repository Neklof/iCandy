import styled from "styled-components";
import Modal from "./Modal";
import Button from "./Button";
import Campo from "./Campo";

const RegistrarUsuario = ({ modalUsuario, setModalUsuario }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<Modal
			ventanaModal={modalUsuario}
			setVentanaModal={setModalUsuario}
			encabezado={true}
			titulo="Agregar usuario"
		>
			<Container onSubmit={handleSubmit}>
				<Campo nombreCampo={"Nombre(s)"} />
				<Campo nombreCampo={"Apellido(s)"} />
				<Campo nombreCampo={"Dirección"} width={"95%"} />
				<Campo nombreCampo={"Correo electrónico"} />
				<Campo nombreCampo={"No. teléfono"} />
				<Campo nombreCampo={"Contraseña"} />
				<Campo nombreCampo={"Confirmar contraseña"} />
				<ButtonContainer>
					<Button onSubmit={handleSubmit}>Agregar usuario</Button>
				</ButtonContainer>
			</Container>
		</Modal>
	);
};

export default RegistrarUsuario;

const Container = styled.form`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	align-content: space-around;
	width: 85%;
	height: 700px;
	align-self: center;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: end;
	width: 95%;
`;
