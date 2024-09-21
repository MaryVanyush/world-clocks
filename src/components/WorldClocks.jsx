import React from 'react';
import Clock from './Clock';

export default class WorldClocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clocks: [],
      cityName: '',
      timezoneOffset: '',
    };
  }

  handleAddClock = () => {
    const { cityName, timezoneOffset } = this.state;
    if (cityName && timezoneOffset) {
      this.setState(prevState => ({
        clocks: [...prevState.clocks, { cityName, timezoneOffset }],
        cityName: '',
        timezoneOffset: '',
      }));
    }
  };

  handleDeleteClock = (index) => {
    this.setState(prevState => {
      const clocks = [...prevState.clocks];
      clocks.splice(index, 1);
      return { clocks };
    });
  };

  render() {
    const { clocks, cityName, timezoneOffset } = this.state;

    return (
      <div>
        <h1>World Clocks</h1>
        <input
          type="text"
          placeholder="Название города"
          value={cityName}
          onChange={(e) => this.setState({ cityName: e.target.value })}
        />
        <input
          type="number"
          placeholder="Временная зона (UTC)"
          value={timezoneOffset}
          onChange={(e) => this.setState({ timezoneOffset: e.target.value })}
        />
        <button onClick={this.handleAddClock}>Добавить</button>

        <div className="clocks">
          {clocks.map((clock, index) => (
            <Clock
              key={index}
              cityName={clock.cityName}
              timezoneOffset={parseInt(clock.timezoneOffset)}
              onDelete={() => this.handleDeleteClock(index)}
            />
          ))}
        </div>
      </div>
    );
  }
}
