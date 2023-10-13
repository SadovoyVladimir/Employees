import { IRole } from '../interfaces/interfaces'
import roles from './../mockdata/roles.json'

const key = 'roles'

const categoriesService = {
  get: () => {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(roles))
    }
    const data: IRole[] = JSON.parse(localStorage.getItem(key)!)
    return data
  }
}

export default categoriesService
