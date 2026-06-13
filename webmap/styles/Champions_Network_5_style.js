var size = 0;
var placement = 'point';
function categories_Champions_Network_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Face CBO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(13,8,135,1.0)', lineDash: [0.76,1.52], lineCap: 'square', lineJoin: 'round', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ghetto Farmers':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(76,3,161,1.0)', lineDash: [0.76,1.52], lineCap: 'square', lineJoin: 'round', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ghetto Foundation':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(126,3,168,1.0)', lineDash: [0.76,1.52], lineCap: 'square', lineJoin: 'round', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mathare River Adoption':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(169,35,150,1.0)', lineDash: [0.76,1.52], lineCap: 'square', lineJoin: 'round', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mathare Sub-County Community Health Workers':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(203,71,120,1.0)', lineDash: [0.76,1.52], lineCap: 'square', lineJoin: 'round', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Reach Community Response Team':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(230,107,93,1.0)', lineDash: [0.76,1.52], lineCap: 'square', lineJoin: 'round', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ruaraka Social Justice Centre':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(248,149,65,1.0)', lineDash: [0.76,1.52], lineCap: 'square', lineJoin: 'round', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SHOFCO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(253,195,40,1.0)', lineDash: [0.76,1.52], lineCap: 'square', lineJoin: 'round', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(240,249,33,1.0)', lineDash: [0.76,1.52], lineCap: 'square', lineJoin: 'round', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Champions_Network_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Name");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Champions_Network_5(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
