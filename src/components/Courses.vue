<template>
    <div>
            <section  id="category_cate">
        <div class="container-fluid"> 
            <ul class="nav align-items-center" id="subcategory-nav" style="padding-top:0px;margin-top:0px;font-size:14px">
                <!-- <li class="nav-item">
                    <a class="nav-link all">All Programming</a>
                </li> -->
                <li class="nav-item"  v-for="(item,index) in categories" :key="index">
                    <a @click="displayCourses(index)" class="nav-link" v-bind:class="{'all':index==categoryClicked}">{{item.name}}</a>
                </li>
                <!-- <li class="nav-item">
                    <a href="#" class="nav-link">IOS Development</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Game Development</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Web Development</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Dart Programming</a>
                </li> -->
            </ul>
            <hr>
            <div class="container m-0  p-0 p-md-2" style="padding-top:0px">
                <h1 class="mb-2" style="margin-top:0px; padding-top:0px">{{category.name}} Courses</h1>
                <p  v-if="courseStatus" class="text-secondary">Courses to take you further in your career goals</p>
            </div>
            <h3 class="px-md-2 text-center mt-4" v-if="!courseStatus">
                No available courses for now, check again later
            </h3>
            <span v-if="courseStatus">
                <div class="d-flex justify-content-start mb-2 filter-container px-md-2">
                    <button id="filterButton" class="btn btn-outline-secondary"><span class="fas fa-sliders-h"></span> Filters</button>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" id="most-popular" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Create a Course</button>
                        <!-- <div class="dropdown-menu" aria-labelledby="most-popular">
                            <a class="dropdown-item disabled" href="#">Sort</a>
                            <a class="dropdown-item" href="#">Most Popular</a>
                            <a class="dropdown-item" href="#">New</a>
                        </div> -->
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3" id="filterColumn">
                        <hr>
                        <div class="container">
                            <a class="reset" href="">Reset</a>
                            <hr>
                            <div class="container p-0 mt-lg-3">
                                <ul class="list-unstyled">
                                    <li><h6>Level</h6></li>
                                    <li>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" value="">All levels
                                            </label>
                                        </div>                   
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" value="">Beginner
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" value="">Intermediate
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" value="">Advanced
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                                <hr>
                                <ul class="list-unstyled">
                                    <li><h6>Duration</h6></li>
                                    <li>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" value="">0 - 2 Hours
                                            </label>
                                        </div>                              
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" value="">3 - 6 Hours
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" value="">7 - 10 Hours
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" value="">11+ Hours
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                                <hr>
                                <ul class="list-unstyled">
                                    <li><h6>Price</h6></li>
                                    <li>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" value="">$0
                                            </label>
                                        </div>                              
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" value="">$1 - $50
                                            </label>
                                        </div>                              
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" value="">$51 - $100
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" value="">$100+
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                                <hr>
                                <button class="btn w-100 mt-2" type="submit" id="applyFilter">Done</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12" id="mainColumn">    
                        <div class="container-fluid mt-3 p-0">
                            <div class="card-category card shadow border-0 px-2 py-1" v-for="(item,index) in courses" :key="index">
                                <img class="float-right" src="../assets/images/social media.jpg" alt="">
                                <div class="d-flex  justify-content-between px-md-3 px-2">
                                    <div class="card-body">
                                        <a class="category-pill-square rounded px-1 px-md-5 py-1" style="background: #FCF8C1; color: #000000;">{{item.description}}</a>
                                        <h4 class="card-title mt-3">{{item.title}}</h4>
                                        <p class="card-text mb-2">{{item.description}}.</p>
                                        <a :href="item.overview" >{{item.overview}}</a>
                                        <p class="posted-by">{{item.lecturers_name}}</p>
                                        <hr class="my-1 my-md-3">
                                        <div class="d-flex my-md-3">
                                            <span class="mr-3"><i class="far fa-clock"></i> {{item.created | truncate(10)}}</span>
                                            <span class="mx-md-4"><i class="fas fa-signal"></i>{{item.level}}</span>
                                        </div>        
                                    </div>
                                    <h4 class="price my-auto">${{item.price}}</h4>
                                </div>
                            </div>
                            <!-- <div class="card-category card shadow border-0 px-2 py-1">
                                <img class="float-right" src="../assets/images/social media.jpg" alt="">
                                <div class="d-flex  justify-content-between px-md-3 px-2">
                                    <div class="card-body">
                                        <a class="category-pill-square rounded px-1 px-md-5 py-1" style="background: #BFC7DF; color: #000000;">IOS Programming</a>
                                        <h4 class="card-title mt-3">Course Title</h4>
                                        <p class="card-text mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur expedita odit ab deserunt velit obcaecati labore doloremque, eaque pariatur perferendis soluta, quam officiis quae autem. Natus aliquam nobis reprehenderit animi.</p>
                                        <p class="posted-by">Thompson Ebiaku</p>
                                        <hr class="my-1 my-md-3">
                                        <div class="d-flex my-md-3">
                                            <span class="mr-3"><i class="far fa-clock"></i> 2 days ago</span>
                                            <span class="mx-md-4"><i class="fas fa-signal"></i> All level</span>
                                        </div>        
                                    </div>
                                    <h4 class="price my-auto">$50.00</h4>
                                </div>
                            </div>
                            <div class="card-category card shadow border-0 px-2 py-1">
                                <img class="float-right" src="../assets/images/social media.jpg" alt="">
                                <div class="d-flex  justify-content-between px-md-3 px-2">
                                    <div class="card-body">
                                        <a class="category-pill-square rounded px-1 px-md-5 py-1" style="background-color: #f1f5ec;">Web Programming</a>
                                        <h4 class="card-title mt-3">Course Title</h4>
                                        <p class="card-text mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur expedita odit ab deserunt velit obcaecati labore doloremque, eaque pariatur perferendis soluta, quam officiis quae autem. Natus aliquam nobis reprehenderit animi.</p>
                                        <p class="posted-by">Thompson Ebiaku</p>
                                        <hr class="my-1 my-md-3">
                                        <div class="d-flex my-md-3">
                                            <span class="mr-3"><i class="far fa-clock"></i> 2 days ago</span>
                                            <span class="mx-md-4"><i class="fas fa-signal"></i> All level</span>
                                        </div>        
                                    </div>
                                    <h4 class="price my-auto">$50.00</h4>
                                </div>
                            </div>
                            <div class="card-category card shadow border-0 px-2 py-1">
                                <img class="float-right" src="../assets/images/social media.jpg" alt="">
                                <div class="d-flex  justify-content-between px-md-3 px-2">
                                    <div class="card-body">
                                        <a class="category-pill-square rounded px-1 px-md-5 py-1" style="background: #FCF8C1; color: #000000;">IOS Programming</a>
                                        <h4 class="card-title mt-3">Course Title</h4>
                                        <p class="card-text mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur expedita odit ab deserunt velit obcaecati labore doloremque, eaque pariatur perferendis soluta, quam officiis quae autem. Natus aliquam nobis reprehenderit animi.</p>
                                        <p class="posted-by">Thompson Ebiaku</p>
                                        <hr class="my-1 my-md-3">
                                        <div class="d-flex my-md-3">
                                            <span class="mr-3"><i class="far fa-clock"></i> 2 days ago</span>
                                            <span class="mx-md-4"><i class="fas fa-signal"></i> All level</span>
                                        </div>        
                                    </div>
                                    <h4 class="price my-auto">$50.00</h4>
                                </div>
                            </div>
                            <div class="card-category card shadow border-0 px-2 py-1">
                                <img class="float-right" src="../assets/images/social media.jpg" alt="">
                                <div class="d-flex  justify-content-between px-md-3 px-2">
                                    <div class="card-body">
                                        <a class="category-pill-square rounded px-1 px-md-5 py-1" style="background: #BFC7DF; color: #000000;">Web Programming</a>
                                        <h4 class="card-title mt-3">Course Title</h4>
                                        <p class="card-text mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur expedita odit ab deserunt velit obcaecati labore doloremque, eaque pariatur perferendis soluta, quam officiis quae autem. Natus aliquam nobis reprehenderit animi.</p>
                                        <p class="posted-by">Thompson Ebiaku</p>
                                        <hr class="my-1 my-md-3">
                                        <div class="d-flex my-md-3">
                                            <span class="mr-3"><i class="far fa-clock"></i> 2 days ago</span>
                                            <span class="mx-md-4"><i class="fas fa-signal"></i> All level</span>
                                        </div>        
                                    </div>
                                    <h4 class="price my-auto">$50.00</h4>
                                </div>
                            </div>
                            <div class="card-category card shadow border-0 px-2 py-1">
                                <img class="float-right" src="../assets/images/social media.jpg" alt="">
                                <div class="d-flex  justify-content-between px-md-3 px-2">
                                    <div class="card-body">
                                        <a class="category-pill-square rounded px-1 px-md-5 py-1" style="background-color: #f1f5ec;">IOS Programming</a>
                                        <h4 class="card-title mt-3">Course Title</h4>
                                        <p class="card-text mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur expedita odit ab deserunt velit obcaecati labore doloremque, eaque pariatur perferendis soluta, quam officiis quae autem. Natus aliquam nobis reprehenderit animi.</p>
                                        <p class="posted-by">Thompson Ebiaku</p>
                                        <hr class="my-1 my-md-3">
                                        <div class="d-flex my-md-3">
                                            <span class="mr-3"><i class="far fa-clock"></i> 2 days ago</span>
                                            <span class="mx-md-4"><i class="fas fa-signal"></i> All level</span>
                                        </div>        
                                    </div>
                                    <h4 class="price my-auto">$50.00</h4>
                                </div>
                            </div> -->
                            <div class="d-flex justify-content-center mt-3">
                                <ul class="nav" id="search-nav">
                                    <li class="nav-item">
                                        <a href="" class="nav-link border border-warning rounded-circle"><span class="fas fa-chevron-left"></span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="" class="nav-link active">1</a>
                                    </li>   
                                    <li class="nav-item">
                                        <a href="" class="nav-link">2</a>
                                    </li>  
                                    <li class="nav-item">
                                        <a href="" class="nav-link">3</a>
                                    </li>  
                                    <li class="nav-item"><sub>...</sub></li>
                                    <li class="nav-item">
                                        <a href="" class="nav-link">7</a>
                                    </li>  
                                    <li class="nav-item">
                                        <a href="" class="nav-link border border-warning rounded-circle"><span class="fas fa-chevron-right"></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    </section>
    <section id="cta" class="mt-3" v-if="userStatus">
		<div class="container background-register">
			<div class="row" id="cta_details">
				<div class="col-lg-6 ">
					<div>
						<h5 class="text-center text-light text-lg-left">Ready to Join <br> Gaxut??</h5>
					</div>
				</div>
				<div class="col-lg-6">
					<router-link to="/login/signup"  class="btn start-tutor" value="">Register Now</router-link>
			</div>
			</div>
		</div>
		
	</section>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'Courses',
  components: {
    // HelloWorld
  },
  data(){
    return{
        category:'',
        categories:'',
        categoryClicked:0,
        courses:[],

        userStatus:true
    }
  },
  computed: {
		courseStatus () {
			return this.courses.length;
		}   
	},
  methods: {
    displayCourses:function(index)
    {
        this.categoryClicked=index
        this.category = this.categories[index]
        window.axios.get("https://still-sands-03593.herokuapp.com/api/school/"+this.categories[index].slug+"/courses")
            .then(response=>
            {
                console.log(response.data.results)
                this.courses = response.data.results
            })
    }
  },
  filters: {
        truncate: function(data,num){
            const reqdString = 
              data.split("").slice(0, num).join("");
            return reqdString;
        }
    },
  created:function()
  {
      if(localStorage.getItem('userdetails'))
	{
		this.userStatus=false
		this.userFirstName=JSON.parse(localStorage.getItem('userdetails')).first_name
	}
    let param = this.$route.params.category     
    if(param){
        this.categoryClicked = param
        window.axios.get("https://still-sands-03593.herokuapp.com/api/school/categories/")
        .then(response=>
        {
            console.log(response.data)
            this.categories = response.data
            this.category = this.categories[param]
            console.log(this.category)
            window.axios.get("https://still-sands-03593.herokuapp.com/api/school/"+this.categories[param].slug+"/courses")
            .then(response=>
            {
                console.log(response.data.results)
                this.courses = response.data.results
            })
        })
    } 
    else
    {
        window.axios.get("https://still-sands-03593.herokuapp.com/api/school/categories/")
        .then(response=>
        {
            console.log(response.data)
            this.categories = response.data
            this.category = this.categories[0]
            console.log(this.category)
            window.axios.get("https://still-sands-03593.herokuapp.com/api/school/"+this.categories[0].slug+"/courses")
            .then(response=>
            {
                console.log(response.data.results)
                this.courses = response.data.results
            })
        })
    }
    
      
      
  }
}
</script>

<style>
    .background-register
    {
    background: url(../assets/images/Group\ 17.png) !important;
    background-position: center !important;
    }
</style>
