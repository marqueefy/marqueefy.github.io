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
        href="https://cdn.jsdelivr.net/npm/@marqueefy/marqueefy@1.0.0/dist/css/marqueefy.min.css" 
        integrity="sha384-wADgvhAqbORDLWCl6LHRmwaldDxcsCZJ9EfC4tyLmlqRSrxK8SQSmUprPJYdtCZb" 
        crossorigin="anonymous">
  ```

  Scripts

  ```html  
  <!-- Marqueefy JS -->
  <script src="https://cdn.jsdelivr.net/npm/@marqueefy/marqueefy@1.0.0/dist/js/marqueefy.min.js" 
          integrity="sha384-i4dhK6R5/Y66fUlSpw7ETADsUxKrFjJ2KA7KVWCTjIcpff5ltHKGyTLQhcJiG/Ki" 
          crossorigin="anonymous"></script>
  ```

  </div>
  <div class="tab-pane fade" id="unpkg" role="tabpanel" aria-labelledby="unpkg-tab" tabindex="0">

  Styles
  
  ```html
  <!-- Marqueefy CSS -->
  <link rel="stylesheet"
        href="https://unpkg.com/@marqueefy/marqueefy@1.0.0/dist/css/marqueefy.min.css" 
        integrity="sha384-wADgvhAqbORDLWCl6LHRmwaldDxcsCZJ9EfC4tyLmlqRSrxK8SQSmUprPJYdtCZb" 
        crossorigin="anonymous">
  ```

  Scripts

  ```html  
  <!-- Marqueefy JS -->
  <script src="https://unpkg.com/@marqueefy/marqueefy@1.0.0/dist/js/marqueefy.min.js" 
          integrity="sha384-i4dhK6R5/Y66fUlSpw7ETADsUxKrFjJ2KA7KVWCTjIcpff5ltHKGyTLQhcJiG/Ki" 
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
     href="https://github.com/marqueefy/marqueefy.github.io/releases/download/v1.0.0/marqueefy-1.0.0-dist.zip" download>
    Download v1.0.0
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
  
  ### Variants
  
  #### Single item
  {{< example codeId="code1" class="d-flex justify-content-center align-items-center">}}
<div class="marqueefy" tabindex="0">
    <div class="content">
        Marqueefy is a custom Marquee component used to create horizontal or vertical scrolling content.
    </div>
</div>
  {{< /example >}}
  
  #### Multiple items
  {{< example codeId="code2" class="d-flex justify-content-center align-items-center">}}
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
  {{< example codeId="code3" class="d-flex justify-content-center align-items-center">}}
<div class="marqueefy" tabindex="0">
    <div class="content">
        This text will scroll from right to left.
    </div>
</div>
  {{< /example >}}
  
  #### Right
  ```data-mq-direction="right"```
  {{< example codeId="code4" class="d-flex justify-content-center align-items-center">}}
<div class="marqueefy" data-mq-direction="right" tabindex="0">
    <div class="content">
        This text will scroll from left to right.
    </div>
</div>
  {{< /example >}}
  
  #### Top
  ```data-mq-direction="top"```
  {{< example codeId="code5" class="d-flex justify-content-center align-items-center">}}
<div class="marqueefy" data-mq-direction="top" style="height: 150px;" tabindex="0">
    <div class="content">
        This text will scroll from bottom to top.
    </div>
</div>
  {{< /example >}}
  
  #### Bottom
  ```data-mq-direction="bottom"```
  {{< example codeId="code6" class="d-flex justify-content-center align-items-center">}}
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
  {{< example codeId="code7" class="d-flex justify-content-center align-items-center">}}
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
  {{< example codeId="code8" class="d-flex justify-content-center align-items-center">}}
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
  {{< example codeId="code9" class="d-flex justify-content-center align-items-center">}}
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
  {{< example codeId="code10" class="d-flex justify-content-center align-items-center">}}
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
  {{< example codeId="code11" class="d-flex justify-content-center align-items-center">}}
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
