export class Emitter {
    constructor() {
        this.listeners = {}
    }

    // dispatch, fire, trigger
    // Уведомлять слушателей если они есть
    // table.emit('table:select', {a: 1})
    emit(event, ...args) {
        if (!Array.isArray(this.listeners[event])) {
            return false
        }
        this.listeners[event].forEach(listener => {
            listener(...args)
        })
        return true
    }

    // On, listen
    // Подписываемся на уведомления
    // Добавляем нового слушателя
    // formula.subscribe('table:select', () => {})
    subscribe(event, fn) {
        this.listeners[event] = this.listeners[event] || []
        this.listeners[event].push(fn)
        return () => {
            this.listeners[event] =
                this.listeners[event].filter(listener => listener !== fn)
        }
    }
}

// Example
// const emitter = new Emitter
// const unsub = emitter.subscribe('vladilen', data => console.log(data))
// emitter.emit('vladilen', 42)
//
// setTimeout(() => {
//     emitter.emit('vladilen', 'after 2 seconds')
//     }, 2000)
//
// setTimeout(() => {
//     unsub()
// }, 3000)
//
// setTimeout(() => {
//     emitter.emit('vladilen', 'after 4 seconds')
// }, 4000)