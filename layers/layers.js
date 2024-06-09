var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ProduktifitasAkuiferfix_1 = new ol.format.GeoJSON();
var features_ProduktifitasAkuiferfix_1 = format_ProduktifitasAkuiferfix_1.readFeatures(json_ProduktifitasAkuiferfix_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProduktifitasAkuiferfix_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProduktifitasAkuiferfix_1.addFeatures(features_ProduktifitasAkuiferfix_1);
var lyr_ProduktifitasAkuiferfix_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProduktifitasAkuiferfix_1, 
                style: style_ProduktifitasAkuiferfix_1,
                popuplayertitle: "Produktifitas Akuifer fix",
                interactive: true,
    title: 'Produktifitas Akuifer fix<br />\
    <img src="styles/legend/ProduktifitasAkuiferfix_1_0.png" /> Langka<br />\
    <img src="styles/legend/ProduktifitasAkuiferfix_1_1.png" /> Produktif<br />\
    <img src="styles/legend/ProduktifitasAkuiferfix_1_2.png" /> Produktif Kecil<br />\
    <img src="styles/legend/ProduktifitasAkuiferfix_1_3.png" /> Produktif Tinggi<br />\
    <img src="styles/legend/ProduktifitasAkuiferfix_1_4.png" /> Produktif Sedang<br />'
        });
var format_konturwatertable_2 = new ol.format.GeoJSON();
var features_konturwatertable_2 = format_konturwatertable_2.readFeatures(json_konturwatertable_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_konturwatertable_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_konturwatertable_2.addFeatures(features_konturwatertable_2);
var lyr_konturwatertable_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_konturwatertable_2, 
                style: style_konturwatertable_2,
                popuplayertitle: "kontur watertable",
                interactive: true,
                    title: '<img src="styles/legend/konturwatertable_2.png" /> kontur watertable'
                });
var format_LampungSelatan_3 = new ol.format.GeoJSON();
var features_LampungSelatan_3 = format_LampungSelatan_3.readFeatures(json_LampungSelatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LampungSelatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LampungSelatan_3.addFeatures(features_LampungSelatan_3);
var lyr_LampungSelatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LampungSelatan_3, 
                style: style_LampungSelatan_3,
                popuplayertitle: "Lampung Selatan",
                interactive: true,
                    title: '<img src="styles/legend/LampungSelatan_3.png" /> Lampung Selatan'
                });
var format_SungaiLamsel_4 = new ol.format.GeoJSON();
var features_SungaiLamsel_4 = format_SungaiLamsel_4.readFeatures(json_SungaiLamsel_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SungaiLamsel_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SungaiLamsel_4.addFeatures(features_SungaiLamsel_4);
var lyr_SungaiLamsel_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SungaiLamsel_4, 
                style: style_SungaiLamsel_4,
                popuplayertitle: "Sungai Lamsel",
                interactive: true,
    title: 'Sungai Lamsel<br />\
    <img src="styles/legend/SungaiLamsel_4_0.png" /> 1<br />\
    <img src="styles/legend/SungaiLamsel_4_1.png" /> 2<br />\
    <img src="styles/legend/SungaiLamsel_4_2.png" /> 3<br />\
    <img src="styles/legend/SungaiLamsel_4_3.png" /> 4<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_ProduktifitasAkuiferfix_1.setVisible(true);lyr_konturwatertable_2.setVisible(true);lyr_LampungSelatan_3.setVisible(true);lyr_SungaiLamsel_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ProduktifitasAkuiferfix_1,lyr_konturwatertable_2,lyr_LampungSelatan_3,lyr_SungaiLamsel_4];
lyr_ProduktifitasAkuiferfix_1.set('fieldAliases', {'objectid_1': 'objectid_1', 'objectid': 'objectid', 'sys_aq': 'sys_aq', 'prod': 'prod', 'keterusan': 'keterusan', 'st_length_': 'st_length_', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_konturwatertable_2.set('fieldAliases', {'Id': 'Id', 'Contour': 'Contour', 'Shape_Leng': 'Shape_Leng', });
lyr_LampungSelatan_3.set('fieldAliases', {'Id': 'Id', 'KODE_UNSUR': 'KODE_UNSUR', 'KABUPATEN': 'KABUPATEN', 'PROVINSI': 'PROVINSI', 'PELAKSANA': 'PELAKSANA', 'UPDATE_': 'UPDATE_', 'LUAS': 'LUAS', 'LUAS_HA': 'LUAS_HA', 'Jumlah_Peg': 'Jumlah_Peg', 'Jumlah_P_1': 'Jumlah_P_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SungaiLamsel_4.set('fieldAliases', {'grid_code': 'grid_code', 'SUM_grid_c': 'SUM_grid_c', 'Shape_Leng': 'Shape_Leng', 'Ordo_Sunga': 'Ordo_Sunga', });
lyr_ProduktifitasAkuiferfix_1.set('fieldImages', {'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'sys_aq': 'TextEdit', 'prod': 'TextEdit', 'keterusan': 'TextEdit', 'st_length_': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_konturwatertable_2.set('fieldImages', {'Id': 'TextEdit', 'Contour': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_LampungSelatan_3.set('fieldImages', {'Id': 'TextEdit', 'KODE_UNSUR': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROVINSI': 'TextEdit', 'PELAKSANA': 'TextEdit', 'UPDATE_': 'TextEdit', 'LUAS': 'TextEdit', 'LUAS_HA': 'TextEdit', 'Jumlah_Peg': 'TextEdit', 'Jumlah_P_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SungaiLamsel_4.set('fieldImages', {'grid_code': 'TextEdit', 'SUM_grid_c': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Ordo_Sunga': 'TextEdit', });
lyr_ProduktifitasAkuiferfix_1.set('fieldLabels', {'objectid_1': 'hidden field', 'objectid': 'hidden field', 'sys_aq': 'hidden field', 'prod': 'inline label - always visible', 'keterusan': 'hidden field', 'st_length_': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'no label', });
lyr_konturwatertable_2.set('fieldLabels', {'Id': 'hidden field', 'Contour': 'inline label - always visible', 'Shape_Leng': 'hidden field', });
lyr_LampungSelatan_3.set('fieldLabels', {'Id': 'hidden field', 'KODE_UNSUR': 'hidden field', 'KABUPATEN': 'inline label - always visible', 'PROVINSI': 'hidden field', 'PELAKSANA': 'hidden field', 'UPDATE_': 'hidden field', 'LUAS': 'hidden field', 'LUAS_HA': 'hidden field', 'Jumlah_Peg': 'hidden field', 'Jumlah_P_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SungaiLamsel_4.set('fieldLabels', {'grid_code': 'hidden field', 'SUM_grid_c': 'hidden field', 'Shape_Leng': 'hidden field', 'Ordo_Sunga': 'hidden field', });
lyr_SungaiLamsel_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});