<template>
    <div>
            <section  id="category_cate">
        <div class="container-fluid"> 
            <ul class="nav align-items-center" id="subcategory-nav">
                <li class="nav-item">
                    <a class="nav-link all">All Programming</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Android Development</a>
                </li>
                <li class="nav-item">
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
                </li>
            </ul>
            <hr>
            <div class="container m-0 my-md-5 p-0 p-md-2">
                <h1 class="mb-2">All Programming Courses</h1>
                <p class="text-secondary">Courses to take you further in your career goals</p>
            </div>
            <div class="d-flex justify-content-start mb-2 filter-container px-md-2">
                <button id="filterButton" class="btn btn-outline-secondary"><span class="fas fa-sliders-h"></span> Filters</button>
                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" id="most-popular" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Most Popular</button>
                    <div class="dropdown-menu" aria-labelledby="most-popular">
                        <a class="dropdown-item disabled" href="#">Sort</a>
                        <a class="dropdown-item" href="#">Most Popular</a>
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
                        <div class="card shadow border-0 px-2 py-1">
                            <img class="float-right" src="images/social media.jpg" alt="">
                            <div class="d-flex  justify-content-between px-md-3 px-2">
                                <div class="card-body">
                                    <a class="category-pill-square rounded px-1 px-md-5 py-1" style="background: #FCF8C1; color: #000000;">Web Programming</a>
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
                        <div class="card shadow border-0 px-2 py-1">
                            <img class="float-right" src="images/social media.jpg" alt="">
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
                        <div class="card shadow border-0 px-2 py-1">
                            <img class="float-right" src="images/social media.jpg" alt="">
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
                        <div class="card shadow border-0 px-2 py-1">
                            <img class="float-right" src="images/social media.jpg" alt="">
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
                        <div class="card shadow border-0 px-2 py-1">
                            <img class="float-right" src="images/social media.jpg" alt="">
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
                        <div class="card shadow border-0 px-2 py-1">
                            <img class="float-right" src="images/social media.jpg" alt="">
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
                        </div>
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
    </section>
    <section id="cta" class="mt-3" >
        <div class="container" style="background: url(images/Group\ 17.png);  background-position: center;">
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
  name: 'Courses',
  components: {
    // HelloWorld
  },
  data(){
    return{

    }
  },
  methods: {
    
  },
}
</script>

<style>

</style>
