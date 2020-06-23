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
        <select onChange={onChange} defaultValue={value} className="select">
            {items.map(item => (
                <option selected={item.selected} value={item.option} key={item.id} defaultValue={value}>{item.option}</option>
            ))}
        </select>
        {
            items.map(item => {
                return item.selected && <Select items={item.subOption} key={item.id}/>
            })
        }
    </div>
}