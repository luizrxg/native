import React, {useContext, useEffect, useState} from 'react'
import styles from './styles'
import {IndexContext} from "../../contexts";
import {View} from 'react-native'
import {FAB} from "react-native-paper";
import Card from '../Card/index'

export default function Componente(){
  const {
    colors,
    posts,
    navigate,
    route,
    contentRef,
    loggedProfile,
    follows
  } = useContext(IndexContext)

  const following = []
  follows?.map((val) => {
    if (val.follower === loggedProfile?.user){
      following.push(val.followed)
    }
  })
  let postsToShow = posts?.filter(e => following?.includes(e.user)).reverse()

  return (
    <View style={[styles.feed, {backgroundColor: colors?.primary}]}>
      <View ref={contentRef} style={styles.content}>
        {postsToShow?.map((val) => <Card values={val}/>)}
      </View>
      {route === 'Home' ?
      <FAB
        icon="plus"
        color='#FFF'
        style={styles.fab}
        onPress={() => navigate('MakePost')}
      />
      : <></>}
    </View>
  );
}