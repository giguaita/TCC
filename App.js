import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './src/routes';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const slides = [
  {
    key: 1,
    title: 'Organize',
    text: 'Organize seus projetos de qualquer lugar de um jeito muito simples e prático.',
    image: require('./src/assets/organizar.png')
  },
  {
    key: 2,
    title: 'Orçe',
    text: 'Faça o orçamento buscando sempre o melhor e o menor preço sem precisar sair de casa.',
    image: require('./src/assets/orcar.png')
  },
  {
    key: 3,
    title: 'Construa',
    text: 'Tenha a sua disposição todos os seus projetos a qualquer momento com apenas um click.',
    image: require('./src/assets/construir.png')
  },
  {
    key: 4,
    title: 'Conquiste',
    text: 'Alcançe sua independência gerenciando você mesmo todo o investimento da obra.',
    image: require('./src/assets/conquistar.png')
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
  },
});

function renderSlides({ item }) {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={item.image}
        style={{
          resizeMode: 'cover',
          height: '73%',
          width: '100%',
        }}
      />
      <Text>{item.title}</Text>
      <Text>{item.text}</Text>
    </View>
  );
}
function IntroScreen() {
  const navigation = useNavigation();

  const ativarDone = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        onDone={ativarDone}
        activeDotStyle={{
          backgroundColor: '#009CFF',
          width: 30,
        }}
      />
    </View>
  );
}
function HomeScreen() {
  return (
    <View  style={styles.container}>
      <Routes />
    </View>
  );
}

export default function App() {
  const [showHouse, setShowHouse] = useState(false);

  
  if (showHouse) {
    return (
      <View>
        <Text>ENTROU NA HOME</Text>
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Intro" component={IntroScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}