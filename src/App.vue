<template>
  <div class="super_container">
	<!-- Header -->
	<header class="header d-flex flex-row">
		<div class=" d-flex flex-row align-items-center">
			<!-- Logo -->
			<div class="logo_container d-none d-lg-block d-md-none">
				<div class="logo">
					<img src="./assets/images/GAXUT AI FILE-01.png" alt="">
				</div>
			</div>
			<!-- Main Navigation -->
			<nav class="main_nav_container">
				<div class="main_nav">
					<ul class="main_nav_list">
						<li class="main_nav_item">
							<div class="input-icons">
								<a href="#" class="text-center"><i class="fa fa-search mt-2" style="position: absolute; padding: 10px; min-width: 40px;"></i></a>
								<input type="text" class="form-control" placeholder="Search for anything" style="height: 50px; width: 300px;border-radius: 20px; text-align: center;">
							</div>
							</li>
							<a  style = "color:#000000;" class= "main_nav_item" href="javascript:void(0)" data-toggle="dropdown"
							aria-haspopup="true" aria-expanded="false">Categories</a>
							<div class="dropdown-menu dropdown-menu-left user-dd animated flipInY">
								<a class="dropdown-item mt-3" href="javascript:void(0)">
									Programming</a>
									<div class="dropdown-divider"></div>
								<a class="dropdown-item mt-3" href="javascript:void(0)">
									Graphics Design</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item mt-3" href="javascript:void(0)">
									Digital Marketing</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item mt-3" href="javascript:void(0)">
								Copy Writing</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item mt-3" href="javascript:void(0)">
							Cryptocurrency</a>
							</div>
						<li class="main_nav_item"><a href="jobs.html">Jobs</a></li>
						<li class="main_nav_item"><a href="about.html">About</a></li>
						<li class="main_nav_item"><a href="#"><img src="./assets/images/Rectangle 8.png" alt=""></a></li>
						<!-- <div class="vl" style="border-left: 2px solid black; height: 10px;"></div> -->
						<li class="main_nav_item"><a href="login.html">Login</a></li>
						<a style="background: #FBF09E; color:#F4D634; border-radius: 9px; padding: 5px 20px 5px 20px;" class="btn btn-md btn-warning" href="login.html"> Signup </a>
					</ul>
				</div>
			</nav>
		</div>
		<!-- Hamburger -->
		<div class="hamburger_container">
			<!-- <i class="fas fa-bars trans_200"></i> -->
			<img src="./assets/images/bars.png" alt="">
		</div>
		<div class="logo_mobile mx-auto " >
			<!-- <h5 class="text-center d-sm-none">Gaxut</h5> -->
			<img src="./assets/images/logo (1).png" alt="">
		</div>
		<!-- And also check this code if they are the same for the search modal to work -->
		<div class="search_mobile">
			<a href="javascript:void(0)" data-toggle="modal" data-target="#exampleModal">
				<img src="./assets/images/search 1.png" alt=""></a>
		</div>
		<!-- And also check this code if they are the same for the search modal to work -->
	</header>
	<!-- The Modal for the Search is missing on the index.html file you upload 
	kindly confirm if this div below is in the code -->
	<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
      <div class="modal-content">
			<div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
        </button>
			</div>
			<div class="modal-body">
        <form>
				<div class="form-group">
          <label for="recipient-name" class="col-form-label">Search:</label>
          <div class="input-icons">
					<a href="#" class="text-center"><i class="fa fa-search mt-2" style="position: absolute; padding: 10px; min-width: 40px; color:#F2CB05;"></i></a>
					<input type="text" class="form-control" placeholder="Search for anything" style="height: 50px;border-radius: 20px; text-align: center;">
				</div>
				</div>
        </form>
			</div>
      </div>
		</div>
    </div>
    <!-- The Modal for the Search is missing on the index.html file you upload 
	kindly confirm if this div is in the code -->

	<!-- Menu -->
	<div class="menu_container menu_mm">

		<!-- Menu Close Button -->
		<div class="menu_close_container">
			<!-- <div class="menu_close"></div> -->
			<a href="#" class="btn btn-warning" id="back_button" style="color: #fff;"><i class="fa fa-angle-left"></i> Menu</a>
		</div>

		<!-- Menu Items -->
		<div class="menu_inner menu_mm mt-5">
			<div class="menu menu_mm">
				<ul class="menu_list menu_mm">
					<li class="menu_item menu_mm mb-3"><a href="#"><img src="./assets/images/logo.png" alt="" style="width: 120px;"></a></li>
					<li class="menu_item menu_mm mb-3"><a href="categories.html">Categories</a></li>
					<li class="menu_item menu_mm mb-3"><a href="jobs.html">Jobs</a></li>
					<li class="menu_item menu_mm mb-3"><a href="about.html">About</a></li>
					<li class="menu_item menu_mm mb-3" style="margin-top: 70px;"><a href="#">Login</a></li>
					<a style="background: #FBF09E; color:#F4D634; border-radius: 9px; padding: 5px 20px 5px 20px;" class="btn btn-md btn-warning mb-3" href="#"> Signup </a>
				</ul>
				<div class="menu_copyright menu_mm">Gaxut All rights reserved</div>
			</div>

		</div>

	</div>
	<section>
    <div class="hero">
			<div class="hero-content">
				<h1>Learn &amp; be certified,<br>
					Work at your leisure.</h1>
				<p>Build skills with courses, get certificates and learn the latest skills to reach your professional goals.</p>
				
				<div class="hero-search d-flex">
					<i class="fas fa-search"></i>
					<input type="search" name="search" id="search" class="hero-input" placeholder="What do you want to learn?">
					<select class="select" id="">
						<option>Categories</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
					</select>
					<input class="submit" type="submit" value="Search">
				</div>
			</div>
			
			<div class="hero-img">
				<img src="./assets/images/Hero_1.jpg" alt="">
			</div>
		
		</div>
		<hr class="hr-light">

		<div class="course-category">
			<h1>Our Course Categories</h1>
			<div class="container-fluid my-5 align-items-center">
				<button @click="slideLeft" id="slideLeft"><i class="fas fa-chevron-left"></i></button>
				
				<div class="pill-nav" id="navPill">
					<a class="pill active" href="#category">Most Popular</a>
					<a class="pill" href="#category">New</a>
					<a class="pill" href="#category">Programming</a>
					<a class="pill" href="#category">Graphic Design and Product Illustration</a>
					<a class="pill" href="#category">Digital Marketing</a>
					<a class="pill" href="#category">Data Science</a>
				</div>
				
				<button @click="slideRight" id="slideRight"><i class="fas fa-chevron-right"></i></button>
			</div>

			<div class="row d-flex" id="category">
	
				<div class="col-4">
					<div class="card">
						<img class="card-img-top" src="./assets/images/social media.jpg" alt="Card image">
						<div class="card-body">
							<a class="category-pill-round text-dark" style="background: #f2cb054b;">Digital Marketing</a>
							<h5 class="card-title">Social Media Advertisement</h5>
							<p class="card-text">Thompson Ebiaku</p>
							
							<hr class="hr-light">

							<div class="d-flex justify-content-between">
								<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
									<span>
									<i class="fas fa-signal"></i> All level</span>
								</div>
								<div><p class="price">$50.00</p></div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-4">
				<div class="card">
					<img class="card-img-top" src="./assets/images/crypto.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round text-dark" style="background: #bfc7df60;">Cryptocurrency</a>
						<h5 class="card-title">A Complete Guide to Crypto-Currency</h5>
						<p class="card-text">Ezekial Irewole</p>
						
						<hr class="hr-light">

						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> Beginner</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				</div>
				<div class="col-4">
				<div class="card">
					<img class="card-img-top" src="./assets/images/digital.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round text-dark" style="background: #f2cb054b;">Digital Marketing</a>
						<h5 class="card-title">Introduction to Digitalization</h5>
						<p class="card-text">Jane Dove</p>
						
						<hr class="hr-light">
						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> Intermediate</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
					</div>
				</div>
				<div class="col-4">
				<div class="card">
					<img class="card-img-top" src="./assets/images/node.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round text-dark" style="background-color: #cad9ba54;">Programming</a>
						<h5 class="card-title">NodeJs Crash Course</h5>
						<p class="card-text">Abraham John</p>
						
						<hr class="hr-light">
						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> All level</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				</div>
				<div class="col-4">
				<div class="card">
					<img class="card-img-top" src="./assets/images/photoshop.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round text-dark" style="background-color: #bfc7df60;">Cryptocurrency</a>
						<h5 class="card-title">Adobe Essentials 2021</h5>
						<p class="card-text">Greatman Alfred</p>
						
						<hr class="hr-light">
						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> All level</span>
							</div>
							<div ><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				</div>
				<div class="col-4">
				<div class="card">
					<img class="card-img-top" src="./assets/images/data science.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round text-dark" style="background: #f2cb054b;">Digital Marketing</a>
						<h5 class="card-title">Data Science for Beginners</h5>
						<p class="card-text">Jane Dove</p>
						
						<hr class="hr-light">
						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> All level</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				</div>
			
				<a style="color: #F2CB05;" class="btn view-all">View All</a>

			</div>

		</div>

		<div class="course-category-mobile" id="category">
			<p>Most Popular</p>
			<div class="most-popular">
				<div class="card">
					<img class="card-img-top" src="./assets/images/social media.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round text-dark" style="background-color: #f2cb054b;">Digital Marketing</a>
						<h5 class="card-title">Social Media Advertisement</h5>
						<p class="card-text">Thompson Ebiaku</p>
						
						<hr class="hr-light">

						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> All level</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				<div class="card">
					<img class="card-img-top" src="./assets/images/crypto.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round text-dark" style="background-color: #bfc7df60;">Cryptocurrency</a>
						<h5 class="card-title">A Complete Guide to Crypto-Currency</h5>
						<p class="card-text">Ezekial Irewole</p>
						
						<hr class="hr-light">

						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> Beginner</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				<div class="card">
					<img class="card-img-top" src="./assets/images/digital.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round text-dark" style="background-color: #f2cb054b;">Digital Marketing</a>
						<h5 class="card-title">Introduction to Digitalization</h5>
						<p class="card-text">Jane Dove</p>
						
						<hr class="hr-light">
						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> Intermediate</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				<div class="card">
					<img class="card-img-top" src="./assets/images/node.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round text-dark" style="background-color: #cad9ba54;">Programming</a>
						<h5 class="card-title">NodeJs Crash Course</h5>
						<p class="card-text">Abraham John</p>
						
						<hr class="hr-light">
						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> All level</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>

				<a style="color: #F2CB05;" class="btn view-all">View All</a>
			</div>
			
			<button class="accordion-link">New</button>
			<div class="accordionPanel">
				<div class="card">
					<img class="card-img-top" src="./assets/images/social media.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round text-dark" style="background-color: #f2cb054b;">Digital Marketing</a>
						<h5 class="card-title">Social Media Advertisement</h5>
						<p class="card-text">Thompson Ebiaku</p>
						
						<hr class="hr-light">

						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> All level</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				<div class="card">
					<img class="card-img-top" src="./assets/images/crypto.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round text-dark" style="background-color: #bfc7df60;">Cryptocurrency</a>
						<h5 class="card-title">A Complete Guide to Crypto-Currency</h5>
						<p class="card-text">Ezekial Irewole</p>
						
						<hr class="hr-light">

						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> Beginner</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				<div class="card">
					<img class="card-img-top" src="./assets/images/digital.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round text-dark" style="background-color: #f2cb054b;">Digital Marketing</a>
						<h5 class="card-title">Introduction to Digitalization</h5>
						<p class="card-text">Jane Dove</p>
						
						<hr class="hr-light">
						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> Intermediate</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				<div class="card">
					<img class="card-img-top" src="./assets/images/node.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round text-dark" style="background-color: #cad9ba54;">Programming</a>
						<h5 class="card-title">NodeJs Crash Course</h5>
						<p class="card-text">Abraham John</p>
						
						<hr class="hr-light">
						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> All level</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				
				<a style="color: #F2CB05;" class="btn view-all">View All</a>

			</div>

			
			<button class="accordion-link">Programming</button>
			<div class="accordionPanel">
				<div class="card">
					<img class="card-img-top" src="./assets/images/social media.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round text-dark" style="background-color: #f2cb054b;">Digital Marketing</a>
						<h5 class="card-title">Social Media Advertisement</h5>
						<p class="card-text">Thompson Ebiaku</p>
						
						<hr class="hr-light">

						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> All level</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				<div class="card">
					<img class="card-img-top" src="./assets/images/crypto.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round-round text-dark" style="background-color: #bfc7df60;">Cryptocurrency</a>
						<h5 class="card-title">A Complete Guide to Crypto-Currency</h5>
						<p class="card-text">Ezekial Irewole</p>
						
						<hr class="hr-light">

						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> Beginner</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				<div class="card">
					<img class="card-img-top" src="./assets/images/digital.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round-round text-dark" style="background-color: #f2cb054b;">Digital Marketing</a>
						<h5 class="card-title">Introduction to Digitalization</h5>
						<p class="card-text">Jane Dove</p>
						
						<hr class="hr-light">
						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> Intermediate</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				<div class="card">
					<img class="card-img-top" src="./assets/images/node.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round-round text-dark" style="background-color: #cad9ba54;">Programming</a>
						<h5 class="card-title">NodeJs Crash Course</h5>
						<p class="card-text">Abraham John</p>
						
						<hr class="hr-light">
						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> All level</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				
				<a style="color: #F2CB05;" class="btn view-all">View All</a>

			</div>

			
			<button class="accordion-link">Graphic Design & Product Illustration</button>
			<div class="accordionPanel">
				<div class="card">
					<img class="card-img-top" src="./assets/images/social media.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round text-dark" style="background-color: #f2cb054b;">Digital Marketing</a>
						<h5 class="card-title">Social Media Advertisement</h5>
						<p class="card-text">Thompson Ebiaku</p>
						
						<hr class="hr-light">

						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> All level</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				<div class="card">
					<img class="card-img-top" src="./assets/images/crypto.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round-round text-dark" style="background-color: #bfc7df60;">Cryptocurrency</a>
						<h5 class="card-title">A Complete Guide to Crypto-Currency</h5>
						<p class="card-text">Ezekial Irewole</p>
						
						<hr class="hr-light">

						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> Beginner</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				<div class="card">
					<img class="card-img-top" src="./assets/images/digital.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round-round text-dark" style="background-color: #f2cb054b;">Digital Marketing</a>
						<h5 class="card-title">Introduction to Digitalization</h5>
						<p class="card-text">Jane Dove</p>
						
						<hr class="hr-light">
						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> Intermediate</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				<div class="card">
					<img class="card-img-top" src="./assets/images/node.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round-round text-dark" style="background-color: #cad9ba54;">Programming</a>
						<h5 class="card-title">NodeJs Crash Course</h5>
						<p class="card-text">Abraham John</p>
						
						<hr class="hr-light">
						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> All level</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				
				<a style="color: #F2CB05;" class="btn view-all">View All</a>

			</div>

			
			<button class="accordion-link">Digital Marketing</button>
			<div class="accordionPanel">
				<div class="card">
					<img class="card-img-top" src="./assets/images/social media.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round text-dark" style="background-color: #f2cb054b;">Digital Marketing</a>
						<h5 class="card-title">Social Media Advertisement</h5>
						<p class="card-text">Thompson Ebiaku</p>
						
						<hr class="hr-light">

						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> All level</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				<div class="card">
					<img class="card-img-top" src="./assets/images/crypto.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round-round text-dark" style="background-color: #bfc7df60;">Cryptocurrency</a>
						<h5 class="card-title">A Complete Guide to Crypto-Currency</h5>
						<p class="card-text">Ezekial Irewole</p>
						
						<hr class="hr-light">

						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> Beginner</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				<div class="card">
					<img class="card-img-top" src="./assets/images/digital.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round-round text-dark" style="background-color: #f2cb054b;">Digital Marketing</a>
						<h5 class="card-title">Introduction to Digitalization</h5>
						<p class="card-text">Jane Dove</p>
						
						<hr class="hr-light">
						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> Intermediate</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				<div class="card">
					<img class="card-img-top" src="./assets/images/node.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round-round text-dark" style="background-color: #cad9ba54;">Programming</a>
						<h5 class="card-title">NodeJs Crash Course</h5>
						<p class="card-text">Abraham John</p>
						
						<hr class="hr-light">
						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> All level</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				
				<a style="color: #F2CB05;" class="btn view-all">View All</a>

			</div>

			
			<button class="accordion-link">Data Science</button>
			<div class="accordionPanel">
				<div class="card">
					<img class="card-img-top" src="./assets/images/social media.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round text-dark" style="background-color: #f2cb054b;">Digital Marketing</a>
						<h5 class="card-title">Social Media Advertisement</h5>
						<p class="card-text">Thompson Ebiaku</p>
						
						<hr class="hr-light">

						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> All level</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				<div class="card">
					<img class="card-img-top" src="./assets/images/crypto.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round-round text-dark" style="background-color: #bfc7df60;">Cryptocurrency</a>
						<h5 class="card-title">A Complete Guide to Crypto-Currency</h5>
						<p class="card-text">Ezekial Irewole</p>
						
						<hr class="hr-light">

						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> Beginner</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				<div class="card">
					<img class="card-img-top" src="./assets/images/digital.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round-round text-dark" style="background-color: #f2cb054b;">Digital Marketing</a>
						<h5 class="card-title">Introduction to Digitalization</h5>
						<p class="card-text">Jane Dove</p>
						
						<hr class="hr-light">
						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> Intermediate</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				<div class="card">
					<img class="card-img-top" src="./assets/images/node.jpg" alt="Card image">
					<div class="card-body">
						<a class="category-pill-round-round text-dark" style="background-color: #cad9ba54;">Programming</a>
						<h5 class="card-title">NodeJs Crash Course</h5>
						<p class="card-text">Abraham John</p>
						
						<hr class="hr-light">
						<div class="d-flex justify-content-between">
							<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
								<span>
								<i class="fas fa-signal"></i> All level</span>
							</div>
							<div><p class="price">$50.00</p></div>
						</div>
					</div>
				</div>
				
				<a style="color: #F2CB05;" class="btn view-all">View All</a>

			</div>
			
		</div>

		<div class="jobs">
			<div class="job-text">
				<h1>Get Amazing Jobs With Amazing Offers</h1>
				<p>Jobs are uploaded daily on different categories; graphic design, programming, data science, crytocurrency and more.</p>
				<a class="btn view-jobs" href="#">Click to View Jobs</a>	
			</div>			
			
			<div class="job-img">
				<img src="./assets/images/jobs.jpg" alt="">
			</div>
		
		</div>
	</section>

	<section id="cta" >
		<div class="container background-register">
			<div class="row" id="cta_details">
				<div class="col-lg-6 ">
					<div>
						<h5 class="text-center text-light text-lg-left">Ready to Join <br> Gaxut??</h5>
					</div>
				</div>
				<div class="col-lg-6">
					<a href="#"  class="btn start-tutor" value="" @click="viewDate">Register Now</a>
			</div>
			</div>
		</div>
		
	</section>

	<footer class="footer ">
		<div class="container">
			

			<!-- Footer Content -->

			<div class="mt-5">
				<div class="row">

					<!-- Footer Column - About -->
					<div class="col-lg-3">
						<!-- Logo -->
						<div class="logo_container">
              <div class="logo">
								<img src="./assets/images/GAXUT 592 BY 215-01.png" alt="" style="width: 150px;">
							</div>
						</div>
						<p class="footer_about_text">An E-learning and freelancing platform that's on a mission to educate minds develop a skillful society, while you make money in the process.</p>
						<p>
							<!-- &copy;<script>document.write(new Date().getFullYear());</script> Copyright Gaxut -->
							&copy;{{date}} Copyright Gaxut
							</p>
					</div>


					<!-- Footer Column - Menu -->

					<div class="col-lg-3 footer_col">
						<div class="footer_column_title">Explore</div>
						<div class="footer_column_content">
							<ul>
								<li class="footer_list_item"><a href="tutor.html">Become A Tutor</a></li>
								<li class="footer_list_item"><a href="categories.html">View Jobs</a></li>
								<li class="footer_list_item"><a href="#">Courses</a></li>
								<li class="footer_list_item"><a href="blog.html">Blog</a></li>
							</ul>
						</div>
					</div>

					<!-- Footer Column - Usefull Links -->

					<div class="col-lg-3 footer_col">
						<div class="footer_column_title">About</div>
						<div class="footer_column_content">
							<ul>
								<li class="footer_list_item"><a href="about.html">About Gaxut</a></li>
								<li class="footer_list_item"><a href="privacy.html">Privacy & Cookie Policy</a></li>
								<li class="footer_list_item"><a href="terms.html">Terms & Condition</a></li>
								<li class="footer_list_item"><a href="newcontact.html">Help & Support</a></li>
							</ul>
						</div>
					</div>

					<!-- Footer Column - Contact -->

					<div class="col-lg-3 footer_col">
						<div class="footer_column_title">Connect</div>
						<div class="footer_column_content">
							<ul>
								<li class="footer_contact_item">
									<div class="footer_contact_icon">
										<i class="fa fa-map-marker-alt"></i>
									</div>
									ABH, UCH 200212,NG
								</li>
								<li class="footer_contact_item">
									<div class="footer_contact_icon">
										<a href="mailto:info@gaxut.com"><i class="fa fa-envelope"></i></a>
									</div>info@gaxut.com
								</li><br>
								<div class="footer_contact_icon">
									<a href="#"><i class="fab fa-facebook"></i></a>
								</div>
								<div class="footer_contact_icon">
									<a href="#"><i class="fab fa-twitter"></i></a>
								</div>
								<div class="footer_contact_icon">
									<a href="#"><i class="fab fa-instagram"></i></a>
								</div>
							</ul>
						</div>
					</div>

				</div>
			</div>
		</div>
	</footer>

</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data(){
    return{
      date:''
    }
  },
  created: function(){
    this.date = new Date().getFullYear()
  },
  methods: {
    slideRight: function()
    {
      document.getElementById('navPill').scrollLeft += 40;
    },
    slideLeft: function()
    {
      document.getElementById('navPill').scrollLeft -= 40;
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.background-register
{
  background: url(./assets/images/Group\ 17.png) !important;
  background-position: center !important;
}
</style>
