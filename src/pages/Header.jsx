import React from 'react'
import IconComponent from '../components/IconComponent'
import { HEADER_CATEGORIES } from '../common/Data'

export default function Header() {
    return (
        <React.Fragment>
            <div className='max-w-350 mx-auto flex items-center justify-between h-full'>
                <div>Logo</div>
                <div>
                    <ul className='flex gap-2'>
                        {HEADER_CATEGORIES.map((category) => (
                            <li key={category.name} className='cursor-pointer group hover:bg-(--primary-light-grey) px-3 py-2 transition-colors rounded-full'>
                                <span className='text-(--primary-plum) text-base font-semibold group-hover:text-(--primary-blue)'>{category.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='flex items-center gap-5'>
                    <IconComponent name="Search" />
                    <IconComponent name="User" />
                    <IconComponent name="ShoppingCart" />
                </div>
            </div>
        </React.Fragment>
    )
}
