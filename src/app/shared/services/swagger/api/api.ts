export * from './auth.service';
import { AuthService } from './auth.service';
export * from './centrals.service';
import { CentralsService } from './centrals.service';
export * from './configurations.service';
import { ConfigurationsService } from './configurations.service';
export * from './mailLists.service';
import { MailListsService } from './mailLists.service';
export * from './periodicities.service';
import { PeriodicitiesService } from './periodicities.service';
export * from './reportStates.service';
import { ReportStatesService } from './reportStates.service';
export * from './reports.service';
import { ReportsService } from './reports.service';
export * from './securities.service';
import { SecuritiesService } from './securities.service';
export * from './user.service';
import { UserService } from './user.service';
export * from './userGroup.service';
import { UserGroupService } from './userGroup.service';
export const APIS = [AuthService, CentralsService, ConfigurationsService, MailListsService, PeriodicitiesService, ReportStatesService, ReportsService, SecuritiesService, UserService, UserGroupService];