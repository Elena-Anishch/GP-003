# Low-Carbon Tech Readiness in Africa

**A map tool for CATF**  
Course: GGR 472 Developing Web Maps  
Created by Elena Anishchenko & Zoe Li  

## Overview:
This interactive map visualizes a Composite Index to assess the readiness of African countries to adopt low-carbon technologies such as Hydrogen and Carbon Capture & Storage (CCS). It highlights critical dimensions like system performance, technology preparedness, and transition readiness.  
**Note**: Only Nigeria has real index data. Other countries' values are fictional and used for demonstration.

## Project Goal:
Create an interactive web tool that visualizes African countries’ readiness to adopt low-carbon technologies using index-based scores.

## Purpose:
To guide investment, policy, and planning decisions for:
- African governments
- Investors

## Motivation & Context:
### Africa’s Role in Global Energy Transition
Africa’s unique potential and challenges are often overlooked in global assessments—yet the continent accounts for nearly 1/5 of the global population.

### CATF – Clean Air Task Force
A non-traditional, fact-based environmental organization working to accelerate the technology and policy shifts needed for a zero-emissions, high-energy world.

### Composite Index
Originally developed by Karen Pan and Gwladys Boukpessi, this index evaluates:
- **System Performance (45%)**
- **Transition Readiness (25%)**
- **Technology-Specific Preparedness (35%)**

## Data Sources
- **Methodology & Index Data**:  
  - PowerPoint Presentation (original methodology)  
  - Excel File (raw and processed index data)
  
- **Additional Datasets**:  
  - Country shapefiles: ArcGIS Hub  
  - Country areas: Worldometer

## Preparation Tools
- **QGIS** (data cleaning & processing)  
- **Mapbox** (web map development)

## Key Features
1. **Index Layers & Country Selection**
   - 8 index layers and 7 countries
   - Default = Composite Index: Hydrogen & CCS
   - At least 1 index + 1 country always active

2. **Map Interaction**
   - Click on country = info popup (with bar chart & index breakdown)
   - Compare up to 7 countries at once
   - Compare Table displays:
     - Index values
     - Sub-dimensions
     - Population, Area, Density

3. **Map Controls**
   - Zoom in (double-click), full-screen toggle, rotation
   - Reset Zoom returns to initial view
   - Show Legend toggles dynamic legend

4. **Download Options**
   - Dropdown lets you export:
     - Excel file by country (`/countries/[Country].xlsx`)
     - Methodology PDF

5. **Search Functionality**
   - Type any African location → zooms in
   - Powered by MapboxGeocoder

## Technical Highlights
### Legend System
- 5-level classification (Poor → Excellent)
- `getColorLegendInfo(value)` handles class breaks

### Dynamic Index Switching
- `selectIndex(e, id)` activates index layer
- Uses `map.setLayoutProperty()` and `map.setFilter()`

### Country Filtering
- Dropdown with checkboxes (`app.countries`)
- Table builder: `updateComparisonTable()`
- Popups auto-display index and subindex info

### Bootstrap UI Integration
- Toggle buttons, modals, dropdowns
- Instruction modal flip logic: `currentPage++`, `updateInstructionPage()`

### Navigation
- `flyTo()` moves to selected country
- Top-right tools for zoom, full-screen, reset
