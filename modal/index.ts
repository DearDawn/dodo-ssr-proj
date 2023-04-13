import { makeAutoObservable } from 'mobx'
import { createContext } from 'react'

export class RootStore {
  secondsPassed = 0
  name = 0

  constructor(name = 0) {
    makeAutoObservable(this)
    this.name = name
  }

  increaseTimer = () => {
    this.secondsPassed += 1
  }
}

export const RootStoreContext = createContext<RootStore>(new RootStore(-1))
