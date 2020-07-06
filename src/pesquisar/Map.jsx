import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Map() {
  const [markers, setMarkers] = React.useState([]);
  const [coordinates, setCoordinates] = React.useState({});
  const [region, setRegion] = React.useState({ latitude: 0, longitude: 0 });

  React.useEffect(() => {
    Navigator();
    //ReadFetch();
    FetchHereWeGo();
  }, []);

  const Navigator = () => {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        console.log(data);
        setCoordinates({
          ...data.coords,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      (e) => {
        console.error(new Error(e));
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };

  const ReadFetch = () => {
    fetch(
      "https://maps.googleapis.com/maps/api/js/ViewportInfoService.GetViewportInfo?1m6&1m2&1d-13.52252197265625&2d-38.87017822265625&2m2&1d-12.447509765625&2d-37.993194580078125&2u11&4spt-BR&5e0&6sm%40519000000&7b0&8e0&11e78&callback=_xdc_._uh0mqb&client=google-maps-lite&token=76650"
    )
      .then((res) => res.text())
      .then((text) => {
        console.log(text);
        text
          .replace("/**/_xdc_._uh0mqb && _xdc_._uh0mqb( ", "")
          .replace(")", "")
          .replace("The", "")
          .replace("Google", "");
      })
      .then((text) => JSON.parse(text))
      .then((item) => {
        let result = [];
        Object.values(item["1"]).map((item) =>
          Object.values(item).map((item2) =>
            typeof item2 != "string"
              ? Object.values(item2).map((resulta) => result.push(resulta))
              : false
          )
        );
        setMarkers(result);
      })
      .catch((e) => console.error(new Error(e)));
  };

  const FetchHereWeGo = () => {
    fetch(
      "https://reverse.geocoder.api.here.com/6.2/multi-reversegeocode.json?app_code=LJXqQ8ErW71UsRUK3R33Ow&app_id=VgTVFr1a0ft1qGcLCVJ6&gen=3&int=true&jsonAttributes=1&languages=en-gb&maxresults=1&mode=retrieveAddresses&politicalView=BRA",
      {
        method: "POST",
      }
    )
      .then((result) => console.log(result.json()))
      .catch((error) => console.log("Erro: ", error));
  };

  const coords = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  let arr = [];
  for (let i = 0; i < 50; i++) {
    arr.push(i);
  }

  console.log(coordinates);

  return (
    <View style={styles.container}>
      <MapView
        region={coordinates}
        style={styles.mapStyle}
        loadingEnabled={true}
        loadingIndicatorColor="#666666"
        loadingBackgroundColor="#eeeeee"
        moveOnMarkerPress={false}
        showsUserLocation={true}
        showsCompass={true}
        animateToRegion={coordinates}
      >
        {coordinates.hasOwnProperty("latitude") > 0
          ? arr.map((marker, index) => (
              <Marker
                key={index}
                coordinate={{
                  ...coordinates,
                  latitude:
                    coordinates.latitude +
                    (coordinates.latitude * Math.random()) / 100 -
                    0.005,
                  longitude:
                    coordinates.longitude +
                    (coordinates.longitude * Math.random()) / 100 -
                    0.005,
                }}
                title={"title"}
                description={"description"}
              />
            ))
          : false}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
