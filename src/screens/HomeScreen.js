import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  ImageBackground,
  StyleSheet
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
    title: "Second Item"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item"
  }
];

const HomeScreen = () => {
  const [hour, sethour] = React.useState(null);
  const [username, setusername] = React.useState("Melvin");

  useEffect(() => {
    this.getHour();
  }, []);

  getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    sethour(hour);
  };

  RenderItems = props => {
    return (
      <View>
        {props.type === "banner" ? (
          <View style={{}}>
            <CardFour
              image={{
                uri: props.image
              }}
              date={moment(new Date()).format("MMMM Do YYYY")}
              off={
                hour < 12
                  ? `Good Morning ${username} welcome back`
                  : hour < 17
                  ? `Good afternoon ${username} welcome back`
                  : `Good evening ${username} welcome back`
              }
              offText={props.offText}
            />
          </View>
        ) : (
          <View>
            <Text>News</Text>
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
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <RenderItems title={item.title} />}
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
export default HomeScreen;
