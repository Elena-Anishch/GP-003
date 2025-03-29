/*--------------------------------------------------------------------
GGR472 WEEK 8: JavaScript for Web Maps
Adding elements and interactivity to the map (JavaScript legend and events)
--------------------------------------------------------------------*/

/*--------------------------------------------------------------------
APPLICATION DATA
--------------------------------------------------------------------*/
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
	
	countryGeojsonIsLoaded: false,
	
	colorLegend: {
		labels: [ '0-24 Poor ', '25-49 Low', '50-74 Moderate',  '75-89 Good', '> 90 Excellent' ],
		colors: [    '#bd0026',   '#9B4D00',        '#FFA500',     '#FFFF00',        '#32CD32' ],
		levels: [            0,          25,               50,            75,               90 ]
	},
	
	selectedIndexId: null
}

/*--------------------------------------------------------------------
COLOR LEGEND
--------------------------------------------------------------------*/
const legend = document.getElementById('legend');

app.colorLegend.labels.forEach((label, i) => {
    const colour = app.colorLegend.colors[i];

    const item = document.createElement('div'); 
    const key = document.createElement('span');

    key.className = 'legend-key';
    key.style.backgroundColor = colour; 

    const value = document.createElement('span');
    value.innerHTML = `${label}`;

    item.appendChild(key);
    item.appendChild(value);

    legend.appendChild(item);
});

// Change display of legend based on check box
let legendcheck = document.getElementById('legendcheck');

legendcheck.addEventListener('click', () => {
    if (legendcheck.checked) {
        legendcheck.checked = true;
        legend.style.display = 'block';
    }
    else {
        legend.style.display = "none";
        legendcheck.checked = false;
    }
});

function getColorLegendInfo(value) {
	for (let i = app.colorLegend.levels.length - 1; i >= 0; i--) {
		if (value >= app.colorLegend.levels[i]) {
			return {
				color: app.colorLegend.colors[i],
				label: app.colorLegend.labels[i]
			};
		}
	}
	return { color: '#ccc', label: 'No Data' }; // Default if value is missing
}

/*--------------------------------------------------------------------
MAPBOX MAP
--------------------------------------------------------------------*/
mapboxgl.accessToken = 'pk.eyJ1IjoiZWxlbmEtYW5pc2hjaCIsImEiOiJjbTVvN2podncwanJ5Mm1wbnNuczl6c214In0.2ltrEF0cJrURbPWpaKr9bg'; //***ADD YOUR ACCESS TOKEN HERE***

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/standard', // or select existing mapbox style - https://docs.mapbox.com/api/maps/styles/
    center: [15, 18],
    zoom: 2.5,
    // maxBounds: [
    //     [140,0], // Southwest
    //     [25, 85]  // Northeast
    // ],
});

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.FullscreenControl());

const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    countries: "dz,ao,ben,bw,bf,bi,cm,cv,cf,td,km,cd,mg,ml,mr,ma,mu,na,ne,ng,sc,sl,so,za,ss,sd,tn,ug,zw,ke,lr,ly,mz,sn,sz,tz,tg,zm,ci,gh,et,rw,gn,gw,ls,zm,mw"
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

// Function for creating a map layer
function mapAddLayer(layerId, geojsonProperty) {
	// build the 'fill-color' parameter: property value query and fill colors
	// according to the color legend
	let colorLevelparam = [
		'step', ['get', geojsonProperty],
	];
	
	// append all levels and colors from our color legend
	for (let i = 0; i < app.colorLegend.colors.length; i++) {
		// all arrays in app.colorLegend have the same length,
		// so can use same i to access them all
		if (app.colorLegend.levels[i] != 0) // skip '0' level
			colorLevelparam.push(app.colorLegend.levels[i]);

		colorLevelparam.push(app.colorLegend.colors[i]);
	}
	
	map.addLayer({
		'id': layerId,
		'type': 'fill',
		'source': 'africa-geojson',
		'paint': {
			'fill-color': colorLevelparam,
			'fill-opacity': 0.5,
			'fill-outline-color': 'white'
		},
		'source-layer': 'AfricaProjectFileZip-04v9i9',
		'layout': {
			'visibility': 'none'  // Set this layer to be hidden initially
		}
	});
}

