import { defineStore } from "pinia";
import jwt_decode from "jwt-decode";

export interface IIdentityState {
    isAuthenticated: Boolean
    id:string
    email: string
    username:string
  }

export const useAuth = defineStore('auth', {
      state: (): IIdentityState => ({
        isAuthenticated: false,
        id:'',
        email: '',
        username:''
      }),
      actions: {
        async setUserData() {
            var token = useCookie('Authorization');
            if(token.value){
              const decoded = jwt_decode(token.value);
                this.isAuthenticated = true,
                this.id = decoded.sub,
                this.email = decoded.email,
                this.username = decoded.username
            }
        }
      },
      getters: {
        getIdentityState: (state: IIdentityState) => (): IIdentityState => state,
        getIsAuthenticated: (state: IIdentityState) => (): Boolean => state.isAuthenticated
      }
})