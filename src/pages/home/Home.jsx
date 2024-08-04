import React, { Children } from 'react'
import Card from '../../components/ui/common-card/Card'
import CountingCard from '../../components/ui/cards/CountingCard'

import ReviewCard from '../../components/ui/cards/ReviewCard';
import TopicCard from '../../components/ui/cards/TopicCard';
import ProgressCard from '../../components/ui/cards/ProgressCard';
import Table from '../../components/table/Table';
import { tableColunm, tableData } from '../../constants/tabledata';
import { basketIcon, burgerIcon, cartIcon, dishIcon, goalIcon, moneyDown } from '../../assets/svgs/svgs';
import profileImg from "../../assets/imgs/woman.png"
import ActivityChart from '../chart/Chart';

const Home = () => {


  const countCard = [
    {
      id:1,
      title:"Total Orders",
      number:75,
      icon:basketIcon,
      percentage:3,
    },
    {
      id:2,
      title:"Total Delivered",
      number:70,
      icon:cartIcon,
      percentage:-3,
    },
    {
      id:3,
      title:"Total Cancelled",
      number:"0"+5,
      icon:cartIcon,
      percentage:3,
    },
    {
      id:4,
      title:"Total Revenue",
      number:"$12k",
      icon:moneyDown,
      percentage:-3,
    }
  ]

  const topic = [
    {
      id:1,
      icon:goalIcon,
      title:"Goals"
    },
    {
      id:2,
      icon:burgerIcon,
      title:"Popular Dishes"
    },
    {
      id:1,
      icon:dishIcon,
      title:"Menus"
    }
  ]


  const customerFeedback = [
    {
      id:1,
      customer_name:"Jenny Wilson",
      star:4,
      review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      profile_img:profileImg
    },
    {
      id:2,
      customer_name:"Dianne Russell",
      star:5,
      review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      profile_img:profileImg
    },
    {
      id:3,
      customer_name:"Devon Lane",
      star:4,
      review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      profile_img:profileImg
    }
  ]



  return (
    <section className='w-full gap-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7' >
      {
        countCard.map((item) => (
          <Card key={item.id}  >
      <CountingCard bg={item.bg} title={item.title} number={item.number} percentage={item.percentage} icon={item.icon} />
      </Card>
        ))
      }
      <Card className='col-span-2 md:col-span-4 lg:col-span-3' >
<ProgressCard/>
      </Card>
      <Card className='col-span-2 md:col-span-4' >
      <ActivityChart/>
      </Card>
      <Card className='col-span-2 md:col-span-4 lg:col-span-3 p-2' >
        <ul className='flex flex-col gap-4 h-full'>
          {topic.map((item)=>(
            <TopicCard key={item.id} icon={item.icon} title={item.title}  />
          ))}
        </ul>
      </Card>
      <Card className='col-span-2 md:col-span-4' >
        {/* <Table data={tableData} columns={tableColunm} /> */}
      </Card>
      <Card className='col-span-2 md:col-span-4 flex flex-col lg:col-span-3 gap-4 p-2'>
        <h2>Customer's Feedback</h2>
        <ul className='flex flex-col gap-2' >
          {
            customerFeedback.map((item) => (
              <ReviewCard profile_img={item.profile_img} key={item.id} name={item.customer_name} stars={item.star} review={item.review} />
            ))
          }
        </ul>
      </Card>
    </section>
  )
}

export default Home