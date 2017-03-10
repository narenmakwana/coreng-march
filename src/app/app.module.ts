import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule, MdSnackBar} from '@angular/material';
import {HttpModule} from '@angular/http';
import {AgmCoreModule} from 'angular2-google-maps/core';
import {Angulartics2Module, Angulartics2GoogleAnalytics} from 'angulartics2';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {NavigationModule} from 'app/navigation/navigation.module';
import {ExamplesModule} from 'app/examples/examples.module';
import {AppConfigOptions} from 'app/app.config.options';

const defaultOptions: AppConfigOptions = {
  appTitle : 'CoreNG',
  openSidenavStyle : 'side',
  closedSidenavStyle : 'icon overlay'
};

@NgModule({
  declarations : [
    AppComponent
  ],
  imports : [
    SharedModule.forRoot(),
    ExamplesModule,
    routing,
    MaterialModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey : 'YOUR_API_KEY_HERE' // Enter your key here!
    }),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    BrowserModule,
  ],
  providers : [MdSnackBar,
    {provide : 'AppConfigOptions', useValue : defaultOptions}
  ],
  entryComponents : [AppComponent],
  bootstrap : [AppComponent]
})
export class AppModule {
}
