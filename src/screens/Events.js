import React, { useEffect } from "react";
import { View, Text, FlatList, SafeAreaView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { CardEcomFour } from "react-native-card-ui";
import { IconToggle } from "react-native-material-ui";
import { useSelector } from "react-redux";

const DATA = [
  {
    img:
      "https://res.cloudinary.com/chawanangwa/image/upload/v1576282284/66342585_2387694371468181_6021474935594024960_n_nrjbqe.jpg",
    title: "SAFEGUARDING VULNERABLE ADULTS.",
    author: "Dravens",
    id: "hdf2w36eu",
    subTitle: "What is safeguarding training & Why is it so important",
    summary: ""
  },
  {
    img:
      "https://res.cloudinary.com/chawanangwa/image/upload/v1576282284/66342585_2387694371468181_6021474935594024960_n_nrjbqe.jpg",
    title: "CARE CERTIFICATE",
    author: "Dravens",
    id: "hdf2aw36seu",
    subTitle: "What is safeguarding training & Why is it so important",
    summary: ""
  },
  {
    img:
      "https://res.cloudinary.com/chawanangwa/image/upload/v1576282284/66342585_2387694371468181_6021474935594024960_n_nrjbqe.jpg",
    title: "CHALLENGING BEHAVIOR",
    author: "Dravens",
    id: "hdf2aw3we6eu",
    subTitle: "What is safeguarding training & Why is it so important",
    summary: ""
  },
  {
    img:
      "https://res.cloudinary.com/chawanangwa/image/upload/v1576282284/66342585_2387694371468181_6021474935594024960_n_nrjbqe.jpg",
    title: "INFECTION CONTRO",
    author: "Dravens",
    id: "hdf2aw36seu",
    subTitle: "What is safeguarding training & Why is it so important",
    summary: ""
  },
  {
    img:
      "https://res.cloudinary.com/chawanangwa/image/upload/v1576282284/66342585_2387694371468181_6021474935594024960_n_nrjbqe.jpg",
    title: "DEVELOP AS A CARE WORKER",
    author: "Dravens",
    id: "hdf2aw36seu",
    subTitle: "What is safeguarding training & Why is it so important",
    summary: ""
  },
  {
    img:
      "https://res.cloudinary.com/chawanangwa/image/upload/v1576282284/66342585_2387694371468181_6021474935594024960_n_nrjbqe.jpg",
    title: "STRESS MANAGEMENT",
    author: "Dravens",
    id: "hdf2aw36seu",
    subTitle: "What is safeguarding training & Why is it so important",
    summary: ""
  },
  {
    img:
      "https://res.cloudinary.com/chawanangwa/image/upload/v1576282284/66342585_2387694371468181_6021474935594024960_n_nrjbqe.jpg",
    title: "DOLS",
    author: "Dravens",
    id: "hdf2aw36seu",
    subTitle: "What is safeguarding training & Why is it so important",
    summary: ""
  },
  {
    img:
      "https://res.cloudinary.com/chawanangwa/image/upload/v1576282284/66342585_2387694371468181_6021474935594024960_n_nrjbqe.jpg",
    title: "MEDICATION MANAGEMENT",
    author: "Dravens",
    id: "hdf2aw36seu",
    subTitle: "What is safeguarding training & Why is it so important",
    summary: ""
  }
];

const Events = props => {
  const value = useSelector(store => store.EventCard.isLoaded);

  useEffect(() => {
    if (value) props.navigation.navigate("EventViewer");
    return () => {};
  }, [value]);

  RenderItem = ({ data }) => {
    return (
      <CardEcomFour
        title={data.title}
        subTitle={data.subTitle}
        price={""}
        image={{
          uri: data.img
        }}
        buttonText={"VIEW DETAILS"}
        buttonColor={"#4383FF"}
        onClickButton={() =>
          props.dispatchEvent({
            type: "EVENTITEM",
            payload: {
              img: data.img,
              title: data.title,
              author: data.author,
              subTitle: data.subTitle,
              summary: data.summary
            }
          })
        }
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
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
            Training
          </Text>
        </View>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <RenderItem data={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

Events.navigationOptions = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Events);
