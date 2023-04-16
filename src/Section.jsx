import React from 'react'

export const Section = ({colorValue, hexValue, isDark}) => {
    return (
        <section className="section"
            style={{
                backgroundColor: colorValue,
                color: isDark ? "black" : "white"
            }}
        >
            <p>{colorValue ? colorValue: "Empty color"}</p>
            <p>{hexValue ? hexValue: null}</p>
        </section>
    )
}
Section.defaultProps = {
    colorValue: 'Set color value',
}
