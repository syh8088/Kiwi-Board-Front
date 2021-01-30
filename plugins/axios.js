export default function({ $axios, store, redirect  }) {
    $axios.onError(error => {

        console.log("############################################################axios -> ERROR", error.response.status)
        if (error.response && error.response.status >= 200 && error.response.status >= 300) {
            if(error.response.data.error === `invalid_token`) {
                store.dispatch(`setRedirectUrl`, { redirectUrl: store.$router.history.current.path });
                store.dispatch(`fetchLogout`);
                console.log("############################################################axios -> member/login redirect", error.response.data.error)
                console.log("############################################################axios -> member/login redirect")
                    return redirect(`/member/login`);
                  //  window.location = `/member/login`;
            } else if(error.response.data.error === `unauthorized`) {
                store.$toast.show(`아이디 또는 비밀번호가 올바르지 않습니다.`, {
                    theme: "toasted-primary",
                    position: "bottom-center",
                    duration : 2000
                });
            } else {


             //   return Promise.reject("vvsdvsdvdvs");
            }
        }
    });

    $axios.onRequest(config => {
        //config.headers["Content-Type"] = "application/json";
        //config.headers["Access-Control-Allow-Origin"] = "*";
        //store.dispatch("validation/clearErrors");
    });
}
