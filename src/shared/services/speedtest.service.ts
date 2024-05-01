import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeedTestService {
  
  constructor(private http: HttpClient) {}

  async testDownloadSpeed(fileUrl: string, fileSizeInBytes: number): Promise<number> {
    const startTime = new Date().getTime();

    try {
      const dataBlob = await lastValueFrom(this.http.get(fileUrl, { responseType: 'blob' }));
      const endTime = new Date().getTime();
      const duration = (endTime - startTime) / 1000; 
      const bitsLoaded = fileSizeInBytes * 8;
      const speedBps = bitsLoaded / duration;
      const speedKbps = speedBps / 1024;
      const speedMbps = speedKbps / 1024;
      return speedMbps; 
    } catch (error) {
      console.error('Fehler beim Herunterladen der Datei:', error);
      throw new Error('Fehler beim Netzwerk-Speedtest');
    }
  }
}
