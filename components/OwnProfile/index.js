import React, {useContext, useState} from 'react'
import {View, Text, Image, Pressable} from 'react-native'
import {Avatar, Button, Modal} from "react-native-paper";
import styles from "./style";
import {IndexContext} from "../../contexts";
import Grid from 'react-native-grid-component'
import Card from '../Card/index'

export default function Componente(){
  const {
    colors,
    posts,
    loggedProfile,
    navigate,
    follows
  } = useContext(IndexContext)
  const [openPost,     setOpenPost    ] = useState(false)
  const [selectedPost, setSelectedPost] = useState()
  const profilePosts = posts.filter(e => e.user === loggedProfile?.user)
  const following = []
  follows?.map((val) => {
    if (val.follower === loggedProfile?.user){
      following.push(val.followed)
    }
  })
  const followers = []
  follows?.map((val) => {
    if (val.followed === loggedProfile?.user){
      followers.push(val.follower)
    }
  })

  return (
    <View style={[styles.profile, {backgroundColor: colors?.primary}]}>
      <View style={styles.profileHeader}>
        <Avatar.Icon style={[styles.avatar, {borderColor: colors.secondary}]} icon="account" size={100}/>
        <View style={styles.infosContainer}>
          <Pressable style={styles.info}>
            <Text style={[styles.infoText, {color: colors?.secondary}]}>Posts</Text>
            <Text style={{fontSize: 16, color: colors?.secondary}}>{profilePosts?.length}</Text>
          </Pressable>
          <Pressable onPress={() => navigate('Seguindo')} style={styles.info}>
            <Text style={[styles.infoText, {color: colors?.secondary}]}>Seguindo</Text>
            <Text style={{fontSize: 16, color: colors?.secondary}}>{following?.length}</Text>
          </Pressable>
          <Pressable onPress={() => navigate('Seguidores')} style={styles.info}>
            <Text style={[styles.infoText, {color: colors?.secondary}]}>Seguidores</Text>
            <Text style={{fontSize: 16, color: colors?.secondary}}>{followers?.length}</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.profileInnerHeader}>
        <Text style={[styles.text, {color: colors?.secondary}]}>Nome</Text>
        <Text style={[styles.text, {color: colors?.secondary}]}>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</Text>
      </View>
      <View style={[styles.buttonContainer, {borderBottomColor: colors?.gray}]}>
        <Button color={colors?.secondary}>
          <Text style={{fontSize: 16, color: colors?.secondary}}>POSTS</Text>
          <Avatar.Icon icon="grid" size={32} color={colors?.secondary}/>
        </Button>
      </View>
      <Grid
        data={profilePosts}
        numColumns={3}
        renderPlaceholder={() => <View style={styles.post}/>}
        renderItem={(val) =>
          <Pressable
            style={styles.post}
            onPress={() => {
              setSelectedPost(val)
              setOpenPost(true)
            }}>
            <Image style={styles.post} source={{uri : val.url}}/>
          </Pressable>
        }
      />
      <Modal
        visible={openPost}
        onDismiss={() => setOpenPost(false)}
        contentContainerStyle={[styles.modal, {backgroundColor: colors?.primary, borderColor: colors?.gray}]}
      >
        <Card values={selectedPost}/>
      </Modal>
    </View>
  );
}