---
layout: docs
title: Marqueefy
---

<div class="tab-content mb-5">
  <div id="installation-tab-content" class="tab-pane fade" id="installation-tab-content" role="tabpanel" aria-labelledby="installation-tab" tabindex="0" data-content="installation">

  ## Installation
  
  ### CDN
  <div class="d-inline-block">
    <ul id="cdn-tab" class="nav nav-pills bg-theme-primary bg-opacity-10 rounded-pill" role="tablist">
      <li class="nav-item" role="presentation">
        <button id="jsdelivr-tab" class="nav-link rounded-pill position-relative active" data-bs-toggle="pill" data-bs-target="#jsdelivr" type="button" role="tab" aria-controls="jsdelivr" aria-selected="true">
        jsDelivr
        <span class="ripple-surface"></span>
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button id="unpkg-tab" class="nav-link rounded-pill position-relative" data-bs-toggle="pill" data-bs-target="#unpkg" type="button" role="tab" aria-controls="unpkg" aria-selected="false">
        unpkg
        <span class="ripple-surface"></span>
        </button>
      </li>
    </ul>
  </div>
  
  <div class="tab-content" id="cdn-tab-content">
  <div class="tab-pane fade show active" id="jsdelivr" role="tabpanel" aria-labelledby="jsdelivr-tab" tabindex="0">

  Styles

  ```html
  <!-- Marqueefy CSS -->
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@marqueefy/marqueefy@1.0.2/dist/css/marqueefy.min.css" 
        integrity="sha384-wADgvhAqbORDLWCl6LHRmwaldDxcsCZJ9EfC4tyLmlqRSrxK8SQSmUprPJYdtCZb" 
        crossorigin="anonymous">
  ```

  Scripts

  ```html  
  <!-- Marqueefy JS -->
  <script src="https://cdn.jsdelivr.net/npm/@marqueefy/marqueefy@1.0.2/dist/js/marqueefy.min.js" 
          integrity="sha384-r7IY8FnyT2tNOICu/cgSjfxEfJucnMbjEW8R7VA3LkR+IAK/331d+7rd/q4l9pB8" 
          crossorigin="anonymous"></script>
  ```

  </div>
  <div class="tab-pane fade" id="unpkg" role="tabpanel" aria-labelledby="unpkg-tab" tabindex="0">

  Styles
  
  ```html
  <!-- Marqueefy CSS -->
  <link rel="stylesheet"
        href="https://unpkg.com/@marqueefy/marqueefy@1.0.2/dist/css/marqueefy.min.css" 
        integrity="sha384-wADgvhAqbORDLWCl6LHRmwaldDxcsCZJ9EfC4tyLmlqRSrxK8SQSmUprPJYdtCZb" 
        crossorigin="anonymous">
  ```

  Scripts

  ```html  
  <!-- Marqueefy JS -->
  <script src="https://unpkg.com/@marqueefy/marqueefy@1.0.2/dist/js/marqueefy.min.js" 
          integrity="sha384-r7IY8FnyT2tNOICu/cgSjfxEfJucnMbjEW8R7VA3LkR+IAK/331d+7rd/q4l9pB8" 
          crossorigin="anonymous"></script>
  ```

  </div>
  </div>

  {{< squiggle >}}
  
  ### npm
  
  Install
  ```console
  npm i @marqueefy/marqueefy
  ```
  
  Import Marqueefy JS
  ```javascript
  import * as marqueefy from '@marqueefy/marqueefy'
  ```
  
  Import Marqueefy SCSS in your SCSS file
  ```scss
  @import "~@marqueefy/marqueefy/scss/marqueefy";
  ```
  
  {{< squiggle >}}
  
  ### Download
  <a class="btn btn-indigo btn-lg rounded-pill" 
     href="https://github.com/marqueefy/marqueefy.github.io/releases/download/v1.0.2/marqueefy-1.0.2-dist.zip" download>
    Download v1.0.2
  </a>
  
  </div>
  <div id="usage-tab-content" class="tab-pane fade" id="usage-tab-content" role="tabpanel" aria-labelledby="usage-tab" tabindex="0" data-content="usage">
  
  ## Usage
  
  Add the following HTML snippet to your page and initialize it with Javascript.
  ```html
  <div class="marqueefy" tabindex="0">
      <div class="content">
          Marqueefy is a custom Marquee component used to create horizontal or vertical scrolling content.
      </div>
  </div>
  ```
  
  Javascript
  ```javascript
  // Initialize Marqueefy
  const marqueefyList = Array.prototype.slice.call(document.querySelectorAll('.marqueefy'))
  const marqueefyInstances = marqueefyList.map(m => {
    return new marqueefy.Marqueefy(m)
  })
  ```
  
  </div>
  <div id="options-tab-content" class="tab-pane fade" id="options-tab-content" role="tabpanel" aria-labelledby="options-tab" tabindex="0" data-content="options">
  
  ## Options
  
  ### Content Types
  
  ### Text
  {{< example codeId="code1" class="d-flex justify-content-center align-items-center">}}
