import React, {useContext} from 'react'
import {View, Pressable} from "react-native";
import styles from "./style";
import {List, Switch} from "react-native-paper";
import {IndexContext} from "../../contexts";

export default function Componente(){
  const {
    colors,
    openMenu,
    setOpenMenu,
    logout,
    darkMode,
    setDarkMode
  } = useContext(IndexContext)

  return(
    <View style={[styles.drawerWrapper, openMenu ? {} : {display: 'none'}]}>
      <Pressable onPress={() => setOpenMenu(false)}>
        <View style={{flex: 1, width: '30vw'}}/>
      </Pressable>
      <View style={[styles.drawer, {backgroundColor: colors?.primary, borderLeftColor: colors?.gray}]}>
        <List.Item
          title="Menu"
          style={[styles.menuItem, {borderBottomWidth: 2, borderBottomColor: colors?.gray, marginBottom: 10}]}
          titleStyle={[styles.menuItemText, {color: colors?.secondary}]}
          left={() => <List.Icon style={{margin: 0}} icon="menu" color={colors?.secondary}/>}
        />
        <List.Item
          title="Dark Mode"
          style={styles.menuItem}
          titleStyle={[styles.menuItemText, {color: colors?.secondary}]}
          left={() =>
            <View style={{paddingVertical: 5}}>
              <Switch
                value={darkMode}
                onValueChange={() => setDarkMode(!darkMode)}
              />
            </View>
          }
        />
        <List.Item
          title="Logout"
          style={[styles.menuItem, {borderTopWidth: 2, borderTopColor: colors?.gray, marginTop: 'auto', marginHorizontal: 10}]}
          titleStyle={[styles.menuItemText, {color: colors?.accent}]}
          left={() => <List.Icon style={{margin: 0}} icon="logout" color={colors?.accent}/>}
          onPress={logout}
        />
      </View>
    </View>
  )
}