var wms_layers = [];


        var lyr_mapabase_0 = new ol.layer.Tile({
            'title': 'mapa base',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_limiteCG_1 = new ol.format.GeoJSON();
var features_limiteCG_1 = format_limiteCG_1.readFeatures(json_limiteCG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limiteCG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limiteCG_1.addFeatures(features_limiteCG_1);
var lyr_limiteCG_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_limiteCG_1, 
                style: style_limiteCG_1,
                interactive: true,
                title: '<img src="styles/legend/limiteCG_1.png" /> limite CG'
            });
var format_quadras_2 = new ol.format.GeoJSON();
var features_quadras_2 = format_quadras_2.readFeatures(json_quadras_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_quadras_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_quadras_2.addFeatures(features_quadras_2);
var lyr_quadras_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_quadras_2, 
                style: style_quadras_2,
                interactive: true,
                title: '<img src="styles/legend/quadras_2.png" /> quadras'
            });
var format_InternetGratuita_3 = new ol.format.GeoJSON();
var features_InternetGratuita_3 = format_InternetGratuita_3.readFeatures(json_InternetGratuita_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InternetGratuita_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InternetGratuita_3.addFeatures(features_InternetGratuita_3);
var lyr_InternetGratuita_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InternetGratuita_3, 
                style: style_InternetGratuita_3,
                interactive: true,
                title: '<img src="styles/legend/InternetGratuita_3.png" /> Internet Gratuita'
            });

lyr_mapabase_0.setVisible(true);lyr_limiteCG_1.setVisible(true);lyr_quadras_2.setVisible(false);lyr_InternetGratuita_3.setVisible(true);
var layersList = [lyr_mapabase_0,lyr_limiteCG_1,lyr_quadras_2,lyr_InternetGratuita_3];
lyr_limiteCG_1.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_quadras_2.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'CD_QUADRA': 'CD_QUADRA', 'CD_FACE': 'CD_FACE', 'NM_TIP_LOG': 'NM_TIP_LOG', 'NM_TIT_LOG': 'NM_TIT_LOG', 'NM_LOG': 'NM_LOG', 'TOT_RES': 'TOT_RES', 'TOT_GERAL': 'TOT_GERAL', });
lyr_InternetGratuita_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_limiteCG_1.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_quadras_2.set('fieldImages', {'CD_SETOR': 'TextEdit', 'CD_QUADRA': 'TextEdit', 'CD_FACE': 'TextEdit', 'NM_TIP_LOG': 'TextEdit', 'NM_TIT_LOG': 'TextEdit', 'NM_LOG': 'TextEdit', 'TOT_RES': 'TextEdit', 'TOT_GERAL': 'TextEdit', });
lyr_InternetGratuita_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_limiteCG_1.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_quadras_2.set('fieldLabels', {'CD_SETOR': 'no label', 'CD_QUADRA': 'no label', 'CD_FACE': 'no label', 'NM_TIP_LOG': 'no label', 'NM_TIT_LOG': 'no label', 'NM_LOG': 'no label', 'TOT_RES': 'no label', 'TOT_GERAL': 'no label', });
lyr_InternetGratuita_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_InternetGratuita_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});