<div class="marqueefy" tabindex="0">
    <div class="content">
        Marqueefy is a custom Marquee component used to create horizontal or vertical scrolling content.
    </div>
</div>
  {{< /example >}}
      
  #### Icons
  {{< example codeId="code2" class="d-flex justify-content-center align-items-center">}}
<div class="marqueefy" tabindex="0">
    <div class="content">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M13.05 40q-1.3 0-2.15-.85-.85-.85-.85-2.15 0-.9.45-1.725.45-.825 1.3-1.175l8.6-3.4v-6.9q-3.3 4.05-6.7 6.1-3.4 2.05-7.7 2.05v-3q3.4 0 6.2-1.575Q15 25.8 17.25 22.95l2.9-3.25q.5-.6 1.175-1t1.475-.4h2.4q.8 0 1.5.4t1.2 1l2.9 3.25q2.4 2.75 5.1 4.375 2.7 1.625 6.1 1.625v3q-4.25 0-7.675-2.05T27.6 23.8v6.9l8.6 3.4q.85.35 1.3 1.175.45.825.45 1.725 0 1.3-.85 2.15-.85.85-2.15.85H19.8v-.55q0-1.3.8-2.1t2.1-.8h6.65q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3H22.7q-2.2 0-3.5 1.35-1.3 1.35-1.3 3.55V40ZM24 15.3q-1.5 0-2.575-1.075-1.075-1.075-1.075-2.575 0-1.5 1.075-2.575Q22.5 8 24 8q1.5 0 2.575 1.075 1.075 1.075 1.075 2.575 0 1.5-1.075 2.575Q25.5 15.3 24 15.3Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m14.1 46 6.05-31q.25-1.2 1.15-1.85.9-.65 1.9-.65 1 0 1.875.45t1.425 1.3l1.95 3.2q.95 1.6 2.625 2.85T35 22.25V18.5h2V46h-2V25.3q-2.55-.55-4.8-1.95t-4-3.45l-1.45 7.25L29 31.2V46h-3V33.8l-5-4.75L17.3 46Zm.85-20.15-3.75-.7q-.5-.1-.875-.65t-.275-1.1l1.5-7.85q.25-1.45 1.45-2.225 1.2-.775 2.65-.525l1.8.35ZM26.5 10.3q-1.5 0-2.575-1.075Q22.85 8.15 22.85 6.65q0-1.5 1.075-2.575Q25 3 26.5 3q1.5 0 2.575 1.075Q30.15 5.15 30.15 6.65q0 1.5-1.075 2.575Q28 10.3 26.5 10.3Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m24.5 44-1-19.9-7.45-2.6H2v-3h12.15L27.9 8.65l1.95 2.3-7.45 5.35 4.85 1.7 17-10L46 10.1 28.7 22.65 27.5 44ZM12 15.65q-1.5 0-2.575-1.075Q8.35 13.5 8.35 12q0-1.5 1.075-2.575Q10.5 8.35 12 8.35q1.5 0 2.575 1.075Q15.65 10.5 15.65 12q0 1.5-1.075 2.575Q13.5 15.65 12 15.65Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M4 46v-3h2q1.6 0 3.075-.525T12 40.55q1.45 1.4 2.925 1.925Q16.4 43 18 43q1.55 0 3.1-.55t2.9-1.9q1.45 1.4 2.925 1.925Q28.4 43 30 43q1.55 0 3.1-.55t2.9-1.9q1.35 1.35 2.9 1.9 1.55.55 3.1.55h2v3h-2q-1.45 0-2.975-.425Q37.5 45.15 36 44q-1.5 1.15-3.025 1.575Q31.45 46 30 46q-1.45 0-2.975-.425Q25.5 45.15 24 44q-1.5 1.15-3.025 1.575Q19.45 46 18 46q-1.45 0-2.975-.425Q13.5 45.15 12 44q-1.5 1.15-3.025 1.575Q7.45 46 6 46ZM17.1 8.2l10.9 2q.55.1 1.125.475t.975 1.075l1.75 3.1q1.3 2.3 3.575 3.75 2.275 1.45 5.075 1.55v3q-3.6-.15-6.625-2.125T29 15.9q-.2.15-.9.625t-1.575 1.05q-.875.575-1.725 1.15-.85.575-1.3.875.55.4 1.675 1.275 1.125.875 2.35 1.85 1.225.975 2.35 1.875l1.625 1.3v8.05q.85.6 1.6 1.175.75.575 1.55 1.225-1 .8-2.175 1.325Q31.3 38.2 30 38.2q-1.7 0-3.25-.9T24 34.95q-1.2 1.45-2.75 2.35-1.55.9-3.25.9h-.225q-.125 0-.225-.05-5.15-3.6-8.1-6.575Q6.5 28.6 6.5 26.55q0-1.25 1.05-1.65 1.05-.4 2.15-.4 1.45 0 3.475.5 2.025.5 4.575 1.4l-1.1-6.85q-.2-1.15.1-2.1.3-.95 1.15-1.5l5.3-3.55q-.35-.05-1.1-.2-.75-.15-1.6-.3-.85-.15-1.6-.325-.75-.175-1.1-.225l-5.4 3.7-1.7-2.45Zm3.1 13.95.85 5.7q1.9.9 3.775 1.925T28.5 31.9v-4q-.35-.25-1.5-1.05t-2.5-1.75q-1.35-.95-2.6-1.8-1.25-.85-1.7-1.15ZM34 10.3q-1.5 0-2.575-1.075Q30.35 8.15 30.35 6.65q0-1.5 1.075-2.575Q32.5 3 34 3q1.5 0 2.575 1.075Q37.65 5.15 37.65 6.65q0 1.5-1.075 2.575Q35.5 10.3 34 10.3Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M37.05 46q-1.2 0-2.4-.2t-2.35-.55L4.05 34.95l.65-1.9 14.45 5.25 3.5-9.05-7.95-8.3q-1.15-1.3-.9-2.95.25-1.65 1.7-2.5l7.75-4.5q.7-.4 1.5-.425.8-.025 1.5.225t1.275.8q.575.55.825 1.3l.65 2.15q.85 2.7 2.475 4.35 1.625 1.65 3.975 2.45l1.05-3.2 1.9.55-1.95 6.05q-3.4-.7-5.95-2.7-2.55-2-3.9-5.4l-6.6 3.8 6.2 7.25-4.25 11.1 7.15 2.6 4.7-14.6q.5.15.95.275.45.125.9.225l-4.7 14.8 2.05.7q.95.35 1.95.525 1 .175 2.1.175 1.45 0 2.8-.275 1.35-.275 2.65-.925l1.5 1.5q-1.65.85-3.35 1.275-1.7.425-3.6.425ZM33.4 12.3q-1.5 0-2.575-1.075Q29.75 10.15 29.75 8.65q0-1.5 1.075-2.575Q31.9 5 33.4 5q1.5 0 2.575 1.075Q37.05 7.15 37.05 8.65q0 1.5-1.075 2.575Q34.9 12.3 33.4 12.3Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m17.6 47.7-2.5-1.5 6.4-10.9-4.1-2.45-3.75 6.05-2.5-1.5L22.6 18.85q-2.1-1.85-3.15-4.025-1.05-2.175-1.05-4.575 0-1.9.375-3.5t1.325-3.5l2.6 1.4q-.7 1.45-1 2.725-.3 1.275-.3 2.575 0 2.4 1.15 4.35 1.15 1.95 3.85 3.55l4.85 2.85q2.85 1.65 4.225 4.075Q36.85 27.2 36.85 30.35q0 1.95-.6 3.95t-1.6 3.8l-2.6-1.5q.85-1.6 1.325-3.125t.475-3.125q0-1.9-.65-3.475-.65-1.575-1.95-2.425Zm14.25-30.4q-1.5 0-2.575-1.075Q28.2 15.15 28.2 13.65q0-1.5 1.075-2.575Q30.35 10 31.85 10q1.5 0 2.575 1.075Q35.5 12.15 35.5 13.65q0 1.5-1.075 2.575Q33.35 17.3 31.85 17.3ZM27.15 8q-1.3 0-2.15-.85-.85-.85-.85-2.15 0-1.3.85-2.15.85-.85 2.15-.85 1.3 0 2.15.85.85.85.85 2.15 0 1.3-.85 2.15-.85.85-2.15.85Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m10.8 40-2.1-2.1 20.4-20.4H22v4h-3v-7h11.15q.7 0 1.35.25.65.25 1.15.75l6 5.95q1.45 1.45 3.35 2.2 1.9.75 4 .85v3q-2.6-.1-5-.975T36.8 23.8l-2.3-2.3-5.7 5.7 4.3 4.3-12.2 7.05-1.5-2.6 8.8-5.1-4.1-4.1ZM6 26v-3h10v3Zm-4-6.5v-3h10v3Zm37.5-4q-1.45 0-2.475-1.025Q36 13.45 36 12q0-1.45 1.025-2.475Q38.05 8.5 39.5 8.5q1.45 0 2.475 1.025Q43 10.55 43 12q0 1.45-1.025 2.475Q40.95 15.5 39.5 15.5ZM6 13v-3h10v3Z"/></svg>
    </div>
