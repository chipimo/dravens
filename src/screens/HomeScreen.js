import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Text } from "react-native-elements";
import {
  CardOne,
  CardTwo,
  CardThree,
  CardFour,
  CardFive,
  CardSix,
  CardSeven,
  CardEight,
  CardNine,
  CardTen,
  CardEleven,
  CardTwelve,
  CardEcomOne,
  CardEcomTwo,
  CardEcomThree,
  CardEcomFour
} from "react-native-card-ui";
import moment from "moment";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { useSelector } from "react-redux";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    offText:
      "Be physically active. Being physically active unlocks a number of health benefits in your body",
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
        title: "Third Item"
      },
      {
        id: "58694a0f-3da1-471f-bd96-14557561e29d0",
        title: "Third Item"
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e35fv9d0",
        title: "Third Item"
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29dsafrd0",
        title: "Third Item"
      }
    ]
  },
  {
    type: "feeds",
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item"
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

  _renderItem = ({ data }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.dispatchEvent({
            type: "EVENTITEM",
            payload: {
              img:
                "https://res.cloudinary.com/chawanangwa/image/upload/v1576282284/66342585_2387694371468181_6021474935594024960_n_nrjbqe.jpg",
              title: "Health Week",
              author: "Dravens",
              price: 0,
              reviews: {
                num: null,
                comments: []
              },
              rating: 0,
              summary:
                "Preventative care visits, including health screenings for cholesterol" +
                "levels, colon cancer, heart problems and more, qualify for Medicare" +
                "coverage. Seniors also need to get vaccinations that can help prevent" +
                "influenza and pneumonia",
              date: new Date(),
              time: "02:20"
            }
          });
        }}
        style={{
          width: 150,
          marginLeft: 10,
          marginRight: 10,
          height: "100%",
          overflow: "hidden"
        }}
      >
        <View style={{ height: 100, width: "100%" }}>
          <ImageBackground
            source={{
              uri:
                "https://res.cloudinary.com/chawanangwa/image/upload/v1576282284/66342585_2387694371468181_6021474935594024960_n_nrjbqe.jpg"
            }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 5,
              overflow: "hidden"
            }}
          ></ImageBackground>
        </View>
        <Text numberOfLines={2} style={{ color: "#515151" }}>
          Preventative care visits, including health screenings for cholesterol
          levels, colon cancer, heart problems and more, qualify for Medicare
          coverage. Seniors also need to get vaccinations that can help prevent
          influenza and pneumonia
        </Text>
      </TouchableOpacity>
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
                        <Text h4 style={{ color: "#AAAAAA" }}>
                          Events{" "}
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
                        Show all dravens events{" "}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <FlatList
                  horizontal={true}
                  data={data.data}
                  keyExtractor={item => item.id}
                  renderItem={_renderItem}
                />
              </View>
            ) : (
              <View style={{ marginTop: 10 }}>
                <View style={{ marginBottom: 5, marginLeft: 10 }}>
                  <Text h4 style={{ color: "#AAAAAA" }}>
                    Events{" "}
                  </Text>
                  <Text style={{ color: "#AAAAAA" }}>
                    Scroll horizontal for more events{" "}
                  </Text>
                </View>
                <View>
                  <CardSix
                    title={"Focus on prevention."}
                    subTitle={
                      "Preventative care visits, including health screenings for cholesterol levels, colon cancer, heart problems and more, qualify for Medicare coverage. Seniors also need to get vaccinations that can help prevent influenza and pneumonia."
                    }
                    profile={{
                      uri:
                        "https://lemag.nikonclub.fr/wp-content/uploads/2016/11/Photo-selection-pour-Nikon-France-Mattia-Bonavida-2016-6.jpg"
                    }}
                    image={{
                      uri:
                        "https://res.cloudinary.com/chawanangwa/image/upload/v1576282257/62515058_3145476662137095_4364052734014390272_n_uzxn15.jpg"
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
                </View>
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
