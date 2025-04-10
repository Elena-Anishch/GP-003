/*--------------------------------------------------------------------
GGR472 Group Project - CATF - GROUP 8 
--------------------------------------------------------------------*/

/*--------------------------------------------------------------------
APPLICATION DATA
--------------------------------------------------------------------*/
// "app" object containing core configuration and data for the applicaton
// "ID" - unique identifier for an index 
// "geojsonKey" - key for the geojson data 
// "name" - name of the index
// "subindices" - subsindices related to an index 

/*🔥 This map‘s indices data are from the Excel spreadsheet
Each Entry connects:
- id: Code from the Excel, the acronym of the Dimensions (e.g., SP(System Performance), EDG(Economic Development and Growth), TR (transition Readiness) 
-  geojsonKey: refer to the tileset of each dimension*/
let app = {
	indices: [
		{
			id: 'cihccs',
			geojsonKey: 'Africa_c13',
			name: 'Composite Index Hydrogen & CCS'
		},
		{
			id: 'sp',
			geojsonKey: 'Africa_c_7',
			name: 'System Performance Index',
			subindices: [
				{
					id: 'edg',
					geojsonKey: 'Africa_c15',
					name: 'Economic Development and Growth'
				},
				{
					id: 'es',
					geojsonKey: 'Africa_c16',
					name: 'Environmental Sustainability'
				},
				{
					id: 'eas',
					geojsonKey: 'Africa_c17',
					name: 'Energy Acces and Security'
				}
			]
		},
		{
			id: 'tr',
			geojsonKey: 'Africa_c_8',
			name: 'Transition Readiness Index',
			subindices: [
				{
					id: 'rpc',
					geojsonKey: 'Africa_c19',
					name: 'Regulation and Political Commitment'
				},
				{
					id: 'ci',
					geojsonKey: 'Africa_c20',
					name: 'Capital and Investment'
				},
				{
					id: 'ig',
					geojsonKey: 'Africa_c21',
					name: 'Institutions and Governance'
				},
				{
					id: 'ibe',
					geojsonKey: 'Africa_c22',
					name: 'Infrastructure and Business Envrionment'
				},
				{
					id: 'hc',
					geojsonKey: 'Africa_c23',
					name: 'Human Capital'
				},
				{
					id: 'pss',
					geojsonKey: 'Africa_c24',
					name: 'Power System Structure'
				}
			]
		},
		{
			id: 'tshccs',
			geojsonKey: 'Africa_c14',
			name: 'Tech Specific Hydrogen & CCS',
			subindices: [
				{
					id: 'tsccs',
					geojsonKey: 'Africa_c10',
					name: 'Tech Specific CCS'
				},
				{
					id: 'tsh',
					geojsonKey: 'Africa_c_9',
					name: 'Tech Specific Hydrogen'
				},
				{
					id: 'bbpt',
					geojsonKey: 'Africa_c33',
					name: 'Tech Specific - Biomass-based Power'
				},
				{
					id: 'hpt',
					geojsonKey: 'Africa_c34',
					name: 'Tech Specific - Hydropower'
				},
				{
					id: 'npt',
					geojsonKey: 'Africa_c35',
					name: 'Tech Specific - Nuclear Power'
				},
				{
					id: 'gpt',
					geojsonKey: 'Africa_c36',
					name: 'Tech Specific - Geothermal Power'
				},
				{
					id: 'ngtp',
					geojsonKey: 'Africa_c37',
					name: 'Tech Specific - Natural Gas Turbine Power'
				},
				{
					id: 'wtt',
					geojsonKey: 'Africa_c38',
					name: 'Tech Specific - Wind Turbines'
				},
				{
					id: 'st',
					geojsonKey: 'Africa_c39',
					name: 'Tech Specific - Solar'
				},
			]
		},
		{
			id: 'tsccs',
			geojsonKey: 'Africa_c10',
			name: 'Tech Specific CCS',
			subindices: [
				{
					id: 'tshccs',
					geojsonKey: 'Africa_c14',
					name: 'Tech Specific Hydrogen & CCS'
				},
				{
					id: 'tsh',
					geojsonKey: 'Africa_c_9',
					name: 'Tech Specific Hydrogen'
				},
				{
					id: 'bbpt',
					geojsonKey: 'Africa_c33',
					name: 'Tech Specific - Biomass-based Power'
				},
				{
					id: 'hpt',
					geojsonKey: 'Africa_c34',
					name: 'Tech Specific - Hydropower'
				},
				{
					id: 'npt',
					geojsonKey: 'Africa_c35',
					name: 'Tech Specific - Nuclear Power'
				},
				{
					id: 'gpt',
					geojsonKey: 'Africa_c36',
					name: 'Tech Specific - Geothermal Power'
				},
				{
					id: 'ngtp',
					geojsonKey: 'Africa_c37',
					name: 'Tech Specific - Natural Gas Turbine Power'
				},
				{
					id: 'wtt',
					geojsonKey: 'Africa_c38',
					name: 'Tech Specific - Wind Turbines'
				},
				{
					id: 'st',
					geojsonKey: 'Africa_c39',
					name: 'Tech Specific - Solar'
				},
			]
		},
		{
			id: 'tsh',
			geojsonKey: 'Africa_c_9',
			name: 'Tech Specific Hydrogen',
			subindices: [
				{
					id: 'tshccs',
					geojsonKey: 'Africa_c14',
					name: 'Tech Specific Hydrogen & CCS'
				},
				{
					id: 'tsccs',
					geojsonKey: 'Africa_c10',
					name: 'Tech Specific CCS'
				},
				{
					id: 'bbpt',
					geojsonKey: 'Africa_c33',
					name: 'Tech Specific - Biomass-based Power'
				},
				{
					id: 'hpt',
					geojsonKey: 'Africa_c34',
					name: 'Tech Specific - Hydropower'
				},
				{
					id: 'npt',
					geojsonKey: 'Africa_c35',
					name: 'Tech Specific - Nuclear Power'
				},
				{
					id: 'gpt',
					geojsonKey: 'Africa_c36',
					name: 'Tech Specific - Geothermal Power'
				},
				{
					id: 'ngtp',
					geojsonKey: 'Africa_c37',
					name: 'Tech Specific - Natural Gas Turbine Power'
				},
				{
					id: 'wtt',
					geojsonKey: 'Africa_c38',
					name: 'Tech Specific - Wind Turbines'
				},
				{
					id: 'st',
					geojsonKey: 'Africa_c39',
					name: 'Tech Specific - Solar'
				},
			]
		},
		{
			id: 'cih',
			geojsonKey: 'Africa_c11',
			name: 'Composite Index Hydrogen'
		},
		{
			id: 'ciccs',
			geojsonKey: 'Africa_c12',
			name: 'Composite Index CCS'
		}
	],

	// Countries data for the application

	/*🔥 Could add more African Countries here*/
	countries: [
		{
			name: "Kenya",
			geojson: null,
			is_selected: false
		},
		{
			name: "Rwanda",
			geojson: null,
			is_selected: false
		},
		{
			name: "Ethiopia",
			geojson: null,
			is_selected: false
		},
		{
			name: "Tanzania",
			geojson: null,
			is_selected: false
		},
		{
			name: "Ghana",
			geojson: null,
			is_selected: false
		},
		{
			name: "Nigeria",
			geojson: null,
			is_selected: false
		},
		{
			name: "Senegal",
			geojson: null,
			is_selected: false
		}
	],

	// Flag to track if country geojson is loaded   - comparison table will populate once this turns TRUE
	countryGeojsonIsLoaded: false,


	// Color legend for the application 


	/*🔥 Legend for 5 data breaks */
	colorLegend: {
		labels: ['0-24 Poor ', '25-49 Low', '50-74 Moderate', '75-89 Good', '> 90 Excellent'],
		colors: ['#bd0026', '#9B4D00', '#FFA500', '#FFFF00', '#32CD32'],
		levels: [0, 25, 50, 75, 90]
	},

	/*🔥 Legend for 3 data breaks */
	//colorLegend: {
	//   labels: ['Low', 'Medium', 'High'],
	//    colors: ['#9B4D00', '#FFA500', '#32CD32'], // Corresponding colors for low, medium, and high
	//    levels: [0, 50, 90] // Define the threshold levels for low, medium, and high
	//},

	// Currently selected index id 

	selectedIndexId: null
}




