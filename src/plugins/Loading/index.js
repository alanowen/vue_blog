import Loading from './Loading'


export default {
    install: function(Vue, options) {
        let LoadingPlugin = Vue.extend(Loading)
        let vm = new LoadingPlugin({
            el: document.createElement('div')
        })
        document.body.appendChild(vm.$el)

        let timer = null

        let update = (percent) => {
            timer = setInterval(() => {
                percent += Math.floor(Math.random () * 3 + 1)
                if (vm.percent > 95) {
                    clearTimer(timer)
                } else {
                    vm.percent = percent
                }
            }, 200)
        }

        let clearTimer = () => {
            if (timer) {
                clearInterval(timer)
                timer = null
            }
        }

        let start = () => {
            clearTimer()
            vm.show = true
            update(0)
        }

        let finish = () => {
            clearTimer()
            vm.percent = 100
            setTimeout(() => {
                vm.show = false
                setTimeout(() => {
                    vm.percent = 0
                }, 200)
            }, 800)
        }

        Vue.prototype.$loading = {
            start,
            finish
        }
    }
}