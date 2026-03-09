import {EditorScene, cyan, green, orange} from '../cookbook-templates'

const lines = [
  {text: '<!doctype html>', color: orange},
  {text: '<html>'},
  {text: '  <head>'},
  {text: '    <title>AI News Feed</title>', color: cyan},
  {text: '    <link rel="stylesheet" href="styles.css" />'},
  {text: '  </head>'},
  {text: '  <body>'},
  {text: '    <h1>Main News Feed</h1>', highlight: true},
  {text: '    <section id="feed"></section>'},
  {text: '    <script src="script.js"></script>', color: green},
  {text: '  </body>'},
  {text: '</html>'},
]

export const V01cFirstSiteEditor = () => (
  <EditorScene
    filename='index.html'
    lines={lines}
    sidebar={[
      {name: 'demo-news', type: 'folder', indent: 0},
      {name: 'index.html', type: 'file', indent: 1, active: true},
      {name: 'styles.css', type: 'file', indent: 1},
      {name: 'script.js', type: 'file', indent: 1},
    ]}
    outroLabel='Cookbook 01c'
    outroSublabel='Understand the files you just created'
  />
)