/*--------------------------------------------------------------------
COLOR LEGEND
--------------------------------------------------------------------*/

// Select the "legend" div element to display the color legend 

const legend = document.getElementById('legend');

// Loop  through the color legend labels and colors and display them 
app.colorLegend.labels.forEach((label, i) => {
	const colour = app.colorLegend.colors[i];

	const item = document.createElement('div'); // create a div for each legend item 
	const key = document.createElement('span'); // create a span for the color key

	key.className = 'legend-key';
	key.style.backgroundColor = colour; // Set backgroun color based on the color legend

	const value = document.createElement('span'); // create a span for the label 
	value.innerHTML = `${label}`;

	item.appendChild(key);
	item.appendChild(value);

	legend.appendChild(item); // append the legend item to the legend
});

// Change display of legend based on check box clicked 

let legendcheck = document.getElementById('legendcheck');

legendcheck.addEventListener('click', () => {
	if (legendcheck.checked) {
		legendcheck.checked = true;
		legend.style.display = 'block'; // Show the legend when checked 
	}
	else {
		legend.style.display = "none";
		legendcheck.checked = false;  // Hide the legend when unchecked 
	}
});


// Function to get the corresponding color and label for a given value 

function getColorLegendInfo(value) {
	for (let i = app.colorLegend.levels.length - 1; i >= 0; i--) {
		if (value >= app.colorLegend.levels[i]) {
			return {
				color: app.colorLegend.colors[i],
				label: app.colorLegend.labels[i]
			};
		}
	}
	return { color: '#ccc', label: 'No Data' }; // Default if value is missing , in case there is a mistake in data, coding error, in legend levels and arrays 
}

/*--------------------------------------------------------------------
MAPBOX MAP
--------------------------------------------------------------------*/
// Set the Mapbox access token for Mapbox API
mapboxgl.accessToken = 'pk.eyJ1IjoiZWxlbmEtYW5pc2hjaCIsImEiOiJjbTVvN2podncwanJ5Mm1wbnNuczl6c214In0.2ltrEF0cJrURbPWpaKr9bg'; //***ADD YOUR ACCESS TOKEN HERE***

