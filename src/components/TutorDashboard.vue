<template>
  <div>
      <section id="user-dashboard">
        <div class="container">
            <h5 class="title mt-3">My Dashboard</h5>
            <div class="row">
                <div class="col-lg-3 bord">
                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a class="nav-link active" id="v-pills-myaccount-tab" data-toggle="pill" href="#v-pills-myaccount" role="tab" aria-controls="v-pills-myaccount" aria-selected="true"><img src="../assets/images/Vector.png" alt=""> My Account</a>
                        <a class="nav-link" id="v-pills-myearning-tab" data-toggle="pill" href="#v-pills-myearning" role="tab" aria-controls="v-pills-myearning" aria-selected="false"><img src="../assets/images/Vector (1).png" alt=""> My Earning</a>
                        <a class="nav-link" id="v-pills-postjobs-tab" data-toggle="pill" href="#v-pills-postjobs" role="tab" aria-controls="v-pills-postjobs" aria-selected="false"> <img src="../assets/images/Vector (2).png" alt=""> Post Jobs</a>
                        <a class="nav-link" id="v-pills-jobsapplied-tab" data-toggle="pill" href="#v-pills-jobsapplied" role="tab" aria-controls="v-pills-jobsapplied" aria-selected="false"> <img src="../assets/images/Vector (3).png" alt="">Jobs Applied For</a>
						<router-link to="tutor-ad"><a class="nav-link" id="v-pills-jobsadverts-tab" role="tab" aria-controls="v-pills-jobsadverts" aria-selected="false"><img src="../assets/images/Vector (4).png" alt="">My Job Adverts</a></router-link>
						<a class="nav-link" id="v-pills-uploadcourse-tab" data-toggle="pill" href="#v-pills-uploadcourse" role="tab" aria-controls="v-pills-uploadcourse" aria-selected="false"><img src="../assets/images/vector (5).png" alt="">Upload Course</a>
						<a class="nav-link" id="v-pills-uploadedcourses-tab" data-toggle="pill" href="#v-pills-uploadedcourses" role="tab" aria-controls="v-pills-uploadedcourses" aria-selected="false"><img src="../assets/images/vector (6).png" alt="">Uploaded Courses</a>
						<a class="nav-link" id="v-pills-editaccount-tab" data-toggle="pill" href="#v-pills-editaccount" role="tab" aria-controls="v-pills-editaccount" aria-selected="false"><img src="../assets/images/Vector (7).png" alt="">Edit Account</a>
					</div>
                </div>
                <div class="col-lg-9">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-myaccount" role="tabpanel" aria-labelledby="v-pills-myaccount-tab">
                            <div class="container" id="myaccount">
                                <h5 class="title">My Account</h5>
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="img-user">
                                            <img src="../assets/images/image.png" alt="">
                                        </div>
                                    </div>
                                    <div class="col-lg-5">
                                        <div class="user-details">
                                            <p><strong>Name:</strong>  Ezekiel Adamu</p>
                                            <p><strong>Username:</strong>  Ezee</p>
                                            <p><strong>Email:</strong> ezekialayz@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <p>Kindly pay the one time subscription fee for $50 before you can have access to our freelancing and affiliate program.</p>
                                <a style="background: #FBF09E; color:#F4D634; border-radius: 9px; padding: 5px 20px 5px 20px;" class="btn btn-md btn-warning mb-3" href="#"> Pay Now </a>
                            </div>
                            
                            </div>
                        <div class="tab-pane fade" id="v-pills-myearning" role="tabpanel" aria-labelledby="v-pills-myearning-tab">
                            <div class="container" id="myearning">
								<h5 class="title">My Earnings</h5>
                                <div class="row">
                                    <div class="col-lg-4 mb-3">
                                        <div class="card" style="background: #F2FBD8;">
                                            <div class="card-body text-center ml-auto">
                                                <div class="card-text" >
                                                     <p style="color: #F2CB05;">Downline <br>
														0</p>
                                                </div>
                                            </div>
                                          </div>
                                    </div>
                                    <div class="col-lg-4 mb-3">
                                        <div class="card" style="background: #BFD5EE;">
                                            <div class="card-body text-center ml-auto">
                                                <div class="card-text" style="color: #001F7D;">
                                                    <p style="color: #001F7D;">Balance <br> 0$ </p>
                                                </div>
                                            </div>
                                          </div>
                                    </div>
                                </div>
                                <a style="background: #FBF09E; color:#F4D634; border-radius: 9px; padding: 5px 20px 5px 20px;" class="btn btn-md btn-warning mb-3 mt-4" href="#"> Withdraw </a>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-postjobs" role="tabpanel" aria-labelledby="v-pills-postjobs-tab">
							<div class="container" id="post-jobs">
								<h5 class="title">Post Job Advert</h5>
								<form action="">
									<div class="form-group row">
										<label for="jobtitle" class="col-sm-3 col-form lable">Job Title</label>
										<div class="col-sm-6">
											<input type="text" id="jobtitle" class="form-control">
										</div>
									</div>
									<div class="form-group row">
										<label for="jobdesc" class="col-sm-3 col-form lable">Job Description</label>
										<div class="col-sm-6">
											<textarea name="" id="jobdesc" cols="30" rows="10" class="form-control"></textarea>
										</div>
									</div>
									<div class="form-group row">
										<label for="jobcat" class="col-sm-3 col-form lable">Job Category</label>
										<div class="col-sm-6">
											<select name="" id="jobcat" class="form-control">
												<option value=""></option>
												<option value=""></option>
												<option value=""></option>
											</select>
										</div>
									</div>
									<div class="form-group row">
										<label for="minamount" class="col-sm-3 col-form lable">Minimum Amount</label>
										<div class="col-sm-6">
											<input type="text" id="minamount" class="form-control">
										</div>
									</div>
									<div class="form-group row">
										<label for="maxamount" class="col-sm-3 col-form lable">Maximum Amount</label>
										<div class="col-sm-6">
											<input type="text" id="maxamount" class="form-control">
										</div>
									</div>
								</form>
								<a style="background: #FBF09E; color:#F4D634; border-radius: 9px; padding: 5px 20px 5px 20px;" class="btn btn-md btn-warning mt-4" href="#"> Post Job </a>
							</div>
						</div>
                        <div class="tab-pane fade" id="v-pills-jobsapplied" role="tabpanel" aria-labelledby="v-pills-jobsapplied-tab">
							<div class="container" id="jobs-applied-for">
								<h5 class="title">Jobs Applied For</h5>
							</div>
						</div>
                        <div class="tab-pane fade" id="v-pills-jobsadverts" role="tabpanel" aria-labelledby="v-pills-jobsadverts-tab">
							<div class="container" id="jobs-adverts">
								<h5 class="title">My Job Advert</h5>
								<div class="row" id="jobads">
									<div class="col-md-6 col-xl-6 p-2 p-xl-4">
										<div class="card border border-0 shadow p-2">
											<div class="d-flex justify-content-between p-2">
												<a class="category-pill-square rounded px-5 py-1" style="background-color: #f1f5ec;">DESIGN</a>
												<h4 class="price mt-2 justify-content-end">$50.00</h4>	
											</div>
											<div class="card-body">
												<h4 class="card-title">Logo Designer</h4>
												<p class="card-text mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur expedita odit ab deserunt velit obcaecati labore doloremque, eaque pariatur perferendis soluta, quam officiis quae autem. Natus aliquam nobis reprehenderit animi.</p>
												<small class="posted-by">Posted by: Thompson Ebiaku</small>
												<div class="d-flex my-3">
													<span><i class="far fa-clock"></i> 2 days ago</span>
													<span class="mx-4"><i class="far fa-user"></i> 24 Applicants</span>
												</div>   
												<div class="d-flex my-3">
													<a href="javascript:void(0)" class="remove-btn btn btn-md mr-auto" style="background: #001F7D; color: #fff;" onclick="showOffers()">View</a>
													<a href="" class="remove-btn btn btn-md btn-danger ml-auto">Remove</a>
												</div>     
												
												
											</div>
										</div>
									</div>
									<div class="col-md-6 col-xl-6 p-2 p-xl-4">
										<div class="card border border-0 shadow p-2">
											<div class="d-flex justify-content-between p-2">
												<a class="category-pill-square rounded px-5 py-1" style="background-color: #f1f5ec;">DESIGN</a>
												<h4 class="price mt-2 justify-content-end">$50.00</h4>	
											</div>
											<div class="card-body">
												<h4 class="card-title">Logo Designer</h4>
												<p class="card-text mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur expedita odit ab deserunt velit obcaecati labore doloremque, eaque pariatur perferendis soluta, quam officiis quae autem. Natus aliquam nobis reprehenderit animi.</p>
												<small class="posted-by">Posted by: Thompson Ebiaku</small>
												<div class="d-flex my-3">
													<span><i class="far fa-clock"></i> 2 days ago</span>
													<span class="mx-4"><i class="far fa-user"></i> 24 Applicants</span>
												</div>   
												<div class="d-flex my-3">
													<a href="javascript:void(0)" class="remove-btn btn btn-md mr-auto" style="background: #001F7D; color: #fff;" onclick="showOffers()">View</a>
													<a href="#" class="remove-btn btn btn-md btn-danger ml-auto">Remove</a>
												</div>     
												
												
											</div>
										</div>
									</div>
								</div>
								<div class="row d-none mt-5" id="offers">
									<a href="javascript:void(0)" class="remove-btn btn btn-md" style="background: #fff; color: #000000; border-radius: 10px; border: 1px solid #C4C4C4; box-sizing: border-box;" onclick="showAds()"><i class="fas fa-arrow-left"></i> Back</a>
									<div class="col-md-12 col-xl-12 p-2 p-xl-4">
										<div class="card border border-0 shadow p-2">
											<div class="d-flex justify-content-between p-2">
												<a class="category-pill-square rounded px-5 py-1" style="background-color: #f1f5ec;">DESIGN</a>
												<h4 class="price mt-2 justify-content-end">$50.00</h4>	
											</div>
											<div class="card-body">
												<h4 class="card-title">Logo Designer</h4>
												<p class="card-text mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur expedita odit ab deserunt velit obcaecati labore doloremque, eaque pariatur perferendis soluta, quam officiis quae autem. Natus aliquam nobis reprehenderit animi.</p>
												<small class="posted-by">Submitted by: Thompson Ebiaku</small>
												<div class="d-flex my-3">
													<span><i class="far fa-clock"></i> 2 minutes ago</span>
												</div>   
												<div class="d-flex my-3">
													<a href="javascript:void(0)" class="remove-btn btn btn-md mr-auto" style="background: #001F7D; color: #fff;" onclick="showChat()">Chat <i class="far fa-comments"></i></a>
												</div>     
												
												
											</div>
										</div>
									</div>
									<div class="col-md-12 col-xl-12 p-2 p-xl-4">
										<div class="card border border-0 shadow p-2">
											<div class="d-flex justify-content-between p-2">
												<a class="category-pill-square rounded px-5 py-1" style="background-color: #f1f5ec;">DESIGN</a>
												<h4 class="price mt-2 justify-content-end">$50.00</h4>	
											</div>
											<div class="card-body">
												<h4 class="card-title">Logo Designer</h4>
												<p class="card-text mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur expedita odit ab deserunt velit obcaecati labore doloremque, eaque pariatur perferendis soluta, quam officiis quae autem. Natus aliquam nobis reprehenderit animi.</p>
												<small class="posted-by">Submitted by: Thompson Ebiaku</small>
												<div class="d-flex my-3">
													<span><i class="far fa-clock"></i> 2 minutes ago</span>
												</div>   
												<div class="d-flex my-3">
													<a href="javascript:void(0)" class="remove-btn btn btn-md mr-auto" style="background: #001F7D; color: #fff;" onclick="showChat()">Chat <i class="far fa-comments"></i></a>
												</div>     
												
												
											</div>
										</div>
									</div>
								</div>
								<div class="container-fluid d-none" id="chat-desktop">
									<div class="">
									<div class="row">
										<a href="javascript:void(0)" class="remove-btn btn btn-md mb-4" style="background: #fff; color: #000000; border-radius: 10px; border: 1px solid #C4C4C4; box-sizing: border-box;" onclick="cancelChat()"><i class="fas fa-arrow-left"></i> Back</a>
										<div class="">
										<div class="card" style="border-radius: 0px;">
											<div class="row no-gutters">
											<div class="col-lg-4 col-xl-4 border-right" style="border-right: 2px solid #e9e9e9;">
											
											<div class="scrollable position-relative" >
												<ul class="mailbox list-style-none">
											<li>
											<div class="message-center">
												<!-- Message -->
											<a href="" class="message-item d-flex align-items-center border-bottom px-3 py-2" onclick="show()">
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
												class="svg-icon mr-2 ml-1 fas fa-check-circle"></i>
											Job Completed</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item mt-3" href="javascript:void(0)"><i data-feather="settings"
												class="svg-icon mr-3 ml-1 fas fa-money-bill-alt"></i>
											Get Paid</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item mt-3" href="javascript:void(0)"><i data-feather="settings"
											class="svg-icon mr-3 ml-1 fas fa-gavel"></i>
										Dispute</a>
									</div>
								<!--chat Row -->
						<ul class="chat-list list-style-none px-3 pt-3 mt-3">
								<!--chat Row -->
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
						<div class="card-body mt-5 mb-0" style="border-top: 2px solid #e9e9e9;">
							<div class="row">
							<div class="col-9">
								<div class="input-field mt-0 mb-0">
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
							</div>
								</div>			
									</div>
																			<!-- container mobile -->
							<div class="container-fluid d-none" id="chat-mobile">
								<a href="javascript:void(0)" class="remove-btn btn btn-md mb-4" style="background: #fff; color: #000000; border-radius: 10px; border: 1px solid #C4C4C4; box-sizing: border-box;" onclick="cancelChat()"><i class="fas fa-arrow-left"></i> Back</a>
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
											<a class="dropdown-item mt-3" href="javascript:void(0)"><i data-feather="credit-card"
													class="svg-icon mr-2 ml-1 fas fa-credit-card" style="color: #F2CB05;"></i>
												My Balance</a>
												<div class="dropdown-divider"></div>
											<a class="dropdown-item mt-3" href="javascript:void(0)"><i data-feather="mail"
													class="svg-icon mr-2 ml-1 fas fa-check-circle" style="color: #F2CB05;"></i>
												Job Completed</a>
											<div class="dropdown-divider"></div>
											<a class="dropdown-item mt-3" href="javascript:void(0)"><i data-feather="settings"
													class="svg-icon mr-3 ml-1 fas fa-money-bill-alt"  style="color: #F2CB05;"></i>
												Get Paid</a>
											<div class="dropdown-divider"></div>
											<a class="dropdown-item mt-3" href="javascript:void(0)" ><i data-feather="settings"
												class="svg-icon mr-3 ml-1 fas fa-gavel" style="color: #F2CB05;"></i>
											Dispute</a>
										</div>
									<!--chat Row -->
														<!--chat Row -->
								<ul class="chat-list list-style-none px-3 pt-3 mt-3">
														<!--chat Row -->
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


							</div>
						</div>
						<div class="tab-pane fade" id="v-pills-uploadcourse" role="tabpanel" aria-labelledby="v-pills-uploadcourse-tab">
							<div class="container" id="uploadcourse">
								<h5 class="title">Upload a Course</h5>
								<form id="courseUploadForm" action="">
									<div class="form-group row">
										<label for="coursetitle" class="col-sm-3 col-form label">Course Title</label>
										<div class="col-sm-6">
											<input type="text" id="coursetitle" class="form-control">
										</div>
										
									</div>
									<div class="form-group row">
										<label for="coursedesc" class="col-sm-3 col-form label">Course Description</label>
										<div class="col-sm-6">
											<textarea name="" id="coursedesc" cols="30" rows="6" class="form-control"></textarea>
										</div>
										
									</div>
									<div class="form-group row">
										<label for="coursecat" class="col-sm-3 col-form label">Course Category</label>
										<div class="col-sm-6">
											<select name=""  id="coursecat" class="form-control">
												<option value=""></option>
												<option value=""></option>
												<option value=""></option>
											</select>
										</div>
										
									</div>
									<div class="form-group row">
										<label for="courseprice" class="col-sm-3 col-form label">Price</label>
										<div class="col-sm-6">
											<input type="number" id="courseprice" class="form-control">
										</div>	
										
									</div>
									<div class="form-group row">
										<label for="courseThumbnail" class="col-sm-3 col-form label">Thumbnail image</label>
										<div class="col-sm-6">
											<input type="file" id="courseThumbnail" class="form-control">
										</div>	
										
									</div>
									<div class="form-group row">
										<label for="introVideo" class="col-sm-3 col-form label">Introductory video</label>
										<div class="col-sm-6">
											<input type="file" id="introVideo" class="form-control">
										</div>	
										
									</div>
									<div class="form-group row subtopic">
										<label class="col-sm-3 col-form label">Sub-topic</label>
										<div class="col-sm-6">
											<input type="text" id="subtopic1" class="form-control">
										</div>	
										
									</div>
									<div class="form-group row video">
										<label class="col-sm-3 col-form label">Video</label>
										<div class="col-sm-6">
											<input type="text" id="" class="form-control mb-2" placeholder="Video title">
											<input type="file" id="video1" class="form-control">
										</div>	
										
									</div>
								</form>

								<div class="dropup d-inline-block mr-2">
									<button style="background: #001F7D; color:white; border-radius: 9px; padding: 5px 20px 5px 20px;" class="dropdown-toggle btn btn-md mt-4" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
											aria-expanded="false">Add Content</button>
									<div class="dropdown-menu" aria-labelledby="triggerId">
										<a class="dropdown-item" id="#addSubtopic">Add Subtopic</a>
										<a class="dropdown-item" id="#addVideo">Add Video</a>
									</div>
								</div>

								<a style="background: #FBF09E; color:#F4D634; border-radius: 9px; padding: 5px 20px 5px 20px;" class="btn btn-md btn-warning mt-4" href="#"> Upload Course </a>

							</div>
						</div>
						<div class="tab-pane fade" id="v-pills-uploadedcourses" role="tabpanel" aria-labelledby="v-pills-uploadedcourses-tab">
							<div class="container" id="uploaded-courses">
								<h5 class="title">Uploaded Courses</h5>
								<div class="row">
									<div class="col-md-6 p-2 p-xl-4">
										<div class="card shadow border-0">
											<img class="card-img-top img-fluid" src="../assets/images/node.jpg" alt="Card image">
											<div class="card-body">
												<a class="category-pill-round" style="background-color: #cad9ba54;">Programming</a>
												<h5 class="card-title">NodeJs Crash Course</h5>
												<p class="card-text">Abraham John</p>
												<hr class="hr-light">
												<div class="d-flex my-3">
													<h4 class="price mt-2">$50.00</h4>
													<a href="#" class="remove-btn btn btn-md btn-danger ml-auto">Remove</a>
												</div>
											</div>
										</div>
									</div>
									<div class="col-12">
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
												<li class="nav-item"><sub>...</sub></li>
												<li class="nav-item">
													<a href="" class="nav-link">4</a>
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
						<div class="tab-pane fade" id="v-pills-editaccount" role="tabpanel" aria-labelledby="v-pills-editaccount-tab">
							<div class="container" id="edit-account">
								<h5 class="title">Edit Account</h5>
								<form action="">
									<div class="row">
										<div class="form-group col-md-3">
											<label for="new-profile-pic" style="cursor: pointer;"><i class="fas fa-pencil-alt"></i><img class="profile-pic" src="../assets/images/image.png" alt="profile-pic"></label>
											<input type="file" id="new-profile-pic" accept="image/*" style="
											display:none;"/>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label for="name">Name</label>
												<input type="text" class="form-control" id="name">
											</div>
											<div class="form-group">
												<label for="username">Username</label>
												<input type="text" class="form-control" id="username">
											</div>
											<div class="form-group">
												<label for="bio">Bio</label>
												<textarea name="" id="bio" cols="" rows="6" class="form-control" placeholder=""></textarea>
											</div>

										</div>
									</div>
								</form>
								<a style="background: #FBF09E; color:#F4D634; border-radius: 9px; padding: 5px 20px 5px 20px;" class="btn btn-md btn-warning mt-4" href="#">Save Changes</a>
							
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
  name: 'TutorDashboard',
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
