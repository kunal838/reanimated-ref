/* import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {useSharedValue,useAnimatedStyle, withTiming, withSpring, withRepeat, useAnimatedRef} from "react-native-reanimated";

export default function App() {
 const Scale = useSharedValue(0)
const ReanimatedStyle = useAnimatedStyle(()=>{
  return {
   transform:[{scale:Scale.value}]

  }
},[])
  useEffect(()=>{
   Scale.value = withSpring(2)
  },[])

  return (
    <View style={styles.container}>
    <Animated.View style={[{height:100,width:100,backgroundColor: "red",},ReanimatedStyle]}/>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */

/* import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue ,useAnimatedStyle, withSpring, useAnimatedGestureHandler} from 'react-native-reanimated';


const App = () => {
  const pos = useSharedValue(0);
  const pangestureEvent = useAnimatedGestureHandler({
    onStart:(event,ctx)=>{
      ctx.pos=pos.value;
    },
    onActive:(event,ctx)=>{
      pos.value=event.translationX+ctx.pos
    },
    onEnd:()=>{
      pos.value=withSpring(0)

    }
    
  })
  const rstyle = useAnimatedStyle(()=>{
    return{
      transform:[
        {translateX:pos.value}
      ]
    }
  })
  return (
   <View style={{
     flex:1,
     alignItems:"center",
     justifyContent: 'center',

   }}>
     <PanGestureHandler onGestureEvent={pangestureEvent}>
       <Animated.View style={[{height:100,width:100,backgroundColor:"rgba(0,0,255,0.5)"},rstyle]}/>

       
     </PanGestureHandler>
   </View>
  );
};

export default App;

const styles = StyleSheet.create({});
 */
import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { Page } from './components/Page';

const WORDS = ["What's", 'up', 'Guys'];

export default function App() {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      pagingEnabled
      scrollEventThrottle={16}
      horizontal
      style={styles.container}
    >
      {WORDS.map((title, index) => {
        return (
          <Page
            key={index.toString()}
            title={title}
            translateX={translateX}
            index={index}
          />
        );
      })}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});