ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([4101382.935933, -141103.931817, 4104351.461792, -139821.073296]);
var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron ',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_HotspotHeatmap_1 = new ol.format.GeoJSON();
var features_HotspotHeatmap_1 = format_HotspotHeatmap_1.readFeatures(json_HotspotHeatmap_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotHeatmap_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotHeatmap_1.addFeatures(features_HotspotHeatmap_1);
var lyr_HotspotHeatmap_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotHeatmap_1, 
                style: style_HotspotHeatmap_1,
                popuplayertitle: 'Hotspot Heatmap',
                interactive: false,
    title: 'Hotspot Heatmap<br />\
    <img src="styles/legend/HotspotHeatmap_1_0.png" /> High<br />\
    <img src="styles/legend/HotspotHeatmap_1_1.png" /> Med<br />\
    <img src="styles/legend/HotspotHeatmap_1_2.png" /> Low<br />\
    <img src="styles/legend/HotspotHeatmap_1_3.png" /> <br />' });
var format_Mathare_Wards_2 = new ol.format.GeoJSON();
var features_Mathare_Wards_2 = format_Mathare_Wards_2.readFeatures(json_Mathare_Wards_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mathare_Wards_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mathare_Wards_2.addFeatures(features_Mathare_Wards_2);
var lyr_Mathare_Wards_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mathare_Wards_2, 
                style: style_Mathare_Wards_2,
                popuplayertitle: 'Mathare_Wards',
                interactive: false,
                title: '<img src="styles/legend/Mathare_Wards_2.png" /> Mathare_Wards'
            });
var format_Mathare_Boundary_3 = new ol.format.GeoJSON();
var features_Mathare_Boundary_3 = format_Mathare_Boundary_3.readFeatures(json_Mathare_Boundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mathare_Boundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mathare_Boundary_3.addFeatures(features_Mathare_Boundary_3);
var lyr_Mathare_Boundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mathare_Boundary_3, 
                style: style_Mathare_Boundary_3,
                popuplayertitle: 'Mathare_Boundary',
                interactive: false,
                title: '<img src="styles/legend/Mathare_Boundary_3.png" /> Mathare_Boundary'
            });
var format_Mathare_River_4 = new ol.format.GeoJSON();
var features_Mathare_River_4 = format_Mathare_River_4.readFeatures(json_Mathare_River_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mathare_River_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mathare_River_4.addFeatures(features_Mathare_River_4);
var lyr_Mathare_River_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mathare_River_4, 
                style: style_Mathare_River_4,
                popuplayertitle: 'Mathare_River',
                interactive: false,
                title: '<img src="styles/legend/Mathare_River_4.png" /> Mathare_River'
            });
var format_Champions_Network_5 = new ol.format.GeoJSON();
var features_Champions_Network_5 = format_Champions_Network_5.readFeatures(json_Champions_Network_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Champions_Network_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Champions_Network_5.addFeatures(features_Champions_Network_5);
var lyr_Champions_Network_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Champions_Network_5, 
                style: style_Champions_Network_5,
                popuplayertitle: 'Champions_Network',
                interactive: false,
    title: 'Champions_Network<br />\
    <img src="styles/legend/Champions_Network_5_0.png" /> Face CBO<br />\
    <img src="styles/legend/Champions_Network_5_1.png" /> Ghetto Farmers<br />\
    <img src="styles/legend/Champions_Network_5_2.png" /> Ghetto Foundation<br />\
    <img src="styles/legend/Champions_Network_5_3.png" /> Mathare River Adoption<br />\
    <img src="styles/legend/Champions_Network_5_4.png" /> Mathare Sub-County Community Health Workers<br />\
    <img src="styles/legend/Champions_Network_5_5.png" /> Reach Community Response Team<br />\
    <img src="styles/legend/Champions_Network_5_6.png" /> Ruaraka Social Justice Centre<br />\
    <img src="styles/legend/Champions_Network_5_7.png" /> SHOFCO<br />\
    <img src="styles/legend/Champions_Network_5_8.png" /> <br />' });
var format_Champions_6 = new ol.format.GeoJSON();
var features_Champions_6 = format_Champions_6.readFeatures(json_Champions_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Champions_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Champions_6.addFeatures(features_Champions_6);
var lyr_Champions_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Champions_6, 
                style: style_Champions_6,
                popuplayertitle: 'Champions',
                interactive: true,
                title: '<img src="styles/legend/Champions_6.png" /> Champions'
            });
var format_Organisations_7 = new ol.format.GeoJSON();
var features_Organisations_7 = format_Organisations_7.readFeatures(json_Organisations_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Organisations_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Organisations_7.addFeatures(features_Organisations_7);
var lyr_Organisations_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Organisations_7, 
                style: style_Organisations_7,
                popuplayertitle: 'Organisations',
                interactive: true,
                title: '<img src="styles/legend/Organisations_7.png" /> Organisations'
            });
