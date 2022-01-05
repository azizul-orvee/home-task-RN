import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomSection from './components/BottomSection';
import CardSection from './components/CardSection';
import TopSection from './components/TopSection';
import Home from './screens/Home';

export default function App() {
  return (
    <View>
    <View style={styles.container}>
      <TopSection />
      <CardSection />
      </View>
      <BottomSection />
      <StatusBar style='auto' />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});
