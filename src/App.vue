<template>
	<div class="super_container" >
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
								<router-link to="/" class="main_nav_item">Home</router-link>
								<a  style = "color:#000000;" class= "main_nav_item" href="javascript:void(0)" data-toggle="dropdown"
								aria-haspopup="true" aria-expanded="false">Categories</a>
								<div class="dropdown-menu dropdown-menu-left user-dd animated flipInY">
									<div v-for="(item,index) in categories" :key="index">
										<router-link :to="{ name: 'Courses', params: { category: index }}" class="dropdown-item mt-3">
											{{item.name}}</router-link>
										<div class="dropdown-divider"></div>
									</div>
									<!-- <a class="dropdown-item mt-3" href="javascript:void(0)">
										Graphics Design</a>
									<div class="dropdown-divider"></div>
									<a class="dropdown-item mt-3" href="javascript:void(0)">
										Digital Marketing</a>
									<div class="dropdown-divider"></div>
									<a class="dropdown-item mt-3" href="javascript:void(0)">
									Copy Writing</a>
									<div class="dropdown-divider"></div>
									<a class="dropdown-item mt-3" href="javascript:void(0)">
									Cryptocurrency</a> -->
								</div>
							
							<router-link to="/jobs" class="main_nav_item">Jobs</router-link>
							<router-link to="/about" class="main_nav_item">About</router-link>
							
							<!-- <div class="vl" style="border-left: 2px solid black; height: 10px;"></div> -->
							<template v-if="$route.name!='Login'">
								<li class="main_nav_item"><a href="#"><img src="./assets/images/Rectangle 8.png" alt=""></a></li>
								<router-link to="/login/login" class="main_nav_item" v-if="userStatus">Login</router-link>
								<router-link to="/dashboard">
									<a v-if="!userStatus" style="color:#ffb606">
										Welcome {{userFirstName}}!
									</a>
								</router-link>
								<router-link to="/login/signup"><a style="background: #FBF09E; color:#F4D634; border-radius: 9px; padding: 5px 20px 5px 20px;" class="btn btn-md btn-warning" v-if="userStatus"> Signup </a></router-link>
							</template>
						</ul>
					</div>
				</nav>
			</div>
			<!-- Hamburger -->
			<div class="hamburger_container" @click="openMenu">
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
	<div class="menu_container menu_mm" v-bind:class="{'active':menuValue}">

		<!-- Menu Close Button -->
		<div class="menu_close_container" @click="closeMenu" >
			<!-- <div class="menu_close"></div> -->
			<a href="#" class="btn btn-warning" id="back_button" style="color: #fff;"><i class="fa fa-angle-left"></i> Menu</a>
		</div>

		<!-- Menu Items -->
		<div class="menu_inner menu_mm mt-5">
			<div class="menu menu_mm">
				<ul class="menu_list menu_mm">
					<li class="menu_item menu_mm mb-3"><a href="#"><img src="./assets/images/logo.png" alt="" style="width: 120px;"></a></li>
					<router-link to="/dashboard"><li class=" mb-3" @click="closeMenu" style="color:#ecdc18" v-if="!userStatus"><a>Welcome {{userFirstName}}!</a></li></router-link>
					<router-link to="/"><li class="menu_item menu_mm mb-3" @click="closeMenu">Home</li></router-link>
					<router-link to="/courses"><li class="menu_item menu_mm mb-3" @click="closeMenu">Categories</li></router-link>
					<router-link to="/jobs"><li class="menu_item menu_mm mb-3" @click="closeMenu">Jobs</li></router-link>
					<router-link to="/about"><li class="menu_item menu_mm mb-3" @click="closeMenu">About</li></router-link>
					<template v-if="$route.name!='Login'">
						<router-link to="/login/login"><li class="menu_item menu_mm mb-3" @click="closeMenu" style="margin-top: 70px;" v-if="userStatus"><a>Login</a></li></router-link>
						<router-link to="/login/signup"><a @click="closeMenu" style="background: #FBF09E; color:#F4D634; border-radius: 9px; padding: 5px 20px 5px 20px;" v-if="userStatus" class="btn btn-md btn-warning mb-3"> Signup </a></router-link>	
					</template>
					
				</ul>
				<div class="menu_copyright menu_mm">Gaxut All rights reserved</div>
			</div>

		</div>

	</div>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
  <footer class="footer "  v-if="$route.name != 'Login'">
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
								<router-link to="/tutor"><li class="footer_list_item">Become A Tutor</li></router-link>
								<router-link to="/jobs"><li class="footer_list_item">View Jobs</li></router-link>
								<router-link to="/courses"><li  class="footer_list_item">Courses</li></router-link>
								<router-link to="/blog"><li class="footer_list_item">Blog</li></router-link>
							</ul>
						</div>
					</div>

					<!-- Footer Column - Usefull Links -->

					<div class="col-lg-3 footer_col">
						<div class="footer_column_title">About</div>
						<div class="footer_column_content">
							<ul>
								<router-link to="/about"><li class="footer_list_item">About Gaxut</li></router-link>
								<router-link to="/policy"><li class="footer_list_item">Privacy & Cookie Policy</li></router-link>
								<router-link to="/terms"><li class="footer_list_item">Terms & Condition</li></router-link>
								<router-link to="/help"><li class="footer_list_item">Help & Support</li></router-link>
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
									<router-link to="/help"><i class="fab fa-facebook"></i></router-link>
								</div>
								<div class="footer_contact_icon">
									<router-link to="/help"><i class="fab fa-twitter"></i></router-link>
								</div>
								<div class="footer_contact_icon">
									<router-link to="/help"><i class="fab fa-instagram"></i></router-link>
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
// import Home from "./Home.vue"

export default {
  name: 'App',
  components: {
    // Home
  },
  data(){
    return{
		date:'',
		menuValue:'',
		userStatus:true,
		userFirstName:'',
		categories:[]
    }
  },
  created: function(){ 
    this.date = new Date().getFullYear()
	if(localStorage.getItem('userdetails'))
	{
		this.userStatus=false
		this.userFirstName=JSON.parse(localStorage.getItem('userdetails')).first_name
	}
	window.axios.get("https://still-sands-03593.herokuapp.com/api/school/categories/")
      .then(response=>
      {
        console.log(response.data)
        this.categories = response.data
      })
  },
  methods: {
    closeMenu: function()
    {
      this.menuValue=false
    },
    openMenu: function()
    {
      this.menuValue =true
    },
    
  },
  filters: {
        truncate: function(data,num){
            const reqdString = 
              data.split("").slice(0, num).join("");
            return reqdString;
        }
    }
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
