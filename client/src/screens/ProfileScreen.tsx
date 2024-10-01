import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from '../../redux/actions/userAction';
import PostCard from '../components/PostCard';
import {Title, Caption} from 'react-native-paper';

const ProfileScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState(0);
  const {user} = useSelector(state => state.user);
  const {posts} = useSelector(state => state.post);
  const [userPosts, setUserPosts] = useState([]);
  const [userReplies, setUserReplies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts && user) {
      const myPosts = posts.filter(post => post.user._id === user._id);
      setUserPosts(myPosts);
    }
  }, [posts, user]);

  useEffect(() => {
    if (posts && user) {
      const myReplies = posts.filter(post =>
        post.replies.some(reply => reply.user._id === user._id),
      );
      setUserReplies(myReplies.filter(post => post.replies.length > 0));
    }
  }, [posts, user]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#F1FFF8" barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.coverContainer}>
          <Image style={styles.cover} source={require('../assets/cover.png')} />
        </View>

        <View style={styles.avatarContainer}>
          <Image source={{uri: user?.avatar.url}} style={styles.avatar} />
        </View>

        <View style={styles.userInfoContainer}>
          <Title style={styles.title}>{user?.name}</Title>
          <Caption style={styles.caption}>{user?.userName}</Caption>
          <Text style={styles.bio}>{user?.bio}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.editProfileContainer}
            onPress={() => navigation.navigate('EditProfile')}>
            <Text style={styles.editProfile}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.premiumContainer}
            onPress={() => navigation.navigate('PremiumScreen')}>
            <Image
              source={require('../assets/premium.png')}
              style={styles.premium}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.infoBoxWrapper}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('FollowerCard', {
                followers: user?.followers,
                following: user?.following,
              })
            }
            style={[styles.infoBox, styles.borderRight]}>
            <Title style={styles.infoBoxCount}>{user?.followers.length}</Title>
            <Caption style={styles.infoBoxText}>Post</Caption>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('FollowerCard', {
                followers: user?.followers,
                following: user?.following,
              })
            }
            style={[styles.infoBox, styles.borderRight]}>
            <Title style={styles.infoBoxCount}>{user?.followers.length}</Title>
            <Caption style={styles.infoBoxText}>Followers</Caption>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('FollowerCard', {
                followers: user?.followers,
                following: user?.following,
              })
            }
            style={styles.infoBox}>
            <Title style={styles.infoBoxCount}>{user?.following.length}</Title>
            <Caption style={styles.infoBoxText}>Following</Caption>
          </TouchableOpacity>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => setActiveTab(0)}>
            <Text style={[styles.tabText, activeTab === 0 && styles.activeTab]}>
              Posts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab(1)}>
            <Text style={[styles.tabText, activeTab === 1 && styles.activeTab]}>
              Vibe
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === 0 ? (
          <View>
            {userPosts.length > 0 ? (
              userPosts.map(item => (
                <PostCard navigation={navigation} key={item._id} item={item} />
              ))
            ) : (
              <Text style={styles.noContentText}>You have no posts yet!</Text>
            )}
          </View>
        ) : (
          <View>
            {userReplies.length > 0 ? (
              userReplies.map(item => (
                <PostCard
                  navigation={navigation}
                  key={item._id}
                  item={item}
                  replies
                />
              ))
            ) : (
              <Text style={styles.noContentText}>No Interactions yet!</Text>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  coverContainer: {
    height: '19%',
    marginBottom: 20,
  },
  cover: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -100,
  },
  avatar: {
    height: 140,
    width: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#000',
  },
  userInfoContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  caption: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '500',
    color: '#636363',
  },
  bio: {
    padding: 12,
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 50,
    height: '7%',
    marginBottom: '8%',
  },
  editProfileContainer: {
    width: '75%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editProfile: {
    width: '100%',
    textAlign: 'center',
    color: '#000',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    fontSize: 24,
    borderRadius: 10,
    fontWeight: '600',
    paddingVertical: '5%',
  },
  premiumContainer: {
    width: '20%',
    height: '100%',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  premium: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  infoBoxWrapper: {
    borderColor: '#e2e2e2',
    justifyContent: 'space-around',
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    height: 80,
    marginHorizontal: 20,
  },
  infoBox: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBoxText: {
    fontSize: 15,
    fontWeight: '500',
  },
  infoBoxCount: {
    fontWeight: '700',
  },
  borderRight: {
    borderRightColor: '#dddddd',
    borderRightWidth: 1,
  },
  tabContainer: {
    borderBottomColor: '#00000032',
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 100,
    marginVertical: '5%',
  },
  tabText: {
    fontSize: 25,
    color: '#d3d3d3',
    fontWeight: '700',
  },
  activeTab: {
    opacity: 1,
    borderBottomWidth: 3,
    color: '#000',
    borderBottomColor: '#000',
  },
  noContentText: {
    color: '#000',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
});

export default ProfileScreen;
