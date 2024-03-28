// import React from 'react';
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import LaptopMacIcon from '@mui/icons-material/LaptopMac';
// import HotelIcon from '@mui/icons-material/Hotel';
// import RepeatIcon from '@mui/icons-material/Repeat';
// import Typography from '@mui/material/Typography';

// const Education = () => {
//   return (
//     <div name="education" className='w-full  pt-16 md:pt-24 h-full bg-gradient-to-t from-[#ab9abe] to-[#929292]'>
//     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
//         <div className='pb-8 '>
//             <p className='text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500'>
//                 TimeLine
//             </p>
//         </div>
//         <div>
//         <Timeline position="alternate">
//       <TimelineItem>
//         <TimelineOppositeContent
//           sx={{ m: 'auto 0' }}
//           align="right"
//           variant="body2"
//           color="text.secondary"
//         >
//           9:30 am
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineConnector />
//           <TimelineDot>
//             <FastfoodIcon />
//           </TimelineDot>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//           <Typography variant="h6" component="span">
//             Eat
//           </Typography>
//           <Typography>Because you need strength</Typography>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineOppositeContent
//           sx={{ m: 'auto 0' }}
//           variant="body2"
//           color="text.secondary"
//         >
//           10:00 am
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineConnector />
//           <TimelineDot color="primary">
//             <LaptopMacIcon />
//           </TimelineDot>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//           <Typography variant="h6" component="span">
//             Code
//           </Typography>
//           <Typography>Because it&apos;s awesome!</Typography>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineConnector />
//           <TimelineDot color="primary" variant="outlined">
//             <HotelIcon />
//           </TimelineDot>
//           <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//           <Typography variant="h6" component="span">
//             Sleep
//           </Typography>
//           <Typography>Because you need rest</Typography>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
//           <TimelineDot color="secondary">
//             <RepeatIcon />
//           </TimelineDot>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//           <Typography variant="h6" component="span">
//             Repeat
//           </Typography>
//           <Typography>Because this is the life you love!</Typography>
//         </TimelineContent>
//       </TimelineItem>
//     </Timeline>
//         </div>
//     </div>
// </div>
//   )
// }

// export default Education




import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { LuAlignStartVertical, LuListStart, LuSchool } from "react-icons/lu";
import 'react-vertical-timeline-component/style.min.css';
import { TbDeviceIpadHorizontalStar, TbSchool } from "react-icons/tb";
import {HiBookmark, HiDesktopComputer, HiGift, HiLightBulb, HiShieldCheck, HiSortAscending, HiSortDescending, HiTrendingUp} from 'react-icons/hi'

