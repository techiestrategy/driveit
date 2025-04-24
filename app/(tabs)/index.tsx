import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  View,
} from 'react-native';

import Search from '../../components/Branches/Search';
import ModelLists from '../../components/Branches/ModelLists';
import AvailableVehicles from '../../components/Branches/AvailableVehicles';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>

      {/* Search header */}
      <Search />

      <View style={styles.section}>
          <ModelLists />
        </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>   
        <View style={styles.section}>
          <AvailableVehicles />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9F9FA',
  },
  scrollContainer: {
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  section: {
    marginBottom: 14, 
  },
});
