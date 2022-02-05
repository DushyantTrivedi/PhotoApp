import React, { useState, useEffect }from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { searchPhoto } from '../../actions/photos';

function HomeComponent({ photos, searchPhoto, navigation }) {

  const [photosList, setPhotoList] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (photos) {
      setPhotoList(photo);
    }
  }, [photos]);

  const navigateToPhotoDetails = (item) => {
    navigation.navigate('Photo', { photoId: item.id });
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={(item) => navigateToPhotoDetails(item)}>
        <View style={styles.photoTileContainer}>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          onChangeText={newText => setSearchText(newText)}
          onSubmitEditing={() => searchPhoto(searchText)}
          value={searchText}
        />
      </View>
      <View style={styles.photosListContainer}>
        <FlatList
          data={photosList}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const mapDispatchToProps = dispatch => ({
  searchPhoto: params => {
    dispatch(searchPhoto(params));
  },
});

const mapStateToProps = state => ({
  photos: state.photos,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputContainer: {
    height: 60,
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 30,
  },
  photosListContainer: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  photoTileContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
});
