import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { BreadcrumbViewModel } from '../../models/breadcrumb.view-model';

@Component({
  selector: 'bulma-breadcrumb-item,[bulma-breadcrumb-item]',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbItemComponent implements OnInit {
  @Input() breadcrumb: BreadcrumbViewModel;
  constructor() {}

  ngOnInit() {
    console.log(this.breadcrumb);
  }
}
