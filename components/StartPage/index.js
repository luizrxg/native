import React, {useContext, useRef, useState} from 'react'
import styles from './styles'
import {Text, TextInput, View} from "react-native";
import {Avatar, Button, Snackbar} from "react-native-paper";
import {IndexContext} from "../../contexts";

export default function Componente(){
  const [user,  setUser ] = useState('user1')
  const [senha, setSenha] = useState('123')
  const userRef = useRef()
  const senhaRef = useRef()
  const {
    colors,
    darkMode,
    navigate
  } = useContext(IndexContext)

  return (
    <View style={[styles.content, {backgroundColor: colors?.primary}]}>
      <View style={styles.header}>
        <Button
          style={styles.logo}
          color={colors?.accent}
        >
          <Avatar.Icon icon="all-inclusive" size={110} color={colors?.accent}/>
          <Text style={styles.logoText}>FEED</Text>
        </Button>
      </View>
      <View style={styles.subcontent}>
        <Button
          style={styles.button}
          contentStyle={{padding: 5}}
          onPress={() => navigate('Register')}
        >
          <Text style={{fontSize: 18, fontWeight: 'bolder', color: colors?.accent}}>REGISTRAR - SE</Text>
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          color={colors?.accent}
          contentStyle={{padding: 5}}
          onPress={() => navigate('Login')}
        >
          <Text style={{fontSize: 18, fontWeight: 'bolder', color: colors?.primary}}>ENTRAR</Text>
        </Button>
      </View>
    </View>
  )
}