// iconc
import check from "./icons/icon-check.svg"
import cross from "./icons/icon-cross.svg"
import moon from "./icons/icon-moon.svg"
import sun from "./icons/icon-sun.svg"

//images
import desktop_dark from "./images/bg-desktop-dark.jpg"
import desktop_light from "./images/bg-desktop-light.jpg"
import mobile_dark from "./images/bg-mobile_dark.jpg"
import mobile_light from "./images/bg-mobile-light.jpg"

export const Icons = {
    check,
    cross,
    moon,
    sun
}

export const backgrounds = {
    light: {
        desktop_light,
        mobile_light
    },
    mobile: {
        desktop_dark,
        mobile_dark
    }
}