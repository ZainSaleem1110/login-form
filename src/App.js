import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DotImg1 from './images/dotsColor.svg'
import DotImg2 from './images/dots.svg'

function App() {
    return (
        <>
            <Box className="flex justify-center items-center mb-3 text-[#825AFF]">
                <Typography><span className="sm:text-[42px] text-[20px]">JOIN THE WHITELIST</span></Typography>
            </Box>
            <Box className="w-[100%] flex">
                <Box className="mt-3 md:flex hidden items-start">
                    <img src={DotImg1} className="w-[70px] pr-3" alt="" />
                </Box>
                <Box className="sm:w-[600px] sm:px-0 px-10 py-10 bg-[#161719] flex justify-center items-center">
                    <Box className="sm:w-[350px] w-[250px]">
                        <Box>
                            <label className="text-white pl-3 block">Name</label>
                            <input className="bg-black mt-1 pl-3 text-white h-[42px] w-[100%] rounded-sm text-[14px]" name="lastName" required placeholder="Enter your full name" />
                        </Box>
                        <Box className="mt-4">
                            <label className="text-white pl-3 block">Email</label>
                            <input className="bg-black mt-1 pl-3 text-white text-[14px] h-[42px] w-[100%] rounded-sm" type="email" name="Email" required placeholder="Enter your email address" />
                        </Box>
                        <Box className="mt-4">
                            <label className="text-white pl-3 block">Wallet Address</label>
                            <input className="bg-black mt-1 text-[14px] pl-3 text-white h-[42px] w-[100%] rounded-sm" type="email" name="Email" required placeholder="Enter your email address" />
                        </Box>
                        <Box className="mt-4">
                            <label className="text-white pl-3 block">Wallet Address</label>
                            <input className="bg-black mt-1 text-[14px] pl-3 text-white h-[42px] w-[100%] rounded-sm" type="email" name="Email" required placeholder="Enter your email address" />
                        </Box>
                        <Box className="flex justify-center mt-4">
                            <button className="w-[180px] h-[42px] text-[#46D7D7] hover:bg-[#46D7D7] hover:text-white" style={{border:"1px solid #46D7D7"}}>
                                Submit
                            </button>
                        </Box>
                    </Box>
                </Box>
                <Box className="mt-5 ml-5 hidden md:flex item-center">
                    <img src={DotImg2} className="w-[70px] pl-3 md:flex hidden" alt="" />
                </Box>
            </Box>
        </>
    )
}

export default App
