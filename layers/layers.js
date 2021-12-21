ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Khuvcnghincu_1 = new ol.format.GeoJSON();
var features_Khuvcnghincu_1 = format_Khuvcnghincu_1.readFeatures(json_Khuvcnghincu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Khuvcnghincu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Khuvcnghincu_1.addFeatures(features_Khuvcnghincu_1);
var lyr_Khuvcnghincu_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Khuvcnghincu_1, 
                style: style_Khuvcnghincu_1,
                interactive: true,
                title: '<img src="styles/legend/Khuvcnghincu_1.png" /> Khu vực nghiên cứu'
            });
var lyr_Tcgiticao100mmsNgunhttpsglobalwindatlasinfo_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Tốc độ gió tại độ cao 100m (m/s) (Nguồn: https://globalwindatlas.info/)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Tcgiticao100mmsNgunhttpsglobalwindatlasinfo_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11376748.730527, 732783.116061, 12528627.161511, 2478332.590759]
                            })
                        });
var lyr_ahnhymNgunhttpswwwgebconet_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Địa hình đáy (m) (Nguồn: https://www.gebco.net/)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ahnhymNgunhttpswwwgebconet_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11376851.959073, 732603.595173, 12528544.857571, 2452097.613923]
                            })
                        });
var format_Khuvcrabinkimn_4 = new ol.format.GeoJSON();
var features_Khuvcrabinkimn_4 = format_Khuvcrabinkimn_4.readFeatures(json_Khuvcrabinkimn_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Khuvcrabinkimn_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Khuvcrabinkimn_4.addFeatures(features_Khuvcrabinkimn_4);
var lyr_Khuvcrabinkimn_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Khuvcrabinkimn_4, 
                style: style_Khuvcrabinkimn_4,
                interactive: true,
    title: 'Khu vực rùa biển kiếm ăn<br />\
    <img src="styles/legend/Khuvcrabinkimn_4_0.png" /> Đồi mồi<br />\
    <img src="styles/legend/Khuvcrabinkimn_4_1.png" /> Đồi mồi Dứa<br />\
    <img src="styles/legend/Khuvcrabinkimn_4_2.png" /> Quản đồng<br />\
    <img src="styles/legend/Khuvcrabinkimn_4_3.png" /> Vích<br />'
        });
var format_Cctuyncpinternetngm_5 = new ol.format.GeoJSON();
var features_Cctuyncpinternetngm_5 = format_Cctuyncpinternetngm_5.readFeatures(json_Cctuyncpinternetngm_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cctuyncpinternetngm_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cctuyncpinternetngm_5.addFeatures(features_Cctuyncpinternetngm_5);
var lyr_Cctuyncpinternetngm_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cctuyncpinternetngm_5, 
                style: style_Cctuyncpinternetngm_5,
                interactive: true,
                title: '<img src="styles/legend/Cctuyncpinternetngm_5.png" /> Các tuyến cáp internet ngầm'
            });
var format_NgtrngcamtsnghcNgunVinNghincuHisn_6 = new ol.format.GeoJSON();
var features_NgtrngcamtsnghcNgunVinNghincuHisn_6 = format_NgtrngcamtsnghcNgunVinNghincuHisn_6.readFeatures(json_NgtrngcamtsnghcNgunVinNghincuHisn_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NgtrngcamtsnghcNgunVinNghincuHisn_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NgtrngcamtsnghcNgunVinNghincuHisn_6.addFeatures(features_NgtrngcamtsnghcNgunVinNghincuHisn_6);
var lyr_NgtrngcamtsnghcNgunVinNghincuHisn_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NgtrngcamtsnghcNgunVinNghincuHisn_6, 
                style: style_NgtrngcamtsnghcNgunVinNghincuHisn_6,
                interactive: true,
    title: 'Ngư trường của một số nghề cá (Nguồn: Viện Nghiên cứu Hải sản)<br />\
    <img src="styles/legend/NgtrngcamtsnghcNgunVinNghincuHisn_6_0.png" /> Câu cá ngừ bằng nghề cây tay/câu vàng <br />\
    <img src="styles/legend/NgtrngcamtsnghcNgunVinNghincuHisn_6_1.png" /> Nghề giã ván<br />\
    <img src="styles/legend/NgtrngcamtsnghcNgunVinNghincuHisn_6_2.png" /> Nghề kéo đôi<br />\
    <img src="styles/legend/NgtrngcamtsnghcNgunVinNghincuHisn_6_3.png" /> Nghề lưới chụp<br />\
    <img src="styles/legend/NgtrngcamtsnghcNgunVinNghincuHisn_6_4.png" /> Nghề rê<br />\
    <img src="styles/legend/NgtrngcamtsnghcNgunVinNghincuHisn_6_5.png" /> Nghề vây<br />'
        });
