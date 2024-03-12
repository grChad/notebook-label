import { useAppSelector } from '../hooks/store'

// FIXME: revisar el css
import styles from '../styles/barControl.module.css'

// import components
import ControlCurse from './ControlCurse'
import ControlNames from './ControlNames'

import { DataSelectElement as data } from '../utils/configs'

export default function BarrControl() {
	const selectElement = useAppSelector((state) => state.selectElement)

	return (
		<div className={styles.barUp}>
			{selectElement.itemSelected === '' && (
				<div>
					<p>Selecciona un elemento para editar</p>
				</div>
			)}
			{selectElement.itemSelected === data.curse && <ControlCurse />}
			{selectElement.itemSelected === data.names && <ControlNames />}
		</div>
	)
}
