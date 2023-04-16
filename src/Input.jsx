import React from 'react'
import colorNames from 'colornames'
export const Input = ({colorValue, setColorValue, setHexValue, isDark, setIsDark}) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}  >
            <input type="text"
                autoFocus
                placeholder="Enter name of color"
                className="input"
                required
                value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value)
                    setHexValue(colorNames(e.target.value))
                }
                }
             />
             <button type="submit" className="button"
             onClick={()=> setIsDark(!isDark)}
             >toggle color</button>
        </form>
      )
}

