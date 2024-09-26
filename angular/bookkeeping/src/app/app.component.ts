import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { ReceiptComponent } from "./components/receipt/receipt.component";
import { ExpensesComponent } from "./components/expenses/expenses.component";
import { DataSegmentationComponent } from "./components/data-segmentation/data-segmentation.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive, TabViewModule, ReceiptComponent, ExpensesComponent, DataSegmentationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bookkeeping';
}



