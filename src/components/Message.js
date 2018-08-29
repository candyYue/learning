import Vue from 'vue'

const merge =
  (...sources) => Object.assign({}, ...sources);
const transitions = {
    'transition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'MozTransition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd'
}
class Message {
    constructor() {}
    show(opts) {
        const msg=this.render(opts)
        const msgElement=msg.$mount().$el
        document.body.appendChild(msgElement)
        let timer = null;
        const self = this;
        if (opts.duration) {
            timer = setTimeout(() => {
                self.close(msgElement, opts.callback);
                clearTimeout(timer);
            }, opts.duration + opts.animationDuration)
        }
    }
    close(element, callback) {
        let flag = true;
        element.classList.add('fade-up');
        const transitionEvent = (() => {
          for (let t in transitions) {
            return (element.style[t] !== undefined) && transitions[t]
          }
        })()
        element.addEventListener(transitionEvent, () => {
          if (callback) {
            flag && document.body.removeChild(element) && callback()
          } else {
            flag && document.body.removeChild(element)
          }
          flag = false;
        }, false);
      }
    render(opts) {
        if (opts.name === 'message-tip') {
            return new Vue({
                name: opts.name,
                render(h) {
                    return h('div', {
                        class: ['message-tip', `message-${opts.icon}`],
                        style: {
                            top: `${opts.top}px`
                        }
                    }, opts.content)
                }
            })
        }
    }
}
class MessageTip extends Message {
    constructor(...arg) {
        super(...arg)
        this.default = {
            name: "message-tip",
            duration: 1500,
            animationName: 'message-tip',
            animationDuration: 500,
            callback: () => {}
        }
    }
    $info(opts) {
        const defaults = {
            icon: "info",
            content: "消息提示信息"
        }
        this.show(merge(this.default, defaults, opts))
    }
}

const messageTip = new MessageTip()
export {
    messageTip
}