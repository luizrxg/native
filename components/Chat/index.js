import React, {useContext, useEffect, useRef, useState} from 'react'
import styles from './styles'
import {IndexContext} from "../../contexts";
import {View, Text, TextInput, ImageBackground} from 'react-native'
import {IconButton} from "react-native-paper";

export default function Componente(){
  const messagesRef = useRef()

  const {
    messages,
    loggedProfile,
    colors,
    selectedChat,
    handleSend,
    text,
    setText,
    chatBackground
  } = useContext(IndexContext)

  useEffect(() => {
    messagesRef.current.scrollTop = 2000
  }, [text])

  let messagesToShow = messages.filter(e => ((e.from === loggedProfile?.user && e.to === selectedChat) || e.from === selectedChat) && e.type === 'chat')

  return (
    <View style={[styles.chat, {backgroundColor: colors?.primary}]}>
      <View style={styles.messagesContainer}>
        <ImageBackground style={{flex: 1}} source={{ uri: chatBackground }} resizeMode="cover">
          <View ref={messagesRef} style={{flex: 1, overflow: 'auto'}}>
          {messagesToShow?.map((val) => {
            return (
              <View style={styles.messageContainer}>
                <Text
                  style={[
                    styles.message,
                    val?.from === loggedProfile?.user
                      ? [styles.messageRight, {backgroundColor: '#333333'}]
                      : [styles.messageLeft, {backgroundColor: colors?.accent}]
                  ]}
                >
                  {val?.text}
                </Text>
              </View>
            )})}
          </View>
        </ImageBackground>
      </View>
      <View style={[styles.inputContainer, {borderTopColor: colors?.gray}]}>
        <TextInput
          value={text}
          onChangeText={setText}
          style={[styles.input, {color: colors?.secondary, outline: 'none', borderColor: colors?.accent, backgroundColor: colors?.gray}]}
          multiline
        />
        <IconButton
          icon="send"
          size={30}
          color={colors?.accent}
          onPress={() => text && handleSend(text, 'chat')}
        />
      </View>
    </View>
  );
}