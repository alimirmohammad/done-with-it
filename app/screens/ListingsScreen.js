import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";

export default function ListingsScreen({ navigation }) {
  const listingsResponse = useApi(listingsApi.getListings);

  useEffect(() => {
    listingsResponse.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {listingsResponse.error && (
        <>
          <AppText>Couldn't retrieve listings</AppText>
          <AppButton title="Retry" onPress={listingsResponse.request} />
        </>
      )}
      <ActivityIndicator visible={listingsResponse.loading} />
      <FlatList
        data={listingsResponse.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
  },
});
