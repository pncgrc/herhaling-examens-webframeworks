import styles from './App.module.css'
import ColorSquare from './components/ColorSquare'

function App() {

  return (
    <div className={styles.container}>
      <ColorSquare color={"blue"} size={100} />
      <ColorSquare color={"pink"} size={100} />
      <ColorSquare color={"white"} size={100} />
      <ColorSquare color={"yellow"} size={100} />
      <ColorSquare color={"red"} size={100} />
      <ColorSquare color={"purple"} size={100} />
      <ColorSquare color={"blue"} size={100} />
    </div>
  )
}

export default App
