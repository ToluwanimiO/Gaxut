<template>
    <div>
            <section id="loginSignup " class="background-be-a-tutor" >
        <div class="container-fluid" >
            <div class="row p-0 justify-content-center" >
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="contianer-fluid">
                        <div class="container p-0 border rounded-lg shadow-sm bg-white">
                                <div id="signup" class="container"><br>
                                    <div class="container-fluid justify-content-center">
                                        <h4 class="text-center font-weight-bold mt-4 mb-2 reg">Register to Become A Tutor</h4>
                                        <div class="d-flex justify-content-center mb-2">
                                            <a class="mr-3" href=""><span class="fab fa-facebook fa-3x"></span></a>
                                            <a class="mr-3" href=""><span class="fab fa-apple"></span></a>
                                            <a class="mr-3" href=""><span class="fab fa-google"></span></a>
                                        </div>
                                        <p class="text-secondary text-center mb-3">Or connect with your email</p>
                                        <form class="p-md-3" action="">
                                             <div class="form-group mb-3">
                                                <label for="country" style="color: #000000;">Country</label>
                                                <select name="" id="country" class="form-control">
                                                    <option value="">United States</option>
                                                    <option value="">Nigeria</option>
                                                </select>
                                            </div>
                                            <div class="form-group mb-3">
                                                <label for="phone" style="color: #000000;">Phone Number</label>
                                                <input type="phone" class="form-control rounded-lg" placeholder="Enter Phone Number" id="phone" required>
                                            </div>
                                            <div class="form-group mb-3">
                                                <label for="description" style="color: #000000;">Description</label>
                                                <textarea name="" id="description" cols="30" rows="10" class="form-control" placeholder="Kindly Describe Yourself"></textarea>
                                            </div>
                                            <div class="form-group mb-3">
                                                <label for="twitter-link" style="color: #000000;">Twitter-Link</label>
                                                <input type="text" class="form-control rounded-lg" placeholder="Kindly Enter Your Twitter Link" id="twitter-link" required>
                                            </div>
                                            <div class="form-group mb-3">
                                                <label for="facebook-link" style="color: #000000;">Facebook-Link</label>
                                                <input type="text" class="form-control rounded-lg" placeholder="Kindly Enter Your Facebook Link" id="facebook-link" required>
                                            </div>
                                            <div class="form-group mb-3">
                                                <label for="linkedin-link" style="color: #000000;">Linkedin-Link</label>
                                                <input type="text" class="form-control rounded-lg" placeholder="Kindly Enter Your Linkedin Link" id="linkedin-link" required>
                                            </div>
                                            <div class="form-group mb-3">
                                                <label for="postal-code" style="color: #000000;">Postal Code</label>
                                                <input type="text" class="form-control rounded-lg" placeholder="Kindly Enter Your Postal Code" id="postal-code" required>
                                            </div>
                                             <p class="extra-notes">By clicking Sign up, you agree to our <span>Terms of Use</span> and <span>Privacy Policy</span> </p>
                                             <button type="submit" class="btn btn-submit">Become A Tutor</button>
                                        </form>
                                    </div> 
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
  name: 'Beatutor',
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
    .background-be-a-tutor
    {
        margin-top: 70px !important; 
        background: url(../assets/images/bg_login_pc.png) !important; 
        background-size: contain !important;
        padding: 5rem 0;
    }
    
</style>
