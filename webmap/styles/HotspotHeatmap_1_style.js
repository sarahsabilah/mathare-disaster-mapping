var size = 0;
var placement = 'point';
function categories_HotspotHeatmap_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'High':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(200,10,0,0.3)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Med':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.3)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.22799999999999998}),fill: new ol.style.Fill({color: 'rgba(224,127,0,0.3)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(222,251,253,0.3)', lineDash: [3.8,0.76,1.52,0.76], lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(255,208,1,0.3)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(207,136,88,0.3)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_HotspotHeatmap_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Severity");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_HotspotHeatmap_1(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
