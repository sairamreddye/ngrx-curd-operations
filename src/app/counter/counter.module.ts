import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterComponent } from './counter/counter.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { COUNTER_STATE_NAME } from './state/counter.selector';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';

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
    RouterModule.forChild(routes),
    StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer),
  ]
})
export class CounterModule { }
