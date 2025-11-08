<!--
 * Copyright (C) 2025 INOV - Instituto de Engenharia de Sistemas e Computadores Inovação
 * All rights reserved.
 -->

<script setup>
import { useTemplateRef, ref, watch } from 'vue';
import { GoogleMap, CustomControl } from 'vue3-google-map';
import { useGoogleMapsLoader } from 'vue-google-maps-loader';

console.log('[GMap] Setup');

const center = {
	lat: 39.8628,
	lng: -4.0273,
};
const zoom = 7;
const minZoom = 2;
const streetViewControl = false;
const fullscreenControl = false;

const languages = [
	{ code: 'pt-PT', name: 'Português (Portuguese)' },
	{ code: 'en-GB', name: 'English (English)' },
	{ code: 'es', name: 'Español (Spanish)' },
	{ code: 'fr', name: 'Français (French)' },
	{ code: 'de', name: 'Deutsch (German)' },
	{ code: 'zh', name: '普通话 (Mandarin Chinese)' },
	{ code: 'ja', name: '日本語 (Japanese)' },
];

const locale = ref(languages[0].code);

const { isAvailable, apiPromise } = useGoogleMapsLoader(
	{
		key: import.meta.env.VITE_GOOGLE_API_KEY,
		v: 'beta',
		region: 'PT',
		libraries: ['maps'],
	},
	locale,
);

const mapRef = useTemplateRef('map-ref');

watch(
	() => mapRef.value?.ready,
	(ready) => {
		if (ready) {
			console.log('[GMap] Version:', mapRef.value.api.version);
			console.log('[GMap] API:', mapRef.value.api);
		}
	},
);

watch(
	isAvailable,
	(available) => {
		console.log('[GMap] Available:', available);
	},
	{ immediate: true },
);
</script>

<template>
	<GoogleMap
		v-if="isAvailable"
		ref="map-ref"
		class="full-height"
		:api-promise
		:center
		:zoom
		:min-zoom
		:street-view-control
		:fullscreen-control
	>
		<CustomControl position="TOP_RIGHT">
			<div class="language-selector">
				<select
					v-model="locale"
					class="language-dropdown"
				>
					<option
						v-for="lang in languages"
						:key="lang.code"
						:value="lang.code"
					>
						{{ lang.name }}
					</option>
				</select>
			</div>
		</CustomControl>
	</GoogleMap>
</template>

<style>
html,
body,
#app {
	height: 100%;
}

body {
	margin: 0;
}
</style>

<style scoped>
.full-height {
	height: 100%;
}

.language-selector {
	background: white;
	margin: 10px;
	padding: 4px;
	border-radius: 4px;
}

.language-dropdown {
	background: linen;
	border: 1px solid lightgrey;
	padding: 6px 10px;
	border-radius: 4px;
	font-size: 16px;
}
</style>
