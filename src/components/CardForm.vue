<template>
    <div class="form_wrapper">
        <Form :validation-schema="validationSchema" @submit="handleSubmit">
            <div class="card">
                <div class="card_back_side">
                    <div class="magnetic_stripe"></div>
                    <div class="cvc_field">
                        <Field name="cvc" v-slot="{ field, errors }">
                            <input v-bind="field" v-model="formData.cvc" placeholder="CVC"
                                :class="{ 'error_input': errors.length }" class="cvc_input" />
                        </Field>
                        <ErrorMessage name="cvc" class="error-message" />
                    </div>
                </div>

                <div class="card_front_side">
                    <div class="cardholder_field">
                        <Field name="name" v-slot="{ field, errors }">
                            <input v-bind="field" v-model="formData.name" placeholder="Holder of card"
                                :class="{ 'error_input': errors.length }" class="cardholder_input" />
                        </Field>
                        <ErrorMessage name="name" class="error-message" />
                    </div>

                    <div class="card_number_field">
                        <Field name="number" v-slot="{ field, errors }">
                            <input v-bind="field" v-model="formData.number" placeholder="Number of card"
                                :class="{ 'error_input': errors.length }" class="card_number_input" />
                        </Field>
                        <ErrorMessage name="number" class="error-message" />
                    </div>

                    <div class="valid_thru_field">
                        <span>VALID THRU</span>
                        <div class="valid_thru_wrapper">
                            <div class="input_wrapper">
                                <Field name="Month" v-slot="{ field, errors }">
                                    <input v-bind="field" v-model="formData.Month" placeholder="MM"
                                        :class="{ 'error_input': errors.length }" class="month_input" />
                                </Field>
                                <ErrorMessage name="Month" class="error-message" />
                            </div>

                            <span class="separator">
                                <img src="@/assets/line.png" alt="Line" />
                            </span>
                            <div class="input_wrapper">
                                <Field name="Year" v-slot="{ field, errors }">
                                    <input v-bind="field" v-model="formData.Year" placeholder="YY"
                                        :class="{ 'error_input': errors.length }" class="year_input" />
                                </Field>
                                <ErrorMessage name="Year" class="error-message" />
                            </div>
                        </div>
                        <div class="card_system_logo">
                            <img :src="cardLogo" alt="Card Logo" class="logo" />
                        </div>
                    </div>

                </div>
            </div>

            <button type="submit" class="send_button">Send</button>
        </Form>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { validationSchema } from '@/validationRules';

export default {
    data() {
        return {
            validationSchema,
            formData: {
                name: '',
                number: '',
                Month: '',
                Year: '',
                cvc: ''
            }
        };
    },
    computed: {
        cardLogo() {
            if (this.formData.number.startsWith('4')) {
                return ('/src/assets/Visa.png');
            } else if (this.formData.number.startsWith('5')) {
                return ('/src/assets/Master.png');
            } else {
                return ('/src/assets/vizza_large.png');
            }
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('add-card', { ...this.formData });
            this.formData = { name: '', number: '', Month: '', Year: '', cvc: '' };
        }
    },
    components: {
        Form,
        Field,
        ErrorMessage
    },
};
</script>

<style scoped>

.error_input {
    border: 2px solid red;
    border-radius: 4px;
}

.error_input:focus{
    border: 2px solid red;
    border-radius: 4px;
}

.input_wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.error-message {
    position: absolute;
    bottom: -16px;
    left: 0;
    width: 100%;
    text-align: right;
    padding-top: 2px;
    color: red;
    font-size: 12px;
}


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

.valid_thru_wrapper {
    display: flex;
}

.separator {
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