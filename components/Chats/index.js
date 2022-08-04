import React, {useContext, useEffect, useState} from 'react'
import styles from './styles'
import {IndexContext} from "../../contexts";
import {View, Text, TextInput, Image, Pressable} from 'react-native'
import {Avatar, Button, Checkbox, List, Modal, Searchbar} from "react-native-paper";

export default function Componente(){
  const {
    loggedProfile,
    colors,
    users,
    groups,
    setSelectedChat,
    navigate,
    setChatBackground,
    openChangeBackground,
    setOpenChangeBackground,
    messages,
    openCreateGroup,
    setOpenCreateGroup,
    createGroup,
    setSelectedGroup,
    searchingChat
  } = useContext(IndexContext)
  const [url, setUrl] = useState()
  const [groupName,       setGroupName     ] = useState()
  const [groupMembers,    setGroupMembers  ] = useState([])
  const [search,          setSearch        ] = useState()
  const [searchText,      setSearchText    ] = useState('')
  const [searchChat,      setSearchChat    ] = useState()
  const [searchGroup,     setSearchGroup   ] = useState()
  const [searchTextChat,  setSearchTextChat] = useState('')
  const [selectedTab,     setSelectedTab   ] = useState('Chats')

  let usersToShow = users.filter(e => e.user !== loggedProfile?.user)
  let groupsToShow = groups.filter(e => e.members.includes(loggedProfile?.user))

  useEffect(() => {
    setSearch(users?.filter(e => e.user.toLowerCase().includes(searchText.toLowerCase()) && e.user !== loggedProfile?.user))
  }, [searchText])

  useEffect(() => {
    setSearchChat(usersToShow?.filter(e => e.user.toLowerCase().includes(searchTextChat.toLowerCase())))
  }, [searchTextChat])

  useEffect(() => {
    setSearchGroup(groupsToShow?.filter(e => e.name.toLowerCase().includes(searchTextChat.toLowerCase())))
  }, [searchTextChat])

  const Chats = (props) => {
    return (
      props?.arr?.map((val) => {
        return (
          <List.Item
            title={val.user}
            description={
              messages.filter(
                e => (
                  (e.from === loggedProfile?.user && e.to === val?.user) ||
                  e.from === val?.user) && e.type === 'chat'
              ).pop().text
            }
            titleStyle={{fontSize: 20, color: colors?.secondary}}
            descriptionStyle={{fontSize: 16, color: '#D8D8D890'}}
            color={colors?.secondary}
            left={() =>
              <Avatar.Icon
                icon="account"
                size={60}
                style={{margin: 0, borderWidth: 2, borderColor: colors?.secondary}}
              />
            }
            onPress={() => {
              setSelectedChat(val.user);
              navigate('Chat')
            }}
          />
        )
      })
    )
  }

  const Groups = (props) => {
    return (
      props?.arr?.map((val) => {
        return (
          <List.Item
            title={val.name}
            description={
              messages.filter(
                e =>
                  groups.filter(e => e.name === val?.name)?.pop()?.members?.includes(e.from)
                  && e.to === val?.name
                  && e.type === 'group'
              ).pop().text
            }
            titleStyle={{fontSize: 20, color: colors?.secondary}}
            descriptionStyle={{fontSize: 16, color: '#D8D8D890'}}
            color={colors?.secondary}
            left={() =>
              <Avatar.Icon
                icon="account-multiple"
                size={60}
                style={{margin: 0, borderWidth: 2, borderColor: colors?.secondary}}
              />
            }
            onPress={() => {
              setSelectedGroup(val.name);
              navigate('GroupChat')
            }}
          />
        )}
      )
    )
  }

  return (
    <View style={[styles.chats, {backgroundColor: colors?.primary}]}>
      {searchingChat ?
        <View>
          <Searchbar
            iconColor={colors?.secondary}
            value={searchTextChat}
            onChangeText={setSearchTextChat}
            style={[styles.searchbar, {backgroundColor: colors?.gray, margin: 10}]}
            inputStyle={{color: colors?.secondary}}
          />
          <Chats arr={searchChat}/>
          <Groups arr={searchGroup}/>
        </View> :
        <View>
          <View style={[styles.appbar, {backgroundColor: colors?.primary, borderColor: colors?.gray}]}>
          <Pressable style={styles.tabButton} onPress={() => setSelectedTab('Chats')}>
            <Avatar.Icon
              icon={`account${selectedTab === 'Chats' ? '' : '-outline'}`}
              size={50}
              color={selectedTab === 'Chats' ?  colors?.accent : colors?.secondary}
            />
          </Pressable>
          <Pressable style={styles.tabButton} onPress={() => setSelectedTab('Groups')}>
            <Avatar.Icon
              icon={`account-multiple${selectedTab === 'Groups' ? '' : '-outline'}`}
              size={50}
              color={selectedTab === 'Groups' ?  colors?.accent : colors?.secondary}
            />
          </Pressable>
          <View style={[styles.tabIndicator, {backgroundColor: colors?.accent, left: selectedTab === 'Chats' ? 0 : '50%'}]}/>
        </View>
        {selectedTab === 'Chats' ? <Chats arr={usersToShow}/> : <Groups arr={groupsToShow}/>}
      </View>}
      <Modal
        visible={openChangeBackground}
        onDismiss={() => setOpenChangeBackground(false)}
        contentContainerStyle={[styles.modal, {backgroundColor: colors?.primary, borderColor: colors?.gray}]}
      >
        <Text style={[styles.modalTitle, {color: colors?.secondary, borderColor: colors?.gray}]}>Alterar plano de fundo dos chats</Text>
        <Image
          style={{flex: 1, borderRadius: 10}}
          source={{ uri: url }}
        />
        <TextInput
          style={[styles.input, {color: colors?.secondary, outline: 'none', borderColor: colors?.accent}]}
          value={url}
          onChangeText={setUrl}
          placeholder="Url da foto"
        />
        <Button
          color={colors?.accent}
          onPress={() => {
            setChatBackground(url)
            setOpenChangeBackground(false)
          }}
        >
          <Text style={{fontSize: 18, fontWeight: 'bolder'}}>ALTERAR</Text>
        </Button>
      </Modal>
      <Modal
        visible={openCreateGroup}
        onDismiss={() => setOpenCreateGroup(false)}
        contentContainerStyle={[styles.modal, {backgroundColor: colors?.primary, borderColor: colors?.gray}]}
      >
        <Text style={[styles.modalTitle, {color: colors?.secondary, borderColor: colors?.gray}]}>Criar grupo</Text>
        <View style={styles.searchbarContainer}>
          <Text style={{fontSize: 18, color: colors?.secondary, fontWeight: 500}}>Selecione os membros</Text>
          <Searchbar
            iconColor={colors?.secondary}
            value={searchText}
            onChangeText={setSearchText}
            style={[styles.searchbar, {backgroundColor: colors?.gray}]}
            inputStyle={{color: colors?.secondary}}
          />
        </View>
        <View style={styles.results}>
          {search?.map((val) =>
            <Pressable
              style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
              onPress={() => {
                groupMembers.includes(val?.user)
                ? setGroupMembers(groupMembers.filter(e => e !== val?.user))
                : setGroupMembers(arr => [...arr, val?.user])
              }}
            >
              <View
                style={{flexDirection: 'row', alignItems: 'center'}}
                color={colors?.secondary}
              >
                <Avatar.Icon
                  icon="account"
                  size={50}
                  style={{margin: 0, marginRight: 10, borderWidth: 2, borderColor: colors?.secondary}}
                />
                <Text style={{fontSize: 18, fontWeight: 500, color: colors?.secondary}}>{val?.user}</Text>
              </View>
              <Checkbox
                uncheckedColor={colors?.secondary}
                status={groupMembers.includes(val?.user) ? 'checked' : 'unchecked'}
              />
            </Pressable>
          )}
        </View>
        <TextInput
          style={[styles.input, {color: colors?.secondary, outline: 'none', borderColor: colors?.accent}]}
          value={groupName}
          onChangeText={setGroupName}
          placeholder="Nome do grupo"
        />
        <Button
          mode="contained"
          style={styles.button}
          color={colors?.accent}
          onPress={() => createGroup(groupName, groupMembers)}
        >
          <Text style={{fontSize: 18, fontWeight: 'bolder'}}>CRIAR GRUPO</Text>
        </Button>
      </Modal>
    </View>
  );
}