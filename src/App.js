import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DotImg1 from './images/dotsColor.svg'
import DotImg2 from './images/dots.svg'

function App() {
    return (
        <>
            <Box className="flex justify-center items-center mb-3 text-[#825AFF]">
                <Typography sx={{ fontSize: "42px" }}>JOIN THE WHITELIST</Typography>
            </Box>
            <Box className="w-[100%] flex">
                <Box className="mt-3">
                    <img src={DotImg1} className="w-[70px] pr-3" alt="" />
                </Box>
                <Box className="w-[600px] h-[80vh] bg-[#161719] flex justify-center items-center">
                    <Box className="w-[350px]">
                        <Box>
                            <label className="text-white pl-3">Name</label>
                            <input className="bg-black mt-1 pl-3 text-white h-[42px] w-[100%] rounded-sm" name="lastName" required placeholder="Enter your full name" />
                        </Box>
                        <Box className="mt-4">
                            <label className="text-white pl-3">Email</label>
                            <input className="bg-black mt-1 pl-3 text-white h-[42px] w-[100%] rounded-sm" type="email" name="Email" required placeholder="Enter your email address" />
                        </Box>
                        <Box className="mt-4">
                            <label className="text-white pl-3">Wallet Address</label>
                            <input className="bg-black mt-1 pl-3 text-white h-[42px] w-[100%] rounded-sm" type="email" name="Email" required placeholder="Enter your email address" />
                        </Box>
                        <Box className="mt-4">
                            <label className="text-white pl-3">Wallet Address</label>
                            <input className="bg-black mt-1 pl-3 text-white h-[42px] w-[100%] rounded-sm" type="email" name="Email" required placeholder="Enter your email address" />
                        </Box>
                        <Box className="flex justify-center mt-4">
                            <button className="w-[180px] h-[42px] text-[#46D7D7] hover:bg-[#46D7D7] hover:text-white" style={{border:"1px solid #46D7D7"}}>
                                Submit
                            </button>
                        </Box>
                    </Box>
                </Box>
                <Box className="mt-5 ml-5 flex item-center">
                    <img src={DotImg2} className="w-[70px] pl-3" alt="" />
                </Box>
            </Box>
        </>
    )
}

export default App
