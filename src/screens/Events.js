import React from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";

const DATA = [
    {
        
    }
]

const Events = () => {
  return (
    <View>
      
    </View>
  );
};

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
