import type {
	DataClassroomDefault,
	ListColorText,
	ListFonts,
	ListSizeText,
} from './types'

export const dataClassroomDefault: DataClassroomDefault = {
	className: 'Perú',
	font: 'Asap',
	background: '#ef4444',
	color: '#ffffff',
	size: 26,
}
export const nameSlice: string = 'classroom'

export const fontClassroom: ListFonts[] = [
	{ name: 'system', font: 'system-ui' },
	{ name: 'Sans', font: 'sans-serif' },
	{ name: 'Asap', font: 'Asap' },
	{ name: 'Comic', font: 'ComicNeue' },
	{ name: 'Mono1', font: 'Liberation Mono' },
	{ name: 'Mono2', font: 'monospace' },
]

export const colorTextClassroom: ListColorText[] = [
	{ id: crypto.randomUUID(), name: 'white', color: '#ffffff' },
	{ id: crypto.randomUUID(), name: 'dark', color: '#303446' },
	{ id: crypto.randomUUID(), name: 'stone', color: '#78716c' },
	{ id: crypto.randomUUID(), name: 'red', color: '#ef4444' },
	{ id: crypto.randomUUID(), name: 'orange', color: '#f97316' },
	{ id: crypto.randomUUID(), name: 'amber', color: '#f59e0b' },
	{ id: crypto.randomUUID(), name: 'yellow', color: '#eab308' },
	{ id: crypto.randomUUID(), name: 'lime', color: '#84cc16' },
	{ id: crypto.randomUUID(), name: 'green', color: '#22c55e' },
	{ id: crypto.randomUUID(), name: 'esmerald', color: '#10b981' },
	{ id: crypto.randomUUID(), name: 'teal', color: '#14b8a6' },
	{ id: crypto.randomUUID(), name: 'cyan', color: '#06b6d4' },
	{ id: crypto.randomUUID(), name: 'sky', color: '#0ea5e9' },
	{ id: crypto.randomUUID(), name: 'blue', color: '#3b82f6' },
	{ id: crypto.randomUUID(), name: 'indigo', color: '#6366f1' },
	{ id: crypto.randomUUID(), name: 'violet', color: '#8b5cf6' },
	{ id: crypto.randomUUID(), name: 'purple', color: '#a855f7' },
	{ id: crypto.randomUUID(), name: 'fuchsia', color: '#d946ef' },
	{ id: crypto.randomUUID(), name: 'pink', color: '#ec4899' },
	{ id: crypto.randomUUID(), name: 'rose', color: '#f43f5e' },
]

export const sizeClassroom: ListSizeText[] = [
	{ size: 22 },
	{ size: 24 },
	{ size: 26 },
	{ size: 28 },
	{ size: 30 },
	{ size: 32 },
	{ size: 34 },
]
