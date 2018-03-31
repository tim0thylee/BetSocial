import React, {Component} from 'react';
import { Paper, Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';


class Tablist extends Component {

constructor(props){
  
    super(props);
    this.state = { value: 0};
}

//this function is to make sure that the tab is still highlighted when page route is changed.
componentDidMount() {
  let value = 0;
  switch(window.location.pathname) {
    case '/Detail':
      value = 0;
      break;
    case '/Friends':
      value = 1;
      break;
    case '/':
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
  const { classes } = this.props;
  const { value } = this.state;

   return (
    <div>
    <Paper>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        centered
        value={value} onChange={this.handleChange}
        >
        <Tab label="Detail" href="Detail"/>
        <Tab label="Friends" href="Friends"/>
        <Tab label="Bets" href="/"/>
      </Tabs>
    </Paper> 
    </div>
    )
  }

}


export default Tablist;