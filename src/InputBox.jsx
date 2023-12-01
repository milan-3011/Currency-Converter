import "./InputBox.css"
import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId()

  return (
    <div className="first">
        <table cellSpacing="10px" cellPadding="0">
            <tr className="text">
                <th><label htmlFor={amountInputId}>{label}</label></th>
                <th>Currency Type</th>
            </tr>
            <tr>
                <td>
                    <input 
                        className="input"
                        type="number" 
                        id={amountInputId} 
                        placeholder='Amount' 
                        disabled={amountDisable} 
                        value={amount} 
                        onChange={(e) => onAmountChange && onAmountChange(e.target.value === '' ? '' : parseFloat(e.target.value))}
                    />
                </td>
                <td>
                    <select 
                        className="select"
                        id="" 
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencyDisable}
                    >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </td>
            </tr>
        </table>
    </div>
  );
}

export default InputBox
