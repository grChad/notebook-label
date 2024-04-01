import type { DataClassroomDefault, ListColors, ListFonts, ListSizes } from './types'

export const dataClassroomDefault: DataClassroomDefault = {
	className: 'Perú',
	font: 'Asap',
	background: '#ef4444',
	color: '#ffffff',
	size: 26,
}
export const nameSlice: string = 'classroom'

export const fontClassroom: ListFonts[] = [
	{ id: 'system', name: 'system', value: 'system-ui' },
	{ id: 'Sans', name: 'Sans', value: 'sans-serif' },
	{ id: 'Asap', name: 'Asap', value: 'Asap' },
	{ id: 'Comic', name: 'Comic', value: 'ComicNeue' },
	{ id: 'Mono1', name: 'Mono1', value: 'Liberation Mono' },
	{ id: 'Mono2', name: 'Mono2', value: 'monospace' },
]

export const colorTextClassroom: ListColors[] = [
	{ id: crypto.randomUUID(), name: 'white', value: '#ffffff' },
	{ id: crypto.randomUUID(), name: 'dark', value: '#303446' },
	{ id: crypto.randomUUID(), name: 'stone', value: '#78716c' },
	{ id: crypto.randomUUID(), name: 'red', value: '#ef4444' },
	{ id: crypto.randomUUID(), name: 'orange', value: '#f97316' },
	{ id: crypto.randomUUID(), name: 'amber', value: '#f59e0b' },
	{ id: crypto.randomUUID(), name: 'yellow', value: '#eab308' },
	{ id: crypto.randomUUID(), name: 'lime', value: '#84cc16' },
	{ id: crypto.randomUUID(), name: 'green', value: '#22c55e' },
	{ id: crypto.randomUUID(), name: 'esmerald', value: '#10b981' },
	{ id: crypto.randomUUID(), name: 'teal', value: '#14b8a6' },
	{ id: crypto.randomUUID(), name: 'cyan', value: '#06b6d4' },
	{ id: crypto.randomUUID(), name: 'sky', value: '#0ea5e9' },
	{ id: crypto.randomUUID(), name: 'blue', value: '#3b82f6' },
	{ id: crypto.randomUUID(), name: 'indigo', value: '#6366f1' },
	{ id: crypto.randomUUID(), name: 'violet', value: '#8b5cf6' },
	{ id: crypto.randomUUID(), name: 'purple', value: '#a855f7' },
	{ id: crypto.randomUUID(), name: 'fuchsia', value: '#d946ef' },
	{ id: crypto.randomUUID(), name: 'pink', value: '#ec4899' },
	{ id: crypto.randomUUID(), name: 'rose', value: '#f43f5e' },
]

export const sizeClassroom: ListSizes[] = [
	{ id: '22', name: '22', value: 22 },
	{ id: '24', name: '24', value: 24 },
	{ id: '26', name: '26', value: 26 },
	{ id: '28', name: '28', value: 28 },
	{ id: '30', name: '30', value: 30 },
	{ id: '32', name: '32', value: 32 },
	{ id: '34', name: '34', value: 34 },
]
