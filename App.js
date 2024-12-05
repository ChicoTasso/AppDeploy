import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'; // Para ícones
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import { logout } from './components/Logout'; // Importando a função de logout

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

// Configurando as Tabs
function TabNavigator({ navigation }) {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Esconde os headers das abas
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Logout') {
            iconName = focused ? 'log-out' : 'log-out-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0984e3', // Cor do ícone ativo
        tabBarInactiveTintColor: 'gray', // Cor do ícone inativo
      })}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
      {/* Nova aba de Logout */}
      <Tabs.Screen
        name="Logout"
        component={() => {
          logout(navigation); // Chama a função de logout
          return null; // Não renderiza nada na tela de Logout
        }}
      />
    </Tabs.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Esconde o header da tela de Login
        />
        <Stack.Screen
          name="Tabs"
          component={TabNavigator} // Usa o TabNavigator configurado acima
          options={{ headerShown: false }} // Esconde o header das Tabs
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
