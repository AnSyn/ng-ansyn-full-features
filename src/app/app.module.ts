import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {appConfig} from 'ng-ansyn/defaultAppConfig'
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {AnsynBuilder} from 'ng-ansyn/src/appBuilder/ansyn-builder'
import {RouterModule} from "@angular/router";
import {AnsynModule} from "ng-ansyn";

const ansynBuilder = new AnsynBuilder();
appConfig.coreConfig.windowLayout = {
  "menu": false,
  "statusBar": false,
  "timeLine": true,
  "contextSun": false,
  "toolsOverMenu": true
}
const providers = ansynBuilder.getProvidersFromObject(appConfig);
const ansynDynamicModule = ansynBuilder.buildModule(providers, true, true);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ansynDynamicModule,
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {

  }
}