var format_Cngbin_7 = new ol.format.GeoJSON();
var features_Cngbin_7 = format_Cngbin_7.readFeatures(json_Cngbin_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cngbin_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cngbin_7.addFeatures(features_Cngbin_7);
var lyr_Cngbin_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cngbin_7, 
                style: style_Cngbin_7,
                interactive: true,
                title: '<img src="styles/legend/Cngbin_7.png" /> Cảng biển'
            });
var format_Ccmdukh_8 = new ol.format.GeoJSON();
var features_Ccmdukh_8 = format_Ccmdukh_8.readFeatures(json_Ccmdukh_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ccmdukh_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ccmdukh_8.addFeatures(features_Ccmdukh_8);
var lyr_Ccmdukh_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ccmdukh_8, 
                style: style_Ccmdukh_8,
                interactive: true,
                title: '<img src="styles/legend/Ccmdukh_8.png" /> Các mỏ dầu/khí'
            });
var format_Ccngngdnkhvtlin_9 = new ol.format.GeoJSON();
var features_Ccngngdnkhvtlin_9 = format_Ccngngdnkhvtlin_9.readFeatures(json_Ccngngdnkhvtlin_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ccngngdnkhvtlin_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ccngngdnkhvtlin_9.addFeatures(features_Ccngngdnkhvtlin_9);
var lyr_Ccngngdnkhvtlin_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ccngngdnkhvtlin_9, 
                style: style_Ccngngdnkhvtlin_9,
                interactive: true,
                title: '<img src="styles/legend/Ccngngdnkhvtlin_9.png" /> Các đường ống dẫn khí về đất liền'
            });
var format_Trmbinp_10 = new ol.format.GeoJSON();
var features_Trmbinp_10 = format_Trmbinp_10.readFeatures(json_Trmbinp_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trmbinp_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trmbinp_10.addFeatures(features_Trmbinp_10);
var lyr_Trmbinp_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trmbinp_10, 
                style: style_Trmbinp_10,
                interactive: true,
    title: 'Trạm biến áp<br />\
    <img src="styles/legend/Trmbinp_10_0.png" /> 110 kV<br />\
    <img src="styles/legend/Trmbinp_10_1.png" /> 220 kV<br />\
    <img src="styles/legend/Trmbinp_10_2.png" /> 500 kV<br />'
        });
var format_ngdytiin_11 = new ol.format.GeoJSON();
var features_ngdytiin_11 = format_ngdytiin_11.readFeatures(json_ngdytiin_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ngdytiin_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ngdytiin_11.addFeatures(features_ngdytiin_11);
var lyr_ngdytiin_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ngdytiin_11, 
                style: style_ngdytiin_11,
                interactive: true,
    title: 'Đường dây tải điện<br />\
    <img src="styles/legend/ngdytiin_11_0.png" /> 110 kV<br />\
    <img src="styles/legend/ngdytiin_11_1.png" /> 220 kV<br />\
    <img src="styles/legend/ngdytiin_11_2.png" /> 500 kV<br />'
        });
var format_Khubotn_12 = new ol.format.GeoJSON();
var features_Khubotn_12 = format_Khubotn_12.readFeatures(json_Khubotn_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Khubotn_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Khubotn_12.addFeatures(features_Khubotn_12);
var lyr_Khubotn_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Khubotn_12, 
                style: style_Khubotn_12,
                interactive: true,
                title: '<img src="styles/legend/Khubotn_12.png" /> Khu bảo tồn'
            });
var format_Khuvcctimnngxydngtrangtriingingoikhimngni_13 = new ol.format.GeoJSON();
var features_Khuvcctimnngxydngtrangtriingingoikhimngni_13 = format_Khuvcctimnngxydngtrangtriingingoikhimngni_13.readFeatures(json_Khuvcctimnngxydngtrangtriingingoikhimngni_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Khuvcctimnngxydngtrangtriingingoikhimngni_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Khuvcctimnngxydngtrangtriingingoikhimngni_13.addFeatures(features_Khuvcctimnngxydngtrangtriingingoikhimngni_13);
var lyr_Khuvcctimnngxydngtrangtriingingoikhimngni_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Khuvcctimnngxydngtrangtriingingoikhimngni_13, 
                style: style_Khuvcctimnngxydngtrangtriingingoikhimngni_13,
                interactive: true,
                title: '<img src="styles/legend/Khuvcctimnngxydngtrangtriingingoikhimngni_13.png" /> Khu vực có tiềm năng xây dựng trang trại điện gió ngoài khơi (móng nổi)'
            });
