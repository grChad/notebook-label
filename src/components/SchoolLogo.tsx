import { useState } from 'react'

// import Image
import Logo from '../assets/scorza03.png'

export default function SchoolLogo() {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<button
			type="button"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{ ...styles.button, ...(isHovered && { borderColor: '#D3D3D3' }) }}
		>
			<img style={styles.image} src={Logo} alt="marianista" />
		</button>
	)
}

const styles = {
	button: {
		width: 80,
		height: 80,
	},
	image: {
		width: '100%',
		height: '100%',
	},
}