var format_Evacuation_Centers_8 = new ol.format.GeoJSON();
var features_Evacuation_Centers_8 = format_Evacuation_Centers_8.readFeatures(json_Evacuation_Centers_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Evacuation_Centers_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Evacuation_Centers_8.addFeatures(features_Evacuation_Centers_8);
var lyr_Evacuation_Centers_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Evacuation_Centers_8, 
                style: style_Evacuation_Centers_8,
                popuplayertitle: 'Evacuation_Centers',
                interactive: false,
                title: '<img src="styles/legend/Evacuation_Centers_8.png" /> Evacuation_Centers'
            });

lyr_Positron_0.setVisible(true);lyr_HotspotHeatmap_1.setVisible(true);lyr_Mathare_Wards_2.setVisible(true);lyr_Mathare_Boundary_3.setVisible(true);lyr_Mathare_River_4.setVisible(true);lyr_Champions_Network_5.setVisible(false);lyr_Champions_6.setVisible(true);lyr_Organisations_7.setVisible(true);lyr_Evacuation_Centers_8.setVisible(true);
var layersList = [lyr_Positron_0,lyr_HotspotHeatmap_1,lyr_Mathare_Wards_2,lyr_Mathare_Boundary_3,lyr_Mathare_River_4,lyr_Champions_Network_5,lyr_Champions_6,lyr_Organisations_7,lyr_Evacuation_Centers_8];
lyr_HotspotHeatmap_1.set('fieldAliases', {'id': 'id', 'Hotspot_ID': 'Hotspot_ID', 'Severity': 'Severity', });
lyr_Mathare_Wards_2.set('fieldAliases', {'id': 'id', 'Ward Name': 'Ward Name', });
lyr_Mathare_Boundary_3.set('fieldAliases', {'id': 'id', 'Boundary': 'Boundary', });
lyr_Mathare_River_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Champions_Network_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Category': 'Category', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Year Established': 'Year Established', 'Members Count': 'Members Count', 'Function': 'Function', 'Name_2': 'Name_2', 'Category_2': 'Category_2', 'Latitude_2': 'Latitude_2', 'Longitude_2': 'Longitude_2', });
lyr_Champions_6.set('fieldAliases', {'Name': 'Name', 'Organisation': 'Organisation', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Organisations_7.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Year Established': 'Year Established', 'Members Count': 'Members Count', 'Function': 'Function', 'Description': 'Description', 'Website': 'Website', });
lyr_Evacuation_Centers_8.set('fieldAliases', {'Name': 'Name', 'Category': 'Category', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_HotspotHeatmap_1.set('fieldImages', {'id': 'TextEdit', 'Hotspot_ID': 'TextEdit', 'Severity': 'TextEdit', });
lyr_Mathare_Wards_2.set('fieldImages', {'id': 'TextEdit', 'Ward Name': 'TextEdit', });
lyr_Mathare_Boundary_3.set('fieldImages', {'id': 'TextEdit', 'Boundary': 'TextEdit', });
lyr_Mathare_River_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_Champions_Network_5.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Category': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Year Established': 'DateTime', 'Members Count': 'Range', 'Function': 'TextEdit', 'Name_2': 'TextEdit', 'Category_2': 'TextEdit', 'Latitude_2': 'TextEdit', 'Longitude_2': 'TextEdit', });
lyr_Champions_6.set('fieldImages', {'Name': 'TextEdit', 'Organisation': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Organisations_7.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Year Established': 'Range', 'Members Count': 'TextEdit', 'Function': 'TextEdit', 'Description': 'TextEdit', 'Website': 'TextEdit', });
lyr_Evacuation_Centers_8.set('fieldImages', {'Name': 'TextEdit', 'Category': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_HotspotHeatmap_1.set('fieldLabels', {'id': 'hidden field', 'Hotspot_ID': 'hidden field', 'Severity': 'inline label - visible with data', });
lyr_Mathare_Wards_2.set('fieldLabels', {'id': 'hidden field', 'Ward Name': 'hidden field', });
lyr_Mathare_Boundary_3.set('fieldLabels', {'id': 'no label', 'Boundary': 'no label', });
lyr_Mathare_River_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Champions_Network_5.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Category': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Year Established': 'no label', 'Members Count': 'no label', 'Function': 'no label', 'Name_2': 'no label', 'Category_2': 'no label', 'Latitude_2': 'no label', 'Longitude_2': 'no label', });
lyr_Champions_6.set('fieldLabels', {'Name': 'hidden field', 'Organisation': 'header label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Organisations_7.set('fieldLabels', {'fid': 'hidden field', 'Name': 'header label - visible with data', 'Type': 'header label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Year Established': 'header label - visible with data', 'Members Count': 'header label - visible with data', 'Function': 'header label - visible with data', 'Description': 'hidden field', 'Website': 'no label', });
lyr_Evacuation_Centers_8.set('fieldLabels', {'Name': 'no label', 'Category': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Evacuation_Centers_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});