const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Splash from "./screens/Splash";
import ProfileConnected1 from "./screens/ProfileConnected1";
import CheckMark from "./components/CheckMark";
import IdidButton from "./components/IdidButton";
import MenuBar1 from "./components/MenuBar1";
import NotificationsButton from "./components/NotificationsButton";
import DeletePopOver from "./components/DeletePopOver";
import SoundButton from "./components/SoundButton";
import FaceRecognition from "./screens/FaceRecognition";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import SearchPersonality from "./screens/SearchPersonality";
import GroupCreationMembers from "./screens/GroupCreationMembers";
import ChatVdeoCall from "./screens/ChatVdeoCall";
import GroupFeedEdit from "./screens/GroupFeedEdit";
import GroupChat from "./screens/GroupChat";
import ChatEdit from "./screens/ChatEdit";
import SearchFaceScan from "./screens/SearchFaceScan";
import ChatNewChat from "./screens/ChatNewChat";
import Interests from "./screens/Interests";
import Splash1 from "./screens/Splash1";
import Profile from "./screens/Profile";
import SettingsLanguage from "./screens/SettingsLanguage";
import ProfileConnections from "./screens/ProfileConnections";
import SearchInterests from "./screens/SearchInterests";
import SearchResults from "./screens/SearchResults";
import SearchProfession from "./screens/SearchProfession";
import SearchName from "./screens/SearchName";
import Notifications from "./screens/Notifications";
import ProfileConnections1 from "./screens/ProfileConnections1";
import SettingsHelp from "./screens/SettingsHelp";
import ProfileHistory from "./screens/ProfileHistory";
import ProfileEditGallery from "./screens/ProfileEditGallery";
import GroupFeed2 from "./screens/GroupFeed2";
import Chat1 from "./screens/Chat1";
import SearchFace from "./screens/SearchFace";
import ProfileEdit from "./screens/ProfileEdit";
import Search from "./screens/Search";
import GroupFeed1 from "./screens/GroupFeed1";
import Chat from "./screens/Chat";
import GroupCreationNaming from "./screens/GroupCreationNaming";
import ProfileAcceptReject from "./screens/ProfileAcceptReject";
import Home from "./screens/Home";
import GroupFeed from "./screens/GroupFeed";
import Settings from "./screens/Settings";
import SettingsLogOut from "./screens/SettingsLogOut";
import SettingsDelete from "./screens/SettingsDelete";
import Property1Chat from "./components/Property1Chat";
import AvatarImage from "./components/AvatarImage";
import Connect from "./components/Connect";
import Property1Connected from "./components/Property1Connected";
import Connected from "./components/Connected";
import Send from "./components/Send";
import Property1Group from "./components/Property1Group";
import Property1Home from "./components/Property1Home";
import Property1Default1 from "./components/Property1Default1";
import Property1Default from "./components/Property1Default";
import PopOver from "./components/PopOver";
import Property1DeletePopOver from "./components/Property1DeletePopOver";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileConnected1"
              component={ProfileConnected1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FaceRecognition"
              component={FaceRecognition}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchPersonality"
              component={SearchPersonality}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupCreationMembers"
              component={GroupCreationMembers}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatVdeoCall"
              component={ChatVdeoCall}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupFeedEdit"
              component={GroupFeedEdit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupChat"
              component={GroupChat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatEdit"
              component={ChatEdit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchFaceScan"
              component={SearchFaceScan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatNewChat"
              component={ChatNewChat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Interests"
              component={Interests}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash1"
              component={Splash1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingsLanguage"
              component={SettingsLanguage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileConnections"
              component={ProfileConnections}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchInterests"
              component={SearchInterests}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchResults"
              component={SearchResults}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchProfession"
              component={SearchProfession}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchName"
              component={SearchName}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileConnections1"
              component={ProfileConnections1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingsHelp"
              component={SettingsHelp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileHistory"
              component={ProfileHistory}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileEditGallery"
              component={ProfileEditGallery}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupFeed2"
              component={GroupFeed2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat1"
              component={Chat1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchFace"
              component={SearchFace}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileEdit"
              component={ProfileEdit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupFeed1"
              component={GroupFeed1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupCreationNaming"
              component={GroupCreationNaming}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileAcceptReject"
              component={ProfileAcceptReject}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupFeed"
              component={GroupFeed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingsLogOut"
              component={SettingsLogOut}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingsDelete"
              component={SettingsDelete}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
