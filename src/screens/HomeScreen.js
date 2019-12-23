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
    type: "sevices",
    id: "58694a0f-3da1-471f-bd96-1571e29d72",
    title: "HealthCare Services",
    data: [
      {
        id: "58694a0f-3da1-471f-b96-145571e242",
        title: "MEAL PREPARATION",
        summary:
          "We are a specialist care service providing " +
          "individuals living in the comfort of their " +
          "own homes",
        contant: "",
        icon: require("../assets/imageIcons/icons8-vegan-food-64.png")
      }
    ]
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    type: "Events",
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
        id: "58694a0f-3da1-471f-b96-1451e242",
        title: "HOMECARE",
        summary:
          "We are a specialist care service providing " +
          "individuals living in the comfort of their " +
          "own homes",
        contant: "",
        icon: require("../assets/imageIcons/icons8-hospital-bed-80.png")
      }
    ]
  },
  {
    id: "3ac68afc-c605-48d3-a-fbd91aa97f63",
    title: "Second Item",
    type: "Training",
    data: [
      {
        id: "58694a0f-3da1-471f-b96-1455ff242",
        title: "TRAINING",
        icon: require("../assets/imageIcons/icons8-vegan-food-64.png")
      },
      {
        id: "5869a0f-3da1-47-b96-1451e42",
        title: "ONLINE TRAINING",
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
        summary: "We are a specialist care service providing ",

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
  const initalBlogState = [
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
  ];
  const [hour, sethour] = React.useState(null);
  const [username, setusername] = React.useState("Melvin");
  const [blogPost, setBlogPost] = React.useState(initalBlogState);
  const value = useSelector(store => store.EventCard.isLoaded);

  useEffect(() => {
    // set time
    this.getHour();
    // get blog post
    this.getBlogPost();

    if (value) props.navigation.navigate("EventViewer");

    return () => {};
  }, [value]);

  getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    sethour(hour);
  };

  getBlogPost = () => {
    fetch("https://dravens.co.uk/wp-json/wp/v2/posts/")
      .then(response => {
        response.json();
      })
      .then(data => {
        let dataPost = [];
        console.log(data);
        // data.results.map(item => {
        //   dataPost.push(item);
        // });
        // setBlogPost(dataPost);
      });
  };

  ///GREETING TO USER
  getGreetingTime = () => {
    let Hour = moment().format("HH");
    let splitAfternoon = 12; // 24hr time to split the afternoon
    let splitEvening = 17; // 24hr time to split the evening

    if (Hour >= splitAfternoon && Hour <= splitEvening) {
      // Between 12 PM and 5PM
      return "Good Afternoon";
    } else if (Hour >= splitEvening) {
      // Between 5PM and Midnight
      return "Good Evening";
    }
    // Between dawn and noon
    return "Good Morning";
  };

  ///RANDOM BACKGROUND
  BackgroundChange = () => {
    let rand = Math.floor(Math.random() * 5) + 1;
    let b1 =
      "https://dravens.co.uk/wp-content/uploads/2019/08/DRAVENS_WEB_189_of_237.jpg";
    let b2 =
      "https://dravens.co.uk/wp-content/uploads/2019/08/66452378_353179372297525_2449924425961701376_n.jpg";
    let b3 =
      "https://dravens.co.uk/wp-content/uploads/2019/08/66639018_654296765039057_8177279872276627456_n.jpg";
    let b4 =
      "https://dravens.co.uk/wp-content/uploads/2019/12/colorful-organic-vegetables-in-paper-eco-shopping-royalty-free-image-1131005372-1565210333.jpg";
    let b5 =
      "https://dravens.co.uk/wp-content/uploads/2019/12/Healthy-Food-Made-Easy-min.jpg";
    let b6 =
      "https://dravens.co.uk/wp-content/uploads/2019/12/20170710193708-GettyImages-499778755.jpg";

    if (rand === 1) {
      return b1;
    } else if (rand === 2) {
      return b2;
    } else if (rand === 3) {
      return b3;
    } else if (rand === 4) {
      return b4;
    } else if (rand === 5) {
      return b5;
    } else {
      return b6;
    }
  };

  ////HEALTH TIPS OF THE DAY
  HealthTips = () => {
    let rand = Math.floor(Math.random() * 5) + 1;
    let b1 = [
      {
        title: "Don’t drink sugar calories",
        description:
          "Sugary drinks are among the most fattening items you can put into your body.This is because your brain doesn’t measure calories from liquid sugar the same way it does for solid food "
      }
    ];
    let b2 = [
      {
        title: "Eat nuts",
        description:
          "Despite being high in fat, nuts are incredibly nutritious and healthy.They’re loaded with magnesium, vitamin E, fiber, and various other nutrients"
      }
    ];
    let b3 = [
      {
        title: "Avoid processed junk food (eat real food instead)",
        description:
          "Processed junk food is incredibly unhealthy.hese foods have been engineered to trigger your pleasure centers, so they trick your brain into overeating"
      }
    ];
    let b4 = [
      {
        title: "Don’t fear coffee",
        description:
          "Coffee is very healthy.It’s high in antioxidants, and studies have linked coffee intake to longevity and a reduced risk of type 2 diabetes, Parkinson’s and Alzheimer’s diseases"
      }
    ];
    let b5 = [
      {
        title: "Eat fatty fish",
        description:
          "Fish is a great source of high-quality protein and healthy fat.This is particularly true of fatty fish, such as salmon, which is loaded with omega-3 fatty acids and various other nutrients"
      }
    ];
    let b6 = [
      {
        title: "Get enough sleep",
        description:
          "The importance of getting enough quality sleep cannot be overstated.Poor sleep can drive insulin resistance, disrupt your appetite hormones, and reduce your physical and mental performance "
      }
    ];

    if (rand === 1) {
      return b1;
    } else if (rand === 2) {
      return b2;
    } else if (rand === 3) {
      return b3;
    } else if (rand === 4) {
      return b4;
    } else if (rand === 5) {
      return b5;
    } else {
      return b6;
    }
  };

  RenderServices = ({ data }) => {
    return (
      <CardSeven
        title={data.title}
        subTitle={data.summary}
        image={data.icon}
        showBtn={false}
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
        title={"data.title.rendered"}
        subTitle={"data.content.rendered"}
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

  RenderItemInner = ({ data }) => {
    return (
      <View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 15
            }}
          >
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("LinksScreen", {
                  title: "Book us Now",
                  link: "https://dravens.co.uk/book/"
                })
              }
              style={{
                height: verticalScale(150),
                width: scale(155),
                borderRadius: scale(15),
                borderColor: "#B9B6BB",
                borderWidth: 1,
                borderStyle: "solid",
                overflow: "hidden"
              }}
            >
              <View
                style={{
                  height: "55%",
                  width: "100%",
                  backgroundColor: "rgba(198,161,271,0.2)",
                  padding: 10,
                  paddingTop: 20
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "Roboto-Regular",
                    color: "#222627"
                  }}
                >
                  BOOK US NOW
                </Text>
              </View>
              <View style={{ padding: 5 }}>
                <Text
                  style={{
                    color: "#222627"
                  }}
                >
                  Our carefully selected team of staff are responsible for
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("LinksScreen", {
                  title: "Request Our Service",
                  link: "https://dravens.co.uk/request-a-service-mobile/"
                });
              }}
              style={{
                height: verticalScale(150),
                width: scale(155),
                borderRadius: scale(15),
                borderColor: "#B9B6BB",
                borderWidth: 1,
                borderStyle: "solid",
                overflow: "hidden"
              }}
            >
              <View
                style={{
                  height: "55%",
                  width: "100%",
                  backgroundColor: "rgba(198,161,271,0.2)",
                  padding: 10,
                  paddingTop: 20
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "Roboto-Regular",
                    color: "#222627"
                  }}
                >
                  REQUEST OUR SERVICES
                </Text>
              </View>
              <View style={{ padding: 5 }}>
                <Text
                  style={{
                    color: "#222627"
                  }}
                >
                  Our carefully selected team of staff are responsible for
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  RenderItems = ({ data }) => {
    let json = this.HealthTips();

    return (
      <View>
        {data.type === "banner" ? (
          <View style={{}}>
            <CardFour
              image={{
                uri: data.image
              }}
              date={moment(new Date()).format("MMMM Do YYYY")}
              off={this.getGreetingTime()}
              offTextSub={this.HealthTips()[0].title}
              offText={this.HealthTips()[0].description}
            />
          </View>
        ) : (
          <View>
            {data.type === "sevices" ? (
              // Booking service
              <View>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate("LinksScreen", {
                        title: "Book us Now",
                        link: "https://dravens.co.uk/book/"
                      })
                    }
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
                        Book with us{" "}
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
                      Providing Specialists Services from Hospital to your Home
                    </Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 15
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate("LinksScreen", {
                        title: "Book us Now",
                        link: "https://dravens.co.uk/book/"
                      })
                    }
                    style={{
                      height: verticalScale(150),
                      width: scale(155),
                      borderRadius: scale(15),
                      borderColor: "#B9B6BB",
                      borderWidth: 1,
                      borderStyle: "solid",
                      overflow: "hidden"
                    }}
                  >
                    <View
                      style={{
                        height: "55%",
                        width: "100%",
                        backgroundColor: "rgba(198,161,271,0.2)",
                        padding: 10,
                        paddingTop: 20
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          fontFamily: "Roboto-Regular",
                          color: "#222627"
                        }}
                      >
                        BOOK US NOW
                      </Text>
                    </View>
                    <View style={{ padding: 5 }}>
                      <Text
                        style={{
                          color: "#222627"
                        }}
                      >
                        Our carefully selected team of staff are responsible for
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate("LinksScreen", {
                        title: "Request Our Service",
                        link: "https://dravens.co.uk/request-a-service-mobile/"
                      });
                    }}
                    style={{
                      height: verticalScale(150),
                      width: scale(155),
                      borderRadius: scale(15),
                      borderColor: "#B9B6BB",
                      borderWidth: 1,
                      borderStyle: "solid",
                      overflow: "hidden"
                    }}
                  >
                    <View
                      style={{
                        height: "55%",
                        width: "100%",
                        backgroundColor: "rgba(198,161,271,0.2)",
                        padding: 10,
                        paddingTop: 20
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          fontFamily: "Roboto-Regular",
                          color: "#222627"
                        }}
                      >
                        REQUEST OUR SERVICES
                      </Text>
                    </View>
                    <View style={{ padding: 5 }}>
                      <Text
                        style={{
                          color: "#222627"
                        }}
                      >
                        Our carefully selected team of staff are responsible for
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View style={{ marginTop: 10 }}>
                {data.type === "Events" ? (
                  // Traninig
                  <View style={{ height: 210, padding: 5 }}>
                    <View style={{ marginBottom: 5, marginLeft: 10 }}>
                      <View>
                        <TouchableOpacity
                          onPress={() => {
                            props.navigation.navigate("LinksScreen", {
                              title: "Request Our Service",
                              link:
                                "https://dravens.co.uk/request-a-service-mobile/"
                            });
                          }}
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
                      data={data.data}
                      keyExtractor={item => item.id}
                      renderItem={({ item }) => <RenderItemInner data={item} />}
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
                                props.navigation.navigate("LinksScreen", {
                                  title: "Blog",
                                  link: "https://dravens.co.uk/blog"
                                })
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
                                  Blog{" "}
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
    User: state.User,
    navData: state.navData
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
