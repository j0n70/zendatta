var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PinkLady_1 = new ol.format.GeoJSON();
var features_PinkLady_1 = format_PinkLady_1.readFeatures(json_PinkLady_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PinkLady_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PinkLady_1.addFeatures(features_PinkLady_1);
var lyr_PinkLady_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PinkLady_1, 
                style: style_PinkLady_1,
                popuplayertitle: "Pink Lady",
                interactive: true,
                title: '<img src="styles/legend/PinkLady_1.png" /> Pink Lady'
            });
var format_Kiku_2 = new ol.format.GeoJSON();
var features_Kiku_2 = format_Kiku_2.readFeatures(json_Kiku_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kiku_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kiku_2.addFeatures(features_Kiku_2);
var lyr_Kiku_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kiku_2, 
                style: style_Kiku_2,
                popuplayertitle: "Kiku",
                interactive: true,
                title: '<img src="styles/legend/Kiku_2.png" /> Kiku'
            });
var format_Galaxy_3 = new ol.format.GeoJSON();
var features_Galaxy_3 = format_Galaxy_3.readFeatures(json_Galaxy_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Galaxy_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Galaxy_3.addFeatures(features_Galaxy_3);
var lyr_Galaxy_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Galaxy_3, 
                style: style_Galaxy_3,
                popuplayertitle: "Galaxy",
                interactive: true,
                title: '<img src="styles/legend/Galaxy_3.png" /> Galaxy'
            });
var format_Dazzle_4 = new ol.format.GeoJSON();
var features_Dazzle_4 = format_Dazzle_4.readFeatures(json_Dazzle_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dazzle_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dazzle_4.addFeatures(features_Dazzle_4);
var lyr_Dazzle_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dazzle_4, 
                style: style_Dazzle_4,
                popuplayertitle: "Dazzle",
                interactive: true,
                title: '<img src="styles/legend/Dazzle_4.png" /> Dazzle'
            });
var format_CM_5 = new ol.format.GeoJSON();
var features_CM_5 = format_CM_5.readFeatures(json_CM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CM_5.addFeatures(features_CM_5);
var lyr_CM_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CM_5, 
                style: style_CM_5,
                popuplayertitle: "CM",
                interactive: true,
                title: '<img src="styles/legend/CM_5.png" /> CM'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PinkLady_1.setVisible(true);lyr_Kiku_2.setVisible(true);lyr_Galaxy_3.setVisible(true);lyr_Dazzle_4.setVisible(true);lyr_CM_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PinkLady_1,lyr_Kiku_2,lyr_Galaxy_3,lyr_Dazzle_4,lyr_CM_5];
lyr_PinkLady_1.set('fieldAliases', {'Block': 'Block', 'Rows': 'Rows', 'Sum': 'Sum', 'Sub': 'Sub', 'Area': 'Area', });
lyr_Kiku_2.set('fieldAliases', {'Block': 'Block', 'Rows': 'Rows', 'Sum': 'Sum', 'Sub': 'Sub', 'Area': 'Area', });
lyr_Galaxy_3.set('fieldAliases', {'Block': 'Block', 'Rows': 'Rows', 'Sum': 'Sum', 'Sub': 'Sub', 'Area': 'Area', });
lyr_Dazzle_4.set('fieldAliases', {'Block': 'Block', 'Rows': 'Rows', 'Sum': 'Sum', 'Sub': 'Sub', 'Area': 'Area', });
lyr_CM_5.set('fieldAliases', {'Trap': 'Trap', });
lyr_PinkLady_1.set('fieldImages', {'Block': 'TextEdit', 'Rows': 'Hidden', 'Sum': 'Hidden', 'Sub': 'TextEdit', 'Area': 'TextEdit', });
lyr_Kiku_2.set('fieldImages', {'Block': 'TextEdit', 'Rows': 'Hidden', 'Sum': 'Hidden', 'Sub': 'TextEdit', 'Area': 'TextEdit', });
lyr_Galaxy_3.set('fieldImages', {'Block': 'TextEdit', 'Rows': 'Hidden', 'Sum': 'Hidden', 'Sub': 'TextEdit', 'Area': 'TextEdit', });
lyr_Dazzle_4.set('fieldImages', {'Block': 'TextEdit', 'Rows': 'Hidden', 'Sum': 'Hidden', 'Sub': 'TextEdit', 'Area': 'TextEdit', });
lyr_CM_5.set('fieldImages', {'Trap': '', });
lyr_PinkLady_1.set('fieldLabels', {'Block': 'no label', 'Sub': 'no label', 'Area': 'no label', });
lyr_Kiku_2.set('fieldLabels', {'Block': 'no label', 'Sub': 'no label', 'Area': 'no label', });
lyr_Galaxy_3.set('fieldLabels', {'Block': 'no label', 'Sub': 'no label', 'Area': 'no label', });
lyr_Dazzle_4.set('fieldLabels', {'Block': 'no label', 'Sub': 'no label', 'Area': 'no label', });
lyr_CM_5.set('fieldLabels', {'Trap': 'no label', });
lyr_CM_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});