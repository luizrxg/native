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
    handleRegister,
    registered,
    setRegistered,
    colors,
    darkMode
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
        <Text style={[styles.login, {color: darkMode ? colors?.secondary : colors?.accent, borderBottomColor: colors?.gray}]}>Cadastro</Text>
        <TextInput
          ref={userRef}
          placeholder="Usuário"
          value={user}
          onChangeText={setUser}
          style={[styles.input, {color: colors?.secondary, outline: 'none', borderColor: colors?.accent}]}
        />
        <TextInput
          ref={senhaRef}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          style={[styles.input, {color: colors?.secondary, outline: 'none', borderColor: colors?.accent}]}
        />
        <Button
          mode="contained"
          style={styles.button}
          color={colors?.accent}
          contentStyle={{padding: 5}}
          onPress={() => handleRegister(user, senha)}
        >
          <Text style={{fontSize: 18, fontWeight: 'bolder', color: colors?.primary}}>CADASTRAR</Text>
        </Button>
      </View>
      <Snackbar
        visible={registered}
        onDismiss={() => setRegistered(false)}
        duration={1000}
        style={{backgroundColor: '#F00'}}
      >
        <Text style={{fontSize: 18, fontWeight: 'bolder'}}>Nome de usuário indisponível !</Text>
      </Snackbar>
    </View>
  )
}