import {Component, ViewEncapsulation} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeCmp} from '../home/home';
import {AboutCmp} from '../about/about';
import {ResultCmp} from '../result/result';
import {NameList} from '../../services/name_list';
import {UserData} from '../../services/user_data';

@Component({
  selector: 'app',
  viewProviders: [NameList, UserData],
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/bootstrap.css', './components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/', component: HomeCmp, as: 'Home' },
  { path: '/about', component: AboutCmp, as: 'About' },
  { path: '/result', component: ResultCmp, as: 'Result' }
])

export class AppCmp {}
