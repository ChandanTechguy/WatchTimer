import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Clockicon from "../assets/clockicon.png";
import Timericon from "../assets/timericon.png";

const Screen1 = ({navigation}) => {
  const [hour, setHour] = useState(`00`);
  const [minute, setMinute] = useState(`00`);
  const [second, setSecond] = useState(`00`);
  const [ampm, setAmpm] = useState(`AM`);

  useEffect(() => {
    getHour();
    getMinute();
    getSecond();
    getAmpm();
  }, []);

  const getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    hour < 10 ? setHour("0" + hour) : setHour(hour);
    //setHour(hour);
  };
  const getMinute = () => {
    const date = new Date();
    const minute = date.getMinutes();
    minute < 10 ? setMinute("0" + minute) : setMinute(minute);
    // setMinute(minute);
  };
  const getSecond = () => {
    const date = new Date();
    const second = date.getSeconds();
    second < 10 ? setSecond("0" + second) : setSecond(second);
    //setSecond(second);
  };

  const getAmpm = () => {
    const data = new Date();
    const ampm = data.getHours() >= 12 ? `PM` : `AM`;
    setAmpm(ampm);
  };

  setInterval(() => {
    getHour();
    getMinute();
    getSecond();
    getAmpm();
  }, 1000);

  const Showpage = (page) =>{
    navigation.navigate(page)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.hour}>{hour}</Text>
      <Text style={styles.mintute}>{minute}</Text>
      <Text style={styles.seconds}>{second}</Text>
      <Text style={styles.ampm}>{ampm}</Text>

      <View style={styles.bottomnav}>
        <TouchableOpacity style={styles.bottomnaviconoutactive} onPress={()=>Showpage('S1')}>
          {/* <Text style={styles.bottomnavtext}>+</Text> */}
          <Image source={Timericon} style={styles.bottomnavicon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomnaviconout} onPress={()=>Showpage('S2')}>
          {/* <Text style={styles.bottomnavtext}>-</Text> */}
          <Image source={Clockicon} style={styles.bottomnavicon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    alignItems: "center",
    // marginBottom:30,
    display: "flex",
    //flexDirection:"column",
    justifyContent: "center",
  },
  hour: {
    color: "white",
    fontSize: 220,
    fontWeight: "bold",
    //lineHeight:310,
    height: 250,
    paddingBottom: 20,
  },
  mintute: {
    color: "grey",
    fontSize: 220,
    fontWeight: "bold",
    // lineHeight:340,
    height: 250,
  },
  seconds: {
    color: "white",
    fontSize: 180,
    fontWeight: "bold",
    // lineHeight:340,
    height: 250,
  },
  ampm: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    paddingBottom: 90,
  },

  bottomnav: {
    flexDirection: "row",
    //  backgroundColor: "grey",
    width: "100%",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomnavtext: {
    color: "black",
    fontSize: 25,
    backgroundColor: "white",
    marginHorizontal: 10,
    paddingHorizontal: 10,
    height: 34,
    width: 40,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 10,
    //alignItems:"center"
  },
  bottomnavicon: {
    width: 50,
    height: 50,
    color: "black"
  },
  bottomnaviconoutactive: {
    width: 100,
    height: 50,
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical:5,
    borderRadius:10,
    justifyContent: "center",
    alignItems:"center"

  },
  bottomnaviconout:{
    width: 100,
    height: 50,
    backgroundColor: "grey",
    marginHorizontal: 10,
    marginVertical:5,
    borderRadius:10,
    justifyContent: "center",
    alignItems:"center"
  }
});

export default Screen1;
