/** import statement **/
import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import styles from './styles'
import commonStyles from '../../common/style/commonStyle'
import colors from '../../common/style/color'
import { Switch } from 'react-native-switch';
import staticText from '../../common/constantData'

class CardSettingComponent extends Component {
  /** class constructor **/
  constructor(props) {
    super(props);
    this.state = {
      switchOn: false,
      cardLimit: this.props.navigation?.state?.params?.limit
    };
  }
  /** Lifecycle Methods **/

  /** Custom Functions **/
  onRenderCardOptions = () => {
    const { switchOn, cardLimit } = this.state;
    return staticText.cardOptions.map(item =>
      <View key={item.id} style={styles.itemTop}>
        <Image source={item.image} style={styles.icon} />
        <View style={styles.item}>
          <Text style={[commonStyles.semiBoldText]}>{item.title}</Text>
          <Text style={[commonStyles.SmallText12, styles.optionDescTextStyle]}>{item.desc}</Text>
        </View>
        {
          item.showSwitch &&
          <View style={styles.switch}>
            <Switch
              value={item.id == 2 ? switchOn : false}
              onValueChange={
                (val) => {
                  if (item.id == 2) {
                    this.setState({ switchOn: !switchOn }, () => {
                      this.props.onChangeSwitch(switchOn);
                      if (switchOn !== true) {
                        this.props.navigation.navigate('Weeklylimit', {
                          weekLimit: cardLimit,
                          onGoBack: () => this.onBackFromSpeedLimit(),
                          onSaveCardLimit: (amount) => this.onSaveCardLimit(amount)
                        })
                      }
                    })
                  }
                }}
              circleSize={20}
              backgroundActive={colors.primary}
              backgroundInactive={colors.brown}
              renderActiveText={false}
              renderInActiveText={false}
            />
          </View>
        }
      </View>
    )
  }
  onBackFromSpeedLimit = () => {
    this.setState({ switchOn: false })
  }
  onSaveCardLimit = (amount) => {
    this.props.changeCardLimit(amount)
  }

  /** Class Render **/
  render() {
    const { switchOn } = this.state;
    return (
      <View style={commonStyles.flex}>
        {this.onRenderCardOptions()}
      </View>
    )
  }
}

export default CardSettingComponent