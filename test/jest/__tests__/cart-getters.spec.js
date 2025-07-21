import { describe, it, expect } from '@jest/globals'
import { cart } from '../../../src/store/modules/cart.js'

describe('Getter do Vuex Cart', () => {

  describe('cartTotal', () => {
    
    it('deve retornar 0 se o carrinho estiver vazio', () => {

      const state = {
        items: []
      };

      const result = cart.getters.total(state);

      expect(result).toBe(0);
    });

    it('deve calcular o total corretamente com um item', () => {
      const state = {
        items: [{ price: 10, quantity: 2 }]
      };
      const result = cart.getters.total(state);
      expect(result).toBe(20);
    });

    it('deve calcular o total corretamente com múltiplos itens', () => {
      const state = {
        items: [
          { price: 25.50, quantity: 1 },
          { price: 10.00, quantity: 3 }
        ]
      };
      const result = cart.getters.total(state);

      expect(result).toBeCloseTo(55.50);
    });
  });
});