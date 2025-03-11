import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "@/components/Button";
import { Input } from "@/components/input";
import { router } from "expo-router";

export default function Index() {
  const [name, setName] = useState("");

  function handlerNext() {
    router.navigate("/dashboard");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, {name}</Text>
      <Input onChangeText={(text) => setName(text)} />
      <Button title="Clique aqui" onPress={handlerNext}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
    gap: 16,
  },
  title: {
    fontSize: 20,
    color: "red",
  },
});
