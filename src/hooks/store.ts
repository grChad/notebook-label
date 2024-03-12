import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../../store'
import { useDispatch, useSelector } from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
