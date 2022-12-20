import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import useUser from "../hooks/useGetterContext";

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
  const { user } = useUser();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.title}>Basic info</Text>
      <View>
        <Text style={styles.text}>Fullname: {user.user.name}</Text>
        <Text style={styles.text}>Email: {user.user.email}</Text>
      </View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.title}>Accounts</Text>
      <View>
        {user.user.accounts.map((e, i) => {
          return (
            <View key={i} style={{flexDirection: "row"}}>
              <Text style={styles.text}> {e.type}</Text>
              <Text style={styles.text}> ${e.balance}</Text>
            </View>
          );
        })}
      </View>
      <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      <View>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center"
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