var format_Khuvcctimnngxydngtrangtriingingoikhimngcnh_14 = new ol.format.GeoJSON();
var features_Khuvcctimnngxydngtrangtriingingoikhimngcnh_14 = format_Khuvcctimnngxydngtrangtriingingoikhimngcnh_14.readFeatures(json_Khuvcctimnngxydngtrangtriingingoikhimngcnh_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Khuvcctimnngxydngtrangtriingingoikhimngcnh_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Khuvcctimnngxydngtrangtriingingoikhimngcnh_14.addFeatures(features_Khuvcctimnngxydngtrangtriingingoikhimngcnh_14);
var lyr_Khuvcctimnngxydngtrangtriingingoikhimngcnh_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Khuvcctimnngxydngtrangtriingingoikhimngcnh_14, 
                style: style_Khuvcctimnngxydngtrangtriingingoikhimngcnh_14,
                interactive: true,
                title: '<img src="styles/legend/Khuvcctimnngxydngtrangtriingingoikhimngcnh_14.png" /> Khu vực có tiềm năng xây dựng trang trại điện gió ngoài khơi (móng cố định)'
            });
var format_Khuvcctimnngxydngtrangtriingignb_15 = new ol.format.GeoJSON();
var features_Khuvcctimnngxydngtrangtriingignb_15 = format_Khuvcctimnngxydngtrangtriingignb_15.readFeatures(json_Khuvcctimnngxydngtrangtriingignb_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Khuvcctimnngxydngtrangtriingignb_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Khuvcctimnngxydngtrangtriingignb_15.addFeatures(features_Khuvcctimnngxydngtrangtriingignb_15);
var lyr_Khuvcctimnngxydngtrangtriingignb_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Khuvcctimnngxydngtrangtriingignb_15, 
                style: style_Khuvcctimnngxydngtrangtriingignb_15,
                interactive: true,
                title: '<img src="styles/legend/Khuvcctimnngxydngtrangtriingignb_15.png" /> Khu vực có tiềm năng xây dựng trang trại điện gió gần bờ'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Khuvcnghincu_1.setVisible(true);lyr_Tcgiticao100mmsNgunhttpsglobalwindatlasinfo_2.setVisible(true);lyr_ahnhymNgunhttpswwwgebconet_3.setVisible(true);lyr_Khuvcrabinkimn_4.setVisible(true);lyr_Cctuyncpinternetngm_5.setVisible(true);lyr_NgtrngcamtsnghcNgunVinNghincuHisn_6.setVisible(true);lyr_Cngbin_7.setVisible(true);lyr_Ccmdukh_8.setVisible(true);lyr_Ccngngdnkhvtlin_9.setVisible(true);lyr_Trmbinp_10.setVisible(true);lyr_ngdytiin_11.setVisible(true);lyr_Khubotn_12.setVisible(true);lyr_Khuvcctimnngxydngtrangtriingingoikhimngni_13.setVisible(true);lyr_Khuvcctimnngxydngtrangtriingingoikhimngcnh_14.setVisible(true);lyr_Khuvcctimnngxydngtrangtriingignb_15.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Khuvcnghincu_1,lyr_Tcgiticao100mmsNgunhttpsglobalwindatlasinfo_2,lyr_ahnhymNgunhttpswwwgebconet_3,lyr_Khuvcrabinkimn_4,lyr_Cctuyncpinternetngm_5,lyr_NgtrngcamtsnghcNgunVinNghincuHisn_6,lyr_Cngbin_7,lyr_Ccmdukh_8,lyr_Ccngngdnkhvtlin_9,lyr_Trmbinp_10,lyr_ngdytiin_11,lyr_Khubotn_12,lyr_Khuvcctimnngxydngtrangtriingingoikhimngni_13,lyr_Khuvcctimnngxydngtrangtriingingoikhimngcnh_14,lyr_Khuvcctimnngxydngtrangtriingignb_15];
