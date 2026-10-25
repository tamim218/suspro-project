import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

const Bunner = () => {
    return (
        <div className='bg-[#2C83BB] pt-10 pb-5'>
            <Container>
                <Flex>
                    <div className='w-1/2'>
                        <h5 className='text-white text-lg'>Business & Technologies</h5>
                        <h1 className='text-white text-[52px] pb-5 leading-[60px] w-[450px] font-bold'>We help tech
                            companies deliver
                            great software</h1>
                        <p className='text-white pb-4'>Since 1999. For millions of users. We transform businesses with powerful and
                            adaptable digital solutions that satisfy the needs of today and unlock the
                            opportunities of tomorrow.</p>
                        <Flex className="rounded-lg">
                            <div className='w-[500px] h-[80px] bg-[#FFFFFF] rounded-lg'></div>
                            <div className='w-[160px] h-[80px] bg-[#112F42] text-lg text-white rounded-lg'>Request for Demo</div>
                        </Flex>

                    </div>
                    <div className='w-1/2 relative'>
                        <img className='w-[750px] absolute -top-5 right-[-60px]' src='/public/bunnerimg.png' alt=''></img>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Bunner