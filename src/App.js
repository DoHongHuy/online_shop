import './App.css';
import Header  from './components/Header/Header';

//  gh-pages --save-dev install
// 


// thêm vào script ở package.json:  
  //  "predeploy": "npm run build",
    // "deploy": "gh-pages -d build",
    // thêm vào package-lock.json
  // "homepage": "http://dohonghuy.github.io//online_shop",
  // "name": "online_shop",
  // "version": "0.1.0",
  // rồi sử dụng lệnh  npm run deploy -

import 'coloshop-master/styles/bootstrap4/bootstrap.min.css';

import 'coloshop-master/plugins/font-awesome-4.7.0/css/font-awesome.min.css';
import 'coloshop-master/plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import 'coloshop-master/plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import 'coloshop-master/plugins/OwlCarousel2-2.2.1/animate.css';
import 'coloshop-master/styles/main_styles.css';
import 'coloshop-master/styles/responsive.css';

// import 'coloshop-master/js/jquery-3.2.1.min.js'

// import 'coloshop-master/styles/bootstrap4/popper.js';
// import 'coloshop-master/styles/bootstrap4/bootstrap.min.js';
// import 'coloshop-master/plugins/Isotope/isotope.pkgd.min.js';
// import 'coloshop-master/plugins/OwlCarousel2-2.2.1/owl.carousel.js';
// import 'coloshop-master/plugins/easing/easing.js';
// import 'coloshop-master/js/custom.js';



// <script src="styles/bootstrap4/popper.js"></script>
// <script src="styles/bootstrap4/bootstrap.min.js"></script>
// <script src="plugins/Isotope/isotope.pkgd.min.js"></script>
// <script src="plugins/OwlCarousel2-2.2.1/owl.carousel.js"></script>
// <script src="plugins/easing/easing.js"></script>
// <script src="js/custom.js"></script>

function App() {


  
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React

    //     </a>
    //   </header>
    // </div>
    <>
     <Header />
    {/* <Jquery />; */}
    </>


  );
}

export default App;
