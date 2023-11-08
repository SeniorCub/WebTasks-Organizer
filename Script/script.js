

// Attach event listeners to elements with the "user" or "start" class
const userElements = document.querySelectorAll(".user").addEventListener("click",sign())

function sign() {
    document.querySelector('#mod').innerHTML = `
    <div class="modal modal-lg fade" id="exampleModalToggle" class="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered ">
         <div class="modal-content bg-dark">
              <div class="modal-header">
                   <h1 class="modal-title fs-5 text-prim" id="exampleModalToggleLabel">
                        Sign In
                   </h1>
                   <button type="button" class="btn-close text-light" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
    
              <div class="modal-body">
                   <form>
                        <div class="d-flex gap-2">
                             <div class="form-group" style="width: 100%;">
                                  <label for="firstName">First Name</label>
                                  <input type="text" class="form-control" id="firstName" placeholder="Enter your first name">
                              </div>
                              <div class="form-group"  style="width: 100%;">
                                  <label for="lastName">Last Name</label>
                                  <input type="text" class="form-control" id="lastName" placeholder="Enter your last name">
                              </div>
                        </div>
    
                        <div class="d-flex justify-content-around">
                             <div class="form-group">
                                  <label for="email">Email Address</label>
                                  <input type="email" class="form-control" id="email" placeholder="example@email.com">
                              </div>
    
                              <div class="form-group">
                                  <label for="phone">Phone Number</label>
                                  <input type="tel" class="form-control" id="phone" placeholder="+1234567890">
                             </div>
                             <div class="form-group">
                                  <label for="birthdate">Date of Birth</label>
                                  <input type="date" class="form-control" id="birthdate">
                             </div>
                        </div>
    
                        <div class="">
                             <div class="form-group">
                                 <label for="username">Username</label>
                                 <input type="text" class="form-control" id="username" placeholder="Enter username">
                             </div>
    
                             <div class="d-flex justify-content-around">
                                  <div class="form-group">
                                       <label for="password">Password</label>
                                       <input type="password" class="form-control" id="CrPwd" placeholder="Enter password">
                                  </div>
                                  <div class="form-group">
                                       <label for="password">Confirm Password</label>
                                       <input type="password" class="form-control" id="CoPwd" placeholder="Confirm password">
                                  </div>
                             </div>
                        </div>
                   </form>
              </div>
    
              <div class="modal-footer">
                   <button class="btn btn-prim save" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" id="save">Save</button>
              </div>
         </div>
    </div>
    </div> 
    `
  }
