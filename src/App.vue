<!--
 * Copyright (C) 2020-2022 INOV - Instituto de Engenharia de Sistemas e Computadores Inovação
 * All rights reserved.
 -->

<template>
	<GoogleMap
	  id="map"
	  ref="mapRef"
	  :api-key="map.key"
	  :libraries="map.libraries"
	  :language="map.language"
	  :region="map.region"
	  :center="map.center"
	  :zoom="map.zoom"
	  :min-zoom="map.minZoom"
	  :max-zoom="map.maxZoom"
	  :street-view-control="map.streetViewControl"
	  @zoom_changed="zoomChanged"
	  @center_changed="centerChanged"
	>
		<HeatmapLayer :options="{ data: heatmapData }" />
	</GoogleMap>
</template>

<script setup>
import { ref, watch } from 'vue';
import { GoogleMap, HeatmapLayer } from 'vue3-google-map';

const map = {
	key: '', // Place a Google API Key here
	libraries: ['visualization'],
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

const heatmapData = [{
	lat: 38.725282,
	lng: -9.149996
}, {
	lat: 38.726282,
	lng: -9.148996
}];

let gmap = null;

const mapRef = ref(null);

console.log('[GMap] Setup');

watch(() => mapRef.value?.ready, ready => {
	if (ready) {
		gmap = mapRef.value.map;
		console.log('[GMap] Version:', mapRef.value.api.version);
	}
});

function zoomChanged() {
	console.log('[GMap] Zoom:', gmap.getZoom());
}

function centerChanged() {
	const center = gmap.getCenter();
	console.log('[GMap] Center: (', center.lat(), ',', center.lng(), ')');
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
