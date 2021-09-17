<template>
  <div>
	<!-- Header -->
	
	<!-- The Modal for the Search is missing on the index.html file you upload 
	kindly confirm if this div below is in the code -->

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
					<a href="#"  class="btn start-tutor" value="">Register Now</a>
			</div>
			</div>
		</div>
		
	</section>

	

</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data(){
    return{
      menuValue:''
    }
  },
  methods: {
    slideRight: function()
    {
      document.getElementById('navPill').scrollLeft += 40;
    },
    slideLeft: function()
    {
      document.getElementById('navPill').scrollLeft -= 40;
    },
    
  },
}
</script>

<style>
.background-register
{
  background: url(./assets/images/Group\ 17.png) !important;
  background-position: center !important;
}
</style>
