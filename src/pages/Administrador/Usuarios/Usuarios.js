import "./styles.css";
import Button from "components/Button";

const Usuarios = () => {
	const handleChange = () => {
		return null;
	};

	const handleSearch = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<div className="usuarios-header">
				<div className="usuarios-header-contenedor">
					<div className="aux"></div>
					<form className="search" onSubmit={handleSearch}>
						<input
							className="search-input"
							type="text"
							placeholder="Buscar"
							onChange={handleChange}
						/>
						<button className="search-btn" onSubmit={handleSearch}>
							<img
								alt="svgImg"
								src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDEzIDMgQyA3LjQ4ODk5NzEgMyAzIDcuNDg4OTk3MSAzIDEzIEMgMyAxOC41MTEwMDMgNy40ODg5OTcxIDIzIDEzIDIzIEMgMTUuMzk2NTA4IDIzIDE3LjU5NzM4NSAyMi4xNDg5ODYgMTkuMzIyMjY2IDIwLjczNjMyOCBMIDI1LjI5Mjk2OSAyNi43MDcwMzEgQSAxLjAwMDEgMS4wMDAxIDAgMSAwIDI2LjcwNzAzMSAyNS4yOTI5NjkgTCAyMC43MzYzMjggMTkuMzIyMjY2IEMgMjIuMTQ4OTg2IDE3LjU5NzM4NSAyMyAxNS4zOTY1MDggMjMgMTMgQyAyMyA3LjQ4ODk5NzEgMTguNTExMDAzIDMgMTMgMyB6IE0gMTMgNSBDIDE3LjQzMDEyMyA1IDIxIDguNTY5ODc3NCAyMSAxMyBDIDIxIDE3LjQzMDEyMyAxNy40MzAxMjMgMjEgMTMgMjEgQyA4LjU2OTg3NzQgMjEgNSAxNy40MzAxMjMgNSAxMyBDIDUgOC41Njk4Nzc0IDguNTY5ODc3NCA1IDEzIDUgeiI+PC9wYXRoPjwvc3ZnPg=="
							/>
						</button>
					</form>
					<button className="filtrar">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB7UlEQVRIie2Wv2sTYRjHP8/dGVNU8AdSBIdEkRBTtQFxi7Sa/gndddTFTbqlLi4uTnYVnDyLjrW2pt0d0mJjAoKXyUEoVQQT2jf3ONjEJJBc74jSIZ/teXif5/u8PPc878GIQ09xM0VxMxU13Aod4bo2q+XX+HYV366yurXIvIbOI51GqfJ5CpG1QQErdZ+H27tdvidnYuTHArRVp7PpS+stM3Sl35r+gXxBOD1mDTWPBgWkYnLagXtmP9YR9tJHrAVUdwKkap2W9Ds2kPflG6APAFCekp/4ECnPiP9BtB73Y6WcBZ3Ckiq3M0sHFi553kkaZjKK5tzOXu7dL51X/iyTi468WhyPPWsfiDsb2WTye8vsHqeGmQxaIP34ahRF27bXZLaOzI61rtYw00D0BdIP6emaqGJ1FNJL943jzsZ+ZaE555D7uCsFRW2AhCPuUVhA9W/urkKHSXHrGk1uIVIhn3k71NwjohLcY9e1OZW5j+gMUEEbj5m5/mOowqWKlwBzp9M3t21uLjea7S894ciXN+OxF+GlnOfZdLL9NPa8xyaBSKHTU/O7H/ma0Qs/lcIJK+RAqFkH2sKBC+Rsj8BxSzg2hCEMTrH8aQLbXwLOg9TBv0v+yst/Lwyw5sXx65eJGY/c1YBfnBGHjN8RH5wKf6/czAAAAABJRU5ErkJggg==" />
						<p>Filtrar</p>
					</button>
				</div>
			</div>
			<div className="usuarios-content">
				<table className="tabla-usuarios">
					<thead>
						<tr className="tabla-usuarios-header">
							<th className="tabla-usuarios-header-item">ID</th>
							<th className="tabla-usuarios-header-item">Nombre</th>
							<th className="tabla-usuarios-header-item">Tipo usuario</th>
							<th className="tabla-usuarios-header-item">Teléfono</th>
							<th className="tabla-usuarios-header-item">Correo</th>
							<th className="tabla-usuarios-header-item">Dirección</th>
						</tr>
					</thead>
					<tbody>
						<tr className="tabla-usuarios-usuario">
							<td className="tabla-usuarios-usuario-item">1</td>
							<td className="tabla-usuarios-usuario-item">Karl Scherzer</td>
							<td className="tabla-usuarios-usuario-item">Administrador</td>
							<td className="tabla-usuarios-usuario-item">3316914205</td>
							<td className="tabla-usuarios-usuario-item">
								scherzer1999@hotmail.com
							</td>
							<td>Atemajac del Valle, Ramon corona #487</td>
						</tr>
						<tr className="tabla-usuarios-usuario">
							<td className="tabla-usuarios-usuario-item">1</td>
							<td className="tabla-usuarios-usuario-item">Karl Scherzer</td>
							<td className="tabla-usuarios-usuario-item">Administrador</td>
							<td className="tabla-usuarios-usuario-item">3316914205</td>
							<td className="tabla-usuarios-usuario-item">
								scherzer1999@hotmail.com
							</td>
							<td>Atemajac del Valle, Ramon corona #487</td>
						</tr>
						<tr className="tabla-usuarios-usuario">
							<td className="tabla-usuarios-usuario-item">1</td>
							<td className="tabla-usuarios-usuario-item">Karl Scherzer</td>
							<td className="tabla-usuarios-usuario-item">Administrador</td>
							<td className="tabla-usuarios-usuario-item">3316914205</td>
							<td className="tabla-usuarios-usuario-item">
								scherzer1999@hotmail.com
							</td>
							<td>Atemajac del Valle, Ramon corona #487</td>
						</tr>
						<tr className="tabla-usuarios-usuario">
							<td className="tabla-usuarios-usuario-item">1</td>
							<td className="tabla-usuarios-usuario-item">Karl Scherzer</td>
							<td className="tabla-usuarios-usuario-item">Administrador</td>
							<td className="tabla-usuarios-usuario-item">3316914205</td>
							<td className="tabla-usuarios-usuario-item">
								scherzer1999@hotmail.com
							</td>
							<td>Atemajac del Valle, Ramon corona #487</td>
						</tr>
						<tr className="tabla-usuarios-usuario">
							<td className="tabla-usuarios-usuario-item">1</td>
							<td className="tabla-usuarios-usuario-item">Karl Scherzer</td>
							<td className="tabla-usuarios-usuario-item">Administrador</td>
							<td className="tabla-usuarios-usuario-item">3316914205</td>
							<td className="tabla-usuarios-usuario-item">
								scherzer1999@hotmail.com
							</td>
							<td>Atemajac del Valle, Ramon corona #487</td>
						</tr>
						<tr className="tabla-usuarios-usuario">
							<td className="tabla-usuarios-usuario-item">1</td>
							<td className="tabla-usuarios-usuario-item">Karl Scherzer</td>
							<td className="tabla-usuarios-usuario-item">Administrador</td>
							<td className="tabla-usuarios-usuario-item">3316914205</td>
							<td className="tabla-usuarios-usuario-item">
								scherzer1999@hotmail.com
							</td>
							<td>Atemajac del Valle, Ramon corona #487</td>
						</tr>
						<tr className="tabla-usuarios-usuario">
							<td className="tabla-usuarios-usuario-item">1</td>
							<td className="tabla-usuarios-usuario-item">Karl Scherzer</td>
							<td className="tabla-usuarios-usuario-item">Administrador</td>
							<td className="tabla-usuarios-usuario-item">3316914205</td>
							<td className="tabla-usuarios-usuario-item">
								scherzer1999@hotmail.com
							</td>
							<td>Atemajac del Valle, Ramon corona #487</td>
						</tr>
						<tr className="tabla-usuarios-usuario">
							<td className="tabla-usuarios-usuario-item">1</td>
							<td className="tabla-usuarios-usuario-item">Karl Scherzer</td>
							<td className="tabla-usuarios-usuario-item">Administrador</td>
							<td className="tabla-usuarios-usuario-item">3316914205</td>
							<td className="tabla-usuarios-usuario-item">
								scherzer1999@hotmail.com
							</td>
							<td>Atemajac del Valle, Ramon corona #487</td>
						</tr>
						<tr className="tabla-usuarios-usuario">
							<td className="tabla-usuarios-usuario-item">1</td>
							<td className="tabla-usuarios-usuario-item">Karl Scherzer</td>
							<td className="tabla-usuarios-usuario-item">Administrador</td>
							<td className="tabla-usuarios-usuario-item">3316914205</td>
							<td className="tabla-usuarios-usuario-item">
								scherzer1999@hotmail.com
							</td>
							<td>Atemajac del Valle, Ramon corona #487</td>
						</tr>
						<tr className="tabla-usuarios-usuario">
							<td className="tabla-usuarios-usuario-item">1</td>
							<td className="tabla-usuarios-usuario-item">Karl Scherzer</td>
							<td className="tabla-usuarios-usuario-item">Administrador</td>
							<td className="tabla-usuarios-usuario-item">3316914205</td>
							<td className="tabla-usuarios-usuario-item">
								scherzer1999@hotmail.com
							</td>
							<td>Atemajac del Valle, Ramon corona #487</td>
						</tr>
						<tr className="tabla-usuarios-usuario">
							<td className="tabla-usuarios-usuario-item">1</td>
							<td className="tabla-usuarios-usuario-item">Karl Scherzer</td>
							<td className="tabla-usuarios-usuario-item">Administrador</td>
							<td className="tabla-usuarios-usuario-item">3316914205</td>
							<td className="tabla-usuarios-usuario-item">
								scherzer1999@hotmail.com
							</td>
							<td>Atemajac del Valle, Ramon corona #487</td>
						</tr>
						<tr className="tabla-usuarios-usuario">
							<td className="tabla-usuarios-usuario-item">1</td>
							<td className="tabla-usuarios-usuario-item">Karl Scherzer</td>
							<td className="tabla-usuarios-usuario-item">Administrador</td>
							<td className="tabla-usuarios-usuario-item">3316914205</td>
							<td className="tabla-usuarios-usuario-item">
								scherzer1999@hotmail.com
							</td>
							<td>Atemajac del Valle, Ramon corona #487</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="contenedor-button">
				<Button>Agregar usuario</Button>
			</div>
		</>
	);
};

export default Usuarios;
