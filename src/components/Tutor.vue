<template>
    <div>
        <section id="tutor">
                <div class="container" >
                    <div class="row">
                        <div class="col-lg-6">
                            <h5 class="mb-3">Make the World Better</h5>
                            <p>"In today's environment, hoarding knowledge ultimately erodes your power. If you
                                know something very important, the way to get power is by actually sharing it.” <br>
                                - Joseph Badaracco</p>
                                <router-link  class="btn start-tutor mb-5" to="/beatutor">Start Teaching Today</router-link>
                        </div>
                        <!-- I have changed the class in the image tag this is because the image is meant to only show on the desktop view and not the mobile view -->
                        <div class="col-lg-6">
                            <img src="../assets/images/tutor.png" alt="tutor-image" class="d-none d-lg-block d-md-none" >
                        </div>
                        <!-- I have changed the class in the image tag this is because the image is meant to only show on the desktop view and not the mobile view -->
                    </div>
                </div>
            </section>
            <section class="tutor_under mt-5">
                <div class="title mb-5">
                    <h5 class="text-center">Discover Your Potential</h5>
                </div>
                <div class="container">
                    <div class="row">
                       <div class="col-lg-4 mb-3">  <!-- I Added a magin bottom to each of the card to have space beneath them mb-3 -->
                            <div class="card tutor_stuff">
                                <div class="card-body">
                                    <div class="card-icon">
                                        <img src="images/money.png" alt="">
                                    </div>
                                    <h5 class="card-title text-center pt-3">Earn Money While You Teach</h5><br>
                                    <p class="card-text text-left">As a tutor on Gaxut, we have enabled you the ability to enjoy the classroom experience over the internet. We acknowledge the reward for labor as one of the most important ways to live the good life which is why we've decided to allow you to GET PAID when anyone purchases your course. You get to earn money every time a student purchases your course. Get paid every two weeks. With minimum withdrawal at $200 (excluding transfer charges).</p><br>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-3"> <!-- I Added a magin bottom to each of the card to have space beneath them mb-3 -->
                            <div class="card tutor_stuff">
                                <div class="card-body">
                                    <div class="card-icon">
                                        <img src="images/affilate.png" alt="">
                                    </div>
                                    <h5 class="card-title text-center pt-3">Affilate Commission</h5><br>
                                    <p class="card-text text-left">We deem it fit to enable our tutors to market courses on this platform for more sign-ups. A provision for you to earn as an affiliate on your course or that of others. All you need to do is; promote your affiliate links and watch the money grow on your dashboard. You earn 35% on every course purchase by people who sign up through your affiliate link. Either your course or that of others.</p><br>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-3"> <!-- I Added a magin bottom to each of the card to have space beneath them mb-3 -->
                            <div class="card tutor_stuff">
                                <div class="card-body">
                                    <div class="card-icon">
                                        <img src="images/earn.png" alt="">
                                    </div>
                                    <h5 class="card-title text-center pt-3">Freelance</h5><br>
                                    <p class="card-text text-left">You have expertise in an area and beyond teaching others you want to earn with your skill? Gaxut got this covered. As we have integrated a marketplace on our platform to connect hiring personalities with service providers.</p><br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="title mb-5">
                                <h5 class="text-left">How to become a Tutor</h5>
                                <hr style="border-bottom: 1px solid #F4D634; width: 100px;">
                                <p class="text-left text-dark">
                                    1. Register as a Tutor<br>
                                    2. Plan course and record videos<br>
                                    3. Submit introductor video for verfification<br>
                                    4. Upload other videos after successful<br>     
                                    verification
                                    5. Upload and Payment<br>
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="title mb-5">
                                <h5 class="text-left">Tips for a great introductory 
                                    video</h5>
                                <hr style="border-bottom: 1px solid #F4D634; width: 100px;">
                                <p class="text-left text-dark">
                                    Keep your introductory video under 2-3 minutes and email it to us at support@gaxut.com<br>
                                    Subsequent videos should not be more than 30mins length for each module.<br>
                                    Record in a Horizontal mode.<br>
                                    It is compulsory you have Gaxut's logo in your video(adding yours is allowed too).
                                    No links.<br><br>

                                    <strong>Contents</strong><br>
                                    Greet your students warmly.<br>
                                    Highlight your course content.<br>
                                    Present your tutoring experience.<br>
                                    Emphasis on what students will benefit from taking your course.<br>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <router-link to="/beatutor"  class="btn start-tutor">Become a Tutor Today</router-link>
            </section>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'Tutor',
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
