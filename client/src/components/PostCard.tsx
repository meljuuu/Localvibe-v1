import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Image} from 'react-native';
import getTimeDuration from '../common/TimeGenerator';
import {
  addLikes,
  getAllPosts,
  removeLikes,
} from '../../redux/actions/postAction';
import axios from 'axios';
import {URI} from '../../redux/URI';
import PostDetailsCard from './PostDetailsCard';
import {
  removeInteraction,
  updateInteraction,
} from '../../redux/actions/userAction';

type Props = {
  navigation: any;
  item: any;
  isReply?: boolean | null;
  postId?: string | null;
  replies?: boolean | null;
};

const PostCard = ({item, isReply, navigation, postId, replies}: Props) => {
  const {user, token, users} = useSelector((state: any) => state.user);
  const {posts} = useSelector((state: any) => state.post);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const {pins} = useSelector((state: any) => state.pin);
  const userPin = pins.find(
    (pin: {createdBy: any}) => pin.createdBy === item.user._id,
  );
  const [userInfo, setUserInfo] = useState({
    name: '',
    avatar: {
      url: 'https://res.cloudinary.com/dshp9jnuy/image/upload/v1665822253/avatars/nrxsg8sd9iy10bbsoenn.png',
    },
  });
  const time = item?.createdAt;
  const formattedDuration = getTimeDuration(time);

  const profileHandler = async (e: any) => {
    await axios
      .get(`${URI}/get-user/${e._id}`, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(res => {
        if (res.data.user._id !== user._id) {
          navigation.navigate('UserProfile', {
            item: res.data.user,
          });
        } else {
          navigation.navigate('Profile');
        }
      });
  };

  const reactsHandler = (e: any) => {
    if (item.likes.length !== 0) {
      const isLikedBefore = item.likes.find((i: any) => i.userId === user._id);
      if (isLikedBefore) {
        removeLikes({postId: postId ? postId : e._id, posts, user})(dispatch);
        removeInteraction(e._id, user)(dispatch);
      } else {
        addLikes({postId: postId ? postId : e._id, posts, user})(dispatch);
        updateInteraction(e._id, user)(dispatch);
      }
    } else {
      addLikes({postId: postId ? postId : e._id, posts, user})(dispatch);
      updateInteraction(e._id, user)(dispatch);
    }
  };

  const deletePostHandler = async (e: any) => {
    await axios
      .delete(`${URI}/delete-post/${e}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        getAllPosts()(dispatch);
      });
  };

  useEffect(() => {
    if (users) {
      const updatedUsers = [...users, user];
      const userData = updatedUsers.find(
        (user: any) => user._id === item.user._id,
      );
      setUserInfo(userData);
    }
  }, [users]);

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <View style={styles.userRow}>
          <View style={styles.userInfoContainer}>
            <TouchableOpacity onPress={() => profileHandler(item.user)}>
              <Image
                source={{uri: item?.user?.avatar?.url}}
                style={styles.userAvatar}
              />
            </TouchableOpacity>
            <View style={styles.userNameContainer}>
              <TouchableOpacity
                style={styles.userNameRow}
                onPress={() => profileHandler(userInfo)}>
                <Text style={styles.userNameText}>{item?.user.name}</Text>
              </TouchableOpacity>
              <Text style={styles.timeText}>{formattedDuration}</Text>
            </View>

            {(item?.user.accountType === 'prembusiness' ||
              item?.user.accountType === 'business') &&
              userPin && (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Map', {
                      latitude: userPin.latitude,
                      longitude: userPin.longitude,
                    })
                  }>
                  <Text style={styles.userNameText}>Open Map</Text>
                </TouchableOpacity>
              )}

            <View style={styles.postActions}>
              <TouchableOpacity
                onPress={() =>
                  item.user._id === user._id && setOpenModal(true)
                }>
                <Image
                  source={require('../assets/options.png')}
                  style={styles.moreOptions}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text style={styles.postTitleText}>{item.title}</Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PostDetails', {
              data: item,
            })
          }>
          <View style={styles.postImageContainer}>
            {item.image && (
              <Image
                source={{uri: item.image.url}}
                style={styles.postImage}
                resizeMode="contain"
              />
            )}
          </View>
        </TouchableOpacity>

        <View style={styles.reactsRow}>
          <TouchableOpacity onPress={() => reactsHandler(item)}>
            <Image
              source={{
                uri:
                  item.likes.find((i: any) => i.userId === user._id) ||
                  item.likes.length === 0
                    ? 'https://cdn-icons-png.flaticon.com/512/2589/2589175.png'
                    : 'https://cdn-icons-png.flaticon.com/512/2589/2589197.png',
              }}
              style={styles.reactIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CreateReplies', {
                item: item,
                navigation: navigation,
                postId: postId,
              });
            }}>
            <Image
              source={{
                uri: 'https://i.ibb.co/YT9d89m/comment-alt-middle-1.png',
              }}
              style={styles.commentIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/3905/3905866.png',
              }}
              style={styles.shareIcon}
            />
          </TouchableOpacity>
        </View>
        {!isReply && (
          <View style={styles.repliesRow}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('PostDetails', {
                  data: item,
                })
              }>
              <Text style={styles.repliesText}>
                {item?.replies?.length !== 0 &&
                  `${item?.replies?.length} replies ·`}
              </Text>
            </TouchableOpacity>

            {item.likes.length !== 0 && (
              <TouchableOpacity
                onPress={() =>
                  item.likes.length !== 0 &&
                  navigation.navigate('PostLikeCard', {
                    item: item.likes,
                    navigation: navigation,
                  })
                }>
                <Text style={styles.likesText}>
                  {item.likes.length} {item.likes.length > 1 ? 'likes' : 'like'}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        {replies && (
          <>
            {item?.replies?.map((i: any) => (
              <PostDetailsCard
                navigation={navigation}
                key={i._id}
                item={i}
                isReply={true}
                postId={item._id}
              />
            ))}
          </>
        )}
        {openModal && (
          <View style={styles.modalContainer}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={openModal}
              onRequestClose={() => {
                setOpenModal(!openModal);
              }}>
              <TouchableWithoutFeedback onPress={() => setOpenModal(false)}>
                <View style={styles.modalBackground}>
                  <TouchableWithoutFeedback onPress={() => setOpenModal(true)}>
                    <View style={styles.modalContent}>
                      <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={() => deletePostHandler(item._id)}>
                        <Text style={styles.deleteText}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          </View>
        )}
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F1FFF8',
    backgroundColor: '#fff',
  },
  postContainer: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  userRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  userInfoContainer: {
    flexDirection: 'row',
    width: '85%',
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userNameContainer: {
    paddingLeft: 10,
    width: '70%',
  },
  userNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userNameText: {
    fontWeight: 'bold',
    color: '#000',
  },
  postTitleText: {
    color: '#000',
    marginTop: 20,
    fontSize: 16,
  },
  timeText: {
    color: '#555',
    fontSize: 12,
  },
  moreOptions: {
    height: 15,
    width: 30,
    resizeMode: 'cover',
    marginLeft: 80,
  },
  postImageContainer: {
    paddingVertical: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  reactsRow: {
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-around',
  },
  reactIcon: {
    width: 25,
    height: 25,
  },
  commentIcon: {
    width: 25,
    height: 25,
  },
  shareIcon: {
    width: 25,
    height: 25,
  },
  repliesRow: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 5,
  },
  repliesText: {
    fontWeight: 'bold',
  },
  likesText: {
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 250,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  deleteButton: {
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