const map = new mapboxgl.Map({
	container: 'map', // container in which the map will be rendered 
	style: 'mapbox://styles/mapbox/standard', // Map style

});

// Navigation and fullscreen controls to the map
map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.FullscreenControl());


// Initialize geocoder for searching locations
const geocoder = new MapboxGeocoder({
	accessToken: mapboxgl.accessToken,
	mapboxgl: mapboxgl,
	countries: "dz,ao,ben,bw,bf,bi,cm,cv,cf,td,km,cd,mg,ml,mr,ma,mu,na,ne,ng,sc,sl,so,za,ss,sd,tn,ug,zw,ke,lr,ly,mz,sn,sz,tz,tg,zm,ci,gh,et,rw,gn,gw,ls,zm,mw"
});

// Add geocoder to the map's DOM 
document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

// Function to add layers to the map using geojson data 

function mapAddLayer(layerId, geojsonProperty) {
	// build the 'fill-color' parameter: property value query and fill colors
	// according to the color legend
	let colorLevelparam = [
		'step', ['get', geojsonProperty], // get the property value for the geojson feature
	];

	// Add each color level and its corresponding color from the color legend
	for (let i = 0; i < app.colorLegend.colors.length; i++) {
		// all arrays in app.colorLegend have the same length, /// if 4 colors 4 labels 
		// so can use same i to access them all
		if (app.colorLegend.levels[i] != 0) // skip '0' level
			colorLevelparam.push(app.colorLegend.levels[i]);

		colorLevelparam.push(app.colorLegend.colors[i]);
	}


	// Adding a new layer to the map 

	map.addLayer({
		'id': layerId,
		'type': 'fill',
		'source': 'africa-geojson', // source data for the layer
		'paint': {
			'fill-color': colorLevelparam,
			'fill-opacity': 0.5,
			'fill-outline-color': 'white'
		},
		'source-layer': 'AfricaProjectFileZip-04v9i9', //specifying the source layer 
		'layout': {
			'visibility': 'none'  // Set this layer to be hidden initially
		}
	});
}

// Function to zoom the map to a given level and coordinates  

function mapZoom(zoom, coords) {
	if (zoom == undefined)
		zoom = 2.8; // default zoom

	if (coords == undefined)
		coords = [20, 6.8]; // default coordinates

	map.flyTo({
		center: coords,
		zoom: zoom,
		essential: true
	});
}

//Add data source and draw initial visiualization of layer
map.on('load', () => {
	map.addSource('africa-geojson', {
		'type': 'vector',
		'url': 'mapbox://elena-anishch.99t49rnp'
	});




	// create a map layer for each index
	app.indices.forEach(index => mapAddLayer(index.id, index.geojsonKey));

	// reset zoom button click handler
	document.getElementById('returnbutton').addEventListener('click', () => {
		mapZoom();
	});

	// select and display the first index layer by default -this is where the selecte index is displayed on load ( first one)
	document.getElementById('layercheck_' + app.indices[0].id).click();  // 0 indicates the first layer, you can select any number 


	// select the first index
	//document.getElementById('layercheck_' + app.indices[0].id).click();
});




/*--------------------------------------------------------------------
!!! POP UP !!! //
--------------------------------------------------------------------*/

// Add click events to each map layer that show a popup with details 

