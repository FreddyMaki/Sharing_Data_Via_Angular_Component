import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe-example',
  templateUrl: './iframe-example.component.html',
  styleUrls: ['./iframe-example.component.scss']
})
export class IframeExampleComponent implements OnInit {

  displayIframe: boolean= false;
  iframeUrl !: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  openIframe(){

    this.iframeUrl =this.transform( '/relogin');
    this.displayIframe = true;
  }

   //url: string = "https://therichpost.com/sample.pdf#toolbar=0&navpanes=0&scrollbar=0";
    //Transform Url TO MAKE IT working with iframe:
    transform(url: string) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
