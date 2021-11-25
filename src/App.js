import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      		<nav className="navbar navbar-expand-lg navbar-light bg-dark nav-text">
		  <a className="navbar-brand" href="#"><strong>PIZZAMANIA</strong></a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav ml-auto">
		      <li className="nav-item active">
		        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
		      </li>
		      	<li className="nav-item active">
		        <a className="nav-link" href="#">About Pizza<span className="sr-only">(current)</span></a>
		      </li>
		      <li className="nav-item active">
		        <a className="nav-link" href="#">Pizza Types <span className="sr-only">(current)</span></a>
		      </li>
		    </ul>
		  </div>
		</nav>
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-12">
					<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
					  <div className="carousel-inner image-height">
					    <div className="carousel-item active">
					      <img src="images/filippovskaya-4394612.jpg" className="d-block w-100 img-fluid" alt="Pizza Photo"/>
					    </div>
					    <div className="carousel-item">
					      <img src="images/jordan-825661.jpg" className="d-block w-100 img-fluid" alt="Pizza Photo"/>
					    </div>
					    <div className="carousel-item">
					      <img src="images/sakana-4197996.jpg" className="d-block w-100 img-fluid" alt="Pizza in package"/>
					    </div>
					  </div>
					  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
					    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
					    <span className="sr-only">Previous</span>
					  </a>
					  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
					    <span className="carousel-control-next-icon" aria-hidden="true"></span>
					    <span className="sr-only">Next</span>
					  </a>
					</div>
				</div>
			</div>
		</div>
		<div className="container">
			<h2 className="about-pizza">About Pizza</h2>
			<div className="row">
				<div className="col-lg-6">
					<img className="about-img" src="images/koolshooters-7142962.jpg" className="img-fluid" alt="Girls Eating Pizza"/>
				</div>
				<div className="col-lg-6">
					At each pizzamania Shack, we prepare pizzamania’s Italian comfort food from scratch every day. No heat lamps. No frozen dough. No canned sauces. Our soups, salad dressings, sauces, pizza dough and focaccia are all made fresh daily, using pizzamania’s original recipes.Our kitchens are open, allowing our guests to see the cooks in action. Kids love to sit at the counter and watch the dough spin, the flour fly, and their favorite dishes prepared right before their eyes.Our beloved founder Mary Fazio passed away in 1999, but her legacy lives on in her family and her restaurants as a Sonoma County legend. Today, pizzamania’s Pizza Shack continues to be a family-run organization, carrying on her rich family traditions, delicious recipes and passion for good food and good company.
				</div>
			</div>
		</div>
		<div className="container">
			<h3 className="text-center pizza-types">Pizza Types</h3>
			<div className="row">
				<div className="col-lg-3">
					<h3>Pepperoni Pizza</h3>
					<img src="images/stockvault-271989.jpg" className="img-thumbnail" alt="Pepperoni Pizza"/>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				<div className="col-lg-3">
					<h3>Cheese Pizza</h3>
					<img src="images/stockvault-203267.png" className="img-thumbnail" alt="Cheese Pizza"/>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				<div className="col-lg-3">
					<h3>Vegetable Pizza</h3>
					<img src="images/stockvault-259985.jpg" className="img-thumbnail" alt="Vegetable Pizza"/>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				<div className="col-lg-3">
					<h3>Mushroom Pizza</h3>
					<img src="images/stockvault-214132.png" className="img-thumbnail" alt="Mushroom Pizza"/>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
		</div>
		<div className="footer">
			<div className="container">
				<div className="row">
					<p className="text-capitalize text-center">&copy; 2019 pizzamania all rights reserved</p>
				</div>
			</div>
		</div>
    </div>
  );
}

export default App;
