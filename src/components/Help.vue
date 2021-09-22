<template>
    <div>
        <section id="privacy">
                <div class="container">
                    <div class="contact mx-auto">
                        <div class="text_title text-center">
                            <h5>Help and Support</h5>
                            <p class="text-center">Please Leave Us a Message. We will get Back to you <br>as soon as possible.</p>
                        </div>
                        <div class="form">
                            <form action="">
                                <div class="form-group">
                                    <label for="subject" style="font-size: 19px;">Subject</label>  <!-- I have reduced the font size to this -->
                                    <input type="text" class="form-control" id="subject" placeholder="Write Subject"><br>
                                    <label for="message" style="font-size: 19px;">Message</label>  <!-- I have reduced the font size to this -->
                                    <textarea name="" id="" cols="30" rows="10" class="form-control" placeholder="Write Message"></textarea>
                                </div>
                                <button id="search_submit_button" type="submit" class="search_submit_button trans_200" value="Submit" style="background: #F2E205;">Send Message</button>
                            </form><br><br>
                            
                        </div>
                        
                    </div>
                    
                    
                </div>
            </section>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'Help',
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
