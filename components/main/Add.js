import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Button } from 'react-native-web';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
  <View   
  style={{flex:1}} >
    
      <Camera 
      style={{flex:1}}
       type={type}>
        <View style={styles.buttonContainer}>
         
        </View>
      </Camera>
    
   <Button
    style={styles.button}
    title = "FLip Image"
    onPress={() => 
        {
        
        
        setType(
      type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
      )
        }}>
    </Button>
  </View>
  );
    }
