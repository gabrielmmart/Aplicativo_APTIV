import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const SideBarData = [
    {
        title: 'Usuarios',
        path: '/usuarios',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Atalhos',
        path: '/atalhos',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    }
]
