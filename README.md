# Canturil's Sales (cplug-sales)

Projeto de um sistema de venda simples, praticando Vue.js e Quasar Framework, gerenciamento de estado e PWA.

## 💻 Tech Stack
- Vue 2 (Options API)
- Vuex
- Quasar Framework v1
- Vue router

-----------
## Desenvolvimento
A escolha do Quasar foi feita por afinidade e experiência com o framework, também pela facilidade e agilidade para desenvolver o PWA. A decisão de fazer uma API fake é mais para simular e praticar chamadas de API, usei imagens do Unsplash que são gratuitas.

### Dificuldades
- Pensei em persistir os dados da venda inicialmente com a biblioteca [vuex-persistedstate](https://www.npmjs.com/package/vuex-persistedstate) mas como na página do npm está informa que está _deprecated_, decidi criar um plugin utilizando localStorage e subscribe do Vuex.
- Queria utilizar o Vitest mas a compatibilidade com Vue 2 e Quasar é maior com o Jest.
- A filtragem dos produtos não estava considerando acentos, para isso foi utilizado o método `normalize()`.
- Push notifications foi empolgante de implementar, live alguns artigos do [PWA Builder](https://docs.pwabuilder.com/#/home/native-features?id=push-notifications) bem esclarecedor.
