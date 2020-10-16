import React from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import { Feather } from '@expo/vector-icons';

import mapMarker from '../../images/map-marker.png';
import { useNavigation } from '@react-navigation/native';

export default function OrphanagesMap() {
	const navigation = useNavigation();

	function handleNavigateToOrphanageDetails() {
		navigation.navigate('OrphanageDetails');
	}

	return (
		<View style={styles.container}>
			<MapView
				provider={PROVIDER_GOOGLE}
				style={styles.map}
				initialRegion={{
					latitude: -3.8319167,
					longitude: -38.5203248,
					latitudeDelta: 0.008,
					longitudeDelta: 0.008
				}}
			>
				<Marker
					icon={mapMarker}
					calloutAnchor={{
						x: 2.7,
						y: 0.8
					}}
					coordinate={{
						latitude: -3.8319167,
						longitude: -38.5203248
					}}
				>
					<Callout tooltip onPress={handleNavigateToOrphanageDetails}>
						<View style={styles.calloutContainer}>
							<Text style={styles.calloutText}>Lar das meninas</Text>
						</View>
					</Callout>
				</Marker>
			</MapView>

			<View style={styles.footer}>
				<Text style={styles.footerText}>
					2 orfanatos encontrados
          </Text>

				<TouchableOpacity style={styles.createOrphanageButton} onPress={() => { }}>
					<Feather name="plus" size={20} color="#fff" />
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },

  calloutContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    height: 46,
    justifyContent: 'center',
    paddingHorizontal: 16,
    width: 160
  },

  calloutText: {
    color: '#0089a5',
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
  },

  footer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    bottom: 32,
    elevation: 3,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'space-between',
    left: 24,
    paddingLeft: 24,
    position: 'absolute',
    right: 24,
  },

  footerText: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_700Bold'
  },

  createOrphanageButton: {
    alignItems: 'center',
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    height: 56,
    justifyContent: 'center',
    width: 56
  }
});
