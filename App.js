import React from 'react';
import { Text, View, ScrollView, Pressable, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Image 
        style={styles.logo} 
        source={require('./assets/logo.png')} 
      />
      <Text style={styles.titulo}>Tech Woman's ♀️</Text>
      <Text style={styles.titulo2}>O Futuro da TI é feminino</Text>

      <Pressable style={styles.pressable} onPress={() => navigation.navigate('Conheça Margaret Hamilton')}>
        <Image 
          style={styles.imgMulheres} 
          source={require('./assets/margaret.webp')}
        />
        <Text style={styles.nomes}>Margaret Hamilton</Text>
      </Pressable>

      <Pressable style={styles.pressable} onPress={() => navigation.navigate('Conheça Grace Hopper')}>
        <Image 
          style={styles.imgMulheres} 
          source={require('./assets/grace.jpg')}
        />
        <Text style={styles.nomes}>Grace Hopper</Text>
      </Pressable>
      <Pressable style={styles.pressable} onPress={() => navigation.navigate('Conheça Ada Lovelace')}>
        <Image 
          style={styles.imgMulheres} 
          source={require('./assets/ada.jpg')}
        />
        <Text style={styles.nomes}>Ada Lovelace</Text>
      </Pressable>
      <Pressable style={styles.pressable} onPress={() => navigation.navigate('Conheça Katherine Johnson')}>
        <Image 
          style={styles.imgMulheres} 
          source={require('./assets/katherine.webp')}
        />
        <Text style={styles.nomes}>Katherine Johnson</Text>
      </Pressable>
      <Pressable style={styles.pressable} onPress={() => navigation.navigate('Conheça Radia Perlman')}>
        <Image 
          style={styles.imgMulheres} 
          source={require('./assets/radia.webp')}
        />
        <Text style={styles.nomes}>Radia Perlman</Text>
      </Pressable>
      <Pressable style={styles.pressable} onPress={() => navigation.navigate('Conheça Sônia Guimarães')}>
        <Image 
          style={styles.imgMulheres} 
          source={require('./assets/sonia.jpg')}
        />
        <Text style={styles.nomes}>Sônia Guimarães</Text>
      </Pressable>
    </ScrollView>
  );
}

function MargaretHamiltonScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      
    </ScrollView>
  );
}

function GraceHopperScreen() {
  return (
    <View style={styles.viewCentro}>
      
    </View>
  );
}

function AdaLovelaceScreen() {
  return (
    <View style={styles.viewCentro}>
      
    </View>
  );
}

function KatherineJohnsonScreen() {
  return (
    <View style={styles.viewCentro}>
      
    </View>
  );
}

function RadiaPerlmanScreen() {
  return (
    <View style={styles.viewCentro}>
      
    </View>
  );
}

function SoniaGuimaraesScreen() {
  return (
    <View style={styles.viewCentro}>
      
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Conheça Margaret Hamilton" component={MargaretHamiltonScreen} />
        <Stack.Screen name="Conheça Grace Hopper" component={GraceHopperScreen} />
        <Stack.Screen name="Conheça Ada Lovelace" component={AdaLovelaceScreen} />
        <Stack.Screen name="Conheça Katherine Johnson" component={KatherineJohnsonScreen} />
        <Stack.Screen name="Conheça Radia Perlman" component={RadiaPerlmanScreen} />
        <Stack.Screen name="Conheça Sônia Guimarâes" component={SoniaGuimaraesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#e12f70',
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    height: '135%',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: -90,
    marginLeft: 45,
    fontFamily: ''
  },
  titulo2: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 40,
    color: 'white',
    marginLeft: 100,
  },
  pressable: {
    backgroundColor: '#fff',
    color: '#000',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowRadius: 8,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nomes: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  imgMulheres: {
    width: 90,
    height: 90,
    borderRadius: '100%',
  },
  logo: {
    width: 95,
    height: 95,
    marginBottom: 20,
    borderRadius: '200%',
    marginRight: 230,
    borderColor: '#fff',
    borderWidth: 2,
  }
});