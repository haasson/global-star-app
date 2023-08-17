<template>
  <form class="form" v-if="status === 'new'" @submit.prevent="sendEmail">
    <h2>{{ title }}</h2>
    <div class="form-inner">
      <AppInput v-model="formData.name" placeholder="Имя*" />
      <AppInput v-model="formData.surname" placeholder="Фамилия" />
      <AppInput
        v-model="formData.phone"
        v-maska="'+7 (###) ###-##-##'"
        placeholder="Телефон*"
      />
      <AppInput
        v-if="!short"
        v-model="formData.email"
        v-maska="'X*@S*.S*'"
        placeholder="E-mail"
      />
      <VueNextSelect
        v-if="!short"
        :options="options"
        v-model="formData.topic"
        close-on-select
      />

      <div class="agreement" @click="toggleAgreement">
        <AppIcon
          class="icon-check"
          :name="formData.agreement ? 'checkbox' : 'check'"
        />
        <p>
          Нажимая кнопку «Отправить», я даю свое согласие на обработку моих
          персональных данных, в соответствии с Федеральным законом от
          27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для
          целей, определенных в Согласии на обработку персональных данных&nbsp;*
        </p>
      </div>

      <div v-if="hasError && showError" class="errors">
        <p v-if="!formData.name">Введите имя</p>
        <p v-if="!formData.phone">Введите телефон</p>
        <p v-else-if="formData.phone.length < 18">
          Некорректный номер телефона
        </p>
        <p v-if="!formData.agreement">
          Вы должны согласиться на обработку персональных данных
        </p>
      </div>

      <AppButton class="button" color="orange">Отправить</AppButton>
    </div>
  </form>

  <div class="sending" v-else-if="status === 'sending'">
    <AppIcon name="loader" class="loader" stroke="white" />
    Отправка...
  </div>

  <div class="done" v-else-if="status === 'done'">Заявка отправлена!</div>

  <div class="done" v-else-if="status === 'error'">
    Ошибка! Сообщение не отправлено, перезагрузите страницу и попробуйте еще
    раз. Если ошибка повторится, напишите нам по адресу support@gstar.su
  </div>

  <div
    class="back"
    v-if="['done', 'error'].includes(status)"
    @click="backToForm"
  >
    Вернуться к форме
  </div>
</template>

<script>
import { reactive, ref, watch, computed } from "vue";
import VueNextSelect from "vue-next-select";
import emailjs from "emailjs-com";

import AppInput from "./AppInput.vue";
import AppButton from "./AppButton.vue";
import AppIcon from "./AppIcon.vue";

export default {
  name: "ContactForm",
  components: { AppIcon, AppButton, AppInput, VueNextSelect },

  props: {
    short: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "Заявка",
    },
  },

  setup(props, { emit }) {
    const status = ref("new");
    const hasError = computed(() => {
      return (
        (!formData.name ||
          !formData.phone ||
          formData.phone.length < 18 ||
          !formData.agreement) &&
        status.value === "new"
      );
    });
    const showError = ref(false);

    const options = [
      "Системы мониторинга транспорта",
      "Контроль кормления КРС",
      "Технологии точного земледелия",
    ];
    const formData = reactive({
      name: "",
      surname: "",
      phone: "",
      email: "",
      agreement: false,
      topic: options[0],
    });
    const toggleAgreement = () => (formData.agreement = !formData.agreement);

    watch(formData, () => {
      showError.value = false;
    });
    watch(status, () => {
      emit("changeStatus", status.value);
    });

    const sendEmail = () => {
      if (hasError.value) return (showError.value = true);

      status.value = "sending";
      emailjs
        .send(
          "service_gqqfvsk",
          "template_wpg24wp",
          formData,
          "user_NW4jPRUHGxqWQkno03nFL"
        )
        .then(
          () => {
            status.value = "done";
          },
          () => {
            status.value = "error";
          }
        )
        .catch((e) => {
          status.value = "error";
        });
    };

    const backToForm = () => {
      status.value = "new";
    };

    return {
      sendEmail,
      options,
      formData,
      hasError,
      showError,

      toggleAgreement,
      backToForm,

      status,
    };
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  &-inner {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    & > * {
      margin-bottom: 25px;
    }
  }
}

h2 {
  font-size: var(--subtitle-size);
  margin-bottom: 25px;
  text-align: center;
  @media (max-width: 568px) {
    font-size: 14px;
  }
}

.agreement {
  display: flex;
  font-size: 12px;
  cursor: pointer;
  @media (max-width: 568px) {
    font-size: 10px;
  }
  @media (max-width: 420px) {
    font-size: 8px;
  }

  .icon {
    margin-right: 5px;
  }
}

.icon-check {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  background-color: var(--white);
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

.back {
  margin-top: 7px;
  color: var(--orange);
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
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

@media (max-width: 768px) {
  .form-inner {
    & > * {
      margin-bottom: 17px;
    }
  }
}

@media (max-width: 480px) {
  .form-inner {
    & > * {
      margin-bottom: 12px;
    }
  }
}
</style>
