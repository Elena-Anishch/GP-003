/*--------------------------------------------------------------------
GGR472 WEEK 8: JavaScript for Web Maps
Adding elements and interactivity to the map (JavaScript legend and events)
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
	
	// Flag to track if country geojson is loaded   - ???? - comparison table will populate once this turns TRUE
	countryGeojsonIsLoaded: false,
	
	
    // Color legend for the application 
	/*🔥 keep track of whether the country-level GeoJSON data has already been loaded from the map.
	and stored it into app.countries[i].geojson?*/
	//countryGeojsonIsLoaded: false,
	
	/*🔥 Legend for 5 data breaks */ 
	colorLegend: {
		labels: [ '0-24 Poor ', '25-49 Low', '50-74 Moderate',  '75-89 Good', '> 90 Excellent' ],
		colors: [    '#bd0026',   '#9B4D00',        '#FFA500',     '#FFFF00',        '#32CD32' ],
		levels: [            0,          25,               50,            75,               90 ]
	},

	/*🔥 Legend for 3 data breaks */
//colorLegend: {
 //   labels: ['Low', 'Medium', 'High'],
//    colors: ['#9B4D00', '#FFA500', '#32CD32'], // Corresponding colors for low, medium, and high
//    levels: [0, 50, 90] // Define the threshold levels for low, medium, and high
//},
	
	// Currently selected index id 

	selectedIndexId: null   // ?????
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
    //center: [15, 18], // Initial map center coordinates 
   // zoom: 2.5,
    // maxBounds: [                         -----???
    //     [140,0], // Southwest
    //     [25, 85]  // Northeast
    // ],
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

// Function to zoom the map to a given level and coordinates  ----??????

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

app.indices.forEach(function(index) {
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


			// create a new mapbox popup at the location of the user's click event (e.lnglat)
			const popup = new mapboxgl.Popup()
				.setLngLat(e.lngLat) // set the locatin of the popup
				.setHTML(popupContent) // set the content of the popup
				.addTo(map); // add the popup to the map 

			// remove popup when controls are clicked
			document.getElementById("select-index").addEventListener("click", function() {
				popup.remove();
			});
			document.getElementById("select-country").addEventListener("click", function() {
				popup.remove(); // close the popup when the "select-country" contol is clicked
			});
		}
	});
});


