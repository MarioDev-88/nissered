<template>
<form @submit.prevent="login(this.correo, this.pwd)">
    <div class="items-center px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="correo">
          Correo
        </label>
        <input v-model="correo" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" required="true" type="text" placeholder="Correo">
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input v-model="password" class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" required="true" type="password" placeholder="">
        <p class="text-red-600 text-xs italic">{{errorMessage}}</p>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded" type="submit">
          Sign In
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { auth } from '../../utils/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
export default {
  data() {
    return {
      correo:'',
      password:'',
      errorMessage:''
    }
  },
  methods: {
    login(correo, password) {
      signInWithEmailAndPassword(auth, correo, password)
        .then((userCredential) => {
          console.log(userCredential.user)
        })
        .catch((error) => {
          alert(error.message)
          this.errorMessage = error.message
        })
    }
  }
}
</script>

<style>

</style>