import styled from "styled-components";

const TablaDetalles = ({ datos }) => {
	let no = 1;
	// console.log(datos);

	return (
		<Table>
			<thead>
				<tr>
					<th>No</th>
					<th>Código</th>
					<th>Unidad</th>
					<th>Producto</th>
					<th>Cantidad</th>
					<th>Precio</th>
					<th>Importe</th>
				</tr>
			</thead>
			<tbody>
				{datos.map((fila) => (
					<tr key={fila.id_PR}>
						<td>{no++}</td>
						{Object.keys(fila).map((dato) => (
							<td key={`${dato}_${fila.id_PR}`}>{fila[dato]}</td>
						))}
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default TablaDetalles;

const Table = styled.table`
	width: 85%;
	font-size: 0.6em;
	border-collapse: collapse;
	margin-top: 10px;
    margin-bottom: 15px;

	td {
		font-size: 1em;
		border-top: 1px solid #000;
		background: #c4c4c4;
        padding 5px
	}
`;
