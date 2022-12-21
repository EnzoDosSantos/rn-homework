import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import useUser from "../hooks/useGetterContext";

export default function Friends() {
  const { friends } = useUser();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friends</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.subTitle}>Friends basic info</Text>
      {friends.friends.map((e, i) => {
        return (
          <View style={styles.friendsContainer} key={i}>
            <Text style={styles.text}>Fullname: {e.name}</Text>
            <Text style={styles.text}>Email: {e.email}</Text>
          </View>
        );
      })}
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
  },
  friendsContainer:{
    alignItems: "center",
    margin: 10,
    justifyContent: "center",
  },
  subTitle: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
