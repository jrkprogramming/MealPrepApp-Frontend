import React from "react";

const LoginPage = () => {
  return (
    <section class="vh-100" style="background-color: #508bfc;">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style="border-radius: 1rem;">
              <div class="card-body p-5 text-center">
                <h3 class="mb-5">Welcome to Meal Prep App! Please Sign In</h3>

                <hr class="my-4"></hr>

                <a
                  href="/auth/google"
                  class="btn btn-lg btn-block btn-primary"
                  style="background-color: #dd4b39;"
                  type="submit"
                >
                  <i class="fab fa-google me-2"></i>
                  <img
                    width="20px"
                    style="margin-top:7px; margin-right:8px"
                    alt="Google sign-in"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                  />{" "}
                  Sign in with Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
