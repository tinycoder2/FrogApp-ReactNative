import React from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity
} from "react-native";

export default class Source extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Source Listing",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { textAlign: "center", flex: 1 }
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: []
    };
  }
  componentDidMount() {
    fetch("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=ZfgtWcpZUc0767gmvmtXrGYrhRpcKBI7")
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson.results
        })
      })
      .catch(error => console.log(error)) //to catch the errors if any
  }
  FlatListItemSeparator = () => {
    return (
      <View style={{
        height: .5,
        width: "100%",
        backgroundColor: "rgba(18, 129, 73, 0.63)",
      }}
      />
    );
  }
  renderItem = (data) =>
    <TouchableOpacity style={styles.list}>
      <Text style={styles.title}>{data.item.title}</Text>
      <Text style={styles.lightText}>{data.item.abstract}</Text>
      <Text style={styles.byline}>{data.item.byline}</Text></TouchableOpacity>
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: 'https://i.pinimg.com/originals/1d/a7/4e/1da74e3bc2233833fe96916a43458d98.gif' }}
          style={{ width: '100%', height: '100%' }}>

          <Text style={styles.header}> FROGGO NEWS</Text>
          <FlatList
            data={this.state.dataSource}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={item => this.renderItem(item)}
            keyExtractor={(item, index) => index.toString()}
          // keyExtractor={item => item.id.toString()}
          />
        </ImageBackground>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  list: {
    // paddingVertical: 4,
    // margin: 5,
    backgroundColor: "rgba(77, 128, 102, 0.63)",
    padding: 16,
    marginTop: 16,
    borderRadius: 25,
    borderStyle: "dotted",
    borderColor: "#004d00",
    borderWidth: 5,
    alignItems: 'center',
  },
  header: {
    padding: 10,
    margin: 5,
    backgroundColor: "rgb(77, 128, 102)",
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    fontSize: 20
  },
  lightText: {
    color: "#fff",
    textAlign: "justify"
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    fontSize: 19
  },
  byline: {
    padding: 4,
    color: "#fff",
    textAlign: "justify",
    fontStyle: "italic"
  }
});