app.indices.forEach(function (index) {
	map.on('click', index.id, (e) => {
		console.log(index.id + ' layer clicked')

		// If the layer is not visible, do nothing
		if (map.getLayoutProperty(index.id, 'visibility') === 'none') {
			return;
		}

		// zoom to the clicked area
		mapZoom(4, e.lngLat);

		// build and show the popup with information from the clicked feature 
		const feature = e.features[0];

		// check if the required properties exist in the feautre 
		if (feature.properties && feature.properties[index.geojsonKey] && feature.properties.NAME) {
			// extract the value of the main property using geojsonkey specific to the index
			const val = feature.properties[index.geojsonKey];
			// extract the name of the country from the feature's properties
			const countryName = feature.properties.NAME;
			//get the color and label information for the value based on the legend
			const { color, label } = getColorLegendInfo(val);
			// create the inital content for the pop (HTML structure)
			let popupContent = `
            <h3>${countryName}</h3> 
            <h4>${index.name}: <strong>${val}</strong></h4>
            <div class="mb-3" style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 30px; opacity: 0.5; height: 12px; border: 1px solid #999; background-color: ${color}; border-radius: 10px"></div>
                <span>${label}</span>
            </div>
            <ol>`;  // start an ordered list for subindices, if they exist 

			// Check if the current index has any subindices available
			// This checks whether the index object has a 'subindices' property to indicate additional data

			if ('subindices' in index) {
				// Loop through each subindex within the current index to add them to the popup content
				for (let i = 0; i < index.subindices.length; i++) {
					// Access the current subindex object in the subindices array
					let si = index.subindices[i];
					// Get the value of the subindex from the feature's properties using the geojsonKey of the subindex
					// This looks for a corresponding key in the properties of the feature
					let val = feature.properties[si.geojsonKey];
					// If the subindex value is undefined or empty (""), display "--" to represent missing or unavailable data
					if (val == undefined || val == "")
						val = "--";
					else
						val = val.toFixed(2); //if the index has a value, format it to two decimal places
					// Each subindex will be represented as a list item in an ordered list (<ol>) in the popup
					popupContent += `<li class="mb-1">${si.name}: ${val}</li>`; // add the subindex value to the popup content list 
				}
			}
			popupContent += `</ol>` // Close the ordered list tag after all subindices have been processed 

			// barchart code block
			// Added a bar chart in each index's popup. 
			// Debug: Log the full data object of the clicked country feature to the console
			console.log("Full feature data:", feature.properties);

			// CASE 1: If the selected index is a composite (Hydrogen+CCS, Hydrogen only, or CCS only)
			if (['cihccs', 'cih', 'ciccs'].includes(index.id)) {
				// Extract values from the feature's properties
				let val_sp = feature.properties['Africa_c_7'];	// System Performance
				let val_tr = feature.properties['Africa_c_8'];	// Transition Readiness
				let val_ts = null;	// Tech-Specific (varies below)

				// Choose tech-specific value depending on the index
				if (index.id === 'cihccs') {
					val_ts = feature.properties['Africa_c14']; // TS H&CCS
				} else if (index.id === 'cih') {
					val_ts = feature.properties['Africa_c_9']; // TS Hydrogen
				} else if (index.id === 'ciccs') {
					val_ts = feature.properties['Africa_c10']; // TS CCS
				}

				// Debug console logs to see exact math in dev tools
				console.log(`[${index.name}] System Performance:`, val_sp, "* 0.45 =", val_sp * 0.45);
				console.log(`[${index.name}] Transition Readiness:`, val_tr, "* 0.25 =", val_tr * 0.25);
				console.log(`[${index.name}] Tech Specific:`, val_ts, "* 0.35 =", val_ts * 0.35);
				console.log(`[${index.name}] Total Weighted Score:`, (val_sp * 0.45 + val_tr * 0.35 + val_ts * 0.25).toFixed(2));

				// Weighted values for each component
				const weighted_sp = val_sp ? val_sp * 0.45 : 0;
				const weighted_tr = val_tr ? val_tr * 0.35 : 0;
				const weighted_ts = val_ts ? val_ts * 0.25 : 0;
				const totalWeighted = (weighted_sp + weighted_tr + weighted_ts).toFixed(2);

				// Widths for each bar segment (in %, normalized)
				const width_sp = (weighted_sp / 100) * 100;
				const width_tr = (weighted_tr / 100) * 100;
				const width_ts = (weighted_ts / 100) * 100;

				// Update the final line in the bar chart popup legend (TS->TSHCCS, TS->TSH, and TS->TSCCS) based on which composite index is selected
				// just added
				let tsLabel = 'Tech Specific';
				if (index.id === 'cihccs') tsLabel = 'TSHCCS';
				else if (index.id === 'cih') tsLabel = 'TSH';
				else if (index.id === 'ciccs') tsLabel = 'TSCCS';

				// Inject the composite index bar chart HTML into the popup <just added>
				popupContent += `
					<div style="margin-top: 15px;">
						<div style="font-weight: bold; margin-bottom: 6px;">Composite Breakdown</div>
			
						<div style="display: flex; align-items: center;">
							<div style="width: 180px; height: 16px; background: #eee; border-radius: 10px; overflow: hidden; border: 1px solid #aaa; display: flex;">
								<div style="width: ${width_sp}%; background: #87ceeb; height: 100%" title="System Performance (${val_sp?.toFixed(2) ?? '--'})"></div>
								<div style="width: ${width_tr}%; background: #f5b041; height: 100%" title="Transition Readiness (${val_tr?.toFixed(2) ?? '--'})"></div>
								<div style="width: ${width_ts}%; background: #7dcea0; height: 100%" title="Tech Specific (${val_ts?.toFixed(2) ?? '--'})"></div>
							</div>
							<div style="margin-left: 8px; font-size: 12px; color: #444;">= ${totalWeighted}%</div>
						</div>
			
						<div class="d-flex justify-content-between small text-muted mt-1" style="font-size: 12px;">
							<span><span style="color:#87ceeb;">■</span> 45% SP</span>
							<span><span style="color:#f5b041;">■</span> 25% TR</span>
							<span><span style="color:#7dcea0;">■</span> 35% ${tsLabel}</span>
						</div>
					</div>
				`;
			}

			// CASE 2: If the selected index is System Performance only
			if (index.id === 'sp') {
				const val = feature.properties['Africa_c_7'];
				const width = val ? val * 0.45 : 0;	// Apply 45% weight

				// Append bar chart to popup
				popupContent += `
					<div style="margin-top: 15px;">
						<div style="font-weight: bold; margin-bottom: 6px;">Index Weighting</div>
						<div style="display: flex; align-items: center;">
							<div style="width: 180px; height: 16px; background: #eee; border-radius: 10px; overflow: hidden; border: 1px solid #aaa;">
								<div style="width: ${width}%; background: #87ceeb; height: 100%"></div>
							</div>
							<div style="margin-left: 8px; font-size: 12px; color: #444;">= ${width.toFixed(2)}% / 45%</div>
						</div>
					</div>
				`;
			}

			// CASE 3: Transition Readiness only
			if (index.id === 'tr') {
				const val = feature.properties['Africa_c_8'];
				const width = val ? val * 0.35 : 0;	// Apply 25% weight
				popupContent += `
					<div style="margin-top: 15px;">
						<div style="font-weight: bold; margin-bottom: 6px;">Index Weighting</div>
						<div style="display: flex; align-items: center;">
							<div style="width: 180px; height: 16px; background: #eee; border-radius: 10px; overflow: hidden; border: 1px solid #aaa;">
								<div style="width: ${width}%; background: #f5b041; height: 100%"></div>
							</div>
							<div style="margin-left: 8px; font-size: 12px; color: #444;">= ${width.toFixed(2)}% / 25%</div>
						</div>
					</div>
				`;
			}

			// CASE 4: Tech-Specific Hydrogen & CCS (as its own index)
			if (index.id === 'tshccs') {
				const val = feature.properties['Africa_c14'];
				const width = val ? val * 0.25 : 0;
				popupContent += `
					<div style="margin-top: 15px;">
						<div style="font-weight: bold; margin-bottom: 6px;">Index Weighting</div>
						<div style="display: flex; align-items: center;">
							<div style="width: 180px; height: 16px; background: #eee; border-radius: 10px; overflow: hidden; border: 1px solid #aaa;">
								<div style="width: ${width}%; background: #7dcea0; height: 100%"></div>
							</div>
							<div style="margin-left: 8px; font-size: 12px; color: #444;">= ${width.toFixed(2)}% / 35%</div>
						</div>
					</div>
				`;
			}

			// CASE 5: Tech-Specific CCS only
			if (index.id === 'tsccs') {
				const val = feature.properties['Africa_c10'];
				const width = val ? val * 0.25 : 0;	// Apply 35% weight
				popupContent += `
					<div style="margin-top: 15px;">
						<div style="font-weight: bold; margin-bottom: 6px;">Index Weighting</div>
						<div style="display: flex; align-items: center;">
							<div style="width: 180px; height: 16px; background: #eee; border-radius: 10px; overflow: hidden; border: 1px solid #aaa;">
								<div style="width: ${width}%; background: #b5d99c; height: 100%"></div>
							</div>
							<div style="margin-left: 8px; font-size: 12px; color: #444;">= ${width.toFixed(2)}% / 35%</div>
						</div>
					</div>
				`;
			}

			// CASE 6: Tech-Specific Hydrogen  (just added)
			if (index.id === 'tsh') {
				const val = feature.properties['Africa_c_9']; // pull from correct geojson key
				const width = val ? val * 0.25 : 0; // Apply 35% weight

				// Append bar chart to popup
				popupContent += `
					<div style="margin-top: 15px;">
						<div style="font-weight: bold; margin-bottom: 6px;">Index Weighting</div>
						<div style="display: flex; align-items: center;">
							<div style="width: 180px; height: 16px; background: #eee; border-radius: 10px; overflow: hidden; border: 1px solid #aaa;">
								<div style="width: ${width}%; background: #70b8ff; height: 100%"></div>
							</div>
							<div style="margin-left: 8px; font-size: 12px; color: #444;">= ${width.toFixed(2)}% / 35%</div>
						</div>
					</div>
				`;
			}
			

			// create a new mapbox popup at the location of the user's click event (e.lnglat)
			const popup = new mapboxgl.Popup()
				.setLngLat(e.lngLat) // set the locatin of the popup
				.setHTML(popupContent) // set the content of the popup
				.addTo(map); // add the popup to the map 

			// remove popup when controls are clicked
			document.getElementById("select-index").addEventListener("click", function () {
				popup.remove();
			});
			document.getElementById("select-country").addEventListener("click", function () {
				popup.remove(); // close the popup when the "select-country" contol is clicked
			});
		}
	});
});


