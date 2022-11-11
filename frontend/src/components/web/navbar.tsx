import React, { useRef } from 'react';
import {Text, StyleSheet, Pressable, Animated, Dimensions} from 'react-native';

const NavBar = () => {

    const [barStyle, setbarStyle] = React.useState(new Animated.Value(0));
    const barAnnimation = barStyle.interpolate({ inputRange: [0, 1], outputRange: ["3%", "10%"] })
    const actionNavBar = (toValue: number): void => Animated.timing(barStyle, { toValue: toValue, duration: 200, useNativeDriver: false }).start();

    return (
        <div onMouseEnter={() => actionNavBar(1)} onMouseOut={() => actionNavBar(0)}>
            <Animated.View style={[navStyle.navbar, { width: barAnnimation }]} >
            </Animated.View>
        </div>
    )
}

const navStyle = StyleSheet.create({
    navbar: {
      backgroundColor: 'black',
      position: 'absolute',
      height: '-webkit-fill-available',
      width: '3%', // to 8%
      top: 0,
      left: 0,
    },
})

export default NavBar;