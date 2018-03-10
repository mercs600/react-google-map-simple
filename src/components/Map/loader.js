import gmapLoader from "load-google-maps-api-2"
import React from "react"
import PropTypes from "prop-types"

class GoogleMapsLoader extends React.Component {
  static propTypes = {
    params: PropTypes.shape({
      key: PropTypes.string.isRequired,
      libraries: PropTypes.string,
    }),
    render: PropTypes.func.isRequired
  }

  constructor() {
    super()

    this.state = {
      googleMaps: null,
    }
  }

  componentWillMount() {
    if (this.props.params) {
      const {params} = this.props

      if (params.key) {
        gmapLoader.key = params.key
      }

      if (params.libraries) {
        gmapLoader.libraries = params.libraries
      }
    }

    gmapLoader().then((googleMaps) => {
      this.setState({googleMaps})
    })
  }

  render() {
    const {googleMaps} = this.state
    const {render} = this.props
    return render(googleMaps)
  }
}

export default GoogleMapsLoader
