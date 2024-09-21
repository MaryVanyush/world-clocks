import React from 'react';
import moment from 'moment';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: this.calculateTime(props.timezoneOffset),
      };
      this.timer = null;
    }
  
    calculateTime(timezoneOffset) {
      const utcDate = new Date();
      const localTime = utcDate.getTime() + (utcDate.getTimezoneOffset() * 60000);
      return new Date(localTime + (timezoneOffset * 3600000));
    }
  
    componentDidMount() {
      this.timer = setInterval(() => {
        this.setState({ time: this.calculateTime(this.props.timezoneOffset) });
      }, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timer);
    }
  
    render() {
      const { cityName, onDelete } = this.props;
      const { time } = this.state;
  
      return (
        <div className="clock">
          <h2>{cityName}</h2>
          <div className="time">
            {moment(time).format('HH:mm:ss')}
          </div>
          <button onClick={onDelete}>✖️</button>
        </div>
      );
    }
  }

  export default Clock;
  