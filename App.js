import React, {useContext, useEffect} from 'react'
import Feed from './components/Feed/index'
import MakePost from './components/MakePost/index'
import Profile from './components/Profile/index'
import OwnProfile from './components/OwnProfile/index'
import Explore from './components/Explore/index'
import Login from './components/Login/index'
import Register from './components/Register/index'
import StartPage from './components/StartPage/index'
import Drawer from './components/Drawer/index'
import Chats from './components/Chats/index'
import Chat from './components/Chat/index'
import GroupChat from './components/GroupChat/index'
import ShowFollow from './components/ShowFollow/index'
import {Avatar, Badge, Button, IconButton, Provider} from 'react-native-paper'
import IndexProvider, {IndexContext} from "./contexts";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Pressable, Text, View} from "react-native";
import styles from './styles'

const Stack = createNativeStackNavigator();

const Main = () => {
  const {
    route,
    navigationRef,
    selectedProfile,
    loggedProfile,
    navigate,
    logged,
    scrollTop,
    setOpenMenu,
    theme,
    colors,
    selectedChat,
    setOpenChangeBackground,
    setOpenCreateGroup,
    newPost,
    selectedGroup,
    searchingChat,
    setSearchingChat
  } = useContext(IndexContext)

  const NavigationBar = () => {

    return (
      <View style={[styles.appbar, {backgroundColor: colors?.primary}]}>
        <Pressable style={{margin: 5}}>
          {newPost && <Badge style={[styles.badge, {backgroundColor: colors?.accent}]}/>}
          <IconButton
            style={{margin: 0}}
            icon={`home${route === 'Home' ? '' : '-outline'}`}
            size={30}
            color={route === 'Home' ?  colors?.accent : colors?.secondary}
            onPress={() => navigate('Home')}
          />
        </Pressable>
        <IconButton
          icon={`email${route === 'Chats' ? '' : '-outline'}`}
          size={30}
          color={route === 'Chats' ?  colors?.accent : colors?.secondary}
          onPress={() => navigate('Chats')}
        />
        <IconButton
          icon="magnify"
          size={30}
          color={route === 'Explore' ?  colors?.accent : colors?.secondary}
          onPress={() => navigate('Explore')}
        />
        <IconButton
          icon={`account${route === 'OwnProfile' ? '' : '-outline'}`}
          size={30}
          color={route === 'OwnProfile' ?  colors?.accent : colors?.secondary}
          onPress={() => navigate('OwnProfile')}
        />
        <IconButton
          icon="menu"
          size={30}
          color={colors?.secondary}
          onPress={() => setOpenMenu(true)}
        />
      </View>
    )
  }

  return (
    <Provider theme={theme}>
      <View style={styles.main}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator screenOptions={{
            headerTintColor: colors?.secondary,
            headerStyle: {backgroundColor: colors?.primary},
            headerShadowVisible: false,
          }}>
            <Stack.Screen
              name="StartPage"
              component={StartPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              options={{
                headerLeft: () =>
                  <Button
                    style={styles.headerButton}
                    color={colors?.accent}
                    onPress={scrollTop}
                  >
                    <Avatar.Icon icon="all-inclusive" size={40} color={colors?.accent}/>
                    <Text style={styles.headerTitle}>FEED</Text>
                  </Button>,
                title: ''
              }}
              component={Feed}
            />
            <Stack.Screen
              name="MakePost"
              options={{title: 'Nova Postagem'}}
              component={MakePost}
            />
            <Stack.Screen
              name="OwnProfile"
              component={OwnProfile}
              options={{title: loggedProfile?.user}}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{title: selectedProfile?.user}}
            />
            <Stack.Screen
              name="Explore"
              options={{headerShown: false}}
              component={Explore}
            />
            <Stack.Screen
              name="Chats"
              component={Chats}
              options={{
                headerRight: () =>
                  <View style={{flexDirection: 'row'}}>
                    <IconButton
                      icon="magnify"
                      size={30}
                      color={searchingChat ? colors?.accent : colors?.secondary}
                      onPress={() => setSearchingChat(!searchingChat)}
                    />
                    <IconButton
                      icon="image-plus"
                      size={30}
                      color={colors?.secondary}
                      onPress={() => setOpenChangeBackground(true)}
                    />
                    <IconButton
                      icon="account-multiple-plus"
                      size={30}
                      color={colors?.secondary}
                      onPress={() => setOpenCreateGroup(true)}
                    />
                  </View>,
              }}/>
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{
                title: selectedChat,
                headerTitle: () =>
                  <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                    <Avatar.Icon
                      icon="account"
                      size={40}
                      style={{marginRight: 10, borderWidth: 2, borderColor: colors?.secondary}}
                    />
                    <Text style={{fontSize: 18, fontWeight: 500, color: colors?.secondary}}>{selectedChat}</Text>
                  </View>
              }}/>
            <Stack.Screen
              name="GroupChat"
              component={GroupChat}
              options={{
                title: selectedGroup,
                headerTitle: () =>
                  <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                    <Avatar.Icon
                      icon="account"
                      size={40}
                      style={{marginRight: 10, borderWidth: 2, borderColor: colors?.secondary}}
                    />
                    <Text style={{fontSize: 18, fontWeight: 500, color: colors?.secondary}}>{selectedGroup}</Text>
                  </View>
              }}/>
            <Stack.Screen
              name="Seguindo"
              component={ShowFollow}
            />
            <Stack.Screen
              name="Seguidores"
              component={ShowFollow}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {logged ? <>
            <NavigationBar/>
            <Drawer/> </> :
          <></>}
      </View>
    </Provider>
  );
}

export default function App(){

  return (
    <IndexProvider>
      <Main/>
    </IndexProvider>
  );
}