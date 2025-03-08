import { useEffect, useRef, useState } from 'react'

interface Props {
	size: number
	default_image: string
	alt: string
}

const ViewLogo: React.FC<Props> = ({ size, default_image, alt }) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const [image, setImage] = useState('')

	const handleClick = () => inputRef.current?.click()

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target
		if (!files || files.length === 0) {
			throw new Error('Failed to find root element')
		}
		const file = files[0]
		const imageUrl = URL.createObjectURL(file)
		setImage(imageUrl)
	}

	useEffect(() => {
		return () => {
			// revocar URL, para evitar fuga de memoria.
			if (image) {
				URL.revokeObjectURL(image)
			}
		}
	}, [image])

	return (
		<button
			type="button"
			style={{ width: size, height: size, overflow: 'hidden' }}
			onClick={handleClick}
		>
			{image ? (
				<img
					style={{ width: '100%', height: '100%', objectFit: 'contain' }}
					src={image}
					alt={alt}
					title={alt}
				/>
			) : (
				<img src={default_image} alt={alt} title={alt} />
			)}
			<input type="file" ref={inputRef} onChange={onChange} style={{ display: 'none' }} />
		</button>
	)
}

export default ViewLogo
