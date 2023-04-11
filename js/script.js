const { createApp } = Vue;

createApp ({
    data() {
        return {
            mail: []
        }
    },
    methods: {
        generateMail() {
            const mailArray = [];

            for (let i = 0; i < 10; i++) {
            axios
                .get ("https://flynn.boolean.careers/exercises/api/random/mail")
                .then ((resp) => {
                    mailArray.push(resp.data.response);
                    if (mailArray.length === 10) {
                        this.mail = mailArray;
                    }
                });                
            }
        }
    }
}).mount("#app");