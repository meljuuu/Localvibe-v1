import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Platform,
  Dimensions,
} from 'react-native';

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

type Props = {
  route: any;
  navigation: any;
};

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;
// State for managing the active tab (Posts or Vibe)

const BusinessPinScreen = ({route, navigation}: Props) => {
  const {pins} = route.params;

  const [activeTab, setActiveTab] = useState(0);

  const handleBackPress = () => {
    navigation.navigate('Map');
  };

  return (
    <View style={styles.container}>
      {/* Set the StatusBar to be translucent and fully transparent */}
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          {pins.image && pins.image.url ? (
            <Image source={{uri: pins.image.url}} style={styles.image} />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Text style={styles.imageTitle}>No Image Available</Text>
            </View>
          )}
        </View>

        <View>
          <View style={styles.goBackContainer}>
            <TouchableOpacity onPress={handleBackPress}>
              <Image
                style={styles.goBackButton}
                source={require('../assets/goBack1.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.editImageContainer}>
            <TouchableOpacity onPress={handleBackPress}>
              <Image
                style={styles.editImage}
                source={require('../assets/editImage.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.information}>
              <Image
                style={styles.infoImage}
                source={require('../assets/people.png')}
              />
              <Text style={styles.infoText}>0</Text>
            </View>
            <View style={styles.information}>
              <Image
                style={styles.starImage}
                source={require('../assets/rating.png')}
              />
              <Text style={styles.infoText}>0</Text>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.businessInfoContainer}>
              <View style={styles.businessInfo}>
                <View style={styles.businessProfile}>
                  <Image
                    style={styles.profilePic}
                    source={{uri: pins.image.url}}
                  />
                </View>
                <View>
                  <View style={styles.businessNameContainer}>
                    <Text style={styles.businessName}>{pins.businessName}</Text>
                    <Image
                      style={styles.verifiedImage}
                      source={require('../assets/verified.png')}
                    />
                  </View>
                  <View style={styles.businessLocationContainer}>
                    <Image
                      style={styles.grayImage}
                      source={require('../assets/markerGray.png')}
                    />
                    <Text style={styles.businessLocation}>
                      Balete St, Olongapo City
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.contactButtons}>
                <Image
                  style={styles.callImage}
                  source={require('../assets/call.png')}
                />
              </View>
            </View>
          </View>

          <View style={styles.tabsContainer}>
            <TouchableOpacity onPress={() => setActiveTab('Details')}>
              <Text
                style={activeTab === 'Details' ? styles.activeTab : styles.tab}>
                Details
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab('Reviews')}>
              <Text
                style={activeTab === 'Reviews' ? styles.activeTab : styles.tab}>
                Reviews
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab('Media')}>
              <Text
                style={activeTab === 'Media' ? styles.activeTab : styles.tab}>
                Media
              </Text>
            </TouchableOpacity>
          </View>

          {/* Conditional rendering based on the activeTab */}
          {activeTab === 'Details' && (
            <View>
              <Text style={styles.description}>{pins.description}</Text>
              {/* Additional Details content */}

              <View style={[styles.section, {height: 250}]}>
                <MapView
                  provider={PROVIDER_GOOGLE}
                  style={{flex: 1}}
                  region={{
                    latitude: pins.latitude,
                    longitude: pins.longitude,
                    latitudeDelta: 0.00864195044303443,
                    longitudeDelta: 0.000142817690068,
                  }}>
                  <Marker
                    coordinate={{
                      latitude: pins.latitude,
                      longitude: pins.longitude,
                    }}
                    image={require('../assets/maps/pin.png')}
                  />
                </MapView>
              </View>
            </View>
          )}
          {activeTab === 'Reviews' && (
            <View>
              <Text>Reviews Content</Text>
              {/* Add Reviews content here */}
            </View>
          )}
          {activeTab === 'Media' && (
            <View>
              <Text>Media Content</Text>
              {/* Add Media content here */}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  scrollContainer: {
    paddingTop: 0, // Set padding top to 0
  },
  goBackContainer: {
    backgroundColor: '#fff',
    padding: 14,
    left: 15,
    borderRadius: 50,
    position: 'absolute',
    top: -220,
    opacity: 0.9,
  },
  goBackButton: {
    width: 28,
    height: 28,
  },
  image: {
    height: 280,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  imagePlaceholder: {
    height: MAX_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  title: {
    fontSize: 20,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: '#FF6347',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    backgroundColor: 'transparent',
  },
  navTitle: {
    color: 'black',
    fontSize: 28,
    backgroundColor: 'transparent',
    paddingLeft: 20,
    margin: 5,
  },
  sectionLarge: {
    minHeight: 150,
  },
  editImageContainer: {
    position: 'absolute',
    top: -220,
    left: '85%',
    zIndex: 1,
  },
  editImage: {
    height: 40,
    width: 40,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 190,
    justifyContent: 'space-between',
    position: 'absolute',
    top: -50,
    left: '50%',
  },
  information: {
    display: 'flex',
    flexDirection: 'row',
    width: 90,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
  },
  infoImage: {
    height: 18,
    width: 18,
  },
  starImage: {
    height: 18,
    width: 18,
  },
  infoText: {
    fontWeight: '700',
  },
  businessLocationContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifiedImage: {
    height: 30,
    width: 30,
  },
  grayImage: {
    marginRight: 5,
    height: 15,
    width: 15,
  },
  businessLocation: {
    color: '#6E6E6E',
    fontWeight: '300',
  },
  businessNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  businessInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  businessInfo: {
    display: 'flex',
    flexDirection: 'row',
    width: '60%',
  },
  businessName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  businessProfile: {
    marginRight: 10,
  },
  contactButtons: {
    display: 'flex',
    flexDirection: 'row',
    width: '21%',
    justifyContent: 'space-between',
  },
  callImage: {
    height: 35,
    width: 35,
  },
  markerImage: {
    height: 35,
    width: 35,
  },
  profilePic: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  tabsContainer: {
    marginTop: 15,
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  activeTab: {
    color: '#34B895',
    fontWeight: 'medium',
    borderBottomColor: '#34B895',
    borderBottomWidth: 3,
    fontSize: 20,
    paddingBottom: 10,
  },
  tab: {
    fontSize: 20,
    paddingBottom: 10,
    fontWeight: 'lightweight',
  },
  description:{
    fontFamily: 'Roboto',
    fontSize: 18,
    textAlign: 'justify',
    margin: 15,
  }
});

export default BusinessPinScreen;
