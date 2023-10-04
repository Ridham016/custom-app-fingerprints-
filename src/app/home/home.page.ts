
// import  MathCalculator  from 'cordova-plugin-mathcalculator';

import { FingerprintAIO,FingerprintOptions } from '@ionic-native/fingerprint-aio/ngx';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
declare var cordova: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  param1:number=0;
  param2:number=0;

  option:FingerprintOptions={
    description: "Some biometric description",
    disableBackup: false,
    title: 'Scanner Title',
    fallbackButtonTitle: 'FB Back Button',
    subtitle: 'This SubTitle',
  }
  constructor(
    private fio:FingerprintAIO,
    private plt:Platform,
    // private as:MathCalculator
  ) {
  }
  ngOnInit() {

    // Listen for the back button event
    this.plt.backButton.subscribeWithPriority(10, () => {
      // Hide the fingerprint authentication dialog
    });
  }
 showF(a:number,b:number ){
  const parm=[{
    param1:this.param1,
    param2:this.param2
  }];

  // cordova.plugins.MathCalculator.add(parm,
  //   (result: any) => {
  //     console.log(result)
  //   }, (error: any) => {
  //     console.log(error)
  //   });



    // this.plt.ready().then(async () => {
    //   if(await this.fio.isAvailable()){

    //     this.fio.show(this.option)
    //     .then((result: any) => {
    //       console.log(result)
    //       alert("Successfully Authenticated!")
    //     })
    //     .catch((error: any) => {
    //       console.log(error)
    //       alert(error.message)
    //     });
    //   }
    //   })
  }
}
