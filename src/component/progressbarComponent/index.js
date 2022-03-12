/** import statement **/
import React, { Component } from 'react'
import colors from '../../common/style/color';
import * as Progress from 'react-native-progress';

class ProgressbarComponent extends Component {
  /** class constructor **/

  /** Lifecycle Methods **/

  /** Class Render **/
  render() {
    return (
      <Progress.Bar
        width={350}
        height={15}
        borderRadius={8}
        color={colors.primary}
        unfilledColor={colors.lightGreen}
        progress={!!this.props.value ? this.props.value : 0}
        borderColor='white'
      />
    )
  }
}

export default ProgressbarComponent