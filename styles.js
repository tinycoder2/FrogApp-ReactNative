import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#267326"
  },
  inputView: {
    width: "80%",
    backgroundColor: "#ffffff",
    borderRadius: 25,
    borderStyle: "dotted",
    borderColor: "#267326",
    borderWidth: 5,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "black"
  },

  loginBtn: {
    width: "60%",
    backgroundColor: "#ffaa00",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },

  loginText: {
    fontWeight: "bold",
    color: "white"
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },

  column: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },

  box: {
    width: "45%",
    backgroundColor: "rgba(18, 129, 73, 0.63)",
    borderRadius: 25,
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },

  boxText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    textAlign: "center"
  },

  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#267326"
  },

})

export default styles;