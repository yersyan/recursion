import React, {useState} from "react";

export const Checkbox = ({items, padding = null}) => {

    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value)
        for(let item of items){
            e.target.value === item.option ? item.selected = true : item.selected = false
        }
    }

    if (!items || !items.length) {
        return null
    }

    return <div className="checkboxBlock" style={{paddingLeft: padding}}>
        {items.map(item => {
            return <div>
                <label className="checkboxLabel">
                    {item.option}
                    <input defaultValue={value} value={item.option} type="checkbox" checked={item.selected} onChange={onChange} className="checkboxInput"/>

                    {(item.selected && item.goals) && <span className="checkboxGoals">{`${item.goals} goals`}</span>}
                </label>
                {item.selected && <Checkbox items={item.subOption} padding={'3rem'}/>}
            </div>
        })}
        {/*{items.map(item => {*/}
        {/*    return item.selected && <Checkbox items={item.subOption} padding={'3rem'}/>*/}
        {/*})}*/}
    </div>
};