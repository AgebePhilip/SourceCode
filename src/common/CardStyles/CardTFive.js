import React from 'react'
import { View, TouchableOpacity, Text, Platform, I18nManager, StyleSheet } from 'react-native'
import ImageLoad from '../RnImagePlaceH'
import { appTextStyle } from '../Theme.style'
import Timer from '../Timer'
import Counter from '../CounterTwo'
export default CardOne = ({ props, widthPic, t, s, btnWidth }) => (
  <View
    style={[styles.container, {
      backgroundColor: props.backgroundColor,
      borderColor: props.themeStyle.primaryLight
    }]}>
    {/* /// ///////////////////////////////////////////////////// 2nd */}
    <View
      style={{
        backgroundColor: props.backgroundColor,
        borderRadius: appTextStyle.customRadius - 7
      }}>
      {t.newMethod3(props, t) === 1 ? (
        t.props.recentViewedProducts && props.recent ? (
          <TouchableOpacity
            style={[styles.removeStyle, {
              shadowColor: props.themeStyle.textColor,
              width: btnWidth
            }]}
            onPress={() => t.removeRecent(props, t)}>
            <View
              style={[styles.removeView, {
                backgroundColor: props.backgroundColor,
                width: btnWidth
              }]}>
              <Text
                style={{
                  color: props.themeStyle.textColor,
                  fontSize: appTextStyle.mediumSize,
                  fontWeight: '500',
                  fontFamily: appTextStyle.fontFamily
                }}>
                {t.props.language.Remove}
              </Text>
            </View>
          </TouchableOpacity>
        ) : props.removeButton ? (
          <TouchableOpacity
            style={[styles.removeBtn2, {
              width: btnWidth,
              shadowColor: props.themeStyle.textColor
            }]}
            onPress={() => t.removeWishlist(props, t)}>
            <View
              style={[styles.removebtnView, {
                backgroundColor: props.backgroundColor,
                width: btnWidth
              }]}>
              <Text
                style={{
                  color: props.themeStyle.textColor,
                  fontSize: appTextStyle.mediumSize,
                  fontWeight: '500',
                  fontFamily: appTextStyle.fontFamily
                }}>
                {t.props.language.Remove}
              </Text>
            </View>
          </TouchableOpacity>
        ) : null
      ) : null}
      <View
        style={{
          backgroundColor: props.backgroundColor,
          borderRadius: appTextStyle.customRadius - 7
        }}>
        <TouchableOpacity
          style={{
            flex: 2,
            borderRadius: appTextStyle.customRadius - 7
          }}
          onPress={() =>
            props.navigation.push('ProductDetails', {
              objectArray: props.objectArray //
            })
          }>
          <ImageLoad
            key={props.objectArray.id}
            style={{
              height: widthPic,
              width: widthPic,
              backgroundColor:
                props.backgroundColor,
              borderRadius: appTextStyle.customRadius - 7,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0
            }}
            source={{ uri: props.objectArray.images[0].src }}>
          </ImageLoad>
          <View style={{ alignSelf: 'center', position: 'absolute', bottom: 10 }}>
            {props.objectArray.product_type === 'simple'
              ? <TouchableOpacity
                style={{
                  width: btnWidth * 0.9,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  backgroundColor: props.themeStyle.primary,
                  padding: 2,
                  borderRadius: appTextStyle.customRadius,
                  marginTop: 7
                }}
                onPress={() => {
                  if (t.newMethod3(props, t) !== 1) {
                    t.addToCartTwo(props, t)
                  }
                }}>
                <Text
                  style={{
                    color: props.themeStyle.textTintColor,
                    fontSize: appTextStyle.mediumSize + 1,
                    fontWeight: '500',
                    fontFamily: appTextStyle.fontFamily
                  }}>
                  {t.props.language['Add to Bag']}
                </Text>

              </TouchableOpacity>
              : props.objectArray.product_type === 'variable'
                ? <TouchableOpacity
                  style={{
                    width: btnWidth * 0.9,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    backgroundColor: props.themeStyle.primary,
                    padding: 2,
                    borderRadius: appTextStyle.customRadius,
                    marginTop: 7

                  }}
                  onPress={() => {
                    if (t.newMethod3(props, t) !== 1) {
                      props.navigation.push('ProductDetails', {
                        objectArray: props.objectArray //
                      })
                    }
                  }}>
                  <Text
                    style={{
                      color: props.themeStyle.textTintColor,
                      fontSize: appTextStyle.mediumSize + 1,
                      fontWeight: '500',
                      fontFamily: appTextStyle.fontFamily
                    }}>
                    {t.props.language.Details}
                  </Text>

                </TouchableOpacity> : null
            }

          </View>

          <View
            style={[styles.tagsView, {
              backgroundColor: '#444444',
              top: 10
            }]}>
            {t.priceFun(
              appTextStyle.mediumSize,
              s,
              widthPic,
              true
            )
            }
          </View>

        </TouchableOpacity>

        <View style={{
          backgroundColor: props.backgroundColor,
          borderRadius: appTextStyle.customRadius - 7
        }}>
          <Text
            style={[styles.titleText, {
              color: props.themeStyle.cardTextColor,
              width: widthPic / 1,
              paddingBottom: 0,
              textAlign: 'center'
            }]}
            numberOfLines={2}>
            {props.objectArray.categories[0].name}
          </Text>
          <Text
            style={[styles.titleText, {
              color: props.themeStyle.cardTextColor,
              width: widthPic * 0.8,
              textAlign: 'center',
              alignSelf: 'center'
            }]}
            numberOfLines={1}>
            {props.objectArray.name}
          </Text>
          {props.objectArray.product_type === 'simple'
            ? <View style={{
              padding: 2,
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 8
            }}>
              <Counter
                minimumValue={1}
                initialValue={t.state.counterQuantity}
                width={30}
                height={3}
                containerWidth={widthPic * 0.6}
                onDecrement={value => {
                  t.quantityMinusTwo(value)
                }
                }
                onIncrement={value => {
                  t.quantityPlusTwo(value)
                }
                }
              />
            </View>
            : null}
        </View>

        {props.removeButton ? (
          <TouchableOpacity
            style={[styles.removeWishlistStyle, {
              shadowColor: props.themeStyle.textColor,
              width: btnWidth
            }]}
            onPress={() => t.removeWishlist(props, t)}>
            <View
              style={[styles.removeWishlistStyle2, {
                width: btnWidth,
                backgroundColor: props.backgroundColor
              }]}>
              <Text
                style={{
                  color: props.themeStyle.textColor,
                  fontSize: appTextStyle.mediumSize,
                  fontWeight: '500',
                  fontFamily: appTextStyle.fontFamily
                }}>
                {t.props.language.Remove}
              </Text>
            </View>
          </TouchableOpacity>
        ) : null}

        {t.props.recentViewedProducts && props.recent ? (
          <TouchableOpacity
            style={[styles.recentProductView, {
              shadowColor: props.themeStyle.textColor,
              width: btnWidth
            }]}
            onPress={() => t.removeRecent(props, t)}>
            <View
              style={[styles.removeRecentView, {
                width: btnWidth,
                backgroundColor: props.backgroundColor
              }]}>
              <Text
                style={{
                  color: props.themeStyle.textColor,
                  fontSize: appTextStyle.mediumSize,
                  fontWeight: '500',
                  fontFamily: appTextStyle.fontFamily
                }}>
                {t.props.language.Remove}
              </Text>
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
    {t.props.dataName === 'Flash' ? (
      <Timer
        props={t.props}
        widthPic={widthPic}
        t={t}
        text={null}
        objectArray={props.objectArray}
        s={s}
        btnWidth={btnWidth}></Timer>
    ) : null}
  </View>
)

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderWidth: 1,
    borderRadius: appTextStyle.customRadius - 7
  },
  removeStyle: {
    position: 'absolute',
    bottom: 4,
    left: 5
  },
  removeView: {
    alignItems: 'center',
    height: Platform.OS === 'android' ? 30 : 28,
    justifyContent: 'center'
  },
  removeBtn2: {
    position: 'absolute',
    bottom: 4,
    left: 5
  },
  removebtnView: {
    alignItems: 'center',
    height: Platform.OS === 'android' ? 30 : 28,
    justifyContent: 'center'
  },
  discountView: {
    borderRadius: appTextStyle.customRadius - 4,
    padding: 1,
    height: 27,
    width: 27,
    alignItems: 'center',
    justifyContent: 'center'
  },
  removeWishlistStyle2: {
    padding: 5,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 0,
    marginBottom: 0
  },
  titleText: {
    fontSize: appTextStyle.mediumSize,
    fontFamily: appTextStyle.fontFamily,
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
    margin: 0,
    padding: 5,
    paddingTop: 3,
    paddingLeft: 5,
    paddingBottom: 8,
    marginBottom: 0,
    fontWeight: '400'
  },
  removeWishlistStyle: {
    margin: 5,
    marginBottom: 3,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  tagsView: {
    zIndex: 6,
    padding: 2,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: appTextStyle.customRadius - 15,
    left: 4,
    top: 10,
    position: 'absolute'
  },
  recentProductView: {
    margin: 5,
    marginBottom: 3,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  removeRecentView: {
    padding: 5,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 0,
    marginBottom: 0
  }
})
