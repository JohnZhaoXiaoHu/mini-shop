export default {
  plus(state, id) {
    let cart = state.cart;
    for (let i in cart) {
      if (cart[i].id === id) {
        cart[i].count += 1
      }
    }
    return
  },
  minus(state, id) {
    let cart = state.cart;
    for (let i in cart) {
      if (cart[i].id === id) {
        cart[i].count -= 1
        if (cart[i].count <= 0) {
          cart.splice(i, 1)
        }
      }
    }
  },
  addGoods(state, data) {
    let cart = state.cart;
    for (let i in cart) {
      if (cart[i].id === data.id) {
        cart[i].count += data.count
        return
      }
    }
    cart.push(data);
    // try {
    //   localStorage.cart = cart;
    // } catch (error) {

    // }
  },
  deleteGoods(state, id) {
    let cart = state.cart;
    for (let i in cart) {
      if (cart[i].id === id) {
        cart.splice(i, 1)
      }
    }
  },
  selectAll(state) {
    let cart = state.cart;
    if (state.selectAll) {
      cart.map((item) => {
        item.status = false
      })
      state.selectAll = false
    } else {
      cart.map((item) => {
        item.status = true
      })
      state.selectAll = true
    }
  },
  selectCancel(state, id) {
    let cart = state.cart;
    let count = 0;

    cart.map((item) => {
      if (item.id === id) {
        item.status = !item.status
      }
    })
    cart.map(item => {
      if(item.status === true){
        count += 1
      }
    })
    count === cart.length?state.selectAll = true: state.selectAll = false;
  }
}
