import React from 'react'

declare global {
  namespace Tinder {
    type Direction = 'left' | 'right' | 'up' | 'down'
    type SwipeHandler = (direction: Direction) => void
    type CardLeftScreenHandler = (direction: Direction) => void
    type SwipeRequirementFufillUpdate = (direction: Direction) => void
    type SwipeRequirementUnfufillUpdate = () => void

    interface API {
      swipe(dir?: Direction): Promise<void>
      restoreCard(): Promise<void>
    }
  }
}

export {}