/*--------------------------------------------------------------------
 MAP LAYER AND COUNTRY SELECTION CONTROLS:
--------------------------------------------------------------------*/
// function to manage visibility of map layers when an index is selected by the user 
function selectIndex(e, id) {
	const checkbox = document.getElementById('layercheck_' + id);

	// Hide all layers first
	app.indices.forEach(index => {
		map.setLayoutProperty(index.id, 'visibility', 'none');
	});
	app.selectedIndexId = null;

	// Show one layer if selected
	if (checkbox.checked) {
		map.setLayoutProperty(id, 'visibility', 'visible');
		app.selectedIndexId = id;
		mapZoom();
	}
}

// function to update the map layer based on the selected country 
function selectCountries() {
	let selectedCountries = []
	let countryCheckboxes = document.querySelectorAll(".country-layer-checkbox");

	for (var i = 0; i < countryCheckboxes.length; i++) {
		app.countries[i].is_selected = countryCheckboxes[i].checked;

		if (app.countries[i].is_selected)
			selectedCountries.push(app.countries[i].name);
	}

	if (app.selectedIndexId === null) {
		console.log("No layer selected. Skipping map filter update.");
		return;
	}

	// build map filter to highlight the selected countries  
	let mapFilter;

	if (selectedCountries.length == 0) // no countries selected
		mapFilter = ["has", "NAME"];  // then show all countries
	else if (selectedCountries.length === 1) // one country is selected
		mapFilter = ["==", ["get", "NAME"], selectedCountries[0]];  // show it
	else // multiple countries selected
		mapFilter = ["in", ["get", "NAME"], ["literal", selectedCountries]];

	map.setFilter(app.selectedIndexId, mapFilter);
}


