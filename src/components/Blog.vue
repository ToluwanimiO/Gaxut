<template>
    <div class="super_container">
        <section id="privacy">
                <div class="container">
                    <div class="title">
                        <h5>Our Blog</h5><br>
                        <p>Articles you'll love</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="card blog_details mb-3">
                                <img src="../assets/images/photoshop.jpg" alt="" class="card-img-top">
                                <div class="card-body">
                                    <router-link :to="{ name: 'BlogDetail', params: { blogId: 123 }}"><h5 class="card-title">12 Relevant Skills To
                                        Have in Design</h5></router-link>
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
                    </div>

                    <div class="row mt-5 mb-5">
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
                    </div>
                    
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
        
    }
  },
  methods: {
    
  },
  created: function(){
      window.axios.get("http://still-sands-03593.herokuapp.com/api/blog/")
      .then(response=>console.log("my response is..",response))
      .catch(error=>console.log("my error is ...",error))
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
