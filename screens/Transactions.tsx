import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import useUser from "../hooks/useGetterContext";

export default function Transactions() {
  const { transactions } = useUser();
  console.log(transactions.transactions.length);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.title}>Transactions history</Text>
      {transactions.transactions.map((e, i) => {
        return (
          <View style={styles.transactionsContainer} key={i}>
            {e.account && (
              <Text style={styles.subTitle}>Account: {e.account}</Text>
            )}
            {e.toAccount && (
              <Text style={styles.subTitle}>To the account: {e.toAccount}</Text>
            )}
            {e.toAccount && (
              <Text style={styles.subTitle}>From account: {e.fromAccount}</Text>
            )}
            <Text style={styles.subTitle}>Amount: {e.amount}</Text>
            <Text style={styles.subTitle}>Transfer type: {e.type}</Text>
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
  transactionsContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 5,
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
