import { Injectable } from '@angular/core';
import { Company } from 'src/app/core/models/company.model';
import { isNil as _isNil } from 'lodash';
import { MockCompanies } from '../mock-data/mock-companies';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private companyList;

  getList(): Company[] {
    this.getListIfNull();
    return this.companyList;
  }

  public getDetail(companyCode: string): Company {
    this.getListIfNull();
    return this.companyList.find((e) => e.companyCode === companyCode);
  }

  private getListIfNull() {
    if (_isNil(this.companyList)) {
      this.companyList = MockCompanies;
    }
  }
}
