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
        ProgressComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot([
            {path: 'product', component: ProductComponent},
            {path: 'resources', component: ResourcesComponent},
            {path: 'blog', component: BlogComponent},
            {path: 'watch-demo', component: DemoPageComponent},
            {path: 'dashboard', component: DashboardComponent},
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
