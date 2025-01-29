<template>
    <div class="form_wrapper">
        <div class="card">
            <div class="card_back_side">
                <div class="magnetic_stripe"></div>
                <div class="cvc_field">
                    <input v-model="formData.cvc" type="password" placeholder="CVC" required class="cvc_input" />
                </div>
            </div>

            <div class="card_front_side">
                <div class="cardholder_field">
                    <input v-model="formData.name" type="text" placeholder="Holder of card" required
                        class="cardholder_input" />
                </div>

                <div class="card_number_field">
                    <input v-model="formData.number" type="text" placeholder="Number of card" required
                        class="card_number_input" />
                </div>

                <div class="valid_thru_field">
                    <span>VALID THRU</span>
                    <div class="valid_thru_wrapper">
                        <input v-model="formData.Month" type="text" placeholder="MM" required
                            class="month_input" />
                        <span class="separator">
                            <img src="@/assets/line.png" alt="Line"/>
                        </span>
                        <input v-model="formData.Year" type="text" placeholder="YY" required class="year_input" />
                    </div>
                    <div class="card_system_logo">
                        <img src="@/assets/vizza_large.png" alt="Visa" class="logo" />
                    </div>
                </div>
            </div>
            
        </div>

        <button @click="handleSubmit" class="send_button">Send</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                number: '',
                Month: '',
                Year: '',
                cvc: ''
            }
        };
    },
    methods: {
        handleSubmit() {
            this.$emit('add-card', { ...this.formData });
            this.formData = { name: '', number: '', Month: '', Year: '', cvc: '' };
        }
    }
};
</script>

<style scoped>
.form_wrapper {
    margin-top: 80px;
}

.card_system_logo {
    display: flex;
    align-items: center;
}

.card {
    width: 500px;
    height: 274px;
    position: relative;
}

input:hover {
    border: 2px solid #176FC1;
}

.card_front_side,
.card_back_side {
    width: 388px;
    height: 239px;
    border-radius: 10px;
}

.card_back_side {
    position: absolute;
    background-color: #C7C7C7;
    bottom: 0;
    right: 0;
    z-index: 1;
}

.card_front_side {
    z-index: 100;
    background-color: #ECECEC;
    position: relative;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.magnetic_stripe {
    width: 100%;
    height: 50px;
    margin-top: 31px;
    background-color: #979797;
}

.cardholder_input,
.card_number_input,
.month_input,
.year_input,
.cvc_input {
    height: 42px;
    border: 2px solid #ADADAD;
    background: #FFF;
    padding-left: 10px;
    font-size: 16px;
    font-weight: 700;
}

.cardholder_input,
.card_number_input {
    width: 324px;
}

.month_input,
.year_input,
.cvc_input {
    width: 73px;
}

*::placeholder {
    color: #A0A0A0;
}

.card_number_field {
    position: absolute;
    top: 94px;
    left: 28px;
}

.cardholder_field {
    position: absolute;
    top: 24px;
    left: 28px;
}

.valid_thru_field {
    position: absolute;
    bottom: 24px;
    left: 28px;
    display: flex;
    align-items: center;
}



.valid_thru_wrapper{
    display:flex;
}

.separator{
    display: flex;
    padding-top: 7px;
    height: 30px;
}

.cvc_field {
    position: absolute;
    right: 22px;
    bottom: 35px;
}

.send_button {
    margin-top: 60px;
    font-size: 25px;
    font-weight: 400;
    width: 187px;
    height: 48px;
    cursor: pointer;
    background-color: #95B0D8;
    border-radius: 11px;
    color: white;
    border: none;
}

</style>