import React from 'react';
import Day from './Day.js'
import { Card, Button, Icon } from 'semantic-ui-react'

class DaysContainer extends React.Component{

  state={
    Farenheit: true
  }

  switch = () =>{
    this.setState({Farenheit: !this.state.Farenheit})
  }

  render(){

    let days = this.props.days.map( (day, ind) => <Day day={day} key={ind} temp={this.state.Farenheit} />)

    return(
      <div className='container'>
        <Card.Group itemsPerRow={7}>
          {days}
        </Card.Group>
        <Button icon labelPosition='left' color='green' onClick={this.switch} className='temp'><Icon name='thermometer half'/>Switch to {this.state.Farenheit ? 'Celcius' : 'Farenheit' }</Button>
      </div>
    )
  }
}

export default DaysContainer