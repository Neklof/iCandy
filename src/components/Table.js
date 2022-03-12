import styled from "styled-components";

const Table = ({ campos, datos, filtro, search, tipo = 1, funciones }) => {
	return (
		<Container>
			<TableContainer>
				<Thead>
					<TrHeader>
						{campos.map((name) => (
							<th key={name}>{name}</th>
						))}
					</TrHeader>
				</Thead>
				<tbody>
					{datos
						.filter((fila) =>
							fila[filtro].toLowerCase().includes(search.trim().toLowerCase())
						)
						.map((fila) => {
							return (
								<Tr key={fila.id}>
									{Object.values(fila).map((dato) => (
										<td>{dato}</td>
									))}
									{tipo === 2 && (
										<td>
											<button className={fila.id} onClick={funciones[0]}>
												Modificar
											</button>
										</td>
									)}
									{tipo === 2 && (
										<td>
											<button className={fila.id} onClick={funciones[1]}>
												Eliminar
											</button>
										</td>
									)}
									{tipo === 2 && (
										<td>
											<button className={fila.id} onClick={funciones[2]}>
												Detalles
											</button>
										</td>
									)}
									{/* {tipo === 3 && <td><button>Detalles</button></td>} */}
								</Tr>
							);
						})}
				</tbody>
			</TableContainer>
		</Container>
	);
};

export default Table;

const Container = styled.div`
	& {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: start;
		align-items: center;
		width: 100%;
		height: 100%;
		overflow: auto;
	}
`;

const TableContainer = styled.table`
	& {
		width: 95%;
		border-collapse: separate;
		border-spacing: 0;
	}
`;

const Thead = styled.thead`
	&:after {
		content: "@";
		display: block;
		line-height: 15px;
		text-indent: -99999px;
	}
`;

const TrHeader = styled.tr`
	& {
		font-size: clamp(0.4em, 0.7em, 1em);
		color: black;
		padding-bottom: 15px;
		position: sticky;
		background: #fff;
		top: 0;
	}

	& > th {
		border-bottom: 1px solid #000;
		padding: 1.25rem;
	}
`;

const Tr = styled.tr`
	& {
		font-size: clamp(0.3em, 0.6em, 0.9em);
		color: #000;
	}

	& td {
		border-right: 1px solid #000;
		padding: 1.25rem;
	}
`;
