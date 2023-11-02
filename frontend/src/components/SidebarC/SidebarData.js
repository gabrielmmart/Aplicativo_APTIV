import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const SideBarData = [
    {
        title: 'Usuarios',
        path: '/addUsuarios',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Atalhos',
        path: '/addAtalhos',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    }
]
