import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import logo from './img/coffee_logo.png';
import kosik from './img/kosik.png';

import ProductBox from './components/ProductBox';
import Logo from './components//Logo';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import InformationBox from './components/InformationBox';
// import InstagramFeed from './components/InstagramFeed'; Commented out because this library doesnt work due to https://github.com/jamesmoriarty/react-instagram-authless-feed/issues/12
import Footer from './components/Footer';
import Clock from './components/Clock';
import ShoppingCard from './components/ShoppingCard';
import CustomerReviews from './components/CustomerReviews';

import { productBoxContent, bannerSection, productBoxImage, informationBoxContent, carouselBanner, reviews } from './data/dummyData';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      date: null,
      color: true
    }
  }

  handleAddProduct = () => {
    this.setState(
      {count: this.state.count + 1}
    )
  }

  handleRemoveProduct = () => {
    if (this.state.count <= 0) {
      this.setState({
          count:0
      });
    } else {
      this.setState({
          count: this.state.count - 1
      });
    }
  };

  // zobrazení aktuálního času
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  // změna barvy banneru při kliknutí
  changeColor = () => {
    if (this.state.color === true) {
      this.setState({
        className: 'pink'
      });
    } else {
      this.setState({
        className: 'brown'
      });
    }
  };

  render() {
    return (
      <div className="App">
        <header>
          <Logo alt='coffee-logo' src={logo} />
          <Clock date={this.state.date} />
          <ShoppingCard alt='shoppingCard' src={kosik} count={this.state.count}/>
        </header>
        <nav>
          <Navigation />
        </nav>

        <section className="sectionBanners">
          <Carousel showArrows={true} autoPlay={true} interval={10000}>
            <div className='mainBanner'>
                <img src={carouselBanner.bannerFirst} alt='' />
            </div>
            <div className='mainBanner'>
                <img src={carouselBanner.bannerSecond} alt='' />
            </div>
            <div className='mainBanner'>
                <img src={carouselBanner.bannerThird} alt='' />
            </div>
          </Carousel>

          <div className="banners">
            <Banner className={bannerSection.second} />
            <Banner className={bannerSection.third} />
          </div>
        </section>

        <section >
          <h3>Čerstvě pražená várka kávy</h3>
          <div className="sectionBox productBoxNone">
            <ProductBox
              content={productBoxContent.firstProduct}
              image={productBoxImage.first}
              handleAddProduct={this.handleAddProduct}
              handleRemoveProduct={this.handleRemoveProduct}
              count={this.state.count}
              />
            <ProductBox
              content={productBoxContent.secondProduct}
              image={productBoxImage.second}
              handleAddProduct={this.handleAddProduct}
              handleRemoveProduct={this.handleRemoveProduct}
              count={this.state.count}
              />
            <ProductBox
              content={productBoxContent.thirdProduct}
              image={productBoxImage.third}
              handleAddProduct={this.handleAddProduct}
              handleRemoveProduct={this.handleRemoveProduct}
              count={this.state.count}
              />
          </div>
        </section>

        <section className="sectionBox">
          <InformationBox
            content={informationBoxContent}
            changeColor={this.changeColor}
            color={this.state.color}
          />
        </section>

        <section>
          <h3>Produkty za výhodnou cenu</h3>
          <div className="sectionBox productBoxes">
            <ProductBox className="box" content={productBoxContent.fourthProduct} image={productBoxImage.fourth} />
            <ProductBox className="box" content={productBoxContent.firstProduct} image={productBoxImage.first} />
            <ProductBox className="box" content={productBoxContent.secondProduct} image={productBoxImage.second} />
            <ProductBox className="box" content={productBoxContent.thirdProduct} image={productBoxImage.third} />
          </div>
        </section>

        <section>
          <h3>Recenze zákazníků</h3>
          <div className="sectionBox reviewBox">
            <CustomerReviews text={reviews.reviewFirst.text} author={reviews.reviewFirst.author} />
            <CustomerReviews text={reviews.reviewSecond.text} author={reviews.reviewSecond.author} />
            <CustomerReviews text={reviews.reviewThird.text} author={reviews.reviewThird.author} />
          </div> 
        </section>

         {/* <section className="sectionBox">
           <InstagramFeed />
        </section> */}
        <footer>
          <Footer />
          <p className="author">by Marcela Karafizievová</p>
        </footer>
      </div>
    );
  }
};

export default App;
