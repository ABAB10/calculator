import { describe, it, expect } from 'vitest'
import { add, subtract, multiply, power } from '../script.js'

describe('Fonctions de calcul', () => {
  it('Addition', () => expect(add(2,3)).toBe(5))
  it('Soustraction', () => expect(subtract(5,2)).toBe(3))
  it('Multiplication', () => expect(multiply(3,4)).toBe(12))
  it('Puissance', () => expect(power(2,3)).toBe(8))
})
