import React, {createContext, useState, useEffect, useRef} from "react";
import { useNavigationContainerRef } from '@react-navigation/native';
export default function IndexProvider({ children }) {
  const navigationRef = useNavigationContainerRef();
  const contentRef = useRef()
  const [users, setUsers] = useState([
    {
      id: 0,
      user: 'user1',
      senha: '123',
    },
    {
      id: 1,
      user: 'user2',
      senha: '123',
    },
    {
      id: 2,
      user: 'user3',
      senha: '123',
    }
  ])

  const [posts, setPosts] = useState([
    {
      id: 0,
      user: 'user2',
      url: 'https://picsum.photos/700',
      caption: 'Legenda',
    },
    {
      id: 1,
      user: 'user1',
      url: 'https://picsum.photos/701',
      caption: 'Legenda',
    },
    {
      id: 2,
      user: 'user2',
      url: null,
      caption: 'Legenda',
    },
    {
      id: 3,
      user: 'user3',
      url: 'https://picsum.photos/702',
      caption: 'Legenda',
    },
    {
      id: 4,
      user: 'user1',
      url: 'https://picsum.photos/703',
      caption: 'Legenda',
    },
    {
      id: 5,
      user: 'user2',
      url: 'https://picsum.photos/704',
      caption: 'Legenda',
    },
    {
      id: 6,
      user: 'user2',
      url: 'https://picsum.photos/705',
      caption: 'Legenda',
    }
  ])
  const [messages, setMessages] = useState([
    {
      id: 0,
      from: 'user2',
      to: 'user1',
      type: 'chat',
      text: 'mensagem !!! 0',
    },
    {
      id: 1,
      from: 'user2',
      to: 'user1',
      type: 'chat',
      text: 'mensagem !!! 1',
    },
    {
      id: 2,
      from: 'user2',
      to: 'user1',
      type: 'chat',
      text: 'mensagem !!! 2',
    },
    {
      id: 3,
      from: 'user3',
      to: 'user2',
      type: 'chat',
      text: 'mensagem !!! 3',
    },
    {
      id: 4,
      from: 'user1',
      to: 'user2',
      type: 'chat',
      text: 'mensagem !!! 4',
    },
    {
      id: 5,
      from: 'user1',
      to: 'group1',
      type: 'group',
      text: 'mensagem !!! 5',
    },
    {
      id: 6,
      from: 'user2',
      to: 'group1',
      type: 'group',
      text: 'mensagem !!! 6',
    },    {
      id: 7,
      from: 'user3',
      to: 'group1',
      type: 'group',
      text: 'mensagem !!! 7',
    },
  ])
  const [follows, setFollows] = useState([
    {follower: 'user1', followed: 'user2'},
    {follower: 'user1', followed: 'user3'},
    {follower: 'user2', followed: 'user1'},
    {follower: 'user2', followed: 'user3'},
    {follower: 'user3', followed: 'user1'},
    {follower: 'user3', followed: 'user2'},
  ])

  const [groups, setGroups] = useState([
    {name: 'group1', members: ['user1', 'user2', 'user3']}
  ])

  const [theme,                setTheme               ] = useState()
  const [selectedChat,         setSelectedChat        ] = useState()
  const [selectedGroup,        setSelectedGroup       ] = useState()
  const [logged,               setLogged              ] = useState(!!localStorage.getItem('user'))
  const [loggedProfile,        setLoggedProfile       ] = useState(users?.filter(e => e?.id.toString() === localStorage.getItem('user')).pop() || null)
  const [wrongInfo,            setWrongInfo           ] = useState(false)
  const [openMenu,             setOpenMenu            ] = useState(false)
  const [darkMode,             setDarkMode            ] = useState(true)
  const [selectedProfile,      setSelectedProfile     ] = useState()
  const [likes,                setLikes               ] = useState([])
  const [currentRoute,         setCurrentRoute        ] = useState()
  const [text,                 setText                ] = useState()
  const [chatBackground,       setChatBackground      ] = useState()
  const [openChangeBackground, setOpenChangeBackground] = useState(false)
  const [openCreateGroup,      setOpenCreateGroup     ] = useState(false)
  const [postConfirm,          setPostConfirm         ] = useState(false)
  const [urlPost,              setUrlPost             ] = useState()
  const [caption,              setCaption             ] = useState()
  const [newPost,              setNewPost             ] = useState(false)
  const [registered,           setRegistered          ] = useState(false)
  const [searchingChat,        setSearchingChat       ] = useState(false)

  useEffect(() => {
    setTheme({
      ...DefaultTheme,
      roundness: 2,
      colors: {
        ...DefaultTheme.colors,
        primary: (darkMode ? '#000' : '#FFF'),
        secondary: (darkMode ? '#FFF' : '#000'),
        accent: '#1DA1F2',
        gray: (darkMode ? '#D8D8D820' : '#D8D8D890')
      },
    })
  }, [darkMode])

  const colors = theme?.colors

  const navigate = (e) => {
    navigationRef.navigate(e)
    setCurrentRoute(navigationRef.getCurrentRoute())
  }

  const scrollTop = () => {
    contentRef.current.scrollTop = 0
  }

  const handlePost = () => {
    setNewPost(true)
    setPosts(arr => [...arr, {id: arr.length, user: loggedProfile?.user, url: urlPost, caption: caption}])
    setUrlPost('')
    setCaption('')
    setPostConfirm(true)
  }

  const handleSend = (msg, type) => {
    setMessages(
      arr => [...arr,
        {
          id: arr.length,
          from: loggedProfile?.user,
          to: type === 'chat' ? selectedChat : selectedGroup,
          type: type,
          text: msg
        }
      ])
    setText('')
  }

  const createGroup = (name, members) => {
    setGroups(arr => [...arr, {name: name, members: [...members, loggedProfile?.user]}])
  }

  const handleAuth = (user, senha) => {
    users?.map(async (val) => {
      setWrongInfo(false)
      if (val.user === user && val.senha === senha) {
        await setLogged(true)
        setLoggedProfile(val)
        localStorage.setItem('user', val?.id)
        navigate('Home')
      } else {
        setWrongInfo(true)
      }
    })
  }

  const handleRegister = (user, senha) => {
    const newUser = {
      id: users?.length,
      user: user,
      senha: senha
    }
    users?.map((val) => {
      if (val.user === newUser.user){
        setRegistered(true)
      } else {
        setUsers(arr => [...arr, newUser])
        navigate('Login')
      }
    })
  }

  const logout = () => {
    setLogged(false)
    setLoggedProfile()
    localStorage.removeItem('user')
    setOpenMenu(false)
    navigate('StartPage')
  }

  const route = currentRoute?.name

  useEffect(() => route === 'Home' && setNewPost(false), [route])
  useEffect(() => loggedProfile && navigate('Home'), [])

  return (
    <IndexContext.Provider
      value={{
        users,
        setUsers,
        posts,
        setPosts,
        navigationRef,
        selectedProfile,
        setSelectedProfile,
        navigate,
        route,
        likes,
        setLikes,
        logged,
        setLogged,
        loggedProfile,
        setLoggedProfile,
        wrongInfo,
        setWrongInfo,
        handleAuth,
        contentRef,
        scrollTop,
        openMenu,
        setOpenMenu,
        theme,
        colors,
        darkMode,
        setDarkMode,
        logout,
        messages,
        setMessages,
        selectedChat,
        setSelectedChat,
        handlePost,
        handleSend,
        text,
        setText,
        chatBackground,
        setChatBackground,
        openChangeBackground,
        setOpenChangeBackground,
        follows,
        setFollows,
        openCreateGroup,
        setOpenCreateGroup,
        postConfirm,
        setPostConfirm,
        urlPost,
        setUrlPost,
        caption,
        setCaption,
        groups,
        setGroups,
        newPost,
        setNewPost,
        registered,
        setRegistered,
        handleRegister,
        createGroup,
        selectedGroup,
        setSelectedGroup,
        searchingChat,
        setSearchingChat
      }}
    >
      {children}
    </IndexContext.Provider>
  );
}

import {DefaultTheme} from "react-native-paper";

export const IndexContext = createContext();