/*--------------------------------------------------------------------
COMPARE TABLE
--------------------------------------------------------------------*/

// function updates and generates the comparison table with data from the selected index and countries
function updateComparisonTable() {
	// Get the div where the comparison table will be inserted
	const tableDiv = document.getElementById("compare");

	// Clear any previous content in the comparison table and set a loading message
	tableDiv.innerHTML = '<h5 class="text-center">Comparison table: data not loaded</h5>';
	// Check if the necessary geojson data is loaded or if an index is selected
	if (!app.countryGeojsonIsLoaded || app.selectedIndexId === null)
		return; // If data or index isn't available, exit the function

	// Find the selected indices data based on the selected index ID
	let selectedIndex;

	// Loop through the list of indices to find the one that matches the selected index ID
	for (var i = 0; i < app.indices.length; i++) {
		if (app.indices[i].id == app.selectedIndexId) {   // Check if the current index ID matches the selected index ID
			selectedIndex = app.indices[i]; // Store the selected index data
			break; // Exit the loop since the selected index has been found
		}
	}

	// Initialize the HTML content for the table by adding the title with the selected index's name
	// This creates a centered heading for the comparison table, dynamically displaying the selected index's name
	let html = `<h4 class="text-center">Comparison table: ${selectedIndex.name}</h4>`
	// Start building the table structure by adding the opening <table> tag with Bootstrap classes
	// - "table" class applies basic table styling
	// - "table-bordered" adds borders around the table cells
	// - "text-center" centers the text within the table cells
	// - "table-hover" adds a hover effect to table rows for better interactivity
	html += '<table class="table table-bordered text-center table-hover">';

	// Begin building the table header by adding the opening <thead> and <tr> tags
	// These tags define the header section and the row for the table columns
	html += '<thead><tr>'
	// Add the first header cell for the "Index" column
	// This will be the label for the first column in the table, which displays the index name
	html += '<th scope="col" class="text-start bg-light">Index</th>' // First column for the index name
	// Loop through all countries and add their names as column headers, if they are selected
	app.countries.forEach(country => {
		if (country.is_selected)
			html += `<th scope="col" class="bg-light">${country.name}</th>`   // Add the country name as a column header for each selected country
	});
	html += '</tr></thead>'  // Close the table row and header section

	// Begin building the table body where index values for countries will be displayed
	html += '<tbody>'

	// First row: Add the selected index name to the first column of the row
	html += '<tr>'
	html += `<th scope="row" class="text-start">${selectedIndex.name}</th>` // Row label for the selected index

	// Loop through the selected countries and populate the table with values for the selected index
	app.countries.forEach(country => {
		if (country.is_selected) {
			let val = country.geojson[selectedIndex.geojsonKey]; // Get the value of the selected index for the country
			let color = getColorLegendInfo(val).color; // Get the color for this value based on the color legend
			// If the value is not available, show "--", otherwise format the value to two decimal places
			if (val == undefined || val == "")
				val = "--";
			else
				val = val.toFixed(2);

			// Add a table cell with the value and corresponding color
			html += '<td class="position-relative">';
			html += `<div style="background-color: ${color};" class="h-100 opacity-50 w-100 position-absolute start-0 top-0"></div>`;
			html += `<div class="position-relative">${val}</div>`
			html += '</td>';
		}
	});

	html += '</tr>'

	// Add rows for each sub-index if they exist
	if (selectedIndex.subindices) {
		for (var i = 0; i < selectedIndex.subindices.length; i++) {
			html += '<tr>'
			html += `<td scope="row" class="text-start">${i + 1}. ${selectedIndex.subindices[i].name}</td>`
			app.countries.forEach(country => {
				if (country.is_selected) {
					let val = country.geojson[selectedIndex.subindices[i].geojsonKey];
					let color = getColorLegendInfo(val).color;

					// If the sub-index value is undefined, set it to "--" and the color to white
					if (val == undefined || val == "") {
						val = "--";
						color = "#ffffff";
					}
					else
						val = val.toFixed(2);
					// Add a table cell for each country's value
					html += '<td class="position-relative">';
					html += `<div style="background-color: ${color};" class="h-100 opacity-25 w-100 position-absolute start-0 top-0"></div>`;
					html += `<div class="position-relative">${val}</div>`
					html += '</td>';
				}
			});
			html += '</tr>'
		}
	}

	// ADD NEW ROWS: Population, Area, Population Density

	// Population row
	// Start the Population row
	html += '<tr>';
	// Add the label for the Population row, aligned to the left using Bootstrap's text-start class
	// Bootstrap's "text-start" class aligns the content to the left 
	html += `<td scope="row" class="text-start">Population</td>`;

	// Loop through the countries to add the population data
	app.countries.forEach(country => {
		// Check if the country is selected
		if (country.is_selected) {
			let val = country.geojson["Africa_c_6"]; // Population field - // Get the population value from the "Africa_c_6" field in the country's geojson data

			// If the value is undefined, set it to "--"
			if (val == undefined || val == "") {
				val = "--";
			} else {
				// Otherwise, format the population value with a thousand separator for better readability
				val = val.toLocaleString(); // Formats number with locale-specific thousand separators
			}

			html += '<td>'; // Add the formatted population value into the table cell
			html += `<div class="position-relative">${val}</div>`; // no background color
			html += '</td>';
		}
	});

	html += '</tr>';  // Close the Population row

	// Area row
	html += '<tr>';
	html += `<td scope="row" class="text-start">Area (km²)</td>`;
	app.countries.forEach(country => {
		if (country.is_selected) {
			let val = country.geojson["Africa_c31"]; // Area field

			// If the value is undefined, set it to "--"
			if (val == undefined || val == "") {
				val = "--";
			} else {
				val = val.toLocaleString();
			}

			html += '<td>';
			html += `<div class="position-relative">${val}</div>`;
			html += '</td>';
		}
	});
	html += '</tr>';

	// Population Density row
	html += '<tr>';
	html += `<td scope="row" class="text-start">Population Density (per km²)</td>`;
	app.countries.forEach(country => {
		if (country.is_selected) {
			let val = country.geojson["Africa_c32"]; // Population Density field

			// If the value is undefined, set it to "--"
			if (val == undefined || val == "") {
				val = "--";
			} else {
				val = val.toFixed(2); // Format to two decimal places
			}

			html += '<td>';
			html += `<div class="position-relative">${val}</div>`; // No background color
			html += '</td>';
		}
	});
	html += '</tr>';

	// End the table body and table itself
	html += '</tbody>'
	html += '</table>'
	// Update the inner HTML of the table div with the newly generated HTML
	tableDiv.innerHTML = html;
}



