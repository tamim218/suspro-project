import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Listitem from './Listitem'
import { FaAngleDown } from "react-icons/fa6";

const Navber = () => {
    return (
        <div className='bg-[#2C83BB] items-center py-4'>
            <Container>
                <Flex className="justify-between items-center">
                    <img src='/public/a.png' alt=''></img>
                    <ul >
                        <Flex className="gap-10">
                            <Flex className='items-center gap-x-1'>
                                <Listitem text='Home'  />
                                <FaAngleDown className='text-[#EEF4F9]' />
                            </Flex>

                            <Flex className='items-center gap-x-1'>
                                <Listitem text='About'  />
                                <FaAngleDown className='text-[#EEF4F9]' />
                            </Flex>
                            
                            <Listitem text='Contact' />
                            <Listitem text='Service' />
                            <Listitem text='Service' />
                            <Listitem text='Service' />
                        </Flex>
                    </ul>
                    <button className='w-[118px] h-[40px] bg-[#2C83BB] text-white border rounded-lg'>Let's talk</button>
                </Flex>
            </Container>
        </div>
    )
}

export default Navber