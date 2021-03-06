import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import components
import { SigninComponent } from './auth/signin/signin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ListGroupsComponent } from './groups/list-groups/list-groups.component';

// Angular Material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from '@angular/material/list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Import Firebase Modules
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from "../environments/environment";

// Import firebaseUI
import { firebase, firebaseui, FirebaseUIModule } from 'firebaseui-angular';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { CreateGroupsComponent } from './groups/create-groups/create-groups.component';
import { MatDialogModule } from "@angular/material/dialog";
import { NewGroupFormComponent } from './groups/new-group-form/new-group-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { MainGroupComponent } from './groups/main-group/main-group.component';
import { MainGroupHeaderComponent } from './groups/main-group-header/main-group-header.component';
import { MainGroupCirclesComponent } from './groups/main-group-circles/main-group-circles.component';
import { MainGroupInfoComponent } from './groups/main-group-info/main-group-info.component';
import {MatTabsModule} from "@angular/material/tabs";
import { MainGroupJoinComponent } from './groups/main-group-join/main-group-join.component';
import { MainGroupDebtsComponent } from './groups/main-group-debts/main-group-debts.component';
import { MainGroupMembersComponent } from './groups/main-group-members/main-group-members.component';
import { MainGroupActivitiesComponent } from './groups/main-group-activities/main-group-activities.component';
import { JoinButtonComponent } from './groups/join-button/join-button.component';


const firebaseUiAuthConfig: firebaseui.auth.Config = {
    signInFlow: 'popup',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        {
            scopes: [
                'public_profile',
                'email',
                'user_likes',
                'user_friends'
            ],
            customParameters: {
                'auth_type': 'reauthenticate'
            },
            provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
        },
        {
            requireDisplayName: true,
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
        },
    ],
    tosUrl: '<your-tos-link>',
    privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
    credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};

@NgModule({
    declarations: [
        AppComponent,
        SigninComponent,
        HomepageComponent,
        TopbarComponent,
        FooterComponent,
        ListGroupsComponent,
        SidenavComponent,
        ListGroupsComponent,
        CreateGroupsComponent,
        NewGroupFormComponent,
        MainGroupComponent,
        MainGroupHeaderComponent,
        MainGroupCirclesComponent,
        MainGroupInfoComponent,
        MainGroupJoinComponent,
        MainGroupDebtsComponent,
        MainGroupMembersComponent,
        MainGroupActivitiesComponent,
        JoinButtonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,

        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        FirebaseUIModule.forRoot(firebaseUiAuthConfig),

        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule,
        FormsModule,
        MatTabsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
