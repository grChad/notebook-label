interface InputProps {
	valueInput: string
	onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputText: React.FC<InputProps> = ({ valueInput, onChangeInput }) => {
	return (
		<input
			type="text"
			placeholder="Vacio"
			value={valueInput}
			onChange={onChangeInput}
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
