<!--
 * Copyright (C) 2020-2022 INOV - Instituto de Engenharia de Sistemas e Computadores Inovação
 * All rights reserved.
 -->

<template>
	<GoogleMap
	  id="map"
	  ref="mapRef"
	  :api-key="map.key"
	  :language="map.language"
	  :region="map.region"
	  :center="map.center"
	  :zoom="map.zoom"
	  :min-zoom="map.minZoom"
	  :max-zoom="map.maxZoom"
	  :street-view-control="map.streetViewControl"
	  @zoom_changed="zoomChanged"
	  @center_changed="centerChanged"
	/>
</template>

<script setup>
import { ref, watch } from 'vue';
import { GoogleMap } from 'vue3-google-map';

const map = {
	key: '', // Place a Google API Key here
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

let gmap = null;

watch(() => mapRef.value?.ready, ready => {
	if (ready) {
		gmap = mapRef.value.map;
		console.log('[GMap] Version:', mapRef.value.api.version);
	}
});

function zoomChanged() {
	console.log('Map: Zoom', gmap.getZoom());
}

function centerChanged() {
	const center = gmap.getCenter();
	console.log('Map: Center: (', center.lat(), ',', center.lng(), ')');
}
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
