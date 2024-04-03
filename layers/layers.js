var wms_layers = [];


        var lyr_googlesateliete_0 = new ol.layer.Tile({
            'title': 'google sateliete ',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_Ingrowers_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ec2-13-53-206-159.eu-north-1.compute.amazonaws.com:8080/geoserver/testing/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "Ingrowers",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ingrowers",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ingrowers_1, 1]);
var lyr_Outgrowers_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ec2-13-53-206-159.eu-north-1.compute.amazonaws.com:8080/geoserver/testing/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "Outgrowers",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Outgrowers",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Outgrowers_2, 1]);

lyr_googlesateliete_0.setVisible(true);lyr_Ingrowers_1.setVisible(true);lyr_Outgrowers_2.setVisible(true);
var layersList = [lyr_googlesateliete_0,lyr_Ingrowers_1,lyr_Outgrowers_2];
