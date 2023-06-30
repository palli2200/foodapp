import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})

export class PieChartComponent implements OnInit {
  constructor() { }

  ngOnInit(){


    const ChartVariable =new Chart("chartId",{
        type:'',
        data: {
          labels:[],
          datasets:[{
            label:'',
            data:[],
            backgroundColor:[],
            borderColor:[],
            borderWidth:[]
          }]
        }
      })

    const myChart1 = new Chart('123chart',{
      type: 'doughnut',
      data:{
        labels: ['Red','Blue','Yellow', 'green'],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 80, 100, 180],
          backgroundColor: ['red','blue','yellow','green'],
          // hoverOffset: 4
        }]

      }
    }) 
  
    const myChart = new Chart('mychart', {
      type: 'bar',
      data: {
          labels: ['JanaSena', 'YSRCP', 'Telugudesam', 'PrajaSanthi', 'congress', 'BJP'],
          datasets: [{
              label: '# of Votes',
              data: [18, 19, 13, 10, 12, 13],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          },
          {
            label: 'pole votes',
            data: [13, 12, 3, 5, 8, 7],
            backgroundColor: [
                'rgb(98, 99, 132, 0.2)',
                'rgba(150, 162, 235, 0.2)',
                'rgba(67, 206, 86, 0.2)',
                'rgba(170, 192, 192, 0.2)',
                'rgba(65, 102, 255, 0.2)',
                'rgba(156, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(98, 99, 132, 1)',
                'rgba(150, 162, 235, 1)',
                'rgba(67, 206, 86, 1)',
                'rgba(170, 192, 192, 1)',
                'rgba(65, 102, 255, 1)',
                'rgba(156, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
      },
     
  });
  }
}