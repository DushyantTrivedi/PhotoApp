import React, { useState, useEffect }from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getPhotoDetails } from '../../actions/photos';

function PhotoComponent({ photoId, getPhotoDetails, navigation }) {

  const [photoDetails, setPhotoDetails] = useState({});

  useEffect(() => {
    getPhotoDetails(photoId);
  }, []);

  useEffect(() => {
    if (photoDetails) {
      setPhotoDetails(photoDetails);
    }
  }, [photoDetails]);

  const renderPhoto = () => {
    if (photoDetails && photoDetails.photo && photoDetails.photo.urls) {
      return (
        <View style={styles.photoContainer}>
          <Image source={{uri: photoDetails.photo.urls.url[0]._content}} style={{width: 400, height: 400}} />
        </View>
      );
    } else return <View />;
  };

  const renderInfo = () => {
    if (photoDetails) {
      return (
        <View style={styles.infoContainer}>
          <Text>{photoDetails.photo.title._content}</Text>
          <Text>{photoDetails.photo.owner.username}</Text>
        </View>
      );
    } else return <View />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Back</Text>
        </TouchableOpacity>
      </View>
      {renderPhoto()}
      {renderInfo()}
    </View>
  );
}

const mapDispatchToProps = dispatch => ({
  getPhotoDetails: params => {
    dispatch(getPhotoDetails(params));
  },
});

const mapStateToProps = state => ({
  photoDetails: state.photoDetails,
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoComponent)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonContainer: {
    alignSelf: 'flex-start',
    marginVertical: 20
  },
  photoContainer: {
    marginVertical: 30,
    marginHorizontal: 20
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  
});
