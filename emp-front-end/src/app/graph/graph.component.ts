import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.css']
})
export class GraphComponent {

    Highcharts = Highcharts
    chartOptions = {}

    constructor() {
        this.chartOptions = {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                }
            },
            title: {
                text: 'Employees Count',
                align: 'left'
            },
            subtitle: {
                text: 'Source: ' +
                    '<a href="https://www.counterpointresearch.com/global-smartphone-share/"' +
                    'target="_blank">Counterpoint Research</a>',
                align: 'left'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Share',
                data: [
                    ['Engineering', 23],
                    ['Finance', 18],
                    {
                        name: 'Marketing',
                        y: 12,
                        sliced: true,
                        selected: true
                    },
                    ['Sales', 9],
                    ['HR', 8],
                    ['Others', 30]
                ]
            }]
        }
    }

}




