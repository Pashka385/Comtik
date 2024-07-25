import React, { Component, createRef } from 'react';
import styles from './css/Header.module.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.headerNavigationRef = createRef();
    this.headerBurgerRef = createRef();
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleBurgerClick() {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  }

  handleClickOutside(event) {
    if (
      this.headerNavigationRef.current &&
      !this.headerNavigationRef.current.contains(event.target) &&
      this.headerBurgerRef.current &&
      !this.headerBurgerRef.current.contains(event.target)
    ) {
      this.setState({ isActive: false });
    }
  }

  render() {
    return (
      <header className={styles.header}>
                  <div className={`${styles.burger__navigation} ${this.state.isActive ? styles.active : ''}`} ref={this.headerNavigationRef}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Find a doctor</a></li>
              <li><a href="#">Apps</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">About us</a></li>
            </ul>
          </div>
        <div className={styles.header__container}>
        <img src="./assets/logo.png" alt="logo" />
            <ul className={styles.menu}>
              <li><a href="#">Home</a></li>
              <li><a href="#">Find a doctor</a></li>
              <li><a href="#">Apps</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">About us</a></li>
            </ul>
          <div
            id="burger"
            className={`${styles.header__burger} ${this.state.isActive ? styles.active : ''}`}
            ref={this.headerBurgerRef}
            onClick={this.handleBurgerClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
