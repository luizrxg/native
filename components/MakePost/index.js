import React, {useContext, useRef, useState} from 'react'
import styles from './styles'
import {IndexContext} from "../../contexts";
import {View, Text, TextInput} from 'react-native'
import {Button, Snackbar} from "react-native-paper";
import Card from '../Card/index'

export default function Componente(){
 const {
   loggedProfile,
   colors,
   handlePost,
   postConfirm,
   setPostConfirm,
   urlPost,
   setUrlPost,
   caption,
   setCaption
 } = useContext(IndexContext)

 return (
   <View style={[styles.content, {backgroundColor: colors?.primary}]}>
     <View style={styles.cardContainer}>
       <Card style={[styles.card, {borderColor: colors?.gray}]} values={{user: loggedProfile?.user, url: urlPost, caption: caption}}/>
     </View>
     <View style={[styles.subcontent, {borderTopColor: colors?.gray}]}>
       <TextInput
         placeholder="Url da foto"
         value={urlPost}
         onChangeText={setUrlPost}
         style={[styles.input, {color: colors?.secondary, outline: 'none', borderColor: colors?.accent}]}
       />
       <TextInput
         placeholder="Legenda"
         value={caption}
         onChangeText={setCaption}
         style={[styles.input, {color: colors?.secondary, outline: 'none', borderColor: colors?.accent}]}
         multiline
         maxLength="150"
       />
       <Button
         mode="contained"
         style={styles.button}
         color={colors?.accent}
         contentStyle={{flexDirection: 'row-reverse', padding: 5}}
         onPress={handlePost}
       >
         <Text style={{fontSize: 18, fontWeight: 'bolder', color: colors?.primary}}>POSTAR</Text>
       </Button>
     </View>
     <Snackbar
       visible={postConfirm}
       onDismiss={() => setPostConfirm(false)}
       duration={1000}
       style={{backgroundColor: colors?.accent}}
     >
       <Text style={{fontSize: 18, fontWeight: 'bolder'}}>Postagem realizada com sucesso !</Text>
     </Snackbar>
   </View>
 );
}