const Education = () => {
    return (
      <div name="education" className='w-full  pt-16 md:pt-24 h-full bg-gradient-to-t from-[#ab9abe] to-[#929292] z-10'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
               <div className='pb-8 '>
                  <p className='text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500'>
                   TimeLine
               </p>
            </div>
<VerticalTimeline
lineColor='rgb(235 226 245 / 51%)'>
<VerticalTimelineElement
    iconStyle={{ background: '#a055f5', color: '#000' }}
    icon={<HiSortDescending />}
  />
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    position='left'
    contentStyle={{ backgroundImage: 'linear-gradient(to top, #d6c8e5, rgb(159, 122, 205)', color: '#000',borderTop:'1px solid #fff',borderRight:'1px solid #fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    date="2020-2024 (present)"
    iconStyle={{ backgroundImage: 'linear-gradient(to top, #d6c8e5, rgb(159 142 165), rgb(159, 122, 205)', color: '#000' }}
    icon={<TbSchool />}
  >
    <h3 className="vertical-timeline-element-title">Computer Science Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">Mohamed Sathak Engineering College , Kilakarai</h4>
    <p>
      CGP: 8.9/10
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    position='right'
    contentStyle={{ backgroundImage: 'linear-gradient(to top, #d6c8e5, rgb(159 142 165), rgb(159, 122, 205)', color: '#000' ,borderTop:'1px solid #fff',borderRight:'1px solid #fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    date="2023 (March - June)"
      iconStyle={{ background: '#6f55f5', color: '#000' }}
    icon={< HiDesktopComputer />}
  >
    <h3 className="vertical-timeline-element-title">INTERN</h3>
    <h4 className="vertical-timeline-element-subtitle">Aroopa Tech Pvt Ltd, Chennai</h4>
    <p>
      Worked as Intern for two months and On-Project for two months in the incubation centre at my college
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2023 (February)"
    position = "right"
    contentStyle={{ backgroundImage: 'linear-gradient(to top, #d6c8e5, rgb(159 142 165), rgb(159, 122, 205)', color: '#000',borderTop:'1px solid #fff',borderRight:'1px solid #fff' ,borderLeft:'1px solid #fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
      iconStyle={{ background: 'rgb(233, 30, 99)', color: 'rgb(171 154 190)' }}
    icon={<HiBookmark />}
  >
    <h3 className="vertical-timeline-element-title">WINNER</h3>
    <h4 className="vertical-timeline-element-subtitle">Inter-College Competition</h4>
    <p>
      Qualified to district level on topic - Agri and IOT, ppt competition held at my college. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2022 (September)"
    position= "right"
    contentStyle={{ backgroundImage: 'linear-gradient(to top, #d6c8e5, rgb(159 142 165), rgb(159, 122, 205)', color: '#000',borderTop:'1px solid #fff',borderRight:'1px solid #fff' ,borderLeft:'1px solid #fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#000' }}
    icon={<HiLightBulb/>}
  >
    <h3 className="vertical-timeline-element-title">RUNNER</h3>
    <h4 className="vertical-timeline-element-subtitle">Symposium,Syed Ammal Engineering College - Ramanathapuram</h4>
    <p>
      Presented on - IOT
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2022 (August)"
    position = "right"
    contentStyle={{ backgroundImage: 'linear-gradient(to top, #d6c8e5, rgb(159 142 165), rgb(159, 122, 205)', color: '#000',borderTop:'1px solid #fff',borderRight:'1px solid #fff' ,borderLeft:'1px solid #fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
      iconStyle={{ background: '#5585f5', color: '#000' }}
    icon={<HiShieldCheck />}
  >
    <h3 className="vertical-timeline-element-title">WINNER - Presentation</h3>
    <h4 className="vertical-timeline-element-subtitle">TechFizo, Anna University - Ramanathapuram</h4>
    <p>
      Presented on - IOT
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    position='left'
    date="2019 - 2020"
    iconStyle={{ backgroundImage: 'linear-gradient(to top, #d6c8e5, rgb(159 142 165), rgb(159, 122, 205)', color: '#000' }}
    contentStyle={{ backgroundImage: 'linear-gradient(to top, #d6c8e5, rgb(159 142 165), rgb(159, 122, 205)', color: '#000' ,borderTop:'1px solid #fff',borderRight:'1px solid #fff' ,borderLeft:'1px solid #fff'}}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    icon={<LuSchool />}
  >
    <h3 className="vertical-timeline-element-title">Higher Secondary Second Year</h3>
    <h4 className="vertical-timeline-element-subtitle">Elite Matriculation Higher Secondary School , Ervadi</h4>
    <p>
      Percentage: 89%
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2018 - 2019"
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    contentStyle={{ backgroundImage: 'linear-gradient(to top, #d6c8e5, rgb(159 142 165), rgb(159, 122, 205)', color: '#000',borderTop:'1px solid #fff',borderRight:'1px solid #fff' ,borderLeft:'1px solid #fff' }}
    iconStyle={{ backgroundImage: 'linear-gradient(to top, #d6c8e5, rgb(159 142 165), rgb(159, 122, 205)', color: '#000' }}
    icon={<LuSchool />}
  >
    <h3 className="vertical-timeline-element-title">Higher Secondary First Year</h3>
    <h4 className="vertical-timeline-element-subtitle">Elite Matriculation Higher Secondary School , Ervadi</h4>
    <p>
      Percentage: 77%
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2017 - 2018"
    contentStyle={{ backgroundImage: 'linear-gradient(to top, #d6c8e5, rgb(159 142 165), rgb(159, 122, 205)', color: '#000',borderTop:'1px solid #fff',borderRight:'1px solid #fff' ,borderLeft:'1px solid #fff' }}
    iconStyle={{ backgroundImage: 'linear-gradient(to top, #d6c8e5, rgb(159 142 165), rgb(159, 122, 205)', color: '#000' }}
    icon={<LuSchool />}
  >
    <h3 className="vertical-timeline-element-title">SSLC</h3>
    <h4 className="vertical-timeline-element-subtitle">Elite Matriculation Higher Secondary School , Ervadi</h4>
    <p>
      Percentage: 96%
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: '#a055f5', color: '#000' }}
    icon={<HiSortAscending />}
  />
</VerticalTimeline>
</div>
</div>
    )}
export default Education
