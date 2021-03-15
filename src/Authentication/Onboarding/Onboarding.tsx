import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import {
  useValue,
  onScrollEvent,
  interpolateColor,
} from "react-native-redash/lib/module/v1";

import Slide, { SLIDE_HEIGHT } from "./Slide";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
});

const slides = [
  { label: "Relaxado", color: "#BFEAF5" },
  { label: "Divertido", color: "#BEECC4" },
  { label: "Excêntrico", color: "#FFE4D9" },
  { label: "Descolado", color: "#FFDDDD" },
];

const Onboarding: React.FC = () => {
  const x = useValue(0);
  // TODO: scrollHandler useScrollHandler?
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, index) => index * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map(({ label }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ label }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <View
          style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 75 }}
        />
      </View>
    </View>
  );
};

export default Onboarding;
