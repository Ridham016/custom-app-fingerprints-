import { Injectable } from '@angular/core';

declare var cordova: any;

@Injectable({
  providedIn: 'root'
})
export class CamServiceService {

  openCamera(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      cordova.exec(
        (result: string) => {
          resolve(result);
        },
        (error: any) => {
          reject(error);
        },
        'CamService', // Replace with your plugin's service name
        'openCamera',
        []
      );
    });
  }
}
