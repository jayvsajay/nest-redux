import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { setInfo } from "../redux/actions/main"
import styles from '../styles/Home.module.css'

function Home() {
  const name=useSelector(state=>state.main.name)
  const [newName, setName] = useState("")
  const dispatch=useDispatch()


  return (
    <div className={styles.container}>
      <p>Enter a Name {name}:</p>
      <input 
        type="text" 
        value={newName} 
        onChange={(e) => setName(e.target.value)}>

        </input>
        <button onClick={() =>dispatch(setInfo(newName))}>
          Submit
        </button>
    </div>
  )
}

export default Home;
