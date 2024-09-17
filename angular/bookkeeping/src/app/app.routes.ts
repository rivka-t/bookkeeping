import { Routes } from '@angular/router';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { DataSegmentationComponent } from './components/data-segmentation/data-segmentation.component';
import { ExpensesComponent } from './components/expenses/expenses.component';

export const routes: Routes = [
    {path:'receipt',component:ReceiptComponent},
    {path:'expenses',component:ExpensesComponent},
    {path:'data-segmentation',component:DataSegmentationComponent}
];
