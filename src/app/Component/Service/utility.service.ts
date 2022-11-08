import { Injectable } from '@angular/core';

const Baseurl = 'http://172.22.32.105:8082/';
// const Baseurl = 'http://172.22.32.105:8081/';


@Injectable({
    providedIn: 'root'
})
export class ApiService {
    public loginurl: string = Baseurl + "login";
    public signupurl: string = Baseurl + "user/save";
    public PasswordRecoveryurl: string = Baseurl + "user/forgot";
    public Otpurl: string = Baseurl + "user/otpVerify";
    public ResetPassword: string = Baseurl + "user/updatePassword";
    //   public TreName: BehaviorSubject<string> = new BehaviorSubject<string>(sessionStorage.getItem('loc') || '{}');
    // public otpurl: string = Baseurl+ "otpverify";
    public getstate: string = Baseurl + 'getState';
    public check_User: string = Baseurl + 'user/checkUserId'
    public getDepartment: string = Baseurl + 'getDepart'

    // public GetProfile_List: string = Baseurl + 'user/getProfileList/710/10'
    public GetProfile_List: string = Baseurl + 'profile/list'
    public GetMajorHead: string = Baseurl + 'getMajorHeadList/'
    public GetBudgetHead_List: string = Baseurl + 'budgetHeadList'
    public GetUserProfile: string = Baseurl + 'profile/allList/'
    public ProfileActive_Deactive: string = Baseurl + 'profile/active'

    public ProfileCreate: string = Baseurl + 'profile/create'
}
