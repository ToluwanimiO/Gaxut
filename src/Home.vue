<template>
  <div :key="componentKey">
	<!-- Header -->
	
	<!-- The Modal for the Search is missing on the index.html file you upload 
	kindly confirm if this div below is in the code -->

	<section>
    <div class="hero">
			<div class="hero-content">
				<h1>Learn &amp; be certified,<br>
					Work at your leisure.</h1>
				<p>Build skills with courses, get certificates and learn the latest skills to reach your professional goals.</p>
				
				<!-- <div class="hero-search d-flex">
					<i class="fas fa-search"></i>
					<input type="search" name="search" id="search" class="hero-input" placeholder="What do you want to learn?">
					<select class="select" id="">
						<option disabled selected>Categories</option>
						<option :value="item.name" v-for="(item,index) in categories" :key="index">{{item.name}}</option>
					</select>
					<input class="submit" type="submit" value="Search">
				</div> -->
			</div>
			
			<div class="hero-img">
				<img src="./assets/images/Hero_1.jpg" alt="">
			</div>
		
		</div>
		<hr class="hr-light">

		<div class="course-category">
			<h1>Our Course Categories</h1>
			<div class="container-fluid my-5 align-items-center">
				<span @click="slideLeft" id="slideLeft"><i class="fas fa-chevron-left"></i></span>
				
				<span class="pill-nav" id="navPill">
					<!-- <a class="pill active" >Most Popular</a> -->
					<a class="pill" v-bind:class="{'active':index==categoryClicked}" @click="displayCourses(item.slug,index)" v-for="(item,index) in categories" :key="index">{{item.name}}</a>
				</span>
				
				<span @click="slideRight" id="slideRight"><i class="fas fa-chevron-right"></i></span>
			</div>

			<div class="row d-flex" id="category">
	
				<div class="col-4" v-for="(item,index) in courses" :key="index">
					<div class="card">
						<!-- <img class="card-img-top" :src="item.thumbnail" alt="Card image"> -->
						<img class="card-img-top" src="./assets/images/social media.jpg" alt="Card image">
						<div class="card-body">
							<a class="category-pill-round text-dark" style="background: #f2cb054b;">{{item.description}}</a>
							<h5 class="card-title">{{item.title}}</h5>
							<p class="card-text"> {{item.lecturers_name}}</p>
							
							<hr class="hr-light">

							<div class="d-flex justify-content-between">
								<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
									<span>
									<i class="fas fa-signal"></i> {{item.level}}</span>
								</div>
								<div><p class="price">${{item.price}}</p></div>
							</div>
						</div>
					</div>
				</div>
				<!-- <div class="col-4">
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
				</div> -->
			
				

			</div>
			<span v-if="categories.length">
			<a style="color: #F2CB05;" class="btn view-all" v-if="coursesStatus">View All</a>
			<a style="color: #F2CB05; cursor:auto" class="btn view-all" v-if="!coursesStatus">No course in this category</a>
			</span>
		</div>

		<div class="course-category-mobile mt-5" id="category">
			<!-- <p>Most Popular</p>
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
			</div> -->
			
			<!-- <button class="accordion-link" >New</button>
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

			</div> -->
			<h1 style="margin-top:-70px">Our Course Categories</h1>
		<div id="accordion">
			<div v-for="(item,index) in categories" :key="index" > 
				<button @click="displayCourses(item.slug,index)" style="color:black"  class="accordion-link btn-secondary" data-toggle="collapse" :data-target="`#firstCategory`+index" >{{item.name}}</button>
				<div :id="`firstCategory`+index" class="collapse accordionPanel" data-parent="#accordion">
					<div class="card" v-for="(item,index) in courses" :key="index" style="margin-bottom:20px">
						<img class="card-img-top" src="./assets/images/social media.jpg" alt="Card image">
						<div class="card-body">
							<a class="category-pill-round text-dark" style="background-color: #f2cb054b;">{{item.description}}</a>
							<h5 class="card-title">{{item.title}}</h5>
							<p class="card-text">{{item.lecturers_name}}</p>
							
							<hr class="hr-light">

							<div class="d-flex justify-content-between">
								<div><span><I class="far fa-clock"></I> 3hr 12mins</span><br>
									<span>
									<i class="fas fa-signal"></i>{{item.level}}</span>
								</div>
								<div><p class="price">${{item.price}}</p></div>
							</div>
						</div>
					</div>
					<!-- <div class="card">
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
					</div> -->
					
					<a style="color: #F2CB05;" class="btn view-all" v-if="coursesStatus">View All</a>
					<a style="color: #F2CB05; cursor:auto" class="btn view-all" v-if="!coursesStatus">No course in this category</a>

				</div>
			</div>
		</div>	
			<!-- <button class="accordion-link">Graphic Design & Product Illustration</button>
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

			</div> -->
			
		</div>

		<div class="jobs mt-5">
			<div class="job-text">
				<h1>Get Amazing Jobs With Amazing Offers</h1>
				<p>Jobs are uploaded daily on different categories; graphic design, programming, data science, crytocurrency and more.</p>
				<router-link to="/jobs" class="btn view-jobs" >Click to View Jobs</router-link>	
			</div>			
			
			<div class="job-img">
				<img src="./assets/images/jobs.jpg" alt="">
			</div>
		
		</div>
	</section>

	<section id="cta" v-if="userStatus">
		<div class="container background-register">
			<div class="row" id="cta_details">
				<div class="col-lg-6 ">
					<div>
						<h5 class="text-center text-light text-lg-left">Ready to Join <br> Gaxut??</h5>
					</div>
				</div>
				<div class="col-lg-6">
					<router-link to="/login/signup" class="btn start-tutor" >Register Now</router-link>
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
		componentKey: 0,
		menuValue:'',
		// categories:this.$store.state.categories,
		courses:[],
		categoryClicked:0,
		userStatus:true,
		coursesStatus:this.$store.state.categories.length
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
	displayCourses:function(category,index)
	{
		this.categoryClicked=index
		window.axios.get("https://still-sands-03593.herokuapp.com/api/school/"+category+"/courses")
		.then(response=>
		{
			console.log(response.data.results)
			this.courses = response.data.results
			this.coursesStatus = this.courses.length
		})
	}
    
  },
  beforeRouteEnter(to, from, next) {
        next((vm) => {
            console.log(vm)
            if(from.path=="/login/login" || from.path=="/login/signup")
			{
				console.log(from)
				// console.log($router)
				console.log(vm.$router)
				vm.$router.go()
			}
			else if(from.path=="/dashboard" && vm.$store.state.log=="out")
			{
				vm.$router.go()
				alert("Log out succesful")
			}
        });
    },
  created: function(){
		console.log(this.categories)
		if(this.categories.length)
		{
			console.log('tolu')
		}
		if(localStorage.getItem('userdetails'))
		{
			this.userStatus=false
		}
    //   window.axios.get("https://still-sands-03593.herokuapp.com/api/school/categories/")
    //   .then(response=>
    //   {
    //     console.log(response.data)
    //     this.categories = response.data
	// 	window.axios.get("https://still-sands-03593.herokuapp.com/api/school/"+this.categories[0].slug+"/courses")
	// 	.then(response=>
	// 	{
	// 		console.log(response.data.results)
	// 		this.courses = response.data.results
	// 		this.coursesStatus = this.courses.length
	// 	})
    //   })
	if(this.$store.state.called.category || this.$store.state.called.course)
	{
		this.$store.dispatch('GET_CATEGORIES_LIST').then(() => {
		// ...
		})
	}
	else{
		console.log(this.categories)
	}
	
  },
  computed: {
		categories () {
			return this.$store.state.categories;
		}      
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
