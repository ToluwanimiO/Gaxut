<template>
    <div>
            <section id="user-dashboard">
        <nav aria-label="breadcrumb" class="mt-3 ml-4">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link to="/dashboard"><a style="color: #F2CB05">Dashboard</a></router-link></li>
              <li class="breadcrumb-item"><router-link to="/jobadverts"><a style="color: #F2CB05">Job Offers</a></router-link></li>
              <li class="breadcrumb-item"><router-link to="/gigs"><a style="color: #F2CB05">Gigs</a></router-link></li>
              <li class="breadcrumb-item active" aria-current="page" style="color:#000000;">Chats</li>
              
            </ol>
            <div class="d-block text-right">
                <span @click="newConvo" class="btn btn-sm btn-warning  mr-5 mb-2 text-white">
                    New conversation
                    <i class="fa fa-plus " ></i>
                </span>
                
            </div>
          </nav>
          <div class="container-fluid d-none d-lg-block d-md-none" id="chat-desktop">
                <div class="card" style="border-radius: 0px;">
                    <div class="row">
                    <div class="col-lg-4 col-xl-4 border-right" style="border-right: 2px solid #e9e9e9;">
                    
                    <div class="scrollable position-relative" >
                        <ul class="mailbox list-style-none">
                    <li>
                    <div class="message-center">
                        <!-- Message -->
                    <a href="" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                    <div class="user-img">
                    <img src="../assets/images/image.png"
                    alt="user" class="img-fluid rounded-circle"
                    width="40px"> 
                    <span class="profile-status online float-right"></span>
                        </div>
                    <div class="w-75 d-inline-block v-middle pl-2">
                    <h6 class="message-title mb-0 mt-1">Pavan kumar</h6>
                    <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my new admin!</span>
                    <span class="font-12 text-nowrap d-block text-muted">9:30 AM</span>
                    </div>
                        </a>
                    <!-- Message -->
                    <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                    <div class="user-img"><img src="../assets/images/image.png" alt="user" class="img-fluid rounded-circle" width="40px"> 
                        <span class="profile-status busy float-right"></span></div>
                    <div class="w-75 d-inline-block v-middle pl-2">
                    <h6 class="message-title mb-0 mt-1">Sonu Nigam</h6>
                    <span class="font-12 text-nowrap d-block text-muted text-truncate">I've sung a song! See you at</span>
                    <span class="font-12 text-nowrap d-block text-muted">9:10 AM</span>
                        </div>
                    </a>
                        <!-- Message -->
                    <a href="javascript:void(0)"
                class="message-item d-flex align-items-center border-bottom px-3 py-2">
                <div class="user-img"> <img src="../assets/images/image.png"
                alt="user" class="img-fluid rounded-circle"
                width="40px"> <span
                class="profile-status away float-right"></span>
                    </div>
                <div class="w-75 d-inline-block v-middle pl-2">
                <h6 class="message-title mb-0 mt-1">Arijit Sinh</h6>
                <span
                class="font-12 text-nowrap d-block text-muted text-truncate">I am a singer!</span>
                <span class="font-12 text-nowrap d-block text-muted">9:08 AM</span>
                </div>
                </a>
                    <!-- Message -->
                <a href="javascript:void(0)"
                class="message-item d-flex align-items-center border-bottom px-3 py-2">
                <div class="user-img"><img src="../assets/images/image.png"
                alt="user" class="img-fluid rounded-circle"
                width="40px"> <span class="profile-status offline float-right"></span>
                </div>
                <div class="w-75 d-inline-block v-middle pl-2">
                <h6 class="message-title mb-0 mt-1">Nirav Joshi</h6>
                <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span>
                <span class="font-12 text-nowrap d-block text-muted">9:02
                AM</span>
                </div>
                </a>
                <!-- Message -->
                <!-- Message -->
                <a href="javascript:void(0)"
                class="message-item d-flex align-items-center border-bottom px-3 py-2">
                <div class="user-img"><img src="../assets/images/image.png"
                alt="user" class="img-fluid rounded-circle"
                width="40px"> <span class="profile-status offline float-right"></span>
                </div>
                <div class="w-75 d-inline-block v-middle pl-2">
                <h6 class="message-title mb-0 mt-1">Nirav Joshi</h6>
                <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span>
                <span class="font-12 text-nowrap d-block text-muted">9:02
                AM</span>
                </div>
                </a>
                <!-- Message -->
                <!-- Message -->
                <a href="javascript:void(0)"
                class="message-item d-flex align-items-center border-bottom px-3 py-2">
                <div class="user-img"><img src="../assets/images/image.png"
                alt="user" class="img-fluid rounded-circle"
                width="40px"> <span class="profile-status offline float-right"></span>
                </div>
                <div class="w-75 d-inline-block v-middle pl-2">
                <h6 class="message-title mb-0 mt-1">Nirav Joshi</h6>
                <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span>
                <span class="font-12 text-nowrap d-block text-muted">9:02
                AM</span>
                </div>
                </a>
                <!-- Message -->
                <!-- Message -->
                <a href="javascript:void(0)"
                class="message-item d-flex align-items-center border-bottom px-3 py-2">
                <div class="user-img"><img src="../assets/images/image.png"
                alt="user" class="img-fluid rounded-circle"
                width="40px"> <span class="profile-status offline float-right"></span>
                </div>
                <div class="w-75 d-inline-block v-middle pl-2">
                <h6 class="message-title mb-0 mt-1">Nirav Joshi</h6>
                <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span>
                <span class="font-12 text-nowrap d-block text-muted">9:02
                AM</span>
                </div>
                </a>
                <!-- Message -->
                <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                <div class="user-img"><img src="../assets/images/image.png"
                alt="user" class="img-fluid rounded-circle"
                width="40px"> <span
                class="profile-status offline float-right"></span>
                </div>
                <div class="w-75 d-inline-block v-middle pl-2">
                <h6 class="message-title mb-0 mt-1">Sunil Joshi</h6>
                <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span>
                    <span class="font-12 text-nowrap d-block text-muted">9:02AM</span>
                </div>
                </a>
                <!-- Message -->
                <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                    <div class="user-img"><img src="../assets/images/image.png"
                    alt="user" class="img-fluid rounded-circle"
                    width="40px"> <span
                    class="profile-status offline float-right"></span>
                    </div>
                    <div class="w-75 d-inline-block v-middle pl-2">
                    <h6 class="message-title mb-0 mt-1">Sunil Joshi</h6>
                    <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span>
                        <span class="font-12 text-nowrap d-block text-muted">9:02AM</span>
                    </div>
                    </a>
                    
        </div>
        </li>
        </ul>
        </div>
        </div>
        <div class="col-lg-8  col-xl-8" >
        <div class="chat-box scrollable position-relative">
        <a class="nav-link float-right" href="javascript:void(0)" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" style="font-size: 19px;">
                <i class="fas fa-ellipsis-v"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-left user-dd animated flipInY">
                <a class="dropdown-item mt-3" href="javascript:void(0)"><i data-feather="credit-card"
                        class="svg-icon mr-2 ml-1 fas fa-credit-card"></i>
                    My Balance</a>
                    <div class="dropdown-divider"></div>
                <a class="dropdown-item mt-3" href="javascript:void(0)"><i data-feather="mail"
                        class="svg-icon mr-2 ml-1 fas fa-donate"></i>
                    Pay Upfront / 50%</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item mt-3" href="javascript:void(0)"><i data-feather="settings"
                        class="svg-icon mr-3 ml-1 fas fa-money-bill-alt"></i>
                    Full Payment</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item mt-3" href="javascript:void(0)"><i data-feather="settings"
                    class="svg-icon mr-3 ml-1 fas fa-hand-holding-usd"></i>
                Release Payment</a>
            <div class="dropdown-divider"></div>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item mt-3" href="javascript:void(0)"><i data-feather="settings"
                class="svg-icon mr-3 ml-1 fas fa-sync-alt"></i>
            Refund</a>
            </div>
        <!--chat Row -->
        <ul class="chat-list list-style-none px-3 pt-3 mt-3">
        <!--chat Row -->

        <!-- The Chat begins from Here -->
        <li class="chat-item odd list-style-none mt-3">
        <div class="chat-content text-right d-inline-block pl-3">
        <div class="box msg p-2 d-inline-block mb-1">I would love to
        join the team.</div>
        <br>
        </div>
        </li>
        <!-- The Chat Ends Here incase you want to delete I have deleted most from the desktop view but I didn't for the mobile view if you want to delete you use the same method-->
        
        <!--chat Row -->
        </ul>
        <div class="card-body mt-5 mb-0" style="border-top: 2px solid #e9e9e9;">
        <div class="row">
        <div class="col-9">
        <div class="input-field mt-0 mb-0" >
        <input id="textarea1" placeholder="Type your Message and Press Enter"
        class="form-control border-0" type="text" style="border-radius: 0px; margin-bottom: 0px;">
        </div>
        </div>
        <div class="col-3 d-flex">
        <a class=" mr-auto"
        href="javascript:void(0)"><i class="fas fa-microphone" style="font-size: 20px;"></i></a>
        <a class="ml-auto"
        href="javascript:void(0)"><i class="fas fa-paper-plane" style="font-size: 20px;"></i></a>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>			
            </div>
                        <div class="container-fluid d-sm-none" id="chat-mobile">
                                <div class="card" style="border-radius: 0px;" id="first-col">
                                    <div class="row">
                                        <div class="col-lg-12 col-xl-12 border-right" style="border-right: 2px solid #e9e9e9;" >
                                
                                            <div class="scrollable position-relative" >
                                                <ul class="mailbox list-style-none">
                                            <li>
                                            <div class="message-center">
                                                <!-- Message -->
                                            <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2" onclick="Show()">
                                            <div class="user-img">
                                            <img src="../assets/images/image.png"
                                            alt="user" class="img-fluid rounded-circle"
                                            width="40px"> 
                                            <span class="profile-status online float-right"></span>
                                                </div>
                                            <div class="w-75 d-inline-block v-middle pl-2">
                                            <h6 class="message-title mb-0 mt-1">Pavan kumar</h6>
                                            <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my new admin!</span>
                                            <span class="font-12 text-nowrap d-block text-muted">9:30 AM</span>
                                            </div>
                                                </a>
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                            <div class="user-img"><img src="../assets/images/image.png" alt="user" class="img-fluid rounded-circle" width="40px"> 
                                                <span class="profile-status busy float-right"></span></div>
                                            <div class="w-75 d-inline-block v-middle pl-2">
                                            <h6 class="message-title mb-0 mt-1">Sonu Nigam</h6>
                                            <span class="font-12 text-nowrap d-block text-muted text-truncate">I've sung a song! See you at</span>
                                            <span class="font-12 text-nowrap d-block text-muted">9:10 AM</span>
                                                </div>
                                            </a>
                                                <!-- Message -->
                                            <a href="javascript:void(0)"
                                        class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                        <div class="user-img"> <img src="../assets/images/image.png"
                                        alt="user" class="img-fluid rounded-circle"
                                        width="40px"> <span
                                        class="profile-status away float-right"></span>
                                            </div>
                                        <div class="w-75 d-inline-block v-middle pl-2">
                                        <h6 class="message-title mb-0 mt-1">Arijit Sinh</h6>
                                        <span
                                        class="font-12 text-nowrap d-block text-muted text-truncate">I am a singer!</span>
                                        <span class="font-12 text-nowrap d-block text-muted">9:08 AM</span>
                                        </div>
                                        </a>
                                            <!-- Message -->
                                        <a href="javascript:void(0)"
                                        class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                        <div class="user-img"><img src="../assets/images/image.png"
                                        alt="user" class="img-fluid rounded-circle"
                                        width="40px"> <span class="profile-status offline float-right"></span>
                                        </div>
                                        <div class="w-75 d-inline-block v-middle pl-2">
                                        <h6 class="message-title mb-0 mt-1">Nirav Joshi</h6>
                                        <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span>
                                        <span class="font-12 text-nowrap d-block text-muted">9:02
                                        AM</span>
                                        </div>
                                        </a>
                                        <!-- Message -->
                                        <!-- Message -->
                                        <a href="javascript:void(0)"
                                        class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                        <div class="user-img"><img src="../assets/images/image.png"
                                        alt="user" class="img-fluid rounded-circle"
                                        width="40px"> <span class="profile-status offline float-right"></span>
                                        </div>
                                        <div class="w-75 d-inline-block v-middle pl-2">
                                        <h6 class="message-title mb-0 mt-1">Nirav Joshi</h6>
                                        <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span>
                                        <span class="font-12 text-nowrap d-block text-muted">9:02
                                        AM</span>
                                        </div>
                                        </a>
                                        <!-- Message -->
                                        <!-- Message -->
                                        <a href="javascript:void(0)"
                                        class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                        <div class="user-img"><img src="../assets/images/image.png"
                                        alt="user" class="img-fluid rounded-circle"
                                        width="40px"> <span class="profile-status offline float-right"></span>
                                        </div>
                                        <div class="w-75 d-inline-block v-middle pl-2">
                                        <h6 class="message-title mb-0 mt-1">Nirav Joshi</h6>
                                        <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span>
                                        <span class="font-12 text-nowrap d-block text-muted">9:02
                                        AM</span>
                                        </div>
                                        </a>
                                        <!-- Message -->
                                        <!-- Message -->
                                        <a href="javascript:void(0)"
                                        class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                        <div class="user-img"><img src="../assets/images/image.png"
                                        alt="user" class="img-fluid rounded-circle"
                                        width="40px"> <span class="profile-status offline float-right"></span>
                                        </div>
                                        <div class="w-75 d-inline-block v-middle pl-2">
                                        <h6 class="message-title mb-0 mt-1">Nirav Joshi</h6>
                                        <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span>
                                        <span class="font-12 text-nowrap d-block text-muted">9:02
                                        AM</span>
                                        </div>
                                        </a>
                                        <!-- Message -->
                                        <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                        <div class="user-img"><img src="../assets/images/image.png"
                                        alt="user" class="img-fluid rounded-circle"
                                        width="40px"> <span
                                        class="profile-status offline float-right"></span>
                                        </div>
                                        <div class="w-75 d-inline-block v-middle pl-2">
                                        <h6 class="message-title mb-0 mt-1">Sunil Joshi</h6>
                                        <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span>
                                            <span class="font-12 text-nowrap d-block text-muted">9:02AM</span>
                                        </div>
                                        </a>
                                        <!-- Message -->
                                        <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                            <div class="user-img"><img src="../assets/images/image.png"
                                            alt="user" class="img-fluid rounded-circle"
                                            width="40px"> <span
                                            class="profile-status offline float-right"></span>
                                            </div>
                                            <div class="w-75 d-inline-block v-middle pl-2">
                                            <h6 class="message-title mb-0 mt-1">Sunil Joshi</h6>
                                            <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span>
                                                <span class="font-12 text-nowrap d-block text-muted">9:02AM</span>
                                            </div>
                                            </a>
                                            
                    </div>
                    </li>
                    </ul>
                    </div>
            </div>
                </div>
            </div>
                    <div class="card mt-5 d-none" style="border-radius: 0px;" id="second-col">
                    <div class="row">
                            <div class="col-lg-12  col-xl-12">
                                
                                <div class="chat-box scrollable position-relative">
                                <a href="javascript:void(0)" class="float-left" style="font-size: 20px;" onclick="back()" ><i class="fas fa-arrow-left" style="color: #F2CB05;"></i></a>	
                                <a class="nav-link float-right" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size: 19px;">
                                    <i class="fas fa-ellipsis-v" style="color: #F2CB05;"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-left user-dd animated flipInY">
                                        <a class="dropdown-item mt-3" href="javascript:void(0)"><i
                                                class="svg-icon mr-2 ml-1 fas fa-credit-card" style="color:#F2CB05;"></i>
                                            My Balance</a>
                                            <div class="dropdown-divider"></div>
                                        <a class="dropdown-item mt-3" href="javascript:void(0)"><i
                                                class="svg-icon mr-2 ml-1 fas fa-donate" style="color:#F2CB05;"></i>
                                            Pay Upfront / 50%</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item mt-3" href="javascript:void(0)"><i 
                                                class="svg-icon mr-3 ml-1 fas fa-money-bill-alt" style="color:#F2CB05;"></i>
                                            Full Payment</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item mt-3" href="javascript:void(0)"><i 
                                            class="svg-icon mr-3 ml-1 fas fa-hand-holding-usd" style="color:#F2CB05;"></i>
                                        Release Payment</a>
                                    <div class="dropdown-divider"></div>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item mt-3" href="javascript:void(0)"><i 
                                        class="svg-icon mr-3 ml-1 fas fa-sync-alt" style="color:#F2CB05;"></i>
                                    Refund</a>
                                    </div>
                                                    <!--chat Row -->
                            <ul class="chat-list list-style-none px-3 pt-3 mt-3">
                                                    <!--chat Row -->

                                                    <!-- Here is Where Each Chat Begins -->
                                                <li class="chat-item list-style-none mt-3">
                                                        <div class="chat-img d-inline-block"><img
                                                            src="../assets/images/image.png" alt="user" class="rounded-circle" width="45">
                                                </div>
                                            <div class="chat-content d-inline-block pl-3">
                                                <h6 class="font-weight-medium">James Anderson</h6>
                                                <div class="msg p-2 d-inline-block mb-1">Lorem Ipsum is simply dummy text of the printing &amp; type setting industry.</div>
                                                </div>
                                                <div class="chat-time d-block font-10 mt-1 mr-0 mb-3">10:56 am
                                                </div>
                                                    </li>
                                                <!-- Here is Where it Ends In case you want remove the chats you delete from the top to down -->

                                                <!--chat Row -->
                                            <li class="chat-item list-style-none mt-3">
                                                <div class="chat-img d-inline-block"><img src="../assets/images/image.png" alt="user" class="rounded-circle" width="45">
                                            </div>
                                        <div class="chat-content d-inline-block pl-3">
                                    <h6 class="font-weight-medium">Bianca Doe</h6>
                                                <div class="msg p-2 d-inline-block mb-1">It’s Great opportunity to work.</div>
                                                </div>
                                                <div class="chat-time d-block font-10 mt-1 mr-0 mb-3">10:57 am
                                                    </div>
                                                        </li>
                                            <!--chat Row -->
                                        <li class="chat-item odd list-style-none mt-3">
                                            <div class="chat-content text-right d-inline-block pl-3">
                                                <div class="box msg p-2 d-inline-block mb-1">I would love to join the team.</div>
                                                <br>
                                             </div>
                                                    </li>
                                                <!--chat Row -->
                                            <li class="chat-item odd list-style-none mt-3">
                                            <div class="chat-content text-right d-inline-block pl-3">
                                                <div class="box msg p-2 d-inline-block mb-1 box"> Whats budget of the new project.</div>
                                            <br>
                                            </div>
                                            <div class="chat-time text-right d-block font-10 mt-1 mr-0 mb-3">
                                            10:59 am</div>
                                                </li>
                                        <!--chat Row -->
                                        <li class="chat-item list-style-none mt-3">
                                            <div class="chat-img d-inline-block"><img src="../assets/images/image.png" alt="user"
                                            class="rounded-circle" width="45">
                                        </div>
                                            <div class="chat-content d-inline-block pl-3">
                                            <h6 class="font-weight-medium">Angelina Rhodes</h6>
                                            <div class="msg p-2 d-inline-block mb-1">Well we have good budget
                                            for the project
                                                </div>
                                        </div>
                                    <div class="chat-time d-block font-10 mt-1 mr-0 mb-3">11:00 am</div>
                                        </li>
                                    <!--chat Row -->
                                        <li class="chat-item odd list-style-none mt-3">
                                    <div class="chat-content text-right d-inline-block pl-3">
                                        <div class="box msg p-2 d-inline-block mb-1">I would love to
                                    join the team.</div>
                                        <br>
                                        </div>
                                            </li>
                                    <!--chat Row -->
                                        <li class="chat-item odd list-style-none mt-3">
                                        <div class="chat-content text-right d-inline-block pl-3">
                                        <div class="box msg p-2 d-inline-block mb-1 box"> Whats budget
                                            of the new project.</div>
                                        <br>
                                    </div>
                                    <div class="chat-time text-right d-block font-10 mt-1 mr-0 mb-3">
                                    10:59 am</div>
                                        </li>
                                            </ul>
                                            <div class="card-body" style="border-top: 2px solid #e9e9e9;">
                                                <div class="row">
                                                <div class="col-9">
                                                    <div class="input-field mt-0 mb-0">
                                                <input id="textarea1" placeholder="Type and enter"
                                                class="form-control border-0" type="text" style="border-radius: 0px;">
                                                </div>
                                        </div>
                                                <div class="col-3 d-flex">
                                                    <a class=" mr-auto"
                                                    href="javascript:void(0)"><i class="fas fa-microphone" style="font-size: 20px; color: #F2CB05;" ></i></a>
                                                    <a class="ml-auto"
                                                    href="javascript:void(0)"><i class="fas fa-paper-plane" style="font-size: 20px; color: #F2CB05;"></i></a>
                                                        </div>
                                                        </div>
                                                    </div>
                                    </div>
                                        
                                            </div>
                                    </div>
                                </div>
            
                                
                                                
                                </div>	
    </section>

    <section class="pt-5" id="batutor">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h5 class="title">Become a Tutor</h5>
                    <p class="text-dark">"In today's environment, hoarding knowledge ultimately erodes your power. If you know something very important, the way to get power is by actually sharing it.” <br>
                        <strong>- Joseph Badaracco</strong></p>
                </div>
                <div class="col-lg-6">
					<a href="#"  class="start-tutor" value="">Start Teaching Today</a>
			</div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'Chats',
  components: {
    // HelloWorld
  },
  data(){
    return{

    }
  },
  methods: {
    newConvo:function(){
        // yet to confirm how this works, chill
    }
  },
  created: function(){
      window.axios.get("http://still-sands-03593.herokuapp.com/api/conversations/")
      .then(response=>console.log(response))
  }
}
</script>

<style>
</style>
