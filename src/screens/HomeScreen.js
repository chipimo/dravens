import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import { Text } from "react-native-elements";
import { CardFour, CardSix, CardSeven } from "../components/Cards";
import moment from "moment";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const DeviceWidth = Dimensions.get("window").width;
const DeviceHeight = Dimensions.get("window").height;

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    offText:
      "As a client who use our services we want to deliver a service that for exceeds your expectation at all times",
    type: "banner",
    image:
      "https://res.cloudinary.com/chawanangwa/image/upload/v1576282269/66076406_667789507057425_3243528614397870080_n_ztppd4.jpg"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    type: "Events",
    data: [
      {
        id: "58694a0f-3da1-471f-bd96-1455719d0",
        subTitle: "What is Safeguarding Training & Why is it so Important?",
        summary:
          "Preventative care visits, including health screenings for cholesterol " +
          "levels, colon cancer, heart problems and more, qualify for Medicare " +
          "coverage. Seniors also need to get vaccinations that can help prevent " +
          "influenza and pneumonia  " +
          "  " +
          "A vulnerable adult is defined as a person who, for any reason, may be unable to take care of themselves or protect themselves against significant harm or exploitation. Safeguarding vulnerable adults involves reducing or preventing the risk of significant harm from neglect or abuse, while also supporting people to maintain control of their own lives.",
        author: "Dravens",
        title: "Safeguarding vulnerable adults",
        img:
          "https://res.cloudinary.com/chawanangwa/image/upload/v1576282284/66342585_2387694371468181_6021474935594024960_n_nrjbqe.jpg"
      },
      {
        id: "58694a0f-3da1-471f-bd96-14557561e29d0",
        summary: "",
        subTitle: "What is Safeguarding Training & Why is it so Important?",
        author: "Dravens",
        title: "Care Certificate",
        img:
          "https://res.cloudinary.com/chawanangwa/image/upload/v1576567350/66258261_432012277640677_254627926417342464_n_au2gp5.jpg"
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e35fv9d0",
        subTitle: "What is Safeguarding Training & Why is it so Important?",
        summary: "",
        author: "Dravens",
        title: "Challenging behavior",
        img:
          "https://res.cloudinary.com/chawanangwa/image/upload/v1576567474/66127061_957336111332158_1926395640888164352_n_qsxwkx.jpg"
      }
    ]
  },
  {
    type: "sevices",
    id: "58694a0f-3da1-471f-bd96-1571e29d72",
    title: "HealthCare Services",
    data: [
      {
        id: "58694a0f-3da1-471f-b96-145571e242",
        title: "MEAL PREPARATION",
        summary:
          "We are a specialist care service providing " +
          "the home care services and support to " +
          "individuals living in the comfort of their " +
          "own homes",
        contant: "",
        icon: require("../assets/imageIcons/icons8-vegan-food-64.png")
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e22",
        title: "MEDICATION SUPPORT",
        summary:
          "We are a specialist care service providing " +
          "the home care services and support to " +
          "individuals living in the comfort of their " +
          "own homes",
        contant: "",
        icon: require("../assets/imageIcons/icons8-pills-64.png")
      },
      {
        id: "58694a0f-da1-471f-bd96-14551e242",
        title: "HOMECARE",
        summary:
          "We are a specialist care service providing " +
          "the home care services and support to " +
          "individuals living in the comfort of their " +
          "own homes",
        contant: "",
        icon: require("../assets/imageIcons/icons8-hospital-bed-80.png")
      }
    ]
  },
  {
    type: "feeds",
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "News Feeds",
    data: [
      {
        id: "5869f-da1-471f-bd96-14551e242",
        title: "Focus on prevention.",
        summary:
          "We are a specialist care service providing " +
          "the home care services and support to " +
          "individuals living in the comfort of their " +
          "own homes",
        contant: "",
        image:
          "https://res.cloudinary.com/chawanangwa/image/upload/v1576282257/62515058_3145476662137095_4364052734014390272_n_uzxn15.jpg",
        icon:
          "https://lemag.nikonclub.fr/wp-content/uploads/2016/11/Photo-selection-pour-Nikon-France-Mattia-Bonavida-2016-6.jpg"
      }
    ]
  }
];

