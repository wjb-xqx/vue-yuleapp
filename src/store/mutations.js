const mutations = {
    addToCar(state, goodsinfo) {
        // 点击加入购物车，把商品信息，保存到 store 中的 car 上
      // 分析：
      // 1. 如果购物车中，之前就已经有这个对应的商品了，那么，只需要更新数量
      // 2. 如果没有，则直接把 商品数据，push 到 car 中即可

      // 假设 在购物车中，没有找到对应的商品
      var flag = false

      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true //没有找到就执行后续代码
          return true  //终止some后续循环
        }
     })
      // 如果最终，循环完毕，得到的 flag 还是 false，则把商品数据直接 push 到 购物车中
      if (!flag) {
        state.car.push(goodsinfo)
      }

      // 当 更新 car 之后，把 car 数组，存储到 本地的 localStorage 中
      localStorage.setItem('car', JSON.stringify(state.car))
    }
}

export default mutations