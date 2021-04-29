<!--
 * Copyright (C) 2020 INOV - Instituto de Engenharia de Sistemas e Computadores Inovação
 * All rights reserved.
 -->

<template>
	<GoogleMap id="map" ref="mapRef" :api-key="map.key" :language="map.language" :region="map.region" :center="map.center" :zoom="map.zoom" :min-zoom="map.minZoom" :max-zoom="map.maxZoom" :street-view-control="map.streetViewControl" @zoom_changed="zoomChanged" @center_changed="centerChanged" />
</template>

<script>
import { ref } from 'vue';
import { GoogleMap } from 'vue3-google-map';

export default {
	components: { GoogleMap },

	setup() {
		const map = {
			key: '<Place_Google_Key_Here>',
			language: 'pt-PT',
			region: 'PT',
			center: {
				lat: 38.725282,
				lng: -9.149996
			},
			zoom: 12,
			minZoom: 2,
			maxZoom: null,
			streetViewControl: false
		};

		const mapRef = ref(null);

		function zoomChanged() {
			const gmap = mapRef.value.map;
			console.log('Map: Zoom', gmap.getZoom());
		}

		function centerChanged() {
			const gmap = mapRef.value.map;
			const center = gmap.getCenter();
			console.log('Map: Center: (', center.lat(), ',', center.lng(), ')');
		}

		return { map, mapRef, zoomChanged, centerChanged };
	}
};
</script>

<style>
html,
body,
#app,
#map {
	height: 100%;
}

body {
	margin: 0;
}
</style>
