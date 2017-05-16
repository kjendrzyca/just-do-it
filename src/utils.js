import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

injectTapEventPlugin()

const withMaterialTheme = (Wrapped) => {
  return class WithMaterialTheme extends React.Component {
    childContextTypes:{
      muiTheme: React.PropTypes.object.isRequired,
    }

    static getChildContext() {
      return {
        muiTheme: getMuiTheme(baseTheme)
      }
    }

    render () {
      return (
        <MuiThemeProvider>
          <Wrapped {...this.props} />
        </MuiThemeProvider>
      )
    }
  }
}

export {withMaterialTheme}