function mapZoom(zoom, coords) {
	if (zoom == undefined)
		zoom = 3; // default zoom

	if (coords == undefined)
		coords = [15, 10]; // default coordinates
	
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
	
	// select the first index
	document.getElementById('layercheck_' + app.indices[0].id).click();
});

// Add click events to each map layer that show a popup
app.indices.forEach(function(index) {
	map.on('click', index.id, (e) => {
		console.log(index.id + ' layer clicked')

		// If the layer is not visible, do nothing
		if (map.getLayoutProperty(index.id, 'visibility') === 'none') {
			return;
		}

		// zoom to the clicked area
		mapZoom(4, e.lngLat);		
		
		// build and show the popup
		const feature = e.features[0];

		if (feature.properties && feature.properties[index.geojsonKey] && feature.properties.NAME) {
			const val = feature.properties[index.geojsonKey];
			const countryName = feature.properties.NAME;
			const { color, label } = getColorLegendInfo(val);
			let popupContent = `
            <h3>${countryName}</h3> 
            <h4>${index.name}: <strong>${val}</strong></h4>
            <div class="mb-3" style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 30px; opacity: 0.5; height: 12px; border: 1px solid #999; background-color: ${color}; border-radius: 10px"></div>
                <span>${label}</span>
            </div>
            <ol>`;

			if ('subindices' in index) {
				for (let i = 0; i < index.subindices.length; i++) {
					let si = index.subindices[i];
					let val = feature.properties[si.geojsonKey];
					if (val == undefined || val == "")
						val = "--";
					else
						val = val.toFixed(2);
					popupContent += `<li class="mb-1">${si.name}: ${val}</li>`;
				}
			}
			popupContent += `</ol>`
			const popup = new mapboxgl.Popup()
				.setLngLat(e.lngLat)
				.setHTML(popupContent)
				.addTo(map);

			// remove popup when controls are clicked
			document.getElementById("select-index").addEventListener("click", function() {
				popup.remove();
			});
			document.getElementById("select-country").addEventListener("click", function() {
				popup.remove();
			});
		}
	});
});


/*--------------------------------------------------------------------
USER CONTROLS
--------------------------------------------------------------------*/

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

function updateComparisonTable() {
	const tableDiv = document.getElementById("compare");
	
	// clear the table
	tableDiv.innerHTML = '<h5 class="text-center">Comparison table: data not loaded</h5>'; 	

	if (!app.countryGeojsonIsLoaded || app.selectedIndexId === null)
		return;
	
	// find the selected index data
	let selectedIndex;
	
	for (var i = 0; i < app.indices.length; i++) {
		if (app.indices[i].id == app.selectedIndexId) {
			selectedIndex = app.indices[i];
			break;
		}
	}

	// table title	
	let html = `<h4 class="text-center">Comparison table: ${selectedIndex.name}</h4>`
	html += '<table class="table table-bordered text-center table-hover">';
	
	// table header
	html += '<thead><tr>'
	html += '<th scope="col" class="text-start bg-light">Index</th>'
	app.countries.forEach(country => {
		if (country.is_selected)
			html += `<th scope="col" class="bg-light">${country.name}</th>`
	});
	html += '</tr></thead>'
	
	// table body
	html += '<tbody>'
	
	// first row: the selected index 
	html += '<tr>'
	html += `<th scope="row" class="text-start">${selectedIndex.name}</th>`
	
	app.countries.forEach(country => {
		if (country.is_selected) {
			let val = country.geojson[selectedIndex.geojsonKey];
			let color = getColorLegendInfo(val).color;
			
			if (val == undefined || val == "")
				val = "--";
			else
				val = val.toFixed(2);
			
			html += '<td class="position-relative">';
			html += `<div style="background-color: ${color};" class="h-100 opacity-50 w-100 position-absolute start-0 top-0"></div>`;
			html += `<div class="position-relative">${val}</div>`
			html += '</td>';
		}
	});
	
	html += '</tr>'
	
	// add a row for each sub-index
	if (selectedIndex.subindices){		
		for (var i = 0; i < selectedIndex.subindices.length; i++) {
			html += '<tr>'
		html += `<td scope="row" class="text-start">${i + 1}. ${selectedIndex.subindices[i].name}</td>`
			app.countries.forEach(country => {
				if (country.is_selected) {
					let val = country.geojson[selectedIndex.subindices[i].geojsonKey];
					let color = getColorLegendInfo(val).color;
					
					if (val == undefined || val == "") {
						val = "--";
						color = "#ffffff";
					}
					else
						val = val.toFixed(2);
					
					html += '<td class="position-relative">';
					html += `<div style="background-color: ${color};" class="h-100 opacity-25 w-100 position-absolute start-0 top-0"></div>`;
					html += `<div class="position-relative">${val}</div>`
					html += '</td>';
				}
			});
			html += '</tr>'
		}
	}
	
	html += '</tbody>'
	html += '</table>'
	
	tableDiv.innerHTML = html;
}

