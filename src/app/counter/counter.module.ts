import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterComponent } from './counter/counter.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
];

@NgModule({
  declarations: [
    CounterButtonsComponent,
    CounterOutputComponent,
    CounterComponent,
    CustomCounterInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CounterModule { }
