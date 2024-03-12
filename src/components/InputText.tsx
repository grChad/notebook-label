interface Props {
	name: string
	changeName: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputText: React.FC<Props> = ({ name, changeName }) => {
	return (
		<input
			type="text"
			placeholder="Vacio"
			value={name}
			onChange={changeName}
			style={{
				width: 150,
				textAlign: 'center',
				padding: '0 5px',
				borderRadius: 3,
			}}
		/>
	)
}

export default InputText
