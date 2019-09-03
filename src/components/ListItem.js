import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {delPlace} from '../../store/actions/places';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDeletePress = key => {
    let index = this.props.places.indexOf(
      this.props.places.find(x => x.key === key),
    );
    this.props.delete(index);
  };

  renderItem = (item, index) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 4,
        }}>
        <Text style={{fontSize: 16}}> {item.value} </Text>
        <TouchableOpacity onPress={() => this.handleDeletePress(item.key)}>
          <Text style={{fontSize: 16}}>Del</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        {this.props.places &&
          this.props.places.map((item, index) => this.renderItem(item, index))}
      </View>
    );
  }
}

const mapStateToProps = data => {
  return {
    places: data.places.places,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    delete: key => {
      dispatch(delPlace(key));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListItem);
