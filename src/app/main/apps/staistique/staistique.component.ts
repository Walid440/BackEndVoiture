import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { ServicesService } from '../services.service';
import { colors } from 'app/colors.const';

@Component({
  selector: 'app-staistique',
  templateUrl: './staistique.component.html',
  styleUrls: ['./staistique.component.scss']
})
export class StaistiqueComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
 
 
  constructor(private Ser : ServicesService,private fb: FormBuilder) { }
  myForm!:FormGroup; 
  selectedOption: string = 'option1'; // Set a default value or initialize as needed

  ngOnInit(): void {
   
    this.myForm=new FormGroup({
      prod:new FormControl('',[Validators.required]),
  }) 
  this.drawPieChart();
 }
 
list:any[];
  drawPieChart(): void {
 
    const canvas = this.canvas.nativeElement;
    const context = canvas.getContext('2d');
   
this.Ser.Statistique(this.myForm.value.prod).subscribe(res=>{

   this.list=res
   
   let total=0;
if( this.list!==null)
{

     const data =  [this.list[0][0],this.list[0][2],this.list[0][4]];
    const colors = ['#FF6384', '#36A2EB', '#FFCE56'];
    const labels = ['Location', 'Echange', 'Vente'];

     total= data.reduce((acc, value) => acc + value, 0);
    let startAngle = 0;

    for (let i = 0; i < data.length; i++) {
      const sliceAngle = (2 * Math.PI * data[i]) / total;

      context.fillStyle = colors[i];
      context.beginPath();
      context.moveTo(canvas.width / 2, canvas.height / 2);
      context.arc(canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) / 2, startAngle, startAngle + sliceAngle);
      context.closePath();
      context.fill();

      // Draw the label
      const labelX = canvas.width / 2 + Math.cos(startAngle + sliceAngle / 2) * canvas.width / 2;
      const labelY = canvas.height / 2 + Math.sin(startAngle + sliceAngle / 2) * canvas.height / 2;
      context.fillStyle = '#000';
      context.fillText(`${labels[i]} (${labelX}%)`, labelX, labelY);

      startAngle += sliceAngle;}
    }
     
     })
  }
  
}
