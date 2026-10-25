import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { FaStar } from "react-icons/fa";

const Rating = () => {
  return (
    <section>
      <Container>

        <div className='w-[1000px] p-12  shadow-2xl'>
          <Flex className=' items-center justify-items-center'>
            <div className='items-center'>
              <p className='text-sm text-[#2C83BB]'>Who we are?</p>
              <h1 className=' w-[700px] text-[38px] font-bold'>More than 5,000 users around the world are
                already using STDEV actively</h1>
            </div >
            <div className='w-[177px] h-[166px] bg-[#112F421A] rounded justify-items-center items-center'>
              <div className=' justify-items-center items-center'>
                <h1 className='pb-5'>4.8</h1>
                <Flex className="pt-5">
                  <FaStar className='text-[#FF7282]' />
                  <FaStar className='text-[#FF7282]' />
                  <FaStar className='text-[#FF7282]' />
                  <FaStar className='text-[#FF7282]' />
                  <FaStar className='text-[#FF7282]' />

                </Flex>
                <p className='pt-3'>35 Reviews</p>
              </div>

            </div>
          </Flex>
        </div>
        <Flex className='pt-5 shadow-2xl w-[1000px] justify-between bg-[#FFFFFF]'>
          <Flex className='gap-x-5'>
            <div>
              <img src='/public/img (1).png' alt=''></img>
            </div>
            <div>
              <h1>70+</h1>
              <p>Professionals</p>
            </div>
          </Flex>

          <Flex className='gap-x-5'>
            <div>
              <img src='/public/img (2).png' alt=''></img>
            </div>
            <div>
              <h1>70+</h1>
              <p>Professionals</p>
            </div>
          </Flex>

          <Flex className='gap-x-5'>
            <div>
              <img src='/public/img (3).png' alt=''></img>
            </div>
            <div>
              <h1>70+</h1>
              <p>Professionals</p>
            </div>
          </Flex>
        </Flex>

      </Container>
    </section>
  )
}

export default Rating