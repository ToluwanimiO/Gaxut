<template>
    <div>
            <section id="jobs">
        <div class="container-fluid">
            <h1 class="px-md-2">Find The Right Jobs For You</h1>
            <div class="d-flex justify-content-start mb-2 filter-container px-md-2">
                <button id="filterButton" class="btn btn-outline-secondary"><span class="fas fa-sliders-h"></span> Filters</button>
                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" id="new" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">New</button>
                    <div class="dropdown-menu" aria-labelledby="new">
                        <a class="dropdown-item disabled" href="#">Sort</a>
                        <a class="dropdown-item" href="#">Most Applied</a>
                        <a class="dropdown-item" href="#">New</a>
                    </div>
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
                                <li><h6>Category</h6></li>
                                <li>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value="">Programming
                                        </label>
                                    </div>                   
                                </li>
                                <li>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value="">Digital Marketing
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value="">Graphic Design
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <a class="ml-3 see-more" href="">See more.</a>
                                </li>
                            </ul>
                            <hr>
                            <ul class="list-unstyled">
                                <li><h6>Job-type</h6></li>
                                <li>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value="">Contract
                                        </label>
                                    </div>                              
                                </li>
                                <li>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value="">Full time
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value="">Remote
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value="">Internship
                                        </label>
                                    </div>
                                </li>
                            </ul>
                            <hr>
                            <ul class="list-unstyled">
                                <li><h6>Pay</h6></li>
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
                                        <input type="checkbox" class="form-check-input" value="">$101 - $200
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value="">$200 +
                                        </label>
                                    </div>
                                </li>
                            </ul>
                            <hr>
                            <button type="submit" class="btn w-100" id="applyFilter">Done</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-12" id="mainColumn">    
                    <div class="row">
                        <div class="col-md-6 col-xl-4 p-2 p-xl-4"  v-for="(item,index) in jobs" :key="index">
                            <div class="card border border-0 shadow p-2">
                                <div class="d-flex justify-content-end p-2">
                                    <a class="category-pill-square rounded px-5 py-1 bg-success text-white" v-bind:class="{'bg-danger':item.job_status=='closed'}" style="background-color: #f1f5ec; color: #000000;">{{item.job_status}}</a>
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title">{{item.job_title}}</h4>
                                    <p class=" mb-2">{{item.job_description}}</p>
                                    <small class="posted-by">Posted by: {{item.employer}}</small>
                                    <div class="d-flex my-3">
                                        <span><i class="far fa-clock"></i> {{item.date_posted | truncate(10)}}</span>
                                        <span class="mx-4"><i class="far fa-user"></i> 24 Applicants</span>
                                    </div>        
                                    <h4 class="price">${{item.minimum_amount}} - ${{item.maximum_amount}}</h4>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="col-md-6 col-xl-4 p-2 p-xl-4">
                            <div class="card border border-0 shadow p-2">
                                <div class="d-flex justify-content-end p-2">
                                    <a class="category-pill-square rounded px-5 py-1" style="background-color: #f1f5ec; color: #000000;">DESIGN</a>
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title">Logo Designer</h4>
                                    <p class="card-text mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur expedita odit ab deserunt velit obcaecati labore doloremque, eaque pariatur perferendis soluta, quam officiis quae autem. Natus aliquam nobis reprehenderit animi.</p>
                                    <small class="posted-by">Posted by: Thompson Ebiaku</small>
                                    <div class="d-flex my-3">
                                        <span><i class="far fa-clock"></i> 2 days ago</span>
                                        <span class="mx-4"><i class="far fa-user"></i> 24 Applicants</span>
                                    </div>        
                                    <h4 class="price">$50.00</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-4 p-2 p-xl-4">
                            <div class="card border border-0 shadow p-2">
                                <div class="d-flex justify-content-end p-2">
                                    <a class="category-pill-square rounded px-5 py-1" style="background-color: #f1f5ec; color: #000000;">DESIGN</a>
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title">Logo Designer</h4>
                                    <p class="card-text mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur expedita odit ab deserunt velit obcaecati labore doloremque, eaque pariatur perferendis soluta, quam officiis quae autem. Natus aliquam nobis reprehenderit animi.</p>
                                    <small class="posted-by">Posted by: Thompson Ebiaku</small>
                                    <div class="d-flex my-3">
                                        <span><i class="far fa-clock"></i> 2 days ago</span>
                                        <span class="mx-4"><i class="far fa-user"></i> 24 Applicants</span>
                                    </div>        
                                    <h4 class="price">$50.00</h4>
                                </div>
                            </div>
                        </div> -->
                        <!-- <div class="col-md-6 col-xl-4 p-2 p-xl-4">
                            <div class="card border border-0 shadow p-2">
                                <div class="d-flex justify-content-end p-2">
                                    <a class="category-pill-square rounded px-5 py-1" style="background-color: #f1f5ec; color: #000000;">DESIGN</a>
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title">Logo Designer</h4>
                                    <p class="card-text mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur expedita odit ab deserunt velit obcaecati labore doloremque, eaque pariatur perferendis soluta, quam officiis quae autem. Natus aliquam nobis reprehenderit animi.</p>
                                    <small class="posted-by">Posted by: Thompson Ebiaku</small>
                                    <div class="d-flex my-3">
                                        <span><i class="far fa-clock"></i> 2 days ago</span>
                                        <span class="mx-4"><i class="far fa-user"></i> 24 Applicants</span>
                                    </div>        
                                    <h4 class="price">$50.00</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-4 p-2 p-xl-4">
                            <div class="card border border-0 shadow p-2">
                                <div class="d-flex justify-content-end p-2">
                                    <a class="category-pill-square rounded px-5 py-1" style="background-color: #f1f5ec; color: #000000;">DESIGN</a>
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title">Logo Designer</h4>
                                    <p class="card-text mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur expedita odit ab deserunt velit obcaecati labore doloremque, eaque pariatur perferendis soluta, quam officiis quae autem. Natus aliquam nobis reprehenderit animi.</p>
                                    <small class="posted-by">Posted by: Thompson Ebiaku</small>
                                    <div class="d-flex my-3">
                                        <span><i class="far fa-clock"></i> 2 days ago</span>
                                        <span class="mx-4"><i class="far fa-user"></i> 24 Applicants</span>
                                    </div>        
                                    <h4 class="price">$50.00</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-4 p-2 p-xl-4">
                            <div class="card border border-0 shadow p-2">
                                <div class="d-flex justify-content-end p-2">
                                    <a class="category-pill-square rounded px-5 py-1" style="background-color: #f1f5ec; color: #000000;">DESIGN</a>
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title">Logo Designer</h4>
                                    <p class="card-text mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur expedita odit ab deserunt velit obcaecati labore doloremque, eaque pariatur perferendis soluta, quam officiis quae autem. Natus aliquam nobis reprehenderit animi.</p>
                                    <small class="posted-by">Posted by: Thompson Ebiaku</small>
                                    <div class="d-flex my-3">
                                        <span><i class="far fa-clock"></i> 2 days ago</span>
                                        <span class="mx-4"><i class="far fa-user"></i> 24 Applicants</span>
                                    </div>        
                                    <h4 class="price">$50.00</h4>
                                </div>
                            </div>
                        </div> -->
                        <div class="col-md-12">
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
            </div>
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
  name: 'Job',
  components: {
    // HelloWorld
  },
  data(){
    return{
        jobs:[],
        userStatus:true
    }
  },
  methods: {
    
  },
  created: function(){
      if(localStorage.getItem('userdetails'))
	{
		this.userStatus=false
		this.userFirstName=JSON.parse(localStorage.getItem('userdetails')).first_name
	}
      window.axios.get("http://still-sands-03593.herokuapp.com/api/job")
      .then(response=>
      {
        console.log(response.data.results)
        this.jobs = response.data.results
      })
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
.background-register
{
  background: url(./assets/images/Group\ 17.png) !important;
  background-position: center !important;
}
</style>
