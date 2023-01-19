import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Clockicon from "../assets/clockicon.png";
import Timericon from "../assets/timericon.png";

const Screen2 = ({ navigation }) => {
  const Showpage = (page) => {
    navigation.navigate(page);
  };

  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [interv , setInterv] = useState()

  const [timerom,setTimeron] = useState(0)
  const [stopped , setStopped] = useState(0)

  let currsecc = second;
  let currhour = hour;
  let currminute = minute;

  const updatetimer = () => {
    if (currsecc == 60) {
      currsecc = 0;
      currminute++;
    }
    if (currminute == 60) {
      currminute = 0;
      currsecc = 0;
      currhour++;
    }
    currsecc++;
    setSecond(currsecc);
    setHour(currhour);
    setMinute(currminute);
  };

  const starttimer = () => {
    updatetimer();
    setInterv(setInterval(updatetimer, 1000));
    setTimeron(1)
    setStopped(0)
  };

  const stoptimer = () => {
    setStopped(1)
    clearInterval(interv)
  };
  const resettimer = () => {
    setTimeron(0)
    setHour(0)
    setMinute(0)
    setSecond(0 )
    clearInterval(interv)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.number}>
        {hour > 9 ? hour : "0" + hour}
        <Text style={styles.small}>HR</Text>
      </Text>
      <Text style={styles.number}>
        {minute > 9 ? minute : "0" + minute}
        <Text style={styles.small}>MIN</Text>
      </Text>
      <Text style={styles.number}>
        {second > 9 ? second : "0" + second}
        <Text style={styles.small}>SEC</Text>
      </Text>

     {timerom == 0 ? 
      <View style={styles.startstop}>
        <TouchableOpacity onPress={starttimer}>
          <Text style={styles.start}>Start</Text>
        </TouchableOpacity>
        </View>
        :

        <View style={styles.startstop}>
        <TouchableOpacity onPress={resettimer}>
          <Text style={styles.reset}>Reset</Text>
        </TouchableOpacity>

        {stopped == 0 ?
       
        <TouchableOpacity onPress={stoptimer}>
          <Text style={styles.stop}>Stop</Text>
        </TouchableOpacity>
        :
<TouchableOpacity onPress={starttimer}>
          <Text style={styles.continue}>Continue</Text>
        </TouchableOpacity>
      }
        </View>
     
     }
     

      <View style={styles.bottomnav}>
        <TouchableOpacity
          style={styles.bottomnaviconout}
          onPress={() => Showpage("S1")}
        >
          <Image source={Timericon} style={styles.bottomnavicon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomnaviconoutactive}
          onPress={() => Showpage("S2")}
        >
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
  number: {
    color: "white",
    fontSize: 180,
    fontWeight: "bold",
    lineHeight: 180,
    height: 180,
    paddingBottom: 20,
  },
  small: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },

  bottomnav: {
    flexDirection: "row",
  },
  bottomnaviconout: {
    width: 100,
    height: 50,
    backgroundColor: "grey",
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomnaviconoutactive: {
    width: 100,
    height: 50,
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 5,

    justifyContent: "center",
    alignItems: "center",
  },
  bottomnavicon: {
    width: 50,
    height: 50,
    color: "black",
  },
  startstop: {
    flexDirection: "row",
    marginVertical: 20,
  },
  start: {
    color: "black",
    backgroundColor: "white",
    fontSize: 30,
    fontWeight: "bold",
    //borderRadius: 10,
    paddingHorizontal: 30,
    marginRight: 1,
  
  },
  stop: {
    color: "black",
    backgroundColor: "white",
    fontSize: 30,
    fontWeight: "bold",
    // borderRadius: 10,
    paddingHorizontal: 30,
    marginLeft: 1,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  reset:{
    color: "black",
    backgroundColor: "white",
    fontSize: 30,
    fontWeight: "bold",
    //borderRadius: 10,
    paddingHorizontal: 30,
    marginRight: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  continue:{
    color: "black",
    backgroundColor: "white",
    fontSize: 30,
    fontWeight: "bold",
    //borderRadius: 10,
    paddingHorizontal: 30,
    marginRight: 1,
    borderTopRightRadius: 20,
   borderBottomRightRadius: 20,
  }
});

export default Screen2;
