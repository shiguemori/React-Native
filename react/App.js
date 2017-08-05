/**
 * 	react-native -v 		// Checa a versão 
 * 	npm install				// instala o app e atuliaza todos os imports e dependecias
 * 	react-native upgrade	// Atualiza todas as alterações feitas no codigo no app
 * 	react-native start		// Inicia o APP 
 * 
	// Primeiro Codigo Basico
 	//	No topo do codigo colocamos os imports dos componentes que serão utilizados
	import React, { Component } from 'react'
	import { View, Text, AppRegistry } from 'react-native'
	
	//	Cria classe que será chamada na execução do app
	class Example extends Component {
	
	  // o render define oque será mostrado na tela
	  render () {
	    return (
	      <View> 
	        <Text> I'm a basic Component </Text>
	      </View>
	    )
	  }
	}
	
	AppRegistry.registerComponent('Example', () => Example)



	// Segundo Codigo Basico Com mudança de valores
	import React, { Component } from 'react'
	import { View, Text, AppRegistry } from 'react-native'
	
	class Example extends Component {
	
	  //	Aqui temos o contrutor pops que é a abreviação de propriedades
	  constructor (props) {
	    super(props)
	    
	    //	Aqui é definido que o state.name tera o valor de "Sriraman"
	    this.state = {
	      name: "Sriraman"
	    }  
	  }
	  render () {
	    return (
	      <View>
	      
	      	//	Aqui Acessamos o valor de state.name e exibimos na tela
	        <Text> Hi, {this.state.name}</Text>
	      </View>
	    )
	  }
	}
	
	AppRegistry.registerComponent('Example', () => Example)



	//	Terceiro codigo
	//	Executar o comando no projeto npm install --save react-navigation
	//	Exemplo para a navegação entre as telas do APP 

	import { Button, View, Text, AppRegistry } from 'react-native';
	
	//	Executa o import do navigation para usar suas classes
	import { StackNavigator } from 'react-navigation';
	
	//	Cria as constantes definindo as Paginas
	const App = StackNavigator({
	  FirstPage: {screen: FirstPage},
	  SecondPage: {screen: SecondPage},
	});
	
	// Cria a classe da primeira pagina onde vai er os seus conteudos
	class FirstPage extends React.Component {
	  static navigationOptions = {
	    title: 'Welcome',
	  };
	  render() {
	    const { navigate } = this.props.navigation;
	
	    return (
	      <Button
	        title='Go to Second Page'
	        onPress={() =>
	        
	          //	Função do navigation para mudar de pagina
	          navigate('SecondPage', { name: 'Awesomepankaj' })
	        }
	      />
	    );
	  }
	}
	
	// Cria a classe da segunda pagina onde vai er os seus conteudos
	class SecondPage extends React.Component {
	  static navigationOptions = ({navigation}) => ({
	    title: navigation.state.params.name,
	  });
	
	  render() {
	  
	    //	Função para mudar de pagina
	    const { goBack } = this.props.navigation;
	    
	    return (
	      <View>
	        <Text>Welcome to Second Page</Text>
	        <Button
	          title="Go back to First Page"
	          onPress={() => goBack()}
	        />
	      </View>
	    );
	  }
	}
	
	
	//	Segundo exemplo de navigator
	import React, { Component } from 'react';
	import { Text, Navigator, TouchableHighlight } from 'react-native';
	
	export default class NavAllDay extends Component {
	  render() {
	    return (
	      <Navigator
	        initialRoute={{ title: 'Awesome Scene', index: 0 }}
	        renderScene={(route, navigator) =>
	          <Text>Hello {route.title}!</Text>
	        }
	        style={{padding: 100}}
	      />
	    );
	  }
	}
	
	
	//	Quarto Codigo
	//	Exemplo de uso de uma ListView
	
	getInitialState: function() {
	  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	  return {
	    dataSource: ds.cloneWithRows(['row 1', 'row 2']),
	  };
	},
	
	render: function() {
	  return (
	    <ListView
	      dataSource={this.state.dataSource}
	      renderRow={(rowData) => <Text>{rowData}</Text>}
	    />
	  );
	},
	
	
	
	//	Quinto Codigo
	//	Exemplo de RefreshControl com ListView
	
	'use strict'
	import React, { Component } from 'react';
	import { StyleSheet, View, ListView, RefreshControl, Text } from 'react-native'
	
	
	class RefreshControlExample extends Component {
	  constructor () {
	    super()
	    this.state = {
	      refreshing: false,
	      dataSource: new ListView.DataSource({
	        rowHasChanged: (row1, row2) => row1 !== row2 }),
	      cars : [
	        {name:'Datsun',color:'White'},
	        {name:'Camry',color:'Green'}
	      ]
	    }
	  }
	
	   componentWillMount(){
	     this.setState({ dataSource:
	       this.state.dataSource.cloneWithRows(this.state.cars) })
	   }
	
	  render() {
	    return (
	      <View style={{flex:1}}>
	        <ListView
	          refreshControl={this._refreshControl()}
	          dataSource={this.state.dataSource}
	          renderRow={(car) => this._renderListView(car)}>
	        </ListView>
	      </View>
	    )
	  }
	
	  _renderListView(car){
	    return(
	      <View style={styles.listView}>
	        <Text>{car.name}</Text>
	        <Text>{car.color}</Text>
	      </View>
	    )
	  }
	
	  _refreshControl(){
	    return (
	      <RefreshControl
	        refreshing={this.state.refreshing}
	        onRefresh={()=>this._refreshListView()} />
	    )
	  }
	
	  _refreshListView(){
	    //Start Rendering Spinner
	    this.setState({refreshing:true})
	    this.state.cars.push(
	      {name:'Fusion',color:'Black'},
	      {name:'Yaris',color:'Blue'}
	    )
	    //Updating the dataSource with new data
	    this.setState({ dataSource:
	        this.state.dataSource.cloneWithRows(this.state.cars) })
	    this.setState({refreshing:false}) //Stop Rendering Spinner
	  }
	
	}
	
	const styles = StyleSheet.create({
	
	  listView: {
	    flex: 1,
	    backgroundColor:'#fff',
	    marginTop:10,
	    marginRight:10,
	    marginLeft:10,
	    padding:10,
	    borderWidth:.5,
	    borderColor:'#dddddd',
	    height:70
	  }
	
	})
	
	module.exports = RefreshControlExample
	
	
	//	Exemplo da função onRefresh function 
	_refreshListView(){
	    //Start Rendering Spinner
	    this.setState({refreshing:true})
	    this.state.cars.push(
	      {name:'Fusion',color:'Black'},
	      {name:'Yaris',color:'Blue'}
	    )
	    //Updating the dataSource with new data
	    this.setState({ dataSource:
	        this.state.dataSource.cloneWithRows(this.state.cars) })
	    this.setState({refreshing:false}) //Stop Rendering Spinner
	  }
		
		
	//	Exemplo da função Refresh Control
	  _refreshControl(){
	    return (
	      <RefreshControl
	        refreshing={this.state.refreshing}
	        onRefresh={()=>this._refreshListView()} />
	    )
	  }




	// Sexto codigo exemplo de MODAL
	import React, { Component } from 'react';
	import {
	  Modal,
	  Text,
	  View,
	  Button,
	  StyleSheet,
	} from 'react-native';
	
	const styles = StyleSheet.create({
	  mainContainer: {
	    marginTop: 22,
	  },
	  modalContainer: {
	    marginTop: 22,
	  },
	});
	
	class Example extends Component {
	  constructor() {
	    super();
	    this.state = {
	      visibility: false,
	    };
	  }
	
	
	  setModalVisibility(visible) {
	    this.setState({
	      visibility: visible,
	    });
	  }
	
	  render() {
	    return (
	      <View style={styles.mainContainer}>
	        <Modal
	          animationType={'slide'}
	          transparent={false}
	          visible={this.state.visibility}
	        >
	          <View style={styles.modalContainer}>
	            <View>
	              <Text>I'm a simple Modal</Text>
	              <Button
	                color="#000"
	                onPress={() => this.setModalVisibility(!this.state.visibility)}
	                title="Hide Modal"
	              />
	            </View>
	          </View>
	        </Modal>
	
	        <Button
	          color="#000"
	          onPress={() => this.setModalVisibility(true)}
	          title="Show Modal"
	        />
	      </View>
	    );
	  }
	}
	
	export default Example;
	
	
	
	
	// exemplo Modal Transparente modal serve para alterar a visibilades dos contents sem fechar 
	import React, { Component } from 'react';
	import { Text, View, StyleSheet, Button, Modal } from 'react-native';
	import { Constants } from 'expo';
	
	export default class App extends Component {
	  state = {
	    modalVisible: false,
	  };
	  
	  _handleButtonPress = () => {
	    this.setModalVisible(true);
	  };
	
	  setModalVisible = (visible) => {
	    this.setState({modalVisible: visible});
	  }
	  
	  render() {
	    var modalBackgroundStyle = {
	      backgroundColor: 'rgba(0, 0, 0, 0.5)'
	    };
	    var innerContainerTransparentStyle = {backgroundColor: '#fff', padding: 20};
	    return (
	      <View style={styles.container}>
	      <Modal
	          animationType='fade'
	          transparent={true}
	          visible={this.state.modalVisible}
	          onRequestClose={() => this.setModalVisible(false)}
	          >
	          <View style={[styles.container, modalBackgroundStyle]}>
	            <View style={innerContainerTransparentStyle}>
	              <Text>This is a modal</Text>
	              <Button title='close'
	                onPress={this.setModalVisible.bind(this, false)}/>
	            </View>
	          </View>
	        </Modal>
	        <Button
	          title="Press me"
	          onPress={this._handleButtonPress}
	        />
	      
	      </View>
	    );
	  }
	}
	
	const styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    alignItems: 'center',
	    justifyContent: 'center',
	    paddingTop: Constants.statusBarHeight,
	    backgroundColor: '#ecf0f1',
	  }
	});
	
	
	
	// Setimo Codigo exemplo de webview para carregar paginas web no app obs(se o site for responsivo fica uma uva)
	import React, { Component } from 'react';
	import { WebView } from 'react-native';
	
	class MyWeb extends Component {
	  render() {
	    return (
	      <WebView
	        source={{uri: 'https://github.com/facebook/react-native'}}
	        style={{marginTop: 20}}
	       />
	    );
	  }
	}
	
	
	
	//	Styles é definido no REACT attraves de um json object , é bem similar os nomes ao do CSS 
	import React, { Component } from 'react';
	import { View, Text, StyleSheet } from 'react-native';
	
	const styles = StyleSheet.create({
	    red: {
	        color: 'red'
	    },
	    greenUnderline: {
	        color: 'green',
	        textDecoration: 'underline'
	    },
	    big: {
	        fontSize: 30
	    }
	});
	
	class Example extends Component {
	    render() {
	        return (
	            <View>
	                <Text style={[styles.red, styles.big]}>Big red</Text>
	                <Text style={[styles.red, styles.greenUnderline]}>Green underline</Text>
	                <Text style={[styles.greenUnderline, styles.red]}>Red underline</Text>
	                <Text style={[styles.greenUnderline, styles.red, styles.big]}>Big red underline</Text>
	                <Text style={[styles.big, {color:'yellow'}]}>Big yellow</Text>
	            </View>
	        );
	    }
	}
	
	//	Style com condição
	<View style={[(this.props.isTrue) ? styles.bgcolorBlack : styles.bgColorWhite]}>
	
	//	Sintaxe (muitos comandos do CSS como "text-decoration" no REACT fica "textDecoration" por causa do CamelCase)
	<Component style={styleFromStyleSheet} />
	<Component style={styleObject} />
	<Component style={[style1,style2]} />
	
	
	
	//	Oitavo codigo Implementação REACT-Firebase substituir os valores para o deu APP
	import firebase from 'firebase';
	componentWillMount() {
	firebase.initializeApp({
	  apiKey: "yourAPIKey",
	  authDomain: "authDomainNAme",
	  databaseURL: "yourDomainBaseURL",
	  projectId: "yourProjectID",
	  storageBucket: "storageBUcketValue",
	  messagingSenderId: "senderIdValue"
	});
	    firebase.auth().signInWithEmailAndPassword(email, password)
	  .then(this.onLoginSuccess)
	  .catch(() => {
	    firebase.auth().createUserWithEmailAndPassword(email, password)
	      .then(this.onLoginSuccess)
	      .catch(this.onLoginFail)
	  })
	}
	
	
	
	// Exemplo usando o firebase para atualizar uma listview
	// dentro do react so é preciso fazer a instacia do firebase uma vez,
	// nesse codigo será criado 2 arq JS o primeira Posts.js e o segunda PostList.js
	
	// Codigo Posts.js 
	import PostsList from './PostsList';
	
	class Posts extends Component{
	    constructor(props) {
	        super(props);
	        this.state = {
	            posts: []
	        }
	    }
	    
	    componentWillMount() {
	        firebase.database().ref('Posts/').on('value', function(data) {
	            this.setState({ posts: data.val() });
	        });
	    }
	
	    render() {
	        return <PostsList posts={this.state.posts}/>
	    }
	}
	
	
	// Codigo PostList.js 
	class PostsList extends Component {
	    constructor(props) {
	        super(props);
	        this.state = {
	            dataSource: new ListView.DataSource({
	                rowHasChanged: (row1, row2) => row1 !== row2
	            }),
	        }
	    }
	
	    getDataSource(posts: Array<any>): ListView.DataSource {
	        if(!posts) return;
	        return this.state.dataSource.cloneWithRows(posts);
	    }
	
	    componentDidMount() {
	        this.setState({dataSource: this.getDataSource(this.props.posts)});
	    }
	
	    componentWillReceiveProps(props) {
	        this.setState({dataSource: this.getDataSource(props.posts)});
	    }
	
	    renderRow = (post) => {
	        return (
	            <View>
	                <Text>{post.title}</Text>
	                <Text>{post.content}</Text>
	            </View>
	        );
	    }
	
	    render() {
	        return(
	            <ListView
	                dataSource={this.state.dataSource}
	                renderRow={this.renderRow}
	                enableEmptySections={true}
	            />
	        );
	    }
	}
	
	
	
	//	Nono Codigo exemplo completo de state
	import React, { Component } from 'react';
	import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
	
	export default class MyParentComponent extends Component {
	  constructor(props) {
	    super(props);
	
	    this.state = {
	      myInteger: 0
	    }
	
	  }
	  getRandomInteger() {
	    const randomInt = Math.floor(Math.random()*100);
	
	    this.setState({
	      myInteger: randomInt
	    });
	
	  }
	  incrementInteger() {
	    
	    this.setState((previousState, currentProps) => {
	      return {
	        myInteger: previousState.myInteger+1
	      }
	    });
	
	  }
	  render() {
	
	    return <View style={styles.container}>
	      
	      <Text>Parent Component Integer: {this.state.myInteger}</Text>
	
	      <MyChildComponent myInteger={this.state.myInteger} />
	
	      <Button label="Get Random Integer" onPress={this.getRandomInteger.bind(this)} />
	      <Button label="Increment Integer" onPress={this.incrementInteger.bind(this)} />
	
	    </View>
	
	  }
	}
	
	export default class MyChildComponent extends Component {
	  constructor(props) {
	    super(props);
	  }
	  render() {
	    
	    // this will get updated when "MyParentComponent" state changes
	    return <View>
	      <Text>Child Component Integer: {this.props.myInteger}</Text>
	    </View>
	    
	  }
	}
	
	export default class Button extends Component {
	  constructor(props) {
	    super(props);
	  }
	  render() {
	
	    return <TouchableOpacity onPress={this.props.onPress}>
	        <View style={styles.button}>
	          <Text style={styles.buttonText}>{this.props.label}</Text>
	        </View>
	      </TouchableOpacity>
	    
	  }
	}
	
	const styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#F5FCFF',
	  },
	  button: {
	    backgroundColor: '#444',
	    padding: 10, 
	    marginTop: 10
	  },
	  buttonText: {
	    color: '#fff'
	  }
	});
	
	AppRegistry.registerComponent('MyApp', () => MyParentComponent);
	
	
	
	//	Passo a passo para criar a APK
	//	1º Criar uma key para sign 
	//	keytool -genkey -v -keystore my-app-key.keystore -alias my-app-alias -keyalg RSA -keysize 2048 -validity 10000
	//	2º Gerar o build gradle
	//	cd android && ./gradlew assembleRelease
	//	3º gerar o instalador (APK)
	//	react-native bundle --platform android --dev false --entry-file index.android.js \
		--bundle-output android/app/src/main/assets/index.android.bundle \
		--assets-dest android/app/src/main/res/	
	
	
	
	
	//	Exemplo completo de codigo com navegação
	'use strict';
	
	import React, {Component} from 'react';
	import ReactNative from 'react-native';
	
	const {
	  AppRegistry,
	  StyleSheet,
	  Text,
	  View,
	  Navigator,
	  Alert,
	  TouchableHighlight
	} = ReactNative;
	
	
	//This is the app container that contains the navigator stuff
	class AppContainer extends Component {
	
	    renderScene(route, navigator) {
	        switch(route.name) {
	            case "Home":
	      //You must pass route as a prop for this trick to work properly
	            return <Home route={route} navigator={navigator} {...route.passProps}  />
	            default:
	            return (
	        <Text route={route}
	        style={styles.container}>
	            Your route name is probably incorrect {JSON.stringify(route)}
	            </Text>
	      );
	        }
	    }
	  
	  render() {
	    return (
	      <Navigator
	        navigationBar={
	          <Navigator.NavigationBar
	            style={ styles.navbar }
	            routeMapper={ NavigationBarRouteMapper } />
	        }
	  
	        initialRoute={{ name: 'Home' }}
	        renderScene={ this.renderScene }
	        
	      />
	    );
	  }
	}
	
	
	//Nothing fancy here, except for checking for injected buttons.
	//Notice how we are checking if there are injected buttons inside the route object.
	//Also, we are showing a "Back" button when the page is not at index-0 (e.g. not home)
	var NavigationBarRouteMapper = {
	  LeftButton(route, navigator, index, navState) {
	    if(route.leftNavButton) {
	      return (
	        <TouchableHighlight
	        style={styles.leftNavButton}
	        underlayColor="transparent"
	        onPress={route.leftNavButton.onPress}>
	          <Text style={styles.navbarButtonText}>{route.leftNavButton.text}</Text>
	        </TouchableHighlight>
	      );
	    }
	    else if(route.enableBackButton) {
	      return (
	        <TouchableHighlight
	        style={styles.leftNavButton}
	        underlayColor="transparent"
	        onPress={() => navigator.pop() }>
	          <Text style={styles.navbarButtonText}>Back</Text>
	        </TouchableHighlight>
	      );
	    }
	  },
	  RightButton(route, navigator, index, navState) {
	    if(route.rightNavButton) {
	      return (
	        <TouchableHighlight
	        style={styles.rightNavButton}
	        underlayColor="transparent"
	        onPress={route.rightNavButton.onPress}>
	          <Text style={styles.navbarButtonText}>{route.rightNavButton.text}</Text>
	        </TouchableHighlight>
	      );
	    }
	  },
	  Title(route, navigator, index, navState) {
	    //You can inject the title aswell.  If you don't we'll use the route name.
	    return (<Text style={styles.navbarTitle}>{route.navbarTitle || route.name}</Text>);
	  }
	};
	            
	//This is considered a sub-page that navigator is showing
	class Home extends Component {
	  
	  //This trick depends on that componentWillMount fires before the navbar is created
	  componentWillMount() {
	        this.props.route.navbarTitle = "Home";
	    
	        this.props.route.rightNavButton = {
	            text: "Button",
	            onPress: this._doSomething.bind(this)
	        };
	    }
	  
	  //This method will be invoked by pressing the injected button.
	  _doSomething() {
	      Alert.alert(
	      'Awesome, eh?',
	      null,
	      [
	        {text: 'Indeed'},
	      ]
	    )
	  }
	  
	  render() {
	    return (
	      <View style={styles.container}>
	            <Text>You are home</Text>
	        </View>
	    );
	  }
	}
	
	var styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#F5FCFF',
	    marginTop: 66
	  },
	  navbar: {
	    backgroundColor: '#ffffff',
	  },
	  navbarTitle: {
	    marginVertical: 10,
	    fontSize: 17
	  },
	  leftNavButton: {
	    marginVertical: 10,
	    paddingLeft: 8,
	 },
	  rightNavButton: {
	    marginVertical: 10,
	    paddingRight: 8,
	  },
	  navbarButtonText: {
	    fontSize: 17,
	    color: "#007AFF"
	  }
	});
	
	AppRegistry.registerComponent('AppContainer', () => AppContainer);
	
	
	
	//	Exemplo de PushNotification codigo completo
	//	instalar	npm install --save react-native-push-notification
	// 				react-native link
	'use strict';
	
	import React, { Component } from 'react';
	import {
	    StyleSheet,
	    Text,
	    View,
	    Navigator,
	    TouchableOpacity,
	    AsyncStorage,
	    BackAndroid,
	    Platform,
	} from 'react-native';
	import PushNotification from 'react-native-push-notification';
	
	let initialRoute = { id: 'loginview' }
	
	export default class MainClass extends Component
	{
	    constructor(props)
	    {
	        super(props);
	
	        this.handleNotification = this.handleNotification.bind(this);
	    }
	
	    handleNotification(notification)
	    {
	        console.log('handleNotification');
	        var notificationId = ''
	        //your logic to get relevant information from the notification
	        
	    //here you navigate to a scene in your app based on the notification info
	        this.navigator.push({ id: Constants.ITEM_VIEW_ID, item: item });
	    }
	
	    componentDidMount()
	    {
	        var that = this;
	
	        PushNotification.configure({
	
	            // (optional) Called when Token is generated (iOS and Android)
	            onRegister: function(token) {
	                console.log( 'TOKEN:', token );
	            },
	
	            // (required) Called when a remote or local notification is opened or received
	            onNotification(notification) {
	                console.log('onNotification')
	                console.log( notification );
	
	                that.handleNotification(notification);
	            },
	
	            // ANDROID ONLY: (optional) GCM Sender ID.
	            senderID: "Vizido",
	
	            // IOS ONLY (optional): default: all - Permissions to register.
	            permissions: {
	                alert: true,
	                badge: true,
	                sound: true
	            },
	
	            // Should the initial notification be popped automatically
	            // default: true
	            popInitialNotification: true,
	
	            
	              // (optional) default: true
	              // - Specified if permissions (ios) and token (android and ios) will requested or not,
	              // - if not, you must call PushNotificationsHandler.requestPermissions() later
	              
	            requestPermissions: true,
	        });
	    }
	
	    render()
	    {
	
	        return (
	            <Navigator
	                ref={(nav) => this.navigator = nav }
	                initialRoute={initialRoute}
	                renderScene={this.renderScene.bind(this)}
	                configureScene={(route) =>
	                    {
	                        if (route.sceneConfig)
	                        {
	                            return route.sceneConfig;
	                        }
	                        return Navigator.SceneConfigs.FadeAndroid;
	                    }
	                }
	            />
	        );
	    }
	
	    renderScene(route, navigator)
	    {
	
	        switch (route.id)
	        {
	            // do your routing here
	            case 'mainview':
	                return ( <MainView navigator={navigator} /> );
	
	            default:
	                return ( <MainView navigator={navigator} /> );
	        }
	    }
	}
	
	
	
	//	Criar um projeto PushNotification
	import React, { Component } from 'react';
	
	import {
	  AppRegistry,
	  StyleSheet,
	  Text,
	  View,
	  Button
	} from 'react-native';
	
	import PushNotification from 'react-native-push-notification';
	
	export default class App extends Component {
	
	    constructor(props){
	        super(props);
	        
	        this.NewNotification = this.NewNotification.bind(this);
	      }
	
	    componentDidMount(){
	
	        PushNotification.configure({
	
	            // (required) Called when a remote or local notification is opened or received
	            onNotification: function(notification) {
	                console.log( 'NOTIFICATION:', notification );
	            },
	
	            // Should the initial notification be popped automatically
	            // default: true
	            popInitialNotification: true,
	
	
	              // (optional) default: true
	              // - Specified if permissions (ios) and token (android and ios) will requested or not,
	              // - if not, you must call PushNotificationsHandler.requestPermissions() later
	              
	              
	            requestPermissions: true,
	        });
	
	    }
	
	      NewNotification(){
	
	          let date = new Date(Date.now() + (this.state.seconds * 1000));
	
	          //Fix for IOS
	        if(Platform.OS == "ios"){
	            date = date.toISOString();
	        }
	
	        PushNotification.localNotificationSchedule({
	            message: "My Notification Message", // (required)
	            date: date,// (optional) for setting delay
	            largeIcon:""// set this blank for removing large icon
	            //smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher" 
	        });
	    }
	
	      render() {
	    
	        return (
	            <View style={styles.container}>
	                <Text style={styles.welcome}>
	                  Push Notification
	                </Text>
	                <View style={styles.Button} >
	                <Button
	                  onPress={()=>{this.NewNotification()}}
	                  title="Show Notification"
	                  style={styles.Button}
	                  color="#841584"
	                  accessibilityLabel="Show Notification"
	                />
	                </View>
	            </View>
	        );
	      }
	}
	
	const styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#F5FCFF',
	  },
	  welcome: {
	    fontSize: 20,
	    textAlign: 'center',
	    margin: 10,
	  },
	  Button:{
	    margin: 10,
	  }
	});
	
	AppRegistry.registerComponent('PushNotification', () => App);
	
	
	
	//	Boas praticas !!
		//	Ruim !
		<TextInput
	      onChangeValue={  value => this.handleValueChanging(value) }
	    />
    	
    	//	Bom !
    	<TextInput
          onChangeValue={  this.handleValueChanging }
        />
         
         
        //	Ruim !
		<button onClick={ this.handleClick.bind(this) }></button>
    	
    	//	Bom !
    	<button onClick={ this.handleClick }></button>
   	
		// Procurar a respeito da DOCUMENTATION DO ESLint !!
		// Procurar a respeito da DOCUMENTATION DO ESLint !!
		// Procurar a respeito da DOCUMENTATION DO ESLint !!
		// Procurar a respeito da DOCUMENTATION DO ESLint !!
		// Procurar a respeito da DOCUMENTATION DO ESLint !!
		
		
		
		
		
	
*/