</div>
  {{< /example >}}
  
   #### Images
  {{< example codeId="code3" class="d-flex justify-content-center align-items-center">}}
<div class="marqueefy" tabindex="0">
    <div class="content">
        <img src="/assets/images/pexels-nishant-aneja-2416482.jpg">
        <img src="/assets/images/pexels-pixabay-264337.jpg">
        <img src="/assets/images/pexels-roman-davayposmotrim-35990.jpg">
        <img src="/assets/images/pexels-the-th-179908.jpg">
        <img src="/assets/images/pexels-yan-krukov-6815665.jpg">
    </div>
</div>
  {{< /example >}}
  
  {{< squiggle >}}
  
  ### Variants
  
  #### Single item
  {{< example codeId="code4" class="d-flex justify-content-center align-items-center">}}
<div class="marqueefy" tabindex="0">
    <div class="content">
        Marqueefy is a custom Marquee component used to create horizontal or vertical scrolling content.
    </div>
</div>
  {{< /example >}}
  
  #### Multiple items
  {{< example codeId="code5" class="d-flex justify-content-center align-items-center">}}
<div class="marqueefy" tabindex="0">
    <div class="content">
        <span class="item">This is the first item</span>
        <span class="item">This is the second item</span>
        <span class="item">This is the third item</span>
    </div>