/*--------------------------------------------------------------------
USER CONTROLS
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
		mapZoom();    ///// ?????? does it actually do anything???? reset to default zoom when new index selected 
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
		console.log("No layer selected. Skipping map filter update."); // ---???????
		return;
	}

	// build map filter to highlight the selected countries  ---?????
	let mapFilter;

	if (selectedCountries.length == 0) // no countries selected
		mapFilter = ["has", "NAME"];  // then show all countries
	else if (selectedCountries.length === 1) // one country is selected
		mapFilter = ["==", ["get", "NAME"], selectedCountries[0]];  // show it
	else // multiple countries selected
		mapFilter = ["in", ["get", "NAME"], ["literal", selectedCountries]];

	map.setFilter(app.selectedIndexId, mapFilter);
}


// function updates and generates the comparison table with data from the selected index and countries
function updateComparisonTable() {
	// Get the div where the comparison table will be inserted
	const tableDiv = document.getElementById("compare");
	
	// Clear any previous content in the comparison table and set a loading message
	tableDiv.innerHTML = '<h5 class="text-center">Comparison table: data not loaded</h5>'; 	
	// Check if the necessary geojson data is loaded or if an index is selected
	if (!app.countryGeojsonIsLoaded || app.selectedIndexId === null)
		return; // If data or index isn't available, exit the function
	
	// Find the selected index data based on the selected index ID
	let selectedIndex;
	
	for (var i = 0; i < app.indices.length; i++) {
		if (app.indices[i].id == app.selectedIndexId) {
			selectedIndex = app.indices[i]; // Store the selected index data
			break;
		}
	}

	// Begin building the table HTML
	let html = `<h4 class="text-center">Comparison table: ${selectedIndex.name}</h4>`
	html += '<table class="table table-bordered text-center table-hover">';
	
	// Build the table header
	html += '<thead><tr>'
	html += '<th scope="col" class="text-start bg-light">Index</th>'
	// Loop through all countries and add their names as column headers, if they are selected
	app.countries.forEach(country => {
		if (country.is_selected)
			html += `<th scope="col" class="bg-light">${country.name}</th>`
	});
	html += '</tr></thead>'
	
	// Begin building the table body
	html += '<tbody>'
	
	// First row: Add the selected index to the first column
	html += '<tr>'
	html += `<th scope="row" class="text-start">${selectedIndex.name}</th>`

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
	if (selectedIndex.subindices){		
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
	html += '<tr>';
	html += `<td scope="row" class="text-start">Population</td>`;
	app.countries.forEach(country => {
		if (country.is_selected) {
			let val = country.geojson["Africa_c_6"]; // Population field
			
			// If the value is undefined, set it to "--"
			if (val == undefined || val == "") {
				val = "--";
			} else {
				val = val.toLocaleString(); // Add a thousand separator for better readability
			}
			
			html += '<td>';
			html += `<div class="position-relative">${val}</div>`; // No background color
			html += '</td>';
		}
	});
	html += '</tr>';

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
				val = val.toLocaleString(); // Add a thousand separator
			}
			
			html += '<td>';
			html += `<div class="position-relative">${val}</div>`; // No background color
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


// Create index selection radio buttons for each index in the app.indices array
// 🔥 Add instructional line at top of index menu
const instructionLine = document.createElement('div');
instructionLine.className = 'text-muted small pb-2 ps-1';
instructionLine.textContent = 'Select an Index';
document.getElementById('index-select-menu').appendChild(instructionLine);
// end

// Create index selection radio buttons   - 
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
	const indexLabel = document.getElementById("selected-index-label");

	document.querySelectorAll(".index-layer-checkbox").forEach(radio => {
		radio.addEventListener("change", function () {
			// set the toggle button text to the selected radio button' lebel
			indexSelectBtn.textContent = this.nextElementSibling.textContent.trim();;
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
	//🔥 Download button test
	// add all other countries' xlsx file inside the country folder, with formating as [country].xlsx. then the file could be download by the user
	const countries = ["Nigeria", "Kenya", "Rwanda", "Ethiopia", "Tanzania", "Ghana", "Nigeria", "Senegal"]; // Add all your actual file names here
  	const downloadMenu = document.getElementById("downloadMenu");

  	countries.forEach(country => {
		const listItem = document.createElement("li");

		const link = document.createElement("a");
		link.className = "dropdown-item";
		link.href = `./countries/${country}.xlsx`;
		link.download = `${country}.xlsx`;
		link.textContent = country;

		listItem.appendChild(link);
		downloadMenu.appendChild(listItem);
	});
	// 🔥

	updateButtonText(); // Initial button update

	// "Show comparison table" button click handler
	document.getElementById('toggle-compare').addEventListener('click', function() {
		// Toggle the visibility of the compare table div
		document.getElementById('compare').classList.toggle('d-none'); // 'd-none' is a Bootstrap class that hides the element
	});

	// Loader animation: hide after a timeout
	setTimeout(function() {
		document.querySelector(".page-loader").classList.add("init");
	}, 2200); // this is the time the loader is displayed for 

	// 🔥 Turn page button test
	let currentPage = 0;
	const pages = document.querySelectorAll('.instruction-page');
	const pageNumber = document.getElementById('pageNumber');
	const prevPageBtn = document.getElementById('prevPage');
	const nextPageBtn = document.getElementById('nextPage');

	function updateInstructionPage() {
		pages.forEach((page, i) => {
			page.style.display = i === currentPage ? 'block' : 'none';
		});

		pageNumber.textContent = `${currentPage + 1} of ${pages.length}`;
		prevPageBtn.disabled = currentPage === 0;
		nextPageBtn.disabled = currentPage === pages.length - 1;
	}

	prevPageBtn.addEventListener('click', () => {
		if (currentPage > 0) {
			currentPage--;
			updateInstructionPage();
		}
	});

	nextPageBtn.addEventListener('click', () => {
		if (currentPage < pages.length - 1) {
			currentPage++;
			updateInstructionPage();
		}
	});

	updateInstructionPage(); // Initialize on load

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
