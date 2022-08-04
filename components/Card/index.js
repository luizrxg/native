import React, {useContext, useEffect, useState} from 'react'
import styles from './styles'
import {View, Text, Image, Pressable} from 'react-native'
import {Card, Button, IconButton} from "react-native-paper";
import {IndexContext} from "../../contexts";

export default function Componente(props){
  const {
    users,
    likes,
    setLikes,
    setSelectedProfile,
    navigate,
    colors
  } = useContext(IndexContext)
  const [click, setClick] = useState()
  const val = props?.values

  useEffect(() => {
      const timer = setTimeout(() => {
          setClick(0);
      }, 250);

      if (click === 2 && !likes.includes(val?.id)) {
          handleLike()
      }

      return () => {
          clearTimeout(timer);
      };
  }, [click]);

  const handleLike = () => {
    if (likes.includes(val?.id)) {
      setLikes(likes.filter(e => e !== val?.id))
    } else {
      setLikes(arr => [...arr, val?.id])
    }
  }

  return (
    <Card style={[styles.card, props?.style, {backgroundColor: colors?.primary}]}>
      <Card.Actions>
        <Button
          style={styles.user}
          icon="account"
          color={colors?.secondary}
          onPress={() => {
            setSelectedProfile(...users?.filter(e => e.user === val?.user))
            navigate('Profile')
          }}
        >
          {val.user}
        </Button>
      </Card.Actions>
      {val?.url ?
        <Pressable onPress={() => setClick(click + 1)}>
          <Image style={{aspectRatio: 1}} source={{ uri: val?.url }} />
        </Pressable>
      : <></>}
      <Card.Content
        style={
          val?.url ?
          {} : {flexDirection: 'column-reverse', gap: 15}
      }>
        <View
          style={[styles.options, val?.url ? {marginTop: 5} : {}]}
        >
          <IconButton
            icon={`heart${likes.includes(val?.id) ? '' : '-outline'}`}
            style={{margin: 0}}
            color={likes.includes(val?.id) ? "#F00" : colors?.secondary}
            onPress={handleLike}
          />
          <IconButton
            icon="share"
            style={{margin: 0}}
            color={colors?.secondary}
            onPress={() => {}}
          />
        </View>
        <Text style={[styles.caption, {color: colors?.secondary}]}>
          {val?.caption}
        </Text>
      </Card.Content>
    </Card>
  );
}