// 🔥 Add instructional line at top of index menu
// It shows the text "Select an Index" at the top of the dropdown menu
// to guide users to pick an index layer they want to display on the map

const instructionLine = document.createElement('div');
instructionLine.className = 'text-muted small pb-2 ps-1';

instructionLine.textContent = 'Select an Index';			// Set the display text
// Add this instruction text to the top of the index dropdown menu
document.getElementById('index-select-menu').appendChild(instructionLine);


// Create index selection radio buttons for each index in the app.indices array
app.indices.forEach(index => {
	let html = `
		<div class="form-check mb-2">
			<input class="form-check-input layer-checkbox index-layer-checkbox" type="radio" name="layercheckAfrica" value="layercheck_${index.id}" id="layercheck_${index.id}" >
            <label class="form-check-label" for="layercheck_${index.id}">${index.name}</label>
        </div>`;
	let div = document.createElement('div');

	div.innerHTML = html;
	div.addEventListener('change', (e) => {
		selectIndex(e, index.id); // Trigger index selection
		selectCountries(); // Trigger country selection
		updateComparisonTable(); // Update the comparison table
	});

	// Append the radio button to the index selection menu
	document.getElementById('index-select-menu').appendChild(div);
});

// Create country selection checkboxes for each country in the app.countries array
app.countries.forEach(country => {
	let html = `
		<div class="form-check mb-2">
			<input class="form-check-input layer-checkbox country-layer-checkbox" type="checkbox" name="country" value="${country.name}" id="${country.name}" >
			<label class="form-check-label" for="${country.name}">${country.name}</label>
		</div>`;
	let div = document.createElement('div');

	div.innerHTML = html;
	div.addEventListener('change', (e) => {
		selectCountries(); // Trigger country selection
		updateComparisonTable(); // Update the comparison table
	});
	// Append the checkbox to the country selection menu
	document.getElementById('country-select-menu').appendChild(div);
});

