var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_viewer_Arable_dissolved_1 = new ol.format.GeoJSON();
var features_viewer_Arable_dissolved_1 = format_viewer_Arable_dissolved_1.readFeatures(json_viewer_Arable_dissolved_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_viewer_Arable_dissolved_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_viewer_Arable_dissolved_1.addFeatures(features_viewer_Arable_dissolved_1);
var lyr_viewer_Arable_dissolved_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_viewer_Arable_dissolved_1, 
                style: style_viewer_Arable_dissolved_1,
                popuplayertitle: "viewer_Arable_dissolved",
                interactive: true,
                title: '<img src="styles/legend/viewer_Arable_dissolved_1.png" /> viewer_Arable_dissolved'
            });
var format_viewer_GMPV_2 = new ol.format.GeoJSON();
var features_viewer_GMPV_2 = format_viewer_GMPV_2.readFeatures(json_viewer_GMPV_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_viewer_GMPV_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_viewer_GMPV_2.addFeatures(features_viewer_GMPV_2);
var lyr_viewer_GMPV_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_viewer_GMPV_2, 
                style: style_viewer_GMPV_2,
                popuplayertitle: "viewer_GMPV",
                interactive: true,
                title: '<img src="styles/legend/viewer_GMPV_2.png" /> viewer_GMPV'
            });
var format_viewer_forest_dissolved_3 = new ol.format.GeoJSON();
var features_viewer_forest_dissolved_3 = format_viewer_forest_dissolved_3.readFeatures(json_viewer_forest_dissolved_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_viewer_forest_dissolved_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_viewer_forest_dissolved_3.addFeatures(features_viewer_forest_dissolved_3);
var lyr_viewer_forest_dissolved_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_viewer_forest_dissolved_3, 
                style: style_viewer_forest_dissolved_3,
                popuplayertitle: "viewer_forest_dissolved",
                interactive: true,
                title: '<img src="styles/legend/viewer_forest_dissolved_3.png" /> viewer_forest_dissolved'
            });
var format_viewer_Grassland_dissolved_4 = new ol.format.GeoJSON();
var features_viewer_Grassland_dissolved_4 = format_viewer_Grassland_dissolved_4.readFeatures(json_viewer_Grassland_dissolved_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_viewer_Grassland_dissolved_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_viewer_Grassland_dissolved_4.addFeatures(features_viewer_Grassland_dissolved_4);
var lyr_viewer_Grassland_dissolved_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_viewer_Grassland_dissolved_4, 
                style: style_viewer_Grassland_dissolved_4,
                popuplayertitle: "viewer_Grassland_dissolved",
                interactive: true,
                title: '<img src="styles/legend/viewer_Grassland_dissolved_4.png" /> viewer_Grassland_dissolved'
            });
var format_viewer_Protection_dissolved_5 = new ol.format.GeoJSON();
var features_viewer_Protection_dissolved_5 = format_viewer_Protection_dissolved_5.readFeatures(json_viewer_Protection_dissolved_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_viewer_Protection_dissolved_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_viewer_Protection_dissolved_5.addFeatures(features_viewer_Protection_dissolved_5);
var lyr_viewer_Protection_dissolved_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_viewer_Protection_dissolved_5, 
                style: style_viewer_Protection_dissolved_5,
                popuplayertitle: "viewer_Protection_dissolved",
                interactive: true,
                title: '<img src="styles/legend/viewer_Protection_dissolved_5.png" /> viewer_Protection_dissolved'
            });

lyr_OSMStandard_0.setVisible(true);lyr_viewer_Arable_dissolved_1.setVisible(true);lyr_viewer_GMPV_2.setVisible(true);lyr_viewer_forest_dissolved_3.setVisible(true);lyr_viewer_Grassland_dissolved_4.setVisible(true);lyr_viewer_Protection_dissolved_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_viewer_Arable_dissolved_1,lyr_viewer_GMPV_2,lyr_viewer_forest_dissolved_3,lyr_viewer_Grassland_dissolved_4,lyr_viewer_Protection_dissolved_5];
lyr_viewer_Arable_dissolved_1.set('fieldAliases', {'fid': 'fid', 'ID_PARCEL': 'ID_PARCEL', 'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', 'CULTURE_D1': 'CULTURE_D1', 'CULTURE_D2': 'CULTURE_D2', });
lyr_viewer_GMPV_2.set('fieldAliases', {'fid': 'fid', 'value': 'value', 'Area_ha': 'Area_ha', 'Suitabilit': 'Suitabilit', });
lyr_viewer_forest_dissolved_3.set('fieldAliases', {'ID': 'ID', 'CODE_TFV': 'CODE_TFV', 'TFV': 'TFV', 'TFV_G11': 'TFV_G11', 'ESSENCE': 'ESSENCE', });
lyr_viewer_Grassland_dissolved_4.set('fieldAliases', {'Area_ha': 'Area_ha', });
lyr_viewer_Protection_dissolved_5.set('fieldAliases', {'SITENAME': 'SITENAME', 'NOM_SITE': 'NOM_SITE', });
lyr_viewer_Arable_dissolved_1.set('fieldImages', {'fid': '', 'ID_PARCEL': '', 'SURF_PARC': '', 'CODE_CULTU': '', 'CODE_GROUP': '', 'CULTURE_D1': '', 'CULTURE_D2': '', });
lyr_viewer_GMPV_2.set('fieldImages', {'fid': '', 'value': '', 'Area_ha': '', 'Suitabilit': '', });
lyr_viewer_forest_dissolved_3.set('fieldImages', {'ID': '', 'CODE_TFV': '', 'TFV': '', 'TFV_G11': '', 'ESSENCE': '', });
lyr_viewer_Grassland_dissolved_4.set('fieldImages', {'Area_ha': '', });
lyr_viewer_Protection_dissolved_5.set('fieldImages', {'SITENAME': '', 'NOM_SITE': '', });
lyr_viewer_Arable_dissolved_1.set('fieldLabels', {'fid': 'no label', 'ID_PARCEL': 'no label', 'SURF_PARC': 'no label', 'CODE_CULTU': 'no label', 'CODE_GROUP': 'no label', 'CULTURE_D1': 'no label', 'CULTURE_D2': 'no label', });
lyr_viewer_GMPV_2.set('fieldLabels', {'fid': 'no label', 'value': 'no label', 'Area_ha': 'no label', 'Suitabilit': 'no label', });
lyr_viewer_forest_dissolved_3.set('fieldLabels', {'ID': 'no label', 'CODE_TFV': 'no label', 'TFV': 'no label', 'TFV_G11': 'no label', 'ESSENCE': 'no label', });
lyr_viewer_Grassland_dissolved_4.set('fieldLabels', {'Area_ha': 'no label', });
lyr_viewer_Protection_dissolved_5.set('fieldLabels', {'SITENAME': 'hidden field', 'NOM_SITE': 'hidden field', });
lyr_viewer_Protection_dissolved_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});