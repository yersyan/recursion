import React, {useState} from "react";

export const Select = ({ items }) => {
    const [value, setOption] = useState('')

    const  onChange = (e) => {
        setOption(e.target.value);
        for (let item of items){
            e.target.value === item.option ? item.selected = true : item.selected = false
        }
    }

    if (!items || !items.length) {
        return null
    }

    return <div className="selectBlock">
        {items.map((item, index) => {
            return index === 0 && <label className="label">{`${item.title}:`}</label>
        })}
        <select onChange={onChange} defaultValue={value} className="select">
            {items.map(item => {
                return <option selected={item.selected} value={item.option} key={item.id}
                               defaultValue={value}>{item.option}</option>
            })}
        </select>
        {
            items.map(item => {
                if (item.selected && item.goals) {
                    return <div className="goals">{`${item.goals} goals`}</div>
                }
                return item.selected && <Select items={item.subOption} key={item.id}/>
            })
        }
    </div>
}