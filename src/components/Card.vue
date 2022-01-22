<script>
export default {
    props: {
        BackgroundColor: {
            default: "gray"
        },
        Logo: {
            default: "LOGO"
        },
        cardNumber: {
            default: "XXXX XXXX XXXX XXXX"
        },
        FirstName: {
            default: "FIRSTNAME"
        },
        LastName: {
            default: "LASTNAME"
        },
        ValidMonth: {
            default: "MM"
        },
        ValidYear: {
            default: "YY"
        },
        color: {
            default: "white"
        }
    },

    

    computed: {
        cardNumbers: function() {
            return this.cardNumber.split(" ")
        }
    }
}
</script>

<template>
    <div class="card" :style="'background-color:' + BackgroundColor +';color:' + color">
        <div class="header">
            <div style="padding: 1rem;">
                <div>WIFI</div>
                <div>SIM</div>
            </div>

            <div style="padding: 1rem;">{{Logo}}</div>
        </div>
        <div class="number">
            <div v-for="(number, index) in cardNumbers" :key="index">{{number}}</div>
            
        </div>
        <div class="footer">
            <div>
                <div>CARDHOLDER NAME</div>
                <div>{{ FirstName.toUpperCase() }} {{ LastName.toUpperCase() }}</div>
            </div>
            <div>
                <div>VALID TILL</div>
                <div>{{ ValidMonth }}/{{ ValidYear }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 100%;
    height: 10rem;
}
.header {
    display: flex;
    justify-content: space-between;
}

.number {
    display: flex;
    justify-content: space-around;
}
.footer {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
}

</style>