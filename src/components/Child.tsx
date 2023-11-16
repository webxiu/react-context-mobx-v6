import React from 'react'
import { observer } from 'mobx-react'
import { useRootStore } from '../stores/index'


const Child = observer(() => {
    const { user } = useRootStore();
    const { name, age, increment, decrement, setName, borthYear } = user
    return (
        <div>
            redux-toolkit状态管理:
            <div>{JSON.stringify({ name, age, borthYear })}</div>
            <button onClick={() => setName('李四')}>修改名称</button>
            <button onClick={() => increment()}>修改+1</button>
            <button onClick={() => decrement()}>修改-1</button>
        </div>
    )
})

export default Child