<div class="container">
  <h1 class="page-header">${lang#page-header}</h1>
  <div class="row">
    <div class="col-md-6">
      <p>
        ${lang#description}
      </p>
    </div>
    <div class="col-md-6">
      <div id="ytc-features-carousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#ytc-features-carousel" data-slide-to="0" class="active"></li>
          <li data-target="#ytc-features-carousel" data-slide-to="1"></li>
          <li data-target="#ytc-features-carousel" data-slide-to="2"></li>
          <li data-target="#ytc-features-carousel" data-slide-to="3"></li>
        </ol>

        <div class="carousel-inner">
          <div class="item active">
            <img src="/images/slides-player-glow.jpg" alt="${lang#carousel-player-glow-title#html}">
            <div class="carousel-caption">
              <h2>${lang#carousel-player-glow-description}</h2>
            </div>
          </div>
          <div class="item">
            <img src="/images/slides-player-resize.jpg" alt="${lang#carousel-player-size-title#html}">
            <div class="carousel-caption">
              <h2>${lang#carousel-player-size-description}</h2>
            </div>
          </div>
          <div class="item">
            <img src="/images/slides-player-quality.jpg" alt="${lang#carousel-video-resolution-title#html}">
            <div class="carousel-caption">
              <h2>${lang#carousel-video-resolution-description}</h2>
            </div>
          </div>
          <div class="item">
            <img src="/images/slides-download.jpg" alt="${lang#carousel-video-download-title#html}">
            <div class="carousel-caption">
              <h2>${lang#carousel-video-download-description}</h2>
            </div>
          </div>
        </div>

        <a class="left carousel-control" href="#ytc-features-carousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a class="right carousel-control" href="#ytc-features-carousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
  </div>
</div>