import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
  TextInput
} from "react-native";
import {
  Avatar,
  ListItem,
  Checkbox,
  IconToggle
} from "react-native-material-ui";
import Modal, { ModalContent } from "react-native-modals";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const DeviceWidth = Dimensions.get("window").width;
const DeviceHeight = Dimensions.get("window").height;

const BookingScreen = () => {
  const [visible, setVisible] = React.useState(false);
  const [TextMsg, setTextMsg] = React.useState("");

  return (
    <View>
      <View style={{ paddingTop: 8 }}>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "transparent",
            borderBottomColor: "#D3D3D3",
            padding: 15
          }}
        >
          <View>
            <Avatar
              icon="person"
              iconColor="white"
              style={{ container: { backgroundColor: "#D3D3D3" } }}
            />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontFamily: "Segoe-UI", fontSize: 16 }}>For</Text>
            <Text style={{ fontFamily: "Segoe-UI", fontSize: 16 }}>
              Melvin Chipimo
            </Text>
          </View>
          <View></View>
        </TouchableOpacity>
        <View
          style={{
            paddingLeft: 10,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "transparent",
            borderBottomColor: "#D3D3D3"
          }}
        >
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={text => setTextMsg(text)}
            value={TextMsg}
            placeholder="Add reson for this appointment"
            placeholderTextColor="#4B4B4B"
          />
        </View>
      </View>
      <View>
        <ListItem
          divider
          leftElement={
            <AntDesign name={"solution1"} size={20} color="#503088" />
          }
          centerElement={{
            primaryText: "Primary text"
          }}
          onPress={() => {}}
        />
      </View>
      <Modal
        visible={visible}
        onTouchOutside={() => {
          setVisible(false);
        }}
      >
        <ModalContent>
          <View style={{ width: DeviceWidth - 80 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "transparent",
                borderBottomColor: "#D3D3D3",
                paddingBottom: 5
              }}
            >
              <View>
                <Avatar
                  icon="person"
                  iconColor="white"
                  style={{ container: { backgroundColor: "#D3D3D3" } }}
                />
              </View>
              <View
                style={{ marginTop: 10, marginLeft: 15, width: scale(150) }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    fontFamily: "Segoe-UI",
                    fontSize: 16,
                    color: "#503088"
                  }}
                >
                  Melvin Chipimo
                </Text>
              </View>
              <View style={{ marginTop: 10, marginLeft: 15 }}>
                <Ionicons
                  name={
                    Platform.OS === "ios"
                      ? "ios-checkmark-circle-outline"
                      : "md-checkmark-circle-outline"
                  }
                  size={20}
                  color="#503088"
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 8
              }}
            >
              <View style={{ backgroundColor: "#503088", borderRadius: 100 }}>
                <IconToggle name="add" color="white" />
              </View>
              <View style={{ marginTop: 10, marginLeft: 15 }}>
                <Text>Add family member</Text>
              </View>
            </View>
          </View>
        </ModalContent>
      </Modal>
    </View>
  );
};

BookingScreen.navigationOptions = {
  header: null
};

export default BookingScreen;
