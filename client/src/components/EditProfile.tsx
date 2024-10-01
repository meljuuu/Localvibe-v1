import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import axios from 'axios';
import {URI} from '../../redux/URI';
import {loadUser} from '../../redux/actions/userAction';
import {Title, Caption} from 'react-native-paper';

type Props = {
  navigation: any;
};

const EditProfile = ({navigation}: Props) => {
  const {user, token} = useSelector((state: any) => state.user);
  const [avatar, setAvatar] = useState(user?.avatar?.url);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user.name,
    userName: user?.userName,
    bio: user?.bio,
  });

  const handleSubmitHandler = async () => {
    if (userData.name.length !== 0 && userData.userName.length !== 0) {
      await axios
        .put(
          `${URI}/update-profile`,
          {
            name: userData.name,
            userName: userData.userName,
            bio: userData.bio,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res: any) => {
          loadUser()(dispatch);
        });
    }
  };

  const ImageUpload = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.8,
      includeBase64: true,
    }).then((image: ImageOrVideo | null) => {
      if (image) {
        axios
          .put(
            `${URI}/update-avatar`,
            {
              avatar: 'data:image/jpeg;base64,' + image?.data,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          )
          .then((res: any) => {
            loadUser()(dispatch);
          });
      }
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.goBackButton}
              source={require('../assets/goBack.png')}
            />
          </TouchableOpacity>
          <Image
            style={styles.logo}
            source={require('../assets/localvibe.png')}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <TouchableOpacity onPress={ImageUpload}>
            <Image source={{uri: avatar}} style={styles.avatar} />
          </TouchableOpacity>

          <View style={styles.formRow}>
            <View style={styles.inputContainer}>
              <View style={styles.infoContainer}>
                <Title style={styles.name}>{user?.name}</Title>
                <Caption style={styles.username}>{user?.userName}</Caption>
              </View>

              <View style={styles.labelContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  value={userData.name}
                  onChangeText={e => setUserData({...userData, name: e})}
                  placeholder="Enter your name..."
                  placeholderTextColor={'#000'}
                  style={styles.input}
                />

                <Text style={styles.label}>Username</Text>
                <TextInput
                  value={userData.userName}
                  onChangeText={e => setUserData({...userData, userName: e})}
                  placeholder="Enter your userName..."
                  placeholderTextColor={'#000'}
                  style={[styles.input, styles.userNameInput]}
                />

                <Text style={styles.label}>Bio</Text>
                <TextInput
                  value={userData.bio}
                  onChangeText={e => setUserData({...userData, bio: e})}
                  placeholder="Enter your bio..."
                  placeholderTextColor={'#000'}
                  style={styles.bioInput}
                  multiline={true}
                  numberOfLines={4}
                />
              </View>
            </View>
          </View>

          <View style ={styles.doneButtonContainer}>
            <TouchableOpacity onPress={handleSubmitHandler}>
              <Text style={styles.doneButton}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#EDEBEB',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    backgroundColor: '#FFF',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBackButton: {
    width: 24,
    height: 24,
  },
  logo: {
    height: 60,
  },
  headerText: {
    fontSize: 20,
    marginLeft: 16,
    fontWeight: '600',
    color: '#000',
  },
  container: {
    flex: 1,
    marginTop: '30%',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 12,
    minHeight: 300,
    borderRadius: 10,
    borderColor: '#0000002e',
    borderWidth: 1,
  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    marginTop: '19%',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  input: {
    fontSize: 16,
    backgroundColor: '#EDEBEB',
    color: '#000000b0',
    borderBottomColor: '#00000015',
    borderBottomWidth: 1,
    borderRadius: 15,
    marginVertical: 12,
    padding: 10,
  },
  bioInput: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 12,
    color: '#000000b0',
    borderRadius: 15,
    backgroundColor: '#EDEBEB',
    padding: 10,
    textAlignVertical: 'top',
  },
  userNameInput: {
    marginBottom: 16,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    position: 'absolute',
    marginTop: -85,
    left: '30%',
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: '#00000015',
  },
  bioContainer: {
    borderTopColor: '#00000015',
    borderTopWidth: 1,
    marginTop: 16,
  },
  infoContainer: {
    alignItems: 'center',
  },
  name: {
    fontWeight: '700',
    color: '#000',
    fontSize: 26,
  },
  username: {
    fontWeight: '600',
    color: '#737373',
    fontSize: 14,
    lineHeight: 16,
  },
  labelContainer: {
    marginTop: 35,
  },
    doneButtonContainer:{
      marginTop: 20,
    alignItems: 'center',
  },
  doneButton: {
    backgroundColor: '#017E5E',
    width: 120,
    textAlign: 'center',
    color: '#fff',
    padding: 12,
    borderRadius: 30,
    fontSize: 14,
  },

});

export default EditProfile;
