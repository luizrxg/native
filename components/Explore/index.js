import React, {useContext, useEffect, useState} from 'react'
import styles from './styles'
import {View, Text, Pressable, Image} from 'react-native'
import {Searchbar, Button, Avatar, Modal} from "react-native-paper";
import {IndexContext} from "../../contexts";
import Grid from "react-native-grid-component";
import Card from "../Card";

export default function Componente(){
  const {
    users,
    navigate,
    setSelectedProfile,
    colors,
    loggedProfile,
    posts
  } = useContext(IndexContext)
  const [openPost,     setOpenPost    ] = useState(false)
  const [selectedPost, setSelectedPost] = useState()
  const [search,       setSearch      ] = useState()
  const [searchText,   setSearchText  ] = useState('')

  useEffect(() => {
    setSearch(users.filter(e => e.user.toLowerCase().includes(searchText.toLowerCase()) && e.user !== loggedProfile?.user))
  }, [searchText])

  const postsToShow = posts.reverse()

  return (
    <View style={[styles.page, {backgroundColor: colors?.primary}]}>
      <View style={styles.header}>
        <Searchbar
          iconColor={colors?.secondary}
          value={searchText}
          onChangeText={setSearchText}
          style={[styles.searchbar, {backgroundColor: colors?.gray}]}
          inputStyle={{color: colors?.secondary}}
        />
      </View>
      {searchText ?
      <View style={styles.content}>
        {search?.map((val) =>
          <Button
            contentStyle={{alignSelf: 'flex-start'}}
            color={colors?.secondary}
            onPress={() => {
              setSelectedProfile(val);
              navigate('Profile')
            }}
          >
            <Avatar.Icon
              icon="account"
              size={50}
              style={{margin: 0, marginRight: 10, borderWidth: 2, borderColor: colors?.secondary}}
            />
            <Text style={{fontSize: 18}}>{val?.user}</Text>
          </Button>
        )}
      </View> :
      <View style={{flex: 1}}>
        <Grid
          data={postsToShow}
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
      </View>}
    </View>
  );
}