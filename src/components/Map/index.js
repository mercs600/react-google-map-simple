import React, { Component } from 'react';
import ReactDOM from 'react-dom'


class MapComponent extends Component {
  static defaultProps = {
    options: {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      zoom: 8
    }
  }

  constructor() {
    super()

    this.state = {
      map: false
    }
  }
  initMap() {
    const mapNode = ReactDOM.findDOMNode(this.refs.map)
    let map = new this.props.google.Map(mapNode, this.props.options);
    this.setState({map})
  }

  componentDidMount() {
    this.initMap()
  }

  render() {
    return (
      <div ref="map" style={mapStyle}>map is loading...</div>
    )
  }
}

const mapStyle = {
  width: '100%',
  height: '500px'
};

export default MapComponent
