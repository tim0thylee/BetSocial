import React, {Component} from 'react';
import { Paper, Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';
import './Tablist.css'


class Tablist extends Component {

constructor(props){
  
    super(props);
    this.state = { value: 0};
}

//this function is to make sure that the tab is still highlighted when page route is changed.
componentDidMount() {
  let value = 0;
  switch(window.location.pathname) {
    case '/':
      value = 0;
      break;
    case '/users':
      value = 1;
      break;
    case '/bets':
      value = 2;
      break;
  }
  
  this.setState({ value: value });
}

handleChange = (event, value) => {
  console.log(value);
  // this.setState({ value });
};

 render(){
  // const { classes } = this.props;
  const { value } = this.state;

   return (
    <div className="paper">
    <Paper>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        centered
        value={value} onChange={this.handleChange}
        >
        <Tab label="Profile" href="/"/>
        <Tab label="Users" href="/users"/>
        <Tab label="Bets" href="/bets"/>
      </Tabs>
    </Paper> 
    </div>
    )
  }

}


export default Tablist;