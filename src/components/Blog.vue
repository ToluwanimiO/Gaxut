<template>
    <div class="super_container">
        <section id="privacy">
                <div class="container">
                    <div class="title">
                        <div class="d-block text-right">
                            
                
                        </div>
                        <h5>Our Blog</h5><br>
                        <p>
                            Articles you'll love
                            <router-link to="/post-blog" class="btn btn-sm btn-secondary  mr-5 text-white">
                                Post Blog
                                <i class="fa fa-edit " ></i>
                            </router-link>
                        </p>
                        
                        
                    </div>
                    <div class="row">
                        <!-- {{item}} -->
                        <div class="col-lg-4" v-for="(item,index) in posts" :key="index">
                            <div class="card blog_details mb-3" style="height: 90%;">
                                <img src="../assets/images/photoshop.jpg" alt="" class="card-img-top">
                                <div class="card-body">
                                    <router-link :to="{ name: 'BlogDetail', params: { blogId: item.slug }}">
                                        <h5 class="card-title">
                                            {{item.title}}
                                        </h5>
                                    </router-link>
                                    <p class="text-muted">{{item.date_updated | truncate(10)}}</p>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="col-lg-4">
                            <div class="card blog_details mb-3" style="height: 90%;">
                                <img src="../assets/images/photoshop.jpg" alt="" class="card-img-top">
                                <div class="card-body">
                                    <a href=""><h5 class="card-title">4 Harmful Myth that Harm Cats</h5></a>
                                    <p class="text-muted">January 20,2021</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card blog_details mb-3">
                                <img src="../assets/images/photoshop.jpg" alt="" class="card-img-top">
                                <div class="card-body">
                                    <a href=""><h5 class="card-title">12 Relevant Skills To
                                        Have in Design</h5></a>
                                    <p class="text-muted">January 20,2021</p>
                                </div>
                            </div>
                        </div> -->
                    </div>

                    <!-- <div class="row mt-5 mb-5">
                        <div class="col-lg-4">
                            <div class="card blog_details mb-3">
                                <img src="../assets/images/photoshop.jpg" alt="" class="card-img-top">
                                <div class="card-body">
                                    <a href=""><h5 class="card-title">12 Relevant Skills To
                                        Have in Design</h5></a>
                                    <p class="text-muted">January 20,2021</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card blog_details mb-3">
                                <img src="../assets/images/photoshop.jpg" alt="" class="card-img-top">
                                <div class="card-body">
                                    <a href=""><h5 class="card-title">4 Harmful Myth that Harm Cats</h5></a>
                                    <p class="text-muted">January 20,2021</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card blog_details mb-3">
                                <img src="../assets/images/photoshop.jpg" alt="" class="card-img-top">
                                <div class="card-body">
                                    <a href=""><h5 class="card-title">12 Relevant Skills To
                                        Have in Design</h5></a>
                                    <p class="text-muted">January 20,2021</p>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    
                </div>
            </section>
            <section id="cta" class="mt-3">
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
    
    name: 'Blog',
    components: {
        // HelloWorld
    },
    data(){
        return{
            posts:JSON.parse(localStorage.getItem("posts"))
        }
    },
    methods: {
        
    },
    watch:{
        posts: function()
        {
            this.posts = JSON.parse(localStorage.getItem("posts"))
        }
    },
    created: function(){
        window.axios.get("https://still-sands-03593.herokuapp.com/api/blog/")
        .then(response=>
        {
            console.log("my response is..",response)
            localStorage.setItem("posts",JSON.stringify(response.data.results))
        })
        .catch(error=>console.log("my error is ...",error))
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
    background: url(../assets/images/Group\ 17.png) !important;
    background-position: center !important;
    }
</style>
