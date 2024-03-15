// FIXME: revisar el css
import styles from '../styles/barControl.module.css'
import { useAppSelector } from '../hooks/store'

import { DataSelectElement as data } from '../utils/configs'

// import components
import ControlCurse from './ControlCurse'
import ControlNames from './ControlNames'
import ControlClassroom from './ControlClassroom'

export default function BarrControl() {
	const { itemSelected } = useAppSelector((state) => state.selectElement)
	const { curse, names, classroom } = data

	return (
		<div className={styles.barUp}>
			{itemSelected === '' && (
				<div>
					<p>Selecciona un elemento para editar</p>
				</div>
			)}
			{itemSelected === curse && <ControlCurse />}
			{itemSelected === names && <ControlNames />}
			{itemSelected === classroom && <ControlClassroom />}
		</div>
	)
}
