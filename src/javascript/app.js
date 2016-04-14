/**
 * Created by Saswat Mishra
 */

var progressBarsData = [
    { name: '#progress1', value: 25, width: 25 },
    { name: '#progress2', value: 50, width: 50 },
    { name: '#progress3', value: 75, width: 75 }
];
var controlButtonsData = [
    { name: '-25', value: -25 },
    { name: '-10', value: -10 },
    { name: '+10', value: 10 },
    { name: '+25', value: 25 }
];

var ractive = new Ractive({
    template: '#template',
    el: 'maincontainer',
    data: {
        progressBars: progressBarsData,
        controlButtons: controlButtonsData,
        barWidth: function(width) {
            var barWidth = width;

            if (barWidth >= 100) barWidth = 100;
            else if (barWidth <= 0) barWidth = 0;

            return barWidth;
        },
        barColor: function(value) {
            return (value >= 100) ? '#FF0000' : '#B0E0E6';
        }
    }
});

ractive.on({
    updateProgressBar: function(event) {
        var selectedItem = this.get('selectedItem');
        var currentValue = progressBarsData[selectedItem].value;
        var newValue = currentValue + event.context.value;
        var barWidth = 'progressBars[' + selectedItem + '].width';

        if (newValue <= 0) newValue = 0;
        progressBarsData[selectedItem].value = newValue;

        ractive.animate(barWidth, (newValue >= 100) ? 100 : newValue, {
            duration: 500,
            easing: 'easeOut'
        });
        ractive.animate({ progressBars: progressBarsData });
    }
});
