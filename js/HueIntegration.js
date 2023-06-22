

function color(value) {
    if (value === 'auto') {
        mode = 'auto';
        updateBackgroundColor();
        updateHueAutoColor();
    } else {
        mode = 'preset';
        document.querySelector(".sidebar").style.backgroundColor = value;
        updateHueColor(value);
    }
    }

function updateBackgroundColor() {

const hourColors = JSON.parse(localStorage.getItem('hourColors'));
if (!hourColors) {
return;
}
if (mode !== 'auto') {
return;
}
const now = new Date();
const currentHour = now.getHours();
const currentColor = hourColors[currentHour];
document.querySelector(".sidebar").style.backgroundColor = currentColor;
}

function updateHueColor(color) {

// Convert the color to the Hue API format (e.g., #RRGGBB to xy)
const xyColor = hexToXy(color);

// Make a PUT request to the Hue API to update the light's color
axios.put(`http://${hueBridgeIP}/api/${username}/lights/${lightId}/state`, {
xy: xyColor,
})
.then(response => {
console.log('Hue API response:', response.data);
})
.catch(error => {
console.error('Hue API error:', error);
});
}


function updateHueAutoColor(color) {
if (mode !== 'auto') {
return;
}

const hourColors = JSON.parse(localStorage.getItem('hourColors'));
if (!hourColors) {
return;
}
const now = new Date();
const currentHour = now.getHours();
const currentColor = hourColors[currentHour];

// Convert the color to the Hue API format (e.g., #RRGGBB to xy)
const xyColor = hexToXy(currentColor);

// Make a PUT request to the Hue API to update the light's color
axios.put(`http://${hueBridgeIP}/api/${username}/lights/${lightId}/state`, {
xy: xyColor,
})
.then(response => {
console.log('Hue API response:', response.data);
})
.catch(error => {
console.error('Hue API error:', error);
});
}

// Helper function to convert hex color to xy color
function hexToXy(color) {
const hex = color.replace('#', '');
const r = parseInt(hex.substring(0, 2), 16) / 255;
const g = parseInt(hex.substring(2, 4), 16) / 255;
const b = parseInt(hex.substring(4, 6), 16) / 255;

const x = (r * 0.649926 + g * 0.103455 + b * 0.197109) / (r + g + b);
const y = (r * 0.234327 + g * 0.743075 + b * 0.022598) / (r + g + b);

return [x, y];
}

updateBackgroundColor();
updateHueAutoColor();
console.log("updated!");
setInterval(updateBackgroundColor, 2 * 1000);
setInterval(updateHueAutoColor, 2 * 1000);
console.log("interval!");