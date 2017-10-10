import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {MdToolbarModule, MdDialogModule, MdButtonModule, MatInputModule, MatTabsModule, MatCardModule, MatTableModule} from "@angular/material";

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {HomePrazeComponent} from './home-praze/home-praze.component';
import {LoginComponent} from './login/login.component';
import {DemoPageComponent} from './demo-page/demo-page.component';
import {DemoModalComponent} from './demo-modal/demo-modal.component';
import { ProductComponent } from './product/product.component';
import { ResourcesComponent } from './resources/resources.component';
import { BlogComponent } from './blog/blog.component';
import {FormsModule} from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { InviteComponent } from './invite/invite.component';
import { AccountComponent } from './account/account.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProgressComponent } from './progress/progress.component';
import {AccountService} from "./account.service";
import { DumbComponent } from './dumb/dumb.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePrazeComponent,
        LoginComponent,
        DemoPageComponent,
        DemoModalComponent,
        ProductComponent,
        ResourcesComponent,
        BlogComponent,
        DashboardComponent,
        InviteComponent,
        AccountComponent,
        InvitationsComponent,
        ReviewsComponent,
        ProgressComponent,
        DumbComponent,
        TermsComponent,
        PrivacyComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot([
            {path: 'dumb', component: DumbComponent},
            {path: 'product', component: ProductComponent},
            {path: 'resources', component: ResourcesComponent},
            {path: 'blog', component: BlogComponent},
            {path: 'watch-demo', component: DemoPageComponent},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'terms', component: TermsComponent},
            {path: 'privacy', component: PrivacyComponent},
            {path: '', component: HomePrazeComponent}
        ]),
        MdDialogModule,
        MdToolbarModule,
        MdButtonModule,
        MatInputModule,
        MatTabsModule,
        MatCardModule,
        MatTableModule,
    ],
    providers: [AccountService],
    bootstrap: [AppComponent],
    entryComponents: [LoginComponent,
        DemoModalComponent]
})
export class AppModule {
}
