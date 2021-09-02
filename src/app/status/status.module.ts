import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [StatusComponent, StatusBarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [StatusBarComponent, StatusComponent]
})
export class StatusModule { }
