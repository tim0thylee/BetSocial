import React, { Component, Fragment } from 'react'
import { Header, Footer} from './Layouts'
import Home from './Home'
import Body from './Home/Body/Bottom'
import Top from './Home/Top/Top'
import { switchTabs, bets } from '../store.js'

export default class extends Component {
  states = {
    bets,
    switchTabs
  }

// getBets () {
//   return this.state.bets.reduce(() => {
//   })
// }


render () {
  // console.log(this.getBets())
    return <Fragment>
    <div>
    <Header/>
   <Top />
<Footer 
 switchTabs={switchTabs} />
 </div>
    <Body /> 
    </Fragment>

  }
}