</div>
  {{< /example >}}

  {{< squiggle >}}

  ### Directions
  Set the scrolling direction of the Marqueefy using the attribute: ```data-mq-direction```. 
  Possible values are ```left```, ```right```, ```up``` and ```down```. 
  If no value is specified, the default value is ```left```.
  
  #### Left (Default)
  {{< example codeId="code6" class="d-flex justify-content-center align-items-center">}}
<div class="marqueefy" tabindex="0">
    <div class="content">
        This text will scroll from right to left.
    </div>
</div>
  {{< /example >}}
  
  #### Right
  ```data-mq-direction="right"```
  {{< example codeId="code7" class="d-flex justify-content-center align-items-center">}}
<div class="marqueefy" data-mq-direction="right" tabindex="0">
    <div class="content">
        This text will scroll from left to right.
    </div>
</div>
  {{< /example >}}
  
  #### Top
  ```data-mq-direction="top"```
  {{< example codeId="code8" class="d-flex justify-content-center align-items-center">}}
<div class="marqueefy" data-mq-direction="top" style="height: 150px;" tabindex="0">
    <div class="content">
        This text will scroll from bottom to top.
    </div>
</div>
  {{< /example >}}
  
  #### Bottom
  ```data-mq-direction="bottom"```
  {{< example codeId="code9" class="d-flex justify-content-center align-items-center">}}
