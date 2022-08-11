import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import ContactSellerForm from "../components/ContactSellerForm";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

export default function ListingDetailsScreen({ route }) {
  const item = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}>
      <Image
        style={styles.image}
        preview={{ uri: item.images[0].thumbnailUrl }}
        tint="light"
        uri={item.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.price}>${item.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subtitle="5 Listings"
          />
        </View>
        <ContactSellerForm listing={item} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});
