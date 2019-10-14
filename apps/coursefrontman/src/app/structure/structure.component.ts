import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

const APP_ROUTES = [
  {
    title: 'Stammdaten',
    prefix: '/master-data',
    children: [
      { title: 'Personen', link: 'person' },
      { title: 'Firmen', link: 'company' }
    ]
  },
  {
    title: 'Basisdaten',
    prefix: '/common-data',
    children: [
      { title: 'Geschlechter', link: 'gender' },
      { title: 'Anreden', link: 'salutation' },
      { title: 'Titel', link: 'title' }
    ]
  }
];

@Component({
  selector: 'kryptand-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StructureComponent implements OnInit {
  public readonly appRoutes = APP_ROUTES;
  public filteredSubRouteItems = [];

  constructor(private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const urlDelimitators = new RegExp(/[?//,;&:#$+=]/);
        const currentUrlPath = event.url.slice(1).split(urlDelimitators)[0];
        const filteredRoute = this.appRoutes.find(x =>
          currentUrlPath.includes(x.prefix.substr(1))
        );
        if (filteredRoute) {
          const { prefix, children } = filteredRoute;
          this.filteredSubRouteItems = children.map(child => {
            !child.link.includes(prefix)
              ? (child.link = prefix + '/' + child.link)
              : child.link;
            return child;
          });
        }
        this.cd.markForCheck();
      }
    });
  }
}