// Create index selection radio buttons
app.indices.forEach(index => {
	let html = `
		<div class="form-check mb-2">
			<input class="form-check-input layer-checkbox index-layer-checkbox" type="radio" name="layercheckAfrica" value="layercheck_${index.id}" id="layercheck_${index.id}" >
            <label class="form-check-label" for="layercheck_${index.id}">${index.name}</label>
        </div>`;
	let div = document.createElement('div');
	
	div.innerHTML = html;
	div.addEventListener('change', (e) => {
		selectIndex(e, index.id);
		selectCountries();
		updateComparisonTable();
	});
	
	document.getElementById('index-select-menu').appendChild(div);
});

// Create country selection checkboxes
app.countries.forEach(country => {
	let html = `
		<div class="form-check mb-2">
			<input class="form-check-input layer-checkbox country-layer-checkbox" type="checkbox" name="country" value="${country.name}" id="${country.name}" >
			<label class="form-check-label" for="${country.name}">${country.name}</label>
		</div>`;
	let div = document.createElement('div');
	
	div.innerHTML = html;
	div.addEventListener('change', (e) => {
		selectCountries();
		updateComparisonTable();
	});
	
	document.getElementById('country-select-menu').appendChild(div);
});

// Add interactivity to the user controls
document.addEventListener("DOMContentLoaded", function () {
	// Index selector drop-down: show the selected index name in the box
	const indexSelectBtn = document.getElementById("select-index");
	document.querySelectorAll(".index-layer-checkbox").forEach(radio => {
		radio.addEventListener("change", function () {
			// set the toggle button text to the selected radio button text
			indexSelectBtn.textContent = this.nextElementSibling.textContent.trim();;
		});
	});

	// Country selector drop-down: show number of selected countries in the box
	const countrySelectBtn = document.getElementById("select-country");
	const checkboxes = document.querySelectorAll(".country-layer-checkbox");

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
	
	updateButtonText(); // Initial button update

	// "Show comparison table" button click handler
	document.getElementById('toggle-compare').addEventListener('click', function() {
		// Toggle the visibility of the compare table div
		document.getElementById('compare').classList.toggle('d-none'); // 'd-none' is a Bootstrap class that hides the element
	});

	// Loader animation: hide after a timeout
	setTimeout(function() {
		document.querySelector(".page-loader").classList.add("init");
	}, 2200);
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
			
			app.countries[i].geojson = geojson[0].properties;
		}
		
		if (success) {
			app.countryGeojsonIsLoaded = true;
			updateComparisonTable();
		}
	}
});
