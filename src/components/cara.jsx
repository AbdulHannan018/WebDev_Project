import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          width="250px"
          height="640px"
          src="/doomlandscape.jpg" // Absolute path to public folder
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Doom release date</h3>
          <p>Id software confirmed at the xbox developer direct that Doom The dark ages will launch on April 26th</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          width="250px"
          height="640px"
          src="/es6.jpg" // Absolute path to public folder
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Elder Scroll Six</h3>
          <p>Still no news on the Elder scrolls game since its anouncement 6 years ago.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          width="250px"
          height="640px"
          src="cyberpunk.jpg" // Absolute path to public folder
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Cyberpunk</h3>
          <p>Cyberpunk patch 2.1 out now </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
