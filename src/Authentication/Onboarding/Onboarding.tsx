import React, { useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, { divide, multiply } from "react-native-reanimated";
import {
  useScrollHandler,
  interpolateColor,
} from "react-native-redash/lib/module/v1";

import Slide, { SLIDE_HEIGHT, BORDER_RADIUS } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";

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
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const slides = [
  {
    title: "Relaxado",
    subtitle: "Encontre Seus Outfits",
    description:
      "Confuso com seu outfit? Não se preocupe! Encontre as melhores roupas aqui!",
    color: "#BFEAF5",
    picture: require("../../../assets/1.png"),
  },
  {
    title: "Divertido",
    subtitle: "Veja Primeiro, Use Primeiro",
    description:
      "Odiando as roupas do seu guarda-roupa? Explore centenas de ideias de outfit",
    color: "#BEECC4",
    picture: require("../../../assets/2.png"),
  },
  {
    title: "Excêntrico",
    subtitle: "Seu Estilo, Seu Jeito",
    description:
      "Crie seu estilo próprio e único e fique incrível todos os dias",
    color: "#FFE4D9",
    picture: require("../../../assets/3.png"),
  },
  {
    title: "Descolado",
    subtitle: "Vista-se Bem, Sinta-se Bem",
    description:
      "Descubra as últimas tendências da moda e explore sua personalidade",
    color: "#FFDDDD",
    picture: require("../../../assets/4.png"),
  },
];

const Onboarding: React.FC = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
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
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />

        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              width: width * slides.length,
              flexDirection: "row",
              transform: [{ translateX: multiply(x, -1) }],
            }}
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
    </View>
  );
};

export default Onboarding;
