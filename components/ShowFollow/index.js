import React, {useContext, useEffect, useState} from 'react'
import styles from './styles'
import {View, Text} from 'react-native'
import {Searchbar, Button, Avatar} from "react-native-paper";
import {IndexContext} from "../../contexts";

export default function Componente(){
  const {
    users,
    navigate,
    selectedProfile,
    setSelectedProfile,
    loggedProfile,
    colors,
    route,
    follows,
    setFollows
  } = useContext(IndexContext)
  const [search,     setSearch    ] = useState()
  const [searchText, setSearchText] = useState('')

  let usersToShow = []

  if (route === 'Seguindo'){
    follows?.map((val) => {
      if (val.follower === selectedProfile?.user){
        usersToShow.push(val.followed)
      }
    })
  } else {
    follows?.map((val) => {
      if (val.followed === selectedProfile?.user){
        usersToShow.push(val.follower)
      }
    })
  }

  useEffect(() => {
    setSearch(usersToShow?.filter(e => e?.toLowerCase().includes(searchText?.toLowerCase())))
  }, [searchText])

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
      <View style={styles.content}>
        {search?.map((val) => {
          return (
            <Button
              contentStyle={{alignSelf: 'flex-start'}}
              color={colors?.secondary}
              onPress={() => {
                setSelectedProfile(...users?.filter(e => e?.user === val) || val?.user);
                if (selectedProfile !== loggedProfile) {
                  navigate('Profile')
                } else {
                  navigate('OwnProfile')
                }
              }}
            >
              <Avatar.Icon
                icon="account"
                size={50}
                style={{margin: 0, marginRight: 10, borderWidth: 2, borderColor: colors?.secondary}}
              />
              <Text style={{fontSize: 18}}>{val}</Text>
            </Button>
        )})}
      </View>
    </View>
  );
}