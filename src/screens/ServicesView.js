import React from "react";
import { Text, View, FlatList } from "react-native";
import { IconToggle } from "react-native-material-ui";
import { CardSeven } from "../components/Cards";

const DATA = [
  {
    id: "58694a0f-3da1-471f-b96-571e242",
    title: "banner",
    summary:
      "We are a specialist care service providing" +
      "the home care services and support to" +
      "individuals living in the comfort of their" +
      "own homes.",
    contant: "",
    icon: require("../assets/imageIcons/icons8-vegan-food-64.png")
  },
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
];

const ServicesView = props => {
  RenderServices = ({ data }) => {
    return (
      <View>
        {data.title === "banner" ? (
          <View>
            <Text>
              {data.title}
            </Text>
          </View>
        ) : (
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
        )}
      </View>
    );
  };

  return (
    <View>
      <View
        style={{
          height: 45,
          width: "100%",
          backgroundColor: "#6B52AE",
          flexDirection: "row"
        }}
      >
        <IconToggle
          onPress={() => {
            props.navigation.goBack();
          }}
          color={"#DFDEE0"}
          name="keyboard-arrow-left"
        />
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              fontFamily: "Roboto-Medium",
              color: "#F7F7F7",
              fontSize: 19
            }}
          >
            HealthCare Services
          </Text>
        </View>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <RenderServices data={item} />}
      />
    </View>
  );
};

ServicesView.navigationOptions = {
  header: null
};

export default ServicesView;