// Add interactivity to the user controls when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
	// Index selector drop-down: show the selected index name in the box
	//edit:
	// const indexSelectBtn = document.getElementById("select-index");
	// document.querySelectorAll(".index-layer-checkbox").forEach(radio => {
	// 	radio.addEventListener("change", function () {
	// 		// set the toggle button text to the selected radio button text ()
	// 		indexSelectBtn.textContent = this.nextElementSibling.textContent.trim();;
	// 	});
	// });
	//update:

	document.querySelectorAll(".index-layer-checkbox").forEach(radio => {
		radio.addEventListener("change", function () {
			// set the toggle button text to the selected radio button' lebel
			document.getElementById("selected-index-label").textContent = this.nextElementSibling.textContent.trim();
		});
	});

	// Country selector drop-down: show number of selected countries in the box
	const countrySelectBtn = document.getElementById("select-country");
	const checkboxes = document.querySelectorAll(".country-layer-checkbox");

	// Update the button text based on the number of selected countries
	function updateButtonText() {
		const selectedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
		const totalCountries = checkboxes.length;

		if (selectedCheckboxes.length === totalCountries)
			countrySelectBtn.textContent = "All countries selected";
		else if (selectedCheckboxes.length === 1)
			countrySelectBtn.textContent = selectedCheckboxes[0].nextElementSibling.textContent.trim();
		else
			countrySelectBtn.textContent = `${selectedCheckboxes.length} countries selected`;
	}

	checkboxes.forEach(checkbox => {
		checkbox.checked = true; // All countries are selected by default

		checkbox.addEventListener("change", function (event) {
			const selectedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);

			if (!this.checked && selectedCheckboxes.length === 0) {
				// Prevent unchecking if it's the last selected checkbox
				event.preventDefault();
				this.checked = true;
				return;
			}

			updateButtonText();
		});
	});

	updateButtonText(); // Update button text based on the selection



	
	// DOWNLOAD MENU
	// Purpose: Dynamically populate the download dropdown menu with links to Excel (.xlsx) files for each country
	// Assumption: You’ve saved .xlsx files in a local folder named "countries" and named each file as [CountryName].xlsx
	// Example: "./countries/Nigeria.xlsx", "./countries/Kenya.xlsx", etc.

	// Step 1: List of countries you want in the dropdown
	const countries = ["Nigeria", "Kenya", "Rwanda", "Ethiopia", "Tanzania", "Ghana", "Senegal"]; // Add all your actual file names here
	const downloadMenu = document.getElementById("downloadMenu");

	// Step 2: Loop through each country and create a clickable <a> download link
	countries.forEach(country => {
		const listItem = document.createElement("li");	// Create <li> wrapper for the dropdown item

		const link = document.createElement("a");	// Create <a> link element
		link.className = "dropdown-item";
		link.href = `./countries/${country}.xlsx`;	// File path to the downloadable file, change the folder name [countries] if you needed
		link.download = `${country}.xlsx`;	// Hint browser to download the file instead of navigating
		link.textContent = country;

		listItem.appendChild(link);
		downloadMenu.appendChild(listItem);
	});

	// Step 3: Add a separator just for visual clarity
	const divider = document.createElement("li");
	divider.innerHTML = '<hr class="dropdown-divider">';
	downloadMenu.appendChild(divider);

	// Step 4: Add Methodology Slides download option at the bottom
	const methodologyItem = document.createElement("li");

	const methodologyLink = document.createElement("a");
	methodologyLink.className = "dropdown-item fw-bold"; // make it bold
	methodologyLink.style.fontSize = "12px";		// font size
	methodologyLink.href = "./countries/methodology.pdf"; // could update the file name and folder name, attention the methodology slides in the same folder of each country's file 
	methodologyLink.download = "Methodology.pdf"; // File name when downloaded
	methodologyLink.textContent = "Methodology"; // Display text in dropdown

	methodologyItem.appendChild(methodologyLink);
	downloadMenu.appendChild(methodologyItem);




	updateButtonText(); // Initial button update


	// "Show comparison table" button click handler
	document.getElementById('toggle-compare').addEventListener('click', function () {
		// Toggle the visibility of the compare table div
		document.getElementById('compare').classList.toggle('d-none'); // 'd-none' is a Bootstrap class that hides the element
	});

	// Loader animation: hide after a timeout
	setTimeout(function () {
		document.querySelector(".page-loader").classList.add("init");
	}, 2200); // this is the time the loader is displayed for 



	// 🔥 Turn page button test
	
	// Instrution turning page button
	// Initialize the current page index (starts at page 0)
	let currentPage = 0;
	// Select all elements with the class 'instruction-page' (these are the instruction pages)
	const pages = document.querySelectorAll('.instruction-page');
	// Page indicator element that shows "Page X of Y"
	const pageNumber = document.getElementById('pageNumber');
	// ⬅️ Previous and ➡️ Next page navigation buttons
	const prevPageBtn = document.getElementById('prevPage');
	const nextPageBtn = document.getElementById('nextPage');

	// Function to update which instruction page is visible
	function updateInstructionPage() {
		// // Loop through all pages and show only the one matching currentPage
		pages.forEach((page, i) => {
			page.style.display = i === currentPage ? 'block' : 'none';
		});

		// Update the text to show "X of Y" page info
		pageNumber.textContent = `${currentPage + 1} of ${pages.length}`;

		// Disable 'previous' button if on the first page
		prevPageBtn.disabled = currentPage === 0;
		// Disable 'next' button if on the last page
		nextPageBtn.disabled = currentPage === pages.length - 1;
	}

	// Click for "Previous" button
	prevPageBtn.addEventListener('click', () => {
		if (currentPage > 0) {
			currentPage--;				// Move back one page
			updateInstructionPage();	// Refresh the visible content
		}
	});

	// Click for "Next" button
	nextPageBtn.addEventListener('click', () => {
		if (currentPage < pages.length - 1) {
			currentPage++;				// Move forward one page
			updateInstructionPage();	// Refresh the visible content
		}
	});

	updateInstructionPage(); // Initialize the first page on load


});


/*--------------------------------------------------------------------
MAP UPDATE CALLBACK
--------------------------------------------------------------------*/

map.on('idle', () => {
	// Map 'on idle' is called when the map has finished rendering after
	// a user interaction. For some reason, the geojson data which we need
	// for populating the comparison table cannot be retrieved via 
	// querySourceFeatures() before a map layer is enabled and has finished
	// rendering. We only need to load the data once, so we can refer to
	// it later when updating the comparison table

	if (!app.countryGeojsonIsLoaded) {
		let success = true;
		// fetch geojson data for each country
		for (var i = 0; i < app.countries.length; i++) {
			let geojson = map.querySourceFeatures('africa-geojson',
				{
					sourceLayer: 'AfricaProjectFileZip-04v9i9',
					filter: ["==", "NAME", app.countries[i].name]
				});

			if (geojson.length == 0) {
				success = false; // could not read the data, exit
				break;
			}

			app.countries[i].geojson = geojson[0].properties; // Store the geojson data
		}

		if (success) {
			app.countryGeojsonIsLoaded = true;
			updateComparisonTable(); // Update the comparison table once the geojson data is loaded
		}
	}
});
