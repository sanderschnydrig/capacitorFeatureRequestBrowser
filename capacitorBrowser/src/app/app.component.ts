import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'capacitorBrowser';

  ngOnInit(): void {
    const openCapacitorSite = async () => {
      await Browser.open({ url: 'http://capacitorjs.com/' });
    };

    openCapacitorSite();
  }
}
