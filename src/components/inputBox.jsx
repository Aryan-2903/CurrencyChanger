import React, { useId } from 'react';

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
  const amountInputId = useId();

  return (
    <div>
        <div className={`bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl ${className}`}>
      <div className="flex items-center space-x-4">
        <div className="w-1/2 space-y-1">
          <label htmlFor={amountInputId} className="text-gray-600 font-medium text-sm tracking-wide block">
            {label}
          </label>
          <input
            id={amountInputId}
            className="w-full bg-gray-50 py-2 px-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all duration-200 text-gray-800 placeholder-gray-400"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          />
        </div>
        <div className="w-1/2 space-y-1">
          <label className="text-gray-600 font-medium text-sm tracking-wide block">
            Currency Type
          </label>
          <select
            className="w-full rounded-md px-3 py-2 bg-white border border-gray-200 text-gray-700 cursor-pointer focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all duration-200 appearance-none hover:bg-gray-50"
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency} className="bg-white hover:bg-gray-100">
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
    </div>
  );
}

export default InputBox;