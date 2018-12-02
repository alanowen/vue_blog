import Loading from './Loading'


export default {
    install: function(Vue, options) {
        let LoadingPlugin = Vue.extend(Loading)
        let $vm = new LoadingPlugin({
            el: document.createElement('div')
        })
        document.body.appendChild($vm.$el)

        $vm.show = false

        let show = () => {
            $vm.show = true
        }

        let hide = () => {
            $vm.show = false
        }

        Vue.prototype.$loading = {
            show,
            hide
        }
    }
}