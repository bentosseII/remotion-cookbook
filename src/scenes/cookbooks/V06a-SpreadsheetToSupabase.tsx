import {ConceptScene, cyan, green, yellow} from '../cookbook-templates'

const elements = [
  {type: 'box', text: 'Spreadsheet\nrows + columns', position: {x: 170, y: 430}, color: yellow, delay: 12},
  {type: 'box', text: 'Supabase table\ntyped schema', position: {x: 760, y: 430}, color: cyan, delay: 28},
  {type: 'box', text: 'Queryable data\nfor your app', position: {x: 1360, y: 430}, color: green, delay: 44},
  {type: 'arrow', from: {x: 470, y: 470}, to: {x: 760, y: 470}, color: cyan, delay: 54},
  {type: 'arrow', from: {x: 1060, y: 470}, to: {x: 1360, y: 470}, color: green, delay: 62},
]

export const V06aSpreadsheetToSupabase = () => (
  <ConceptScene
    title='From Spreadsheet to Real Database'
    elements={elements}
    outroLabel='Cookbook 06a'
    outroSublabel='Rows, columns, and data types'
  />
)
