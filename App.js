import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {addPlace, clearAll} from './store/actions/places';
import ListItem from './src/components/ListItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeName: '',
    };
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') return;
    else this.props.add(this.state.placeName);
    this.setState({
      placeName: '',
    });
    this.textInput.clear();
  };

  textInputHandler = text => {
    this.setState({placeName: text});
  };

  render() {
    console.log('asiudasd', this.props.places);
    return (
      <View style={styles.mainContainer}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1}}>
          <View style={{flex: 1}}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Search Places"
                style={{fontSize: 18, flex: 1}}
                onChangeText={this.textInputHandler}
                ref={input => {
                  this.textInput = input;
                }}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TouchableOpacity
                style={{alignSelf: 'center'}}
                onPress={() => this.placeSubmitHandler()}>
                <Text style={{fontSize: 18}}>Add</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <ListItem />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => this.props.clear()}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 18}}>Clear All</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 12,
  },
  inputContainer: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 0.3,
    borderRadius: 6,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: name => {
      dispatch(addPlace(name));
    },
    clear: () => dispatch(clearAll()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
