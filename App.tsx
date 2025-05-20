import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
 
export default function App() {
 
  let sampleList = [
    {id: 1, name: 'Rishav', github: "sharmarishav8879"},
    {id: 2, name: 'Ahmad', github: "AhmadAL79"},
  ];
 
    const eventHandlers = () =>
    {
      alert('I am done with the lab1!');
    }
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {sampleList.map((item, index) => (
  <View key={index} style={{ marginTop: 20, alignItems: 'center' }}>
    <Text>ID: {item.id}</Text>
    <Text>Name: {item.name}</Text>
    <Text>GitHub: {item.github}</Text>
  </View>
))}
     <Pressable onPress={eventHandlers} style={styles.container}><Text>Hello There</Text></Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
 