lyr_Khuvcnghincu_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Khuvcrabinkimn_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'rua': 'rua', 'X': 'X', 'Y': 'Y', });
lyr_Cctuyncpinternetngm_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TYPE': 'TYPE', 'STATUS': 'STATUS', 'SOURCE': 'SOURCE', 'Shape_Length': 'Shape_Length', });
lyr_NgtrngcamtsnghcNgunVinNghincuHisn_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Ngheca': 'Ngheca', 'X': 'X', 'Y': 'Y', });
lyr_Cngbin_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PORT_NAME': 'PORT_NAME', 'COUNTRY': 'COUNTRY', 'Lat': 'Lat', 'Long': 'Long', });
lyr_Ccmdukh_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Mo': 'Mo', 'X': 'X', 'Y': 'Y', });
lyr_Ccngngdnkhvtlin_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', });
lyr_Trmbinp_10.set('fieldAliases', {'Id': 'Id', 'Voltage': 'Voltage', 'X': 'X', 'Y': 'Y', });
lyr_ngdytiin_11.set('fieldAliases', {'Id': 'Id', 'Voltage': 'Voltage', 'Start_X': 'Start_X', 'End_X': 'End_X', 'End_Y': 'End_Y', 'Start_Y': 'Start_Y', });
lyr_Khubotn_12.set('fieldAliases', {'NAME': 'NAME', 'TYPE': 'TYPE', 'COUNTRY': 'COUNTRY', });
lyr_Khuvcctimnngxydngtrangtriingingoikhimngni_13.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Khuvcctimnngxydngtrangtriingingoikhimngcnh_14.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Khuvcctimnngxydngtrangtriingignb_15.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Khuvcnghincu_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Khuvcrabinkimn_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'rua': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Cctuyncpinternetngm_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'TYPE': 'TextEdit', 'STATUS': 'TextEdit', 'SOURCE': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_NgtrngcamtsnghcNgunVinNghincuHisn_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Ngheca': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Cngbin_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'PORT_NAME': 'TextEdit', 'COUNTRY': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_Ccmdukh_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Mo': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Ccngngdnkhvtlin_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Trmbinp_10.set('fieldImages', {'Id': 'Range', 'Voltage': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_ngdytiin_11.set('fieldImages', {'Id': 'Range', 'Voltage': 'Range', 'Start_X': 'TextEdit', 'End_X': 'TextEdit', 'End_Y': 'TextEdit', 'Start_Y': 'TextEdit', });
lyr_Khubotn_12.set('fieldImages', {'NAME': 'TextEdit', 'TYPE': 'TextEdit', 'COUNTRY': 'TextEdit', });
lyr_Khuvcctimnngxydngtrangtriingingoikhimngni_13.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Khuvcctimnngxydngtrangtriingingoikhimngcnh_14.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Khuvcctimnngxydngtrangtriingignb_15.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Khuvcnghincu_1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Khuvcrabinkimn_4.set('fieldLabels', {'OBJECTID': 'no label', 'rua': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Cctuyncpinternetngm_5.set('fieldLabels', {'OBJECTID': 'no label', 'TYPE': 'no label', 'STATUS': 'no label', 'SOURCE': 'no label', 'Shape_Length': 'no label', });
lyr_NgtrngcamtsnghcNgunVinNghincuHisn_6.set('fieldLabels', {'OBJECTID': 'no label', 'Ngheca': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Cngbin_7.set('fieldLabels', {'OBJECTID': 'no label', 'PORT_NAME': 'no label', 'COUNTRY': 'no label', 'Lat': 'no label', 'Long': 'no label', });
lyr_Ccmdukh_8.set('fieldLabels', {'OBJECTID': 'no label', 'Mo': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Ccngngdnkhvtlin_9.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', });
lyr_Trmbinp_10.set('fieldLabels', {'Id': 'no label', 'Voltage': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_ngdytiin_11.set('fieldLabels', {'Id': 'no label', 'Voltage': 'no label', 'Start_X': 'no label', 'End_X': 'no label', 'End_Y': 'no label', 'Start_Y': 'no label', });
lyr_Khubotn_12.set('fieldLabels', {'NAME': 'no label', 'TYPE': 'no label', 'COUNTRY': 'no label', });
lyr_Khuvcctimnngxydngtrangtriingingoikhimngni_13.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Khuvcctimnngxydngtrangtriingingoikhimngcnh_14.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Khuvcctimnngxydngtrangtriingignb_15.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Khuvcctimnngxydngtrangtriingignb_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});