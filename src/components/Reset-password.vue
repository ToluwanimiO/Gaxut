<template>
    <div class="reset-body">
            <section class="signUp" style="margin-top: 70px;">
        <div class="container-fluid">
            <div class="row p-0 justify-content-center">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="contianer-fluid">
                        <div class="container p-0 border rounded-lg shadow-sm bg-white">
                            <div class="container-fluid justify-content-center p-3 p-sm-4">
                                <h4 class="text-center font-weight-bold mt-4 mb-3">Reset Your Password</h4>
                                <p class="text-secondary text-center mb-3" style="font-size: 15px;">Please provide the email address you used in  creating  your Gaxut Account</p>
                                <form class="p-md-4" action="">
                                    <div class="form-group mb-5">
                                        <label for="email" style="color: #000000;">Email</label>
                                        <input type="email" class="form-control rounded-lg" placeholder="Enter email address" id="email" required>
                                    </div>
                                    <button type="submit" class="btn btn-submit mt-3 text-white">SEND EMAIL</button>
                                </form>
                            </div>
                        </div> 
                    </div>
                </div> 
            </div>
        </div>
    </section>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'Reset',
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
    .reset-body {
    background: url("../assets/images/bg_login_pc.png");
    background-position: right;
    background-repeat: no-repeat;
    background-size: fill;
}
@media screen and (max-width: 1024px) {
    .reset-body {
        background-size: contain;
        min-height: 100vh;
    }
}
@media screen and (max-width: 768px) {
    .reset-body {
        background: url("../assets/images/bg_login_mobile.png");
        background-repeat: no-repeat;
        background-position: right;
        background-size: contain;
    }
}
</style>
