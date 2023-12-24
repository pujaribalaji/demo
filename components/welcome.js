import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Login from "./login";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";

const Welcome = () => {
  const navigation = useNavigation();
  const logo = `<svg width="60" height="72" viewBox="0 0 60 72" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M59.1639 37.6902C59.1658 36.9832 59.0082 36.2849 58.7027 35.6472C58.3973 35.0096 57.9519 34.4491 57.3998 34.0074L38.6385 19.0061L38.3424 16.5853C38.2246 15.5137 38.0353 14.4512 37.7758 13.4048C36.9663 9.74788 35.253 6.35225 32.7925 3.52838C30.2172 0.695517 27.101 -0.502001 24.1909 0.180462C21.2808 0.862925 19.0402 3.32237 18.023 7.08235C17.0953 10.7023 17.0953 14.4977 18.023 18.1176C18.2545 19.1105 18.5514 20.0869 18.9115 21.0407L2.71264 34.0074C1.74686 34.791 1.13102 35.9255 1.00004 37.1622C0.883616 38.1852 1.11007 39.2178 1.64387 40.0981L2.04305 40.6003L2.4036 41.051C3.27439 41.8812 4.43248 42.3426 5.63564 42.3386H7.91481V66.0188C7.91819 67.4841 8.50087 68.8885 9.53574 69.9258C10.5706 70.9631 11.9737 71.549 13.4389 71.5558H46.5706C48.037 71.549 49.4414 70.9635 50.4783 69.9266C51.5152 68.8897 52.1007 67.4852 52.1075 66.0188V42.3386H54.3867C55.0056 42.3472 55.6201 42.2337 56.1952 42.0047C56.7702 41.7757 57.2945 41.4356 57.7382 41.0039C58.1818 40.5723 58.536 40.0575 58.7807 39.4889C59.0253 38.9203 59.1555 38.3091 59.1639 37.6902ZM26.3413 15.1303L23.3411 17.5768C23.3411 17.3708 23.2509 17.1648 23.1865 16.933C22.7597 15.2069 22.5691 13.4309 22.62 11.6536C22.62 11.4218 22.62 11.2544 22.62 11.1643C22.6807 10.3146 22.8274 9.47335 23.0578 8.65331C23.56 6.85058 24.4098 5.69167 25.3756 5.44701C25.5126 5.43374 25.6506 5.43374 25.7876 5.44701C27.0249 5.62616 28.1408 6.28826 28.8909 7.28837C30.6861 9.37816 31.9418 11.8762 32.5479 14.5637C31.5618 14.0764 30.4601 13.8714 29.3647 13.9714C28.2693 14.0714 27.2229 14.4725 26.3413 15.1303Z" fill="#343434"/>
  <path d="M28.4014 59.5803H21.6025V52.8973H28.4529V59.5803H28.4014ZM28.4014 42.7119H21.6025V49.3949H28.4529V42.7119H28.4014ZM38.5997 52.8973H31.7493V59.5803H38.5869V52.8973H38.5997ZM38.5997 42.7119H31.7493V49.3949H38.5869V42.7119H38.5997Z" fill="white"/>
  <path d="M57.3998 34.0074L38.6385 19.0061L38.3424 16.5853C38.2246 15.5137 38.0353 14.4512 37.7758 13.4048C36.9663 9.74788 35.253 6.35225 32.7925 3.52838C30.2172 0.695517 27.101 -0.502001 24.1909 0.180462C21.2808 0.862925 19.0402 3.32237 18.023 7.08235C17.0953 10.7023 17.0953 14.4977 18.023 18.1176C18.2545 19.1105 18.5514 20.0869 18.9115 21.0407L2.71264 34.0074C1.74686 34.791 1.13102 35.9255 1.00004 37.1622C0.883616 38.1852 1.11007 39.2178 1.64387 40.0981L2.04305 40.6003L2.4036 41.051C3.27439 41.8812 4.43248 42.3426 5.63564 42.3386H7.91481V66.0188C7.91819 67.4841 8.50087 68.8885 9.53574 69.9258C10.5706 70.9631 11.9737 71.549 13.4389 71.5558H46.5706C48.037 71.549 49.4414 70.9635 50.4783 69.9266C51.5152 68.8897 52.1007 67.4852 52.1075 66.0188V42.3386H54.3867C55.6344 42.3386 56.8312 41.8439 57.7146 40.9628C58.5981 40.0818 59.0961 38.8864 59.0995 37.6387C59.1015 36.9455 58.9502 36.2605 58.6563 35.6327C58.3625 35.0049 57.9334 34.4499 57.3998 34.0074ZM22.6328 11.0741C22.6936 10.2245 22.8402 9.38321 23.0706 8.56316C23.5728 6.76043 24.4227 5.60152 25.3884 5.35687C25.5255 5.3436 25.6635 5.3436 25.8005 5.35687C27.0378 5.53601 28.1536 6.19814 28.9038 7.19824C30.699 9.28804 31.9546 11.786 32.5607 14.4735C31.5536 14.0036 30.4352 13.8245 29.3317 13.9564C28.2281 14.0884 27.1835 14.5262 26.3156 15.2204L23.3411 17.5768C23.3411 17.3708 23.2509 17.1648 23.1865 16.933C22.7597 15.2069 22.5691 13.4309 22.62 11.6536C22.62 11.4218 22.62 11.2544 22.62 11.1643L22.6328 11.0741ZM49.5193 37.1236C48.8424 37.143 48.1986 37.4206 47.7198 37.8994C47.241 38.3783 46.9634 39.0221 46.944 39.6989V66.0188C46.944 66.0871 46.9168 66.1526 46.8685 66.2009C46.8202 66.2492 46.7547 66.2764 46.6864 66.2764H13.5162C13.4813 66.2781 13.4464 66.2727 13.4136 66.2606C13.3809 66.2484 13.351 66.2297 13.3257 66.2056C13.3004 66.1816 13.2802 66.1526 13.2665 66.1204C13.2528 66.0883 13.2457 66.0538 13.2457 66.0188V39.6861C13.2263 39.0092 12.9487 38.3654 12.4699 37.8866C11.9911 37.4077 11.3473 37.1302 10.6704 37.1107H7.43837L21.4224 25.8565C21.9248 26.5993 22.4799 27.3051 23.0835 27.9683C23.5337 28.459 24.0201 28.9153 24.5386 29.3332L24.6802 29.4491V29.5392C24.6802 29.6165 24.6802 29.7324 24.6802 29.874C24.6802 30.0157 24.6802 30.0543 24.6802 30.1573C24.6802 30.2603 24.7446 30.4406 24.7832 30.608C24.8399 30.8263 24.9087 31.0412 24.9893 31.2518C25.3962 32.2579 26.0938 33.1198 26.9928 33.7276C27.8919 34.3354 28.9517 34.6615 30.0369 34.6642C30.7535 34.6686 31.4639 34.5309 32.127 34.2591C32.7901 33.9872 33.3927 33.5866 33.8999 33.0803C34.4096 32.575 34.8134 31.9731 35.0876 31.3097C35.3617 30.6464 35.5008 29.9351 35.4966 29.2173C35.5001 28.4997 35.3607 27.7886 35.0866 27.1253C34.8124 26.4621 34.409 25.8601 33.8999 25.3543C33.3935 24.8469 32.7911 24.4455 32.1278 24.1736C31.4646 23.9017 30.7537 23.7646 30.0369 23.7705C28.9064 23.769 27.8037 24.1201 26.8821 24.7749C26.311 24.1046 25.7943 23.3898 25.3369 22.6373L29.6249 19.1864C29.7435 19.0857 29.8941 19.0304 30.0498 19.0304C30.2054 19.0304 30.356 19.0857 30.4747 19.1864L52.8157 37.0721L49.5193 37.1236Z" fill="#308DFF"/>
  </svg>
  `;
  const handleGetStarted = () => {
    // Navigate to the Login screen
    navigation.navigate("Login");
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/w1.jpeg")}
              style={{
                height: 300,
                width: 300,
                borderRadius: 30,
                marginLeft: -85,
                top: -115,
                borderColor: "rgba(0, 110, 255, 0.20)",
                borderWidth: 5,
                transform: [
                  {
                    rotate: "15deg",
                  },
                ],
              }}
            />
            <Image
              source={require("../assets/w2.jpeg")}
              style={{
                height: 300,
                width: 300,
                borderRadius: 30,
                marginLeft: 1,
                top: -23,
                borderColor: "rgba(0, 110, 255, 0.20)",
                borderWidth: 5,
                transform: [
                  {
                    rotate: "15deg",
                  },
                ],
              }}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/w3.jpg")}
              style={{
                height: 300,
                width: 300,
                borderRadius: 30,
                marginLeft: -120,
                top: -90,
                borderColor: "rgba(0, 110, 255, 0.20)",
                borderWidth: 5,
                transform: [
                  {
                    rotate: "15deg",
                  },
                ],
              }}
            />
            <Image
              source={require("../assets/w4.jpg")}
              style={{
                height: 300,
                width: 300,
                borderRadius: 30,
                marginLeft: 1,
                top: -5,
                borderColor: "rgba(0, 110, 255, 0.20)",
                borderWidth: 5,
                transform: [
                  {
                    rotate: "15deg",
                  },
                ],
              }}
            />
          </View>
        </View>
        <View style={styles.title}>
          <SvgXml xml={logo} height={70} width={70} />
          <Text
            style={{
              color: "black",
              fontSize: 35,
              fontWeight: "bold",
              top:6
            }}
          >
            Gharr<Text style={{ color: "#308DFF" }}>For</Text>.Sale
          </Text>
        </View>
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={handleGetStarted}
          >
            <Text style={[{ color: "white" }, { fontSize: 20 },{fontWeight:"700"}]}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 300,
    borderRadius: 30,
    backgroundColor: "#006EFF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  title: {
    flexDirection: "row",
    marginTop: 40,
    alignItems: "flex-end",
    justifyContent: "center",
    left:-7
  },
});
