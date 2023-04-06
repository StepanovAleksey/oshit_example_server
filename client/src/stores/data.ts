import { appAxios } from '@/services/appAxios.service'
import { defineStore } from 'pinia'

export interface IServerDataResponce {
  test: string;
  server: {
    Data: Array<Record<string, any>>
  }
}

export const useDataStore = defineStore('data', {
  state() {
    return {
      rows: [] as Array<any>
    }
  },
  actions: {
    getData() {
      return appAxios.get<IServerDataResponce>('get-data')
        .then(responce => responce.data)
        .then(data => {
          this.$state.rows = data.server.Data
          return data;
        })
    }
  }
})
