import React from "react";
import { View, Text, FlatList, SafeAreaView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { CardEcomFour } from "react-native-card-ui";
import { IconToggle } from "react-native-material-ui";

const DATA = [
  {
    img: "",
    title: "",
    icon: "",
    id: "hdf236eu"
  }
];

const Events = props => {
  RenderItem = ({ data }) => {
    return (
      <CardEcomFour
        title={"Safeguarding vulnerable adults"}
        subTitle={"What is safeguarding training & Why is it so important"}
        price={""}
        image={{
          uri:
            "https://res.cloudinary.com/chawanangwa/image/upload/v1576282284/66342585_2387694371468181_6021474935594024960_n_nrjbqe.jpg"
        }}
        buttonText={"VIEW DETAILS"}
        buttonColor={"#4383FF"}
        onClickButton={() => alert("Has clicked")}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: 25, width: "100%", backgroundColor: "#6B52AE" }}>
        <IconToggle
          onPress={() => {
            props.navigation.goBack();
          }}
          color={"#DFDEE0"}
          name="keyboard-arrow-left"
        />
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
