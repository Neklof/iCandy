import styled from "styled-components";

const handleSearch = (e) => {
	e.preventDefault();
};

const AdminBuscador = ({ keyword }) => {
	const handleChange = (e) => {
		keyword(e.target.value);
	};

	return (
		<Container>
			<div></div>
			<Search onSubmit={handleSearch}>
				<Input onChange={handleChange} placeholder="Buscar"></Input>
				<Button onSubmit={handleSearch}>
					<img
						alt="svgImg"
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDEzIDMgQyA3LjQ4ODk5NzEgMyAzIDcuNDg4OTk3MSAzIDEzIEMgMyAxOC41MTEwMDMgNy40ODg5OTcxIDIzIDEzIDIzIEMgMTUuMzk2NTA4IDIzIDE3LjU5NzM4NSAyMi4xNDg5ODYgMTkuMzIyMjY2IDIwLjczNjMyOCBMIDI1LjI5Mjk2OSAyNi43MDcwMzEgQSAxLjAwMDEgMS4wMDAxIDAgMSAwIDI2LjcwNzAzMSAyNS4yOTI5NjkgTCAyMC43MzYzMjggMTkuMzIyMjY2IEMgMjIuMTQ4OTg2IDE3LjU5NzM4NSAyMyAxNS4zOTY1MDggMjMgMTMgQyAyMyA3LjQ4ODk5NzEgMTguNTExMDAzIDMgMTMgMyB6IE0gMTMgNSBDIDE3LjQzMDEyMyA1IDIxIDguNTY5ODc3NCAyMSAxMyBDIDIxIDE3LjQzMDEyMyAxNy40MzAxMjMgMjEgMTMgMjEgQyA4LjU2OTg3NzQgMjEgNSAxNy40MzAxMjMgNSAxMyBDIDUgOC41Njk4Nzc0IDguNTY5ODc3NCA1IDEzIDUgeiI+PC9wYXRoPjwvc3ZnPg=="
					/>
				</Button>
			</Search>
			<Filtrar>
				<img
					alt=""
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB7UlEQVRIie2Wv2sTYRjHP8/dGVNU8AdSBIdEkRBTtQFxi7Sa/gndddTFTbqlLi4uTnYVnDyLjrW2pt0d0mJjAoKXyUEoVQQT2jf3ONjEJJBc74jSIZ/teXif5/u8PPc878GIQ09xM0VxMxU13Aod4bo2q+XX+HYV366yurXIvIbOI51GqfJ5CpG1QQErdZ+H27tdvidnYuTHArRVp7PpS+stM3Sl35r+gXxBOD1mDTWPBgWkYnLagXtmP9YR9tJHrAVUdwKkap2W9Ds2kPflG6APAFCekp/4ECnPiP9BtB73Y6WcBZ3Ckiq3M0sHFi553kkaZjKK5tzOXu7dL51X/iyTi468WhyPPWsfiDsb2WTye8vsHqeGmQxaIP34ahRF27bXZLaOzI61rtYw00D0BdIP6emaqGJ1FNJL943jzsZ+ZaE555D7uCsFRW2AhCPuUVhA9W/urkKHSXHrGk1uIVIhn3k71NwjohLcY9e1OZW5j+gMUEEbj5m5/mOowqWKlwBzp9M3t21uLjea7S894ciXN+OxF+GlnOfZdLL9NPa8xyaBSKHTU/O7H/ma0Qs/lcIJK+RAqFkH2sKBC+Rsj8BxSzg2hCEMTrH8aQLbXwLOg9TBv0v+yst/Lwyw5sXx65eJGY/c1YBfnBGHjN8RH5wKf6/czAAAAABJRU5ErkJggg=="
				/>
				<p>Filtrar</p>
			</Filtrar>
		</Container>
	);
};

export default AdminBuscador;

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 15%;
	justify-content: space-around;
	align-items: center;
	position: relative;
`;

const Search = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 1;
	margin-left: 150px;
`;

const Input = styled.input`
	font-size: 18px;
	width: 350px;
	height: 39px;
	margin: 0;
	box-sizing: border-box;
	padding: 13px;
	border: 2px solid #3f423f;
	border-radius: 15px 0 0 15px;
	backdrop-filter: blur(4px);

	&:focus {
		outline: none;
	}
`;

const Button = styled.button`
	border: none;
	cursor: pointer;
	margin: 0;
	border: 2px solid #3f423f;
	border-left: none;
	border-radius: 0 15px 15px 0;
	background: white;
	backdrop-filter: blur(4px);

	&:active {
		background: #ccc;
	}
`;

const Filtrar = styled.button`
	display: flex;
	align-items: center;
	cursor: pointer;
	font-size: clamp(0.6em, 0.6em, 3em);
	background: none;
	border: none;
	gap: 5px;
	margin-right: 50px;
`;