const HomeScreen = props => {
  const [hour, sethour] = React.useState(null);
  const [username, setusername] = React.useState("Melvin");
  const value = useSelector(store => store.EventCard.isLoaded);

  useEffect(() => {
    this.getHour();
    if (value) props.navigation.navigate("EventViewer");
    return () => {};
  }, [value]);

  getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    sethour(hour);
  };

  RenderItemInner = ({ data }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.dispatchEvent({
            type: "EVENTITEM",
            payload: {
              img: data.img,
              title: data.title,
              author: data.author,
              subTitle: data.subTitle,
              summary: data.summary
            }
          });
        }}
        style={{
          width: scale(150),
          marginLeft: 10,
          marginRight: 10,
          height: "100%",
          overflow: "hidden"
        }}
      >
        <View style={{ height: verticalScale(90), width: "100%" }}>
          <ImageBackground
            source={{
              uri: data.img
            }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 5,
              overflow: "hidden"
            }}
          ></ImageBackground>
        </View>
        <Text
          numberOfLines={2}
          style={{ fontFamily: "Roboto-Light", color: "#515151" }}
        >
          {data.title}
        </Text>
      </TouchableOpacity>
    );
  };

  RenderServices = ({ data }) => {
    return (
      <CardSeven
        title={data.title}
        subTitle={data.summary}
        image={data.icon}
        icon1={"share"}
        iconColor1={"#fff"}
        iconBackground1={"#D9D9D9"}
        onClicked1={() => {
          alert("Hello!");
        }}
        icon2={"heart"}
        iconColor2={"#fff"}
        iconBackground2={"red"}
        onClicked2={() => {
          alert("Hello!");
        }}
      />
    );
  };

  RenderFeeds = ({ data }) => {
    return (
      <CardSix
        title={data.title}
        subTitle={data.summary}
        stars={234}
        profile={{
          uri: data.icon
        }}
        image={{
          uri: data.image
        }}
        icon1={"star"}
        iconColor1={"#fff"}
        iconBackground1={"red"}
        onClicked1={() => {
          alert("Hello!");
        }}
        icon2={"rocket"}
        iconColor2={"#fff"}
        iconBackground2={"purple"}
        onClicked2={() => {
          alert("Hello!");
        }}
      />
    );
  };

  RenderItems = ({ data }) => {
    return (
      <View>
        {data.type === "banner" ? (
          <View style={{}}>
            <CardFour
              image={{
                uri: data.image
              }}
              date={moment(new Date()).format("MMMM Do YYYY")}
              off={
                hour < 12
                  ? `Good Morning ${username} welcome back`
                  : hour < 17
                  ? `Good afternoon ${username} welcome back`
                  : `Good evening ${username} welcome back`
              }
              offText={data.offText}
            />
          </View>
        ) : (
          <View>
            {data.type === "Events" ? (
              <View style={{ height: 210, padding: 5 }}>
                <View style={{ marginBottom: 5, marginLeft: 10 }}>
                  <View>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate("Events")}
                      style={{
                        marginLeft: 2,
                        marginTop: 7,
                        marginBottom: 4
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Text
                          h4
                          style={{
                            color: "#AAAAAA",
                            fontFamily: "Roboto-Bold"
                          }}
                        >
                          Training{" "}
                        </Text>
                        <View style={{ marginLeft: 5, marginTop: 5 }}>
                          <Ionicons
                            name="ios-arrow-dropright"
                            size={23}
                            color="#AAAAAA"
                          />
                        </View>
                      </View>
                      <Text style={{ color: "#AAAAAA" }}>
                        Our Training is specially delivered In House{" "}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <FlatList
                  horizontal={true}
                  data={data.data}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => <RenderItemInner data={item} />}
                />
              </View>
            ) : (
              <View style={{ marginTop: 10 }}>
                {data.type === "sevices" ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate("ServicesView")}
                      style={{
                        marginLeft: 15,
                        marginTop: 7,
                        marginBottom: 10
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Text
                          h4
                          style={{
                            color: "#AAAAAA",
                            fontFamily: "Roboto-Bold"
                          }}
                        >
                          HealthCare Services{" "}
                        </Text>
                        <View style={{ marginLeft: 5, marginTop: 5 }}>
                          <Ionicons
                            name="ios-arrow-dropright"
                            size={23}
                            color="#AAAAAA"
                          />
                        </View>
                      </View>
                      <Text style={{ color: "#AAAAAA" }}>
                        Our Training is specially delivered In House{" "}
                      </Text>
                    </TouchableOpacity>
                    <FlatList
                      data={data.data}
                      keyExtractor={item => item.id}
                      renderItem={({ item }) => <RenderServices data={item} />}
                    />
                  </View>
                ) : (
                  <View>
                    {data.type === "feeds" ? (
                      <View>
                        <View style={{ marginBottom: 5, marginLeft: 10 }}>
                          <View>
                            <TouchableOpacity
                              onPress={() =>
                                props.navigation.navigate("Events")
                              }
                              style={{
                                marginLeft: 2,
                                marginTop: 7,
                                marginBottom: 4
                              }}
                            >
                              <View style={{ flexDirection: "row" }}>
                                <Text
                                  h4
                                  style={{
                                    color: "#AAAAAA",
                                    fontFamily: "Roboto-Bold"
                                  }}
                                >
                                  News feeds{" "}
                                </Text>
                                <View style={{ marginLeft: 5, marginTop: 5 }}>
                                  <Ionicons
                                    name="ios-arrow-dropright"
                                    size={23}
                                    color="#AAAAAA"
                                  />
                                </View>
                              </View>
                              <Text style={{ color: "#AAAAAA" }}>
                                Get news feeds and updates{" "}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <View>
                          <FlatList
                            data={data.data}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                              <RenderFeeds data={item} />
                            )}
                          />
                        </View>
                      </View>
                    ) : null}
                  </View>
                )}
              </View>
            )}
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <RenderItems data={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
});

HomeScreen.navigationOptions = {
  header: null
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
