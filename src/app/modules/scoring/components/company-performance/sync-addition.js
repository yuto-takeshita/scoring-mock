export const syncChartsInit = function(Highcharts) {

    Highcharts.Pointer.prototype.reset = function() {
        return undefined;
    };

    Highcharts.Point.prototype.highlight = function(event) {
        event = this.series.chart.pointer.normalize(event);
        this.onMouseOver(); // Show the hover marker
        this.series.chart.tooltip.refresh(this); // Show the tooltip
        this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair
    };
};