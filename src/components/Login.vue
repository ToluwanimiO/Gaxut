<template>
    <div class="login-body">
        <section class="signUp" style="margin-top: 70px;">
        <div class="container-fluid" >
            <div class="row p-0 justify-content-center" >
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="contianer-fluid">
                        <div class="container p-0 border rounded-lg shadow-sm bg-white">
                            <!-- Nav tabs -->
                            <ul class="nav nav-pills nav-justified" role="pill">
                                <li class="nav-item">
                                    <a ref="loginItem" class="nav-link py-3 rounded-0 active text-dark" data-toggle="pill" href="#login">Log in</a>
                                </li>
                                <li class="nav-item">
                                    <a ref="signItem" class="nav-link py-3 rounded-0 text-dark" data-toggle="pill" href="#signup">Sign up</a>
                                </li>
                            </ul>
                        
                            <!-- Tab panes -->
                            
                            <div class="tab-content">
                                <div class="alert alert-success" v-bind:class="{'d-none':data_response.truth,'alert-danger':data_response.success}"  role="alert">
                                    {{data_response.value}}
                                </div>
                                <div id="login" class="container tab-pane active"><br>
                                   <div class="container-fluid justify-content-center p-3" >
                                       <h4 class="text-center font-weight-bold mt-4 mb-2">Log into your account</h4>
                                       <div class="d-flex justify-content-center mb-2">
                                           <a class="mr-3" href=""><span class="fab fa-facebook fa-3x"></span></a>
                                           <a class="mr-3" href=""><span class="fab fa-apple"></span></a>
                                           <a class="mr-3" href=""><span class="fab fa-google"></span></a>
                                       </div>
                                       <p class="text-secondary text-center mb-3">Or connect with your email</p>
                                       <form @submit.prevent="logIn" class="p-md-3" action="">
                                            <div class="form-group mb-4">
                                                <label for="email">Email</label>
                                                <input v-model="logUser.email" type="text" class="form-control rounded-lg" placeholder="Enter email" id="email" required>
                                            </div>
                                            <div class="form-group mb-4">
                                                <label for="pwd">Password</label>
                                                <input v-model="logUser.password" type="password" class="form-control rounded-lg" placeholder="Enter password" id="pwd" required>
                                            </div>
                                            <p class="extra-notes">By clicking log in, you agree to our <span>Terms of Use</span> and <span>Privacy Policy</span></p>
                                            <button type="submit" class="btn btn-submit mt-2 text-white">LOG IN</button>
                                       </form>
                                       <hr class="mt-2 mb-4">
                                       <router-link to="/reset"><a class="forgotPw">Forgot your password?</a></router-link>
                                   </div>
                                </div>
                                <div id="signup" class="container tab-pane fade"><br>
                                    <div class="container-fluid justify-content-center">
                                        <h4 class="text-center font-weight-bold mt-4 mb-2">Create an account</h4>
                                        <div class="d-flex justify-content-center mb-2">
                                            <a class="mr-3" href=""><span class="fab fa-facebook fa-3x"></span></a>
                                            <a class="mr-3" href=""><span class="fab fa-apple"></span></a>
                                            <a class="mr-3" href=""><span class="fab fa-google"></span></a>
                                        </div>
                                        <p class="text-secondary text-center mb-3">Or connect with your email</p>
                                        <form @submit.prevent="signUp" class="p-md-3" action="">
                                            <div class="form-group mb-3">
                                                <label for="username">Username</label>
                                                <input type="text" v-model="user.username" class="form-control rounded-lg" placeholder="Enter username" id="username" required>
                                                <!-- <small v-if="error.username" class="d-block alert alert-danger small-text text-center">
                                                    {{error.username}}
                                                </small> -->
                                             </div>
                                            <div class="form-group mb-3">
                                                <label for="fName">First Name</label>
                                                <input type="text" v-model="user.first_name" class="form-control rounded-lg" placeholder="Enter first name" id="fName" required>
                                                <!-- <small v-if="error.first_name" class="d-block alert alert-danger small-text text-center">
                                                    {{error.first_name}}
                                                </small> -->
                                            </div>
                                            <div class="form-group mb-3">
                                                <label for="lName">Last Name</label>
                                                <input type="text" v-model="user.last_name" class="form-control rounded-lg" placeholder="Enter last name or surname" id="lName" required>
                                                <!-- <small v-if="error.last_name" class="d-block alert alert-danger small-text text-center">
                                                    {{error.last_name}}
                                                </small> -->
                                            </div>
                                             <div class="form-group mb-3">
                                                <label for="email">Email</label>
                                                <input type="email" v-model="user.email" class="form-control rounded-lg" placeholder="Enter email address" id="email" required>
                                                <!-- <small v-if="error.email" class="d-block alert alert-danger small-text text-center">
                                                    {{error.email}}
                                                </small> -->
                                             </div>
                                             <div class="form-group mb-3">
                                                 <label for="pwd1">Password</label>
                                                 <input type="password" v-model="user.password" class="form-control rounded-lg" placeholder="Enter password" id="pwd1" required>
                                                <!-- <small v-if="error.password" class="d-block alert alert-danger small-text text-center">
                                                    {{error.password}}
                                                </small> -->
                                             </div>
                                             <div class="form-group mb-3">
                                                <label for="pwd2">Confirm Password</label>
                                                <input type="password" v-model="user.password2" class="form-control rounded-lg" placeholder="Re-enter password" id="pwd2" required>
                                                <!-- <small v-if="error.password2" class="d-block alert alert-danger small-text text-center">
                                                    {{error.password2}}
                                                </small> -->
                                            </div>
                                             <p class="extra-notes">By clicking Sign up, you agree to our <span>Terms of Use</span> and <span>Privacy Policy</span> </p>
                                             <button type="submit" class="btn btn-submit">SIGN UP</button>
                                        </form>
                                    </div> 
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
  name: 'Login',
  components: {
    // HelloWorld
  },
  data(){
    return{
        error:{
            username:null,
            first_name:null,
            last_name:null,
            email:null,
            password:null,
            password2:null
        },
        user:{
            username:null,
            first_name:null,
            last_name:null,
            email:null,
            password:null,
            password2:null
        },
        logUser:{
            email:null,
            password:null
        },
        data_response:{
            truth:true,
            value:"",
            success:false
        }
    }
  }, 
  mounted:function(){
      if (this.$route.params.action == "signup")
      {
           this.$refs.signItem.click()
      }
  },
  methods: {
    signUp: function(e){
        //validation
        // var fields = ['username','first_name','last_name','email','password','password2']
        // var i;
        // for (i = 0; i < 6; i++) {
        //         console.log(fields[i],'absentt')
        //         console.log('this.user.'+fields[0])
        //     }
        
        // if(!this.user.username){
        //     this.error.username ='Username required'
        // }
        // if(!this.user.first_name){
        //     this.error.first_name = 'First Name required'
        // }
        // if(!this.user.last_name){
        //     this.error.last_name= 'Last Name required'
        // }
        // if(!this.user.email){
        //     this.error.email='Email required'
        // }
        // if(!this.user.password){
        //     this.error.password='Password required'
        // }
        // if(!this.user.password2){
        //     this.error.password2='Confirm Password required'
        // }
        // else
        // {
        //     console.log("send to backend")
        // }
        e.preventDefault();
        
        console.log('sign')
        window.axios.post('https://still-sands-03593.herokuapp.com/api/user/register/', this.user)
        .then(response =>{ 
            if(response.status == 201){
                this.data_response.truth = false
                this.data_response.value = "User registered"
                this.data_response.success = false
                this.$refs.loginItem.click()
            }
        })
        .catch(err=>{
            console.log(err.response)
            if(err.response.status != 201){
                this.data_response.truth = false

                var key = Object.keys(err.response.data)[0]
                console.log(key);          
                if (err.response.data[key][0] == 'This field must be unique.') 
                {                    
                    this.data_response.value =key+": "+ err.response.data[key][0]
                }   
                else{
                    this.data_response.value = err.response.data[key][0]
                }
                console.log(this.data_response.value);
                this.data_response.success = true
            }
        });
    },
    logIn: function(){
        console.log('log')
        window.axios.post('https://still-sands-03593.herokuapp.com/api/user/login/', this.logUser)
        .then(response =>{ 
            if(response.status == 200){
                localStorage.setItem("userdetails",JSON.stringify(response.data))
                this.$router.push({ path: '/' })
            }
        })
        .catch(err=>{
            console.log(err.response.data.username[0])
            this.data_response.truth = false            
            this.data_response.value = err.response.data.username[0]
            this.data_response.success = true
        });
    }

  },
}
</script>

<style>
.login-body {
    background: url("../assets/images/bg_login_pc.png");
    background-position: right;
    background-repeat: no-repeat;
    background-size: fill;
}
@media screen and (max-width: 1024px) {
    .login-body {
        background-size: contain;
        min-height: 100vh;
    }
}
@media screen and (max-width: 768px) {
    .login-body {
        background: url("../assets/images/bg_login_mobile.png");
        background-repeat: no-repeat;
        background-position: right;
        background-size: contain;
    }
}
</style>
