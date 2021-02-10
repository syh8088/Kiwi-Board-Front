export default function({ $axios, store, redirect  }) {
    $axios.onError(error => {

        console.log("############################################################axios -> ERROR",  error.response)
        if (error.response && error.response.status >= 200 && error.response.status >= 300) {
            if(error.response.data.error === `invalid_token`) {
                store.dispatch(`setRedirectUrl`, { redirectUrl: store.$router.history.current.path });
                store.dispatch(`fetchLogout`);
                console.log("############################################################axios -> member/login redirect", error.response.data.error)
                console.log("############################################################axios -> member/login redirect")
                store.$toast.show(`권한이 없습니다.`, {
                    theme: "toasted-primary",
                    position: "bottom-center",
                    duration : 2000
                });
                   // return redirect(`/`);
                  //  window.location = `/member/login`;
            } else if(error.response.data.error === `unauthorized`) {
                store.$toast.show(`아이디 또는 비밀번호가 올바르지 않습니다.`, {
                    theme: "toasted-primary",
                    position: "bottom-center",
                    duration : 2000
                });
            } else {
                store.$toast.show(error.response.data, {
                    theme: "toasted-primary",
                    position: "bottom-center",
                    duration : 2000
                });

            }
        }
    });

    $axios.onRequest(config => {
        console.log(" ★★★★★★★★★★★★★★API START store.getters['member/isAuthenticated']", store.getters['member/isAuthenticated'])
        if(process.client) {
            console.log("★★★★★★★★★★★★★★API START ")

        }

    });


    $axios.onResponse(res => {
        console.log("★★★★★★★★★★★★★★API END $axios.onResponse")
        if(process.client) {
            console.log("★★★★★★★★★★★★★★API END")
        }

    });
}
