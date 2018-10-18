import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService as SocialAuthService, FacebookLoginProvider, GoogleLoginProvider} from 'angular5-social-login';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
      
      authState: Subscription;

      constructor(private socialAuthService: SocialAuthService,
                  private http: HttpClient) { }

      ngOnInit() {
           this.authState = this.socialAuthService.authState.subscribe((user) => {
                console.log('USER STATE INFO: ', user);
           });
      }

      public facebookLogin() : void {
          let socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
          this.socialAuthService.signIn(socialPlatformProvider).then(
            (userData) => {
                    //this will return user data from facebook. What you need is a user token which you will send it to the server
                    this.sendToRestApiMethod(userData.token);
            }
          );
      }

      sendToRestApiMethod(token: string) : void {
          console.log('sendToRestApiMethod: ', token);
          // this.http.post("", { token: token  })
          //     .subscribe(onSuccess => {
          //                   //login was successful
          //                   //save the token that you got from your REST API in your preferred location i.e. as a Cookie or LocalStorage as you do with normal login
          //           }, onFail => {
          //                   //login was unsuccessful
          //                   //show an error message
          //           }
          //     );
      }

      logout() : void {
          this.socialAuthService.signOut().then((resp: any) => {
              console.log('logout', resp);
          });
      }

      ngOnDestroy() {
          this.authState.unsubscribe();
      }

}