<div class="marqueefy" data-mq-direction="bottom" style="height: 150px;" tabindex="0">
    <div class="content">
        This text will scroll from top to bottom.
    </div>
</div>
  {{< /example >}}
  
  {{< squiggle >}}
    
  ### Speed
  Set the scrolling speed of the Marqueefy using the attribute: ```data-mq-speed```. Value must be a number. 
  Default speed is ```100```.
  {{< example codeId="code10" class="d-flex justify-content-center align-items-center">}}
<div class="marqueefy" data-mq-speed="50" tabindex="0">
    <div class="content">
        This text will scroll from right to left at a speed of 50.
    </div>
</div>
  {{< /example >}}
  
  {{< squiggle >}}
  
  ### Javascript
  
  #### Configuration
  Direction and Speed can also be set using Javascript. Simply pass the configuration object ```{direction: 'left', speed: 100}``` as 
  the second argument. Configurations set via Javascript takes priority over HTML attributes.
  
  ```javascript
  const marqueefyList = Array.prototype.slice.call(document.querySelectorAll('.marqueefy'))
  const marqueefyInstances = marqueefyList.map(m => {
    return new marqueefy.Marqueefy(m, {direction: 'left', speed: 100})
  })
  ```
  <br>
  
  #### Non-visible elements
  Marqueefy uses dimensions of the content to determine the ```animation-duration```. Since the dimensions cannot be 
  determined correctly on target elements that aren’t visible, Marqueefy instances that are initialized when they are 
  not visible must be refreshed by calling the ```refresh``` method on the instance once they become visible.
  
 ```javascript
  const marqueefyInstance = marqueefy.Marqueefy.getInstance('#hidden-marquee')
  marqueefyInstance.refresh()
```

  {{< squiggle >}}
    
  ### Customization
  
  Customize Marqueefy by changing <a id="specs-button" href="/#specs-css-custom-properties">CSS custom properties</a>
  #### Background color
  {{< example codeId="code11" class="d-flex justify-content-center align-items-center">}}
<style>
  #example1 {
    --mq-bg: #ffe69c; 
    --mq-hover-bg: #ffda6a;
  }
</style>

<div class="marqueefy" id="example1" tabindex="0">
    <div class="content">
        Marqueefy is a custom Marquee component used to create horizontal or vertical scrolling content.
    </div>
</div>
  {{< /example >}}
  
  #### Border radius
  {{< example codeId="code12" class="d-flex justify-content-center align-items-center">}}
<style>
  #example2 {
    --mq-bg: #a6e9d5;
    --mq-hover-bg: #79dfc1;
    --mq-border-radius: 3rem;
  }
</style>

<div class="marqueefy" id="example2" tabindex="0">
    <div class="content">
        Marqueefy is a custom Marquee component used to create horizontal or vertical scrolling content.
    </div>
</div>
  {{< /example >}}
  
  #### Border
  {{< example codeId="code13" class="d-flex justify-content-center align-items-center">}}
<style>
  #example3 {
    --mq-border-width: 4px; 
    --mq-border-style: dashed; 
    --mq-border-color: #6f42c1;
  }
</style>

<div class="marqueefy" id="example3" tabindex="0">
    <div class="content">
        Marqueefy is a custom Marquee component used to create horizontal or vertical scrolling content.
    </div>
</div>
  {{< /example >}}
  
  #### Font
  {{< example codeId="code14" class="d-flex justify-content-center align-items-center">}}
<style>
  #example4 {
    --mq-font-family: "Kaushan Script", cursive; 
    --mq-font-size: 1.5rem; 
  }
</style>

<div class="marqueefy" id="example4" tabindex="0">
    <div class="content">
        Marqueefy is a custom Marquee component used to create horizontal or vertical scrolling content.
    </div>
