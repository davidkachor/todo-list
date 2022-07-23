import {v4 as uuid} from 'uuid'

class Todo {
    text: string
    id: string
    isDone: boolean

    constructor(text: string) {
        this.text = text
        this.id = uuid()
        this.isDone = false
    }

}
export default Todo