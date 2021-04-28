import { Component } from '@angular/core';
import { TablesService } from '../../services';
import { Customer, Employee } from '../../models';
import { Observable, of } from 'rxjs';
import { EventService} from '../../../../shared/event-service';
import { Router } from '@angular/router';
import { routes } from '../../../../consts';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public employeeTableData$: Observable<Employee[]>
  public materialTableData$: Observable<Customer[]>
  public routers: typeof routes = routes; 
  constructor(private service: TablesService,
    private eventService: EventService<any>,
    private router: Router
    ) {
    this.employeeTableData$ = service.loadEmployeeTableData();
    this.materialTableData$ = service.loadMaterialTableData();
    this.eventService.setCurrentPage('home-page');
  }

  loginPage(){
    this.router.navigate([this.routers.LOGIN]).then();
  }
}
