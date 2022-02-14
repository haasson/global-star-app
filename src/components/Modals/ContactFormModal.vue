<template>
   <AppModal ref="modal" bg="blue" >
      <template #content>
         <div class="content">
            <form class="form" v-if="status === 'new'"  @submit.prevent="sendEmail">
               <h1>Заявка</h1>
               <AppInput v-model="formData.name" v-maska="'S*'" placeholder="Имя*" />
               <AppInput v-model="formData.surname" v-maska="'S*'" placeholder="Фамилия" />
               <AppInput v-model="formData.phone" v-maska="'+7 (###) ###-##-##'" placeholder="Телефон*" />
               <AppInput v-model="formData.email" v-maska="'X*@S*.S*'" placeholder="E-mail" />
               <VueNextSelect
                   :options="options"
                   v-model="formData.topic"
                   close-on-select
               />

               <div class="agreement" @click="toggleAgreement">
                  <AppIcon class="icon-check" :name="agreementChecked ? 'checkbox' : 'check'"/>
                  <p class="text">
                     Нажимая кнопку «Отправить», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных»,
                     на условиях и для целей, определенных в Согласии на обработку персональных данных&nbsp;*
                  </p>
               </div>

               <div v-if="hasError" class="errors">
                  <p v-if="!formData.name">Введите имя</p>
                  <p v-if="!formData.phone">Введите телефон</p>
                  <p v-else-if="formData.phone.length < 18">Некорректный номер телефона</p>
                  <p v-if="!agreementChecked">Вы должны согласиться на обработку персональных данных</p>
               </div>

               <AppButton class="button" color="orange">Отправить</AppButton>
            </form>

            <div class="sending" v-else-if="status === 'sending'">
               <AppIcon name="loader" class="loader" stroke="white" />
               Отправка...
            </div>

            <div class="done" v-else-if="status === 'done'">
               Заявка отправлена!
            </div>

            <div class="done" v-else-if="status === 'error'">
               Ошибка! Сообщение не отправлено, перезагрузите страницу и попробуйте еще раз.
               Если ошибка повторится, напишите нам по адресу support@gstar.su
            </div>
         </div>
      </template>

      <template #controls="slotProps" v-if="['done', 'error'].includes(status)">
         <AppButtonsGroup class="controls">
            <AppButton @click="slotProps.confirm()" color="orange">ОК</AppButton>
         </AppButtonsGroup>
      </template>
   </AppModal>
</template>

<script>
import {computed, reactive, ref, watch} from "vue";
import emailjs from "emailjs-com";

import AppModal from "./AppModal.vue";
import AppInput from "../App/AppInput.vue";
import AppButton from "../App/AppButton.vue";
import AppSelect from "../App/AppSelect.vue";
import AppIcon from "../App/AppIcon.vue";
import AppButtonsGroup from "../App/AppButtonsGroup.vue";
import VueNextSelect from 'vue-next-select'


export default {
   name: "ContactFormModal",
   components: {AppButtonsGroup, AppIcon, AppSelect, AppButton, AppInput, AppModal, VueNextSelect},
   setup() {
      const modal = ref(null)
      const open = async () => modal.value.open()


      const status = ref('new')
      const hasError = ref(false)

      const agreementChecked = ref(false)
      const toggleAgreement = () => agreementChecked.value = !agreementChecked.value

      const options = ['Системы мониторинга транспорта', 'Контроль кормления КРС', 'Технологии точного земледелия']
      const formData = reactive({
         name: '',
         surname: '',
         phone: '',
         email: '',
         topic: options[0]
      })
      watch([formData, agreementChecked], () => {
         hasError.value = false
      })


      const sendEmail = () => {
         hasError.value = (!formData.name || !formData.phone || formData.phone.length < 18) && status.value === 'new'
         if (hasError.value) return

         status.value = 'sending'
         emailjs.send('service_xzepfgc', 'template_wpg24wp', formData, 'user_NW4jPRUHGxqWQkno03nFL')
             .then(() => {
                status.value = 'done'
             }, () => {
                status.value = 'error'
             })
         .catch(e => {
            status.value = 'error'
         });
      }


      return {
         open,
         modal,

         sendEmail,
         options,
         formData,
         hasError,

         agreementChecked,
         toggleAgreement,

         status,
      }
   }
}
</script>

<style lang="scss" scoped>
.content {
   padding: 15px 85px;
}
.form {
   display: flex;
   flex-direction: column;
   & > * {
      margin-bottom: 25px;
   }
}
h1 {
   font-size: var(--subtitle-size);
   margin-bottom: 25px;
   text-align: center;
}

.agreement {
   display: flex;
   cursor: pointer;
}
.icon-check{
   flex-shrink: 0;
   width: 24px;
   height: 24px;
   background-color: var(--white);
}
.text {
   max-width: 372px;
   font-size: 12px;
   margin-left: 6px;
}
.button {
   margin: 0 auto;
}

.errors {
   font-size: var(--text-small-size);
   color: var(--dark-orange);
}

.sending {
   display: flex;
}
.loader {
   margin-right: 10px;
   animation: rotate linear 1s infinite;
}

.done {
   text-align: center;
}
.controls {
   display: flex;
   justify-content: center;
   padding: 25px 0;
}



@keyframes rotate {
   from {
      transform: rotate(0);
   }
   50% {
      transform: rotate(180deg);
   }
   to {
      transform: rotate(360deg);
   }
}

@media(max-width: 768px) {
   .content {
      padding: 10px 25px;
   }
   .form {
      & > * {
         margin-bottom: 17px;
      }
   }
   .text {
      max-width: 300px;
   }
}
@media(max-width: 568px) {
   .text {
      font-size: 11px;
   }
}
@media(max-width: 480px) {
   .form {
      & > * {
         margin-bottom: 12px;
      }
   }
   .text {
      font-size: 10px;
   }
}
@media(max-width: 380px) {
   .text {
      font-size: 9px;
   }
}
</style>
