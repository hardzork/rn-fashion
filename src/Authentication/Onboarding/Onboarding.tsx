import React, { useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, { multiply } from "react-native-reanimated";
import {
  useValue,
  onScrollEvent,
  interpolateColor,
} from "react-native-redash/lib/module/v1";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";

const BORDER_RADIUS = 75;
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

const slides = [
  {
    title: "Relaxado",
    subtitle: "Encontre Seus Outfits",
    description:
      "Confuso com seu outfit? Não se preocupe! Encontre as melhores roupas aqui!",
    color: "#BFEAF5",
  },
  {
    title: "Divertido",
    subtitle: "Veja Primeiro, Use Primeiro",
    description:
      "Odiando as roupas do seu guarda-roupa? Explore centenas de ideias de outfit",
    color: "#BEECC4",
  },
  {
    title: "Excêntrico",
    subtitle: "Seu Estilo, Seu Jeito",
    description:
      "Crie seu estilo próprio e único e fique incrível todos os dias",
    color: "#FFE4D9",
  },
  {
    title: "Descolado",
    subtitle: "Vista-se Bem, Sinta-se Bem",
    description:
      "Descubra as últimas tendências da moda e explore sua personalidade",
    color: "#FFDDDD",
  },
];

const Onboarding: React.FC = () => {
  const scroll = useRef<Animated.ScrollView>(null);
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
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              flex: 1,
              transform: [{ translateX: multiply(x, -1) }],
            },
          ]}
        >
          {slides.map(({ subtitle, description }, index) => (
            <Subslide
              key={index}
              onPress={() => {
                if (scroll.current) {
                  scroll.current
                    .getNode()
                    .scrollTo({ x: width * (index + 1), animated: true });
                }
              }}
              last={index === slides.length - 1}
              {...{ subtitle, description }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;
