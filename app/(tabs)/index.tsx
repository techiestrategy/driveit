import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  View,
  useWindowDimensions,
} from 'react-native';

import Search from '../../components/Branches/Search';
import ModelLists from '../../components/Branches/ModelLists';
import AvailableVehicles from '../../components/Branches/AvailableVehicles';

export default function TabTwoScreen() {
  const { width } = useWindowDimensions();
  const horizontalPadding = width * 0.04;

  return (
    <SafeAreaView style={styles.safeArea}>
      <Search />



      <ScrollView
        contentContainerStyle={[
          styles.scrollContainer,
          { paddingHorizontal: horizontalPadding },
        ]}
        showsVerticalScrollIndicator={false}
      >

        <View style={[styles.section, { paddingHorizontal: horizontalPadding, marginLeft: -20 }]}>
          <ModelLists />
        </View>

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
  },
  section: {
    marginBottom: 14,
  },
});
