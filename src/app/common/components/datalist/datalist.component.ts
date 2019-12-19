import { Component, OnInit, OnChanges, Input, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit, OnChanges {

  @Input() data;
  @Input() settings;

  dataSource:MatTableDataSource<any>
  displayedColumns:string[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if(changes.settings) {
      let columns = [];
      this.settings.columns.map(col => {
        columns.push(col.name);
      });
      this.displayedColumns = columns;
    }

    if(changes.data) {
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
