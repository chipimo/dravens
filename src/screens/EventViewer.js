import React, { useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  StyleSheet,
  Image
} from "react-native";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { BackHandler } from "react-native";
import * as Animatable from "react-native-animatable";
import { Header } from "react-navigation-stack";
import HeaderImageScrollView, {
  TriggeringView
} from "react-native-image-header-scroll-view";
import { IconToggle } from "react-native-material-ui";
import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";

const MIN_HEIGHT = 45;
const MAX_HEIGHT = 200; 

const EventViewer = props => {
  let textInput = null;
  const [showNavTitle, SetshowNavTitle] = React.useState(false);
  const value = useSelector(store => store.EventCard);

  const didFocus = props.navigation.addListener("didFocus", payload => {
    BackHandler.addEventListener("hardwareBackPress", onBack);
  });

  useEffect(() => {
    const willBlur = props.navigation.addListener("willBlur", payload => {});
    return function cleanup() {
      didFocus.remove();
      willBlur.remove();
    };
  }, [value]);

  onBack = () => {
    props.dispatchEvent({
      type: "OFFLOADITEMS"
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <HeaderImageScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        fadeOutForeground
        renderHeader={() => (
          <Image
            source={{ uri: props.EventCard.data.img }}
            style={styles.image}
          />
        )}
        renderFixedForeground={() => (
          <Animatable.View
            style={[styles.navTitleView, { paddingRight: 5 }]}
            ref={navTitleView => {
              textInput = navTitleView;
            }}
          >
            <IconToggle
              onPress={() => {
                props.dispatchEvent({
                  type: "OFFLOADITEMS"
                });
                props.navigation.goBack();
              }}
              color={"#DFDEE0"}
              name="keyboard-arrow-left"
            />

            <Text numberOfLines={1} style={styles.navTitle}>
              {props.EventCard.data.title}
            </Text>
          </Animatable.View>
        )}
        renderForeground={() => (
          <View style={{ flex: 1 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <IconToggle
                onPress={() => {
                  props.dispatchEvent({
                    type: "OFFLOADITEMS"
                  });
                  props.navigation.goBack();
                }}
                color={"#FFFFFF"}
                name="keyboard-arrow-left"
              />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.imageTitle}>
                {props.EventCard.data.title}
              </Text>
            </View>
          </View>
        )}
      >
        <TriggeringView
          style={{
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: "#cccccc",
            backgroundColor: "white"
          }}
          onHide={() => textInput.fadeInUp(200)}
          onDisplay={() => textInput.fadeOut(100)}
        >
          <Text style={styles.title}>
            <Text style={styles.name}>{props.EventCard.data.subTitle}</Text>
          </Text>
        </TriggeringView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.sectionContent}>
            {props.EventCard.data.summary}
          </Text>
        </View>
      </HeaderImageScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get("window").width,
    alignSelf: "stretch",
    resizeMode: "cover"
  },
  title: {
    fontSize: 20
  },
  name: {
    fontWeight: "bold"
  },
  section: {
    padding: 20,
    marginBottom: 90,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "white"
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  sectionContent: {
    fontSize: 16,
    textAlign: "justify"
  },
  keywords: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap"
  },
  keywordContainer: {
    backgroundColor: "#999999",
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  keyword: {
    fontSize: 16,
    color: "white"
  },
  titleContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  imageTitle: {
    color: "white",
    backgroundColor: "transparent",
    fontSize: 24,
    textAlign: "center"
  },
  navTitleView: {
    height: MIN_HEIGHT,
    opacity: 0,
    paddingLeft: 5,
    paddingRight: 12,
    backgroundColor: "#6F57B0",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  navTitle: {
    color: "#DFDEE0",
    fontSize: 18,
    backgroundColor: "transparent",
    paddingTop: 10,
    textAlign: "center"
  },
  sectionLarge: {
    height: 600
  }
});

EventViewer.navigationOptions = {
  header: null,
  gesturesEnabled: false
};

function mapStateToProps(state) {
  return {
    EventCard: state.EventCard,
    User: state.User
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventViewer);