</div>
  {{< /example >}}


  </div>
  <div id="specs-tab-content" class="tab-pane fade" id="specs-tab-content" role="tabpanel" aria-labelledby="specs-tab" tabindex="0" data-content="specs">
  
  ## Specs
  
  ### CSS custom properties
  Customize Marqueefy by changing CSS custom properties
  <div class="table-responsive">
    <table class="table table-bordered rounded-5">
      <thead>
        <tr>
          <th>Property</th>
          <th>Default Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>--mq-bg</td>
          <td>#f8f9fa</td>
          <td>Background color</td>
        </tr>
        <tr>
          <td>--mq-hover-bg</td>
          <td>#e9ecef</td>
          <td>Hover background color</td>
        </tr>
        <tr>
          <td>--mq-color</td>
          <td>#212529</td>
          <td>Color</td>
        </tr>
        <tr>
          <td>--mq-hover-color</td>
          <td>#000</td>
          <td>Hover color</td>
        </tr>
        <tr>
          <td>--mq-border-width</td>
          <td>0</td>
          <td>Border width</td>
        </tr>
        <tr>
          <td>--mq-border-style</td>
          <td>solid</td>
          <td>Border style</td>
        </tr>
        <tr>
          <td>--mq-border-color</td>
          <td>transparent</td>
          <td>Border color</td>
        </tr>
        <tr>
          <td>--mq-border-radius</td>
          <td>.375rem</td>
          <td>Border radius</td>
        </tr>
        <tr>
          <td rowspan="2">--mq-padding-y</td>
          <td>1rem <i>(for direction left and right)</i></td>
          <td rowspan="2">Padding top and bottom</td>
        </tr>
        <tr>
          <td>0 <i>(for direction top and bottom)</i></td>
        </tr>
        <tr>
          <td rowspan="2">--mq-padding-x</td>
          <td>0 <i>(for direction left and right)</i></td>
          <td rowspan="2">Padding left and right</td>
        </tr>
        <tr>
          <td>1rem <i>(for direction top and bottom)</i></td>
        </tr>
        <tr>
          <td>--mq-font-size</td>
          <td>1rem</td>
          <td>Font size</td>
        </tr>
        <tr>
          <td>--mq-font-family</td>
          <td>sans-serif</td>
          <td>Font family</td>
        </tr>
        <tr>
          <td>--mq-animation-duration</td>
          <td>15s</td>
          <td>Animation duration <i>(Automatically set according to the dimensions of the content and specified speed, default speed is 100)</i></td>
        </tr>
        <tr>
          <td>--mq-item-gap</td>
          <td>1rem</td>
          <td>Gap between multiple items <i>(In multiple items variant)</i></td>
        </tr>
      </tbody>
    </table>
  </div>
  
  {{< squiggle >}}
  
  ### Javascript functions
  <div class="table-responsive">
    <table class="table table-bordered rounded-5">
      <thead>
        <tr>
          <th>function</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
       <tr>
          <td>refresh</td>
          <td>Reconfigures a Marqueefy instance. (Useful in reconfiguring non-visible elements when they become visible)</td>
        </tr>
        <tr>
          <td>dispose</td>
          <td>Destroys an element’s instance. (Removes stored data on the DOM element)</td>
        </tr>
        <tr>
          <td>getInstance</td>
          <td>Static method which allows you to get the Marqueefy instance associated with a DOM element.</td>
        </tr>
        <tr>
          <td>getOrCreateInstance</td>
          <td>Static method which allows you to get the Marqueefy instance associated with a DOM element, or create a new one in case it wasn’t initialized.</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  {{< squiggle >}}
    
  ### HTML attributes
  <div class="table-responsive">
      <table class="table table-bordered rounded-5">
        <thead>
          <tr>
            <th>HTML attribute</th>
            <th>Javascript equivalent option</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>data-mq-direction</td>
            <td>direction</td>
            <td>Sets the scrolling direction of the Marqueefy.</td>
          </tr>
          <tr>
            <td>data-mq-speed</td>
            <td>speed</td>
            <td>Sets the scrolling speed of the Marqueefy.</td>
          </tr>
        </tbody>
      </table>
    </div>
  
  </div>
</div>
