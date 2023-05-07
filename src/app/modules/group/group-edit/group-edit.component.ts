import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Router, ActivatedRoute } from '@angular/router';
import { groupFields as fields, groupFields } from '../config/group.form';
import { UserGroup, UserGroupService } from 'src/app/shared/services/swagger';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.scss'],
})
export class GroupEditComponent implements OnInit {
  id: string | number = '';
  group: UserGroup = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = fields;

  constructor(
    private title: TitleService,
    private route: ActivatedRoute,
    private router: Router,
    private userGroupService: UserGroupService
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('Editar Sitio');
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });

    if (this.id) {
      this.userGroupService.apiUserGroupIdGet(this.id as any).subscribe(res => {
        this.group = res
        this.setData();
      })
    }
  }

  setData() {
    this.fields = Object.keys(this.group).map((groupProp: any) => (
      {
        ...groupFields.find((field: any) => field.key === groupProp),
        defaultValue: (this.group as any)[groupProp]
      }
    ))
  }

  submit() {
    if (this.form.valid) {
      this.userGroupService.apiUserGroupIdPut(this.id as any, {
        ...this.form.value,
        userGroupId: this.id,
      }).subscribe(res => {
        this.router.navigate(['/groups']);
      }, error => alert('Ha ocurrido un error'))
    }
  }
}
