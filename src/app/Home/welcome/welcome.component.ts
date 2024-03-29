import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-welcome',
  template: `
  <div class="splash go">
  <svg class="txt-welcome" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="912.71" height="284.03" viewBox="0 0 912.71 284.03"><defs><clipPath id="clip-path" transform="translate(-220.11 -222.79)"><path id="welcome" d="M1102.48,406.23c-10.45,23.1-35.75,36.57-48.12,36.57-11.27,0-17.32-5.77-20.9-13.75,20.9-16.5,42.62-47.57,42.62-64.9,0-23.92-12.64-25.3-19-25.3-24.31,0-47.39,26.75-50.06,67.68-4.4,12.08-11.27,22.8-20.07,30.5-9.35-14-19.8-48.95-20.07-68.48,0-3.3-3-4.67-6-4.67-8.25,0-20.08,8-22.28,14.57-4.67,14-9.9,31.63-15.12,45.93C917.68,403.2,912.18,373.5,913,364.7c.82-7.15-4.13-7.7-7.7-8-7.7-.28-18.43,8.8-20.35,15.95-3.3,11.55-12.38,37.12-19,55.82-6.33-22-13.48-61.05-23.93-68.47a6.27,6.27,0,0,0-3.85-1.1c-4.67-.28-10.17,3.3-13.75,6.05-5.5,4.4-1.1,6.32.83,6.87,6,5.57,10.78,19.4,14.51,34.9-8.2,13.37-18.57,19.28-34,19.28a82.88,82.88,0,0,0,5.77-30.8c0-28.05-9.35-42.08-22.82-42.08-11,0-24.2,7.7-29.15,17.33a12.74,12.74,0,0,0-8.25,3.57c-8.2,8-11.75,23.76-12.5,40.15-13.78,26.33-30,43.45-45.53,43.45-21.72,0-31.9-18.7-31.9-42.07,0-28.88,23.38-57.48,33.55-57.48,8.8,7.7,5,25.58-.55,32.73,1.1,10.72,15.13,8.8,18.43,1.1,8.8-19.53,6.05-46.75-8.53-46.75-27,0-54.15,26.43-61.55,61.53-9.37,20.2-24.83,41.06-29.74,43.51-8.53,0-17.33-18.69-17.33-57.47,0-28.6,2.75-79.47,10.73-121,.82-3.57,3-8.25-3-8.25-8.25,0-15.67,5.23-16.77,9.9-9.9,41.53-12.1,91.85-12.1,120.18q0,7.23.49,13.88c-14.39,30.59-41.31,44.69-56.05,44.69-12.65,0-23.1-8.8-24.47-30,0-2.75-.28-4.95-.28-6.88,3.58,1.1,8.25.55,14-3.3,16.77-11.27,32.45-37.95,32.45-52.8,0-19.25-14.58-20.62-22-20.35C500,339.68,470,369.1,470,414.48c0,35.47,16.5,53.07,44,53.07,17.9,0,45.54-11.55,64.71-35.62,5.42,21.79,15.54,34.52,27.15,34.52,13.49,0,26.48-13.46,36.48-27.65,4.87,19.72,20.78,31.77,42.16,31.77,20.41,0,40.12-11.4,56-31,3.18,13.16,10.43,21.92,22.06,21.92,16.23,0,29.15-9.9,37.68-24.2a19.12,19.12,0,0,0,3.85.28c13.68,0,26.9-4.56,39.22-14.22,4.07,21.67,6.15,42.11,6.43,44.46-1.92,4.13.83,6.33,4.68,6.33,6,0,16.22-3.85,17.32-8.8,1.65-7.15,8.53-31.9,24.2-76.72l12.65,63.79c1.1,6.05,11.82,7.15,20.62,5.78,8.25-1.37,5.23-6.32,6-14,.83-7.42,9.63-31.34,15.13-49.49,9.07,37.94,18.42,56.92,28.32,56.92,11.06,0,21.48-5.88,31.09-18.25,5.9,16.21,20.21,25.12,41,25.12,19.52,0,52.79-15.67,67.37-47C1120.08,406.23,1104.13,401.83,1102.48,406.23Zm-587.95-52.8c1.65,1.1,3.3,4.12,3.3,8.52,0,12.38-11.55,36-23.37,42.63C494.18,388.9,506.83,354.53,514.53,353.43Zm258.78,92.95c-9.08,0-14-14.3-14-34.1,0-1.25,0-2.56.07-3.89,0-1,.07-2.09.13-3.17a88.3,88.3,0,0,1,2.83-18.52c.55,22,10.72,37.13,22.82,44.83C781.56,440.33,776.88,446.38,773.31,446.38Zm16-28.33c-7.43-7.7-13.2-20.62-13.2-36.3,0-5.77,1.65-9.62,6.32-12.37,5.5,8,9.08,15.4,9.08,30.8A77.78,77.78,0,0,1,789.26,418.05Zm240.63-5.77a35.8,35.8,0,0,1-.83-8.8c0-20.63,10.73-50.05,20.35-50.05,4.13,0,6.33,1.92,6.33,8.8C1055.74,376.25,1041.71,401.28,1029.89,412.28Z" fill="none"/></clipPath><clipPath id="clip-path-2" transform="translate(-220.11 -222.79)"><path id="W" d="M458.71,248.38c9.9,22,13.2,61.32,9.9,101.2-5.5,65.17-30,132.54-77.83,132.54-43.17,0-50.6-56.37-51.42-88.27,0-3,0-5-.83-5s-1.1,1.93-2.47,5c-11.28,28-31.35,66-60.23,66-45.92,0-56.37-60.22-48.94-127,5.5-50.32,5.77-53.35,9.9-77.55.82-5.22,10.72-9.07,16.77-9.07,7.7,0,9.63,3.3,8.8,5.22-2.47,6-4.4,14.58-5.5,23.1-2.47,15.13-4.67,32.73-6.32,50.6-4.68,57.48-.83,118,33,118,17.88,0,52-87.18,50.88-100.93.27-9.35,11.55-12.1,16.77-12.1,7.43,0,8.53,1.38,7.7,12.38C351.73,412,366.86,467,399,467c20.9,0,39.33-51.15,43.73-103.67,2.75-37.4,1.92-80.85-4.68-102.85a71.28,71.28,0,0,0-3.3-7.7C433.68,243.71,455.68,241.78,458.71,248.38Z" fill="none"/></clipPath></defs><title>welcome</title><g id="elcome-mask"><g clip-path="url(#clip-path)"><path id="me" d="M850.5,408.5c8,20,14,68,7,80s15-61,23-83,22-51,19-65,3,31,5,42,21,84,15,95,6-29,10-47,26-72,23-81,1,19,4,37,11,43,16,51,14,10,20,4,15-23,24-23,9,5,19-2,23-25,28-37,6-22,0-30-14-5-24,0-12,14-17,25-7,13-6,30,2,26,8,34,16,13,29,14,31-10,40-20,25-35,25-35" transform="translate(-220.11 -222.79)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="34"/><path id="om" d="M749.5,418.5s0,23,5,30,16,9,22,5,11-10,15-16,10-27,11-44-2-28-8-32-15-2-22,4-5,9-5,17,4,21,9,30,21,17,27,19,22-2,27-6,18-11,20-17-7-25-11-34-15-20-15-20" transform="translate(-220.11 -222.79)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="34"/><path id="co" d="M648.5,418.5s2,14,8,25,7,15,17,20,10,5,21,2,25-11,35-24,19-17,20-23,0-25,3-32,10-12,10-12" transform="translate(-220.11 -222.79)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="34"/><path id="lc" d="M587.5,412.5s2,19,5,29,10,18,16,18,16-9,24-18,11-9,16-23,3-20,9-32,14-21,20-25,7-9,21-12,12,9,11,17-2,14-5,22-11,16-11,16" transform="translate(-220.11 -222.79)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="34"/><path id="el" d="M494.5,409.5s26-15,33-30,6-29-5-34-25,10-30,19-10,21-9,40,3,46,11,52,30,6,43,0,34-25,39-30,9-9,11-14-2-41,0-72,12-87,12-87" transform="translate(-220.11 -222.79)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="34"/></g></g><g id="w-mask"><g clip-path="url(#clip-path-2)"><path id="cur1" d="M251,240s-11,54-13,111-1,61,7,80,18,21,32,23,23-10,30-19c13-13,46-113,42-114s-1,93,3,104,9,34,24,44,12,10,29,5,29-27,37-48,16-57,17-89-2.4-47.1-6-68c-5-29-9-31-9-31" transform="translate(-220.11 -222.79)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="34"/></g></g></svg>
</div>


  `,
  styles: [
    `button {
      border: 0;
      border-radius: 8px;
      margin: 0 auto;
      padding: 8px 16px;
    }
    
    .splash {
      background-color: #ED2553;
      bottom: 0;
      color: white;
      display: flex;
      flex-direction: column;
      height: 100vh;
      justify-content: center;
      left: 0;
      overflow: hidden;
      position: absolute;
      right: 0;
      text-align: center;
      top: 80px;
      z-index: 3;
      height : 120px;
    }
    
    .txt-welcome {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 10px;
      max-width: 890px;
      position: relative;
      width: 85%;
      z-index: 2;
    }
    
    .splash-svg-wrapper {
      left: 50%;
      max-height: none;
      max-width: none;
      position: absolute;
      right: 0;
      top: 50%;
      -webkit-transform: translateX(-50%);
              transform: translateX(-50%);
      width: 100%;
    }
    
    @-webkit-keyframes welcome {
      100% {
        stroke-dashoffset: 0;
      }
    }
    
    @keyframes welcome {
      100% {
        stroke-dashoffset: 0;
      }
    }
    #cur1 {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      stroke-width: 30;
    }
    
    #el {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      stroke-width: 30;
    }
    
    #lc {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      stroke-width: 60;
    }
    
    #co {
      stroke-dasharray: 400;
      stroke-dashoffset: 400;
      stroke-width: 40;
    }
    
    #om {
      stroke-dasharray: 400;
      stroke-dashoffset: 400;
      stroke-width: 20;
    }
    
    #me {
      stroke-dasharray: 1200;
      stroke-dashoffset: 1200;
      stroke-width: 30;
    }
    
    .go #cur1 {
      -webkit-animation: welcome 0.75s ease-in forwards 0.5s;
              animation: welcome 0.75s ease-in forwards 0.5s;
    }
    .go #el {
      -webkit-animation: welcome 0.75s linear forwards 1.2s;
              animation: welcome 0.75s linear forwards 1.2s;
    }
    .go #lc {
      -webkit-animation: welcome 0.75s linear forwards 1.6s;
              animation: welcome 0.75s linear forwards 1.6s;
    }
    .go #co {
      -webkit-animation: welcome 0.4s linear forwards 1.7s;
              animation: welcome 0.4s linear forwards 1.7s;
    }
    .go #om {
      -webkit-animation: welcome 0.5s linear forwards 2s;
              animation: welcome 0.5s linear forwards 2s;
    }
    .go #me {
      -webkit-animation: welcome 0.75s linear forwards 2.5s;
              animation: welcome 0.75s linear forwards 2.5s;
    }
    `
  ]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
  //   (function(){

  //     setTimeout(function() {
  //         $('.first-text').removeClass('hidden');
  //     }, 500);
  
  // })();
  }
}
