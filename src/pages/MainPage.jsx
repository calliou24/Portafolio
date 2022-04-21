
import Nav from '../components/Nav/nav';

import { Outlet } from 'react-router-dom '

import styles from './main-page.module.css'

function MainPage() {

  return (
    <div className="App">
      <Nav/>
      <div className={styles.outletCont}>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainPage