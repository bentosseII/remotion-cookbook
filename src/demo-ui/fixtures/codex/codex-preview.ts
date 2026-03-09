import type {
	CodexAssistantBlock,
	CodexEditorTab,
	CodexFileTreeItem,
	CodexTerminalLine,
	CodexToolRun,
} from '../../apps/codex'

export const codexPreviewFileTree: readonly CodexFileTreeItem[] = [
	{id: 'src', label: 'src', kind: 'folder'},
	{id: 'demo-ui', label: 'demo-ui', indent: 1, kind: 'folder'},
	{id: 'browser', label: 'browser', indent: 2, kind: 'folder'},
	{id: 'shell', label: 'BrowserShell.tsx', indent: 3, kind: 'file', active: true},
	{id: 'tokens', label: 'tokens.ts', indent: 3, kind: 'file'},
	{id: 'finder', label: 'finder', indent: 2, kind: 'folder'},
	{id: 'slack', label: 'slack', indent: 2, kind: 'folder'},
	{id: 'codex', label: 'codex', indent: 2, kind: 'folder'},
	{id: 'spec', label: 'spec', kind: 'folder'},
	{id: 'progress', label: 'progress.md', indent: 1, kind: 'file'},
]

export const codexPreviewEditorTabs: readonly CodexEditorTab[] = [
	{id: 'browser-shell', label: 'BrowserShell.tsx', active: true},
	{id: 'finder-shell', label: 'FinderShell.tsx'},
	{id: 'progress', label: 'progress.md'},
]

export const codexPreviewCodeLines: readonly string[] = [
	"import type {FC} from 'react'",
	'',
	'export const BrowserShell: FC<BrowserShellProps> = ({',
	'  url,',
	'  tabs,',
	'  children,',
	'}) => {',
	'  return (',
	'    <div style={{borderRadius: 10}}>',
	'      <TabStrip tabs={tabs} />',
	'      <Toolbar url={url} />',
	'      {children}',
	'    </div>',
	'  )',
	'}',
]

export const codexPreviewToolRuns: readonly CodexToolRun[] = [
	{id: 'plan', label: 'plan shell layout', status: 'success'},
	{id: 'edit', label: 'edit BrowserShell.tsx', status: 'success'},
	{id: 'lint', label: 'npm run lint', status: 'running'},
]

export const codexPreviewAssistantBlocks: readonly CodexAssistantBlock[] = [
	{
		id: 'plan',
		title: 'Plan',
		body: '1. Build shell chrome\n2. Add viewport states\n3. Preview form + docs scroll',
	},
	{
		id: 'diff',
		title: 'Next likely diff',
		body: 'Move browser interaction state into reusable script-driven helpers before adding pointer overlays.',
	},
]

export const codexPreviewTerminalLines: readonly CodexTerminalLine[] = [
	{id: 'line-1', text: '$ npm run lint', tone: 'muted'},
	{id: 'line-2', text: '✓ src/demo-ui/apps/browser/BrowserShell.tsx', tone: 'success'},
	{id: 'line-3', text: '• rendering preview comps...', tone: